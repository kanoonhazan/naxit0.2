import React, { createContext, useContext, useState, useEffect, useCallback, ReactNode } from 'react';
import { Project } from '../types';
import { PROJECTS as INITIAL_PROJECTS } from '../data/projects';

interface ProjectContextType {
    projects: Project[];
    getProjectBySlug: (slug: string) => Project | undefined;
    getFeaturedProjects: () => Project[];
    refreshProjects: () => Promise<void>;
}

const ProjectContext = createContext<ProjectContextType | undefined>(undefined);

const isSupabaseEnvConfigured = Boolean(
    import.meta.env.VITE_SUPABASE_URL && import.meta.env.VITE_SUPABASE_ANON_KEY
);

const mergeProjectsWithDefaults = (incoming: Project[]): Project[] => {
    const bySlug = new Map<string, Project>();
    for (const p of incoming) {
        if (p && p.slug) bySlug.set(p.slug, p);
    }
    for (const p of INITIAL_PROJECTS) {
        if (!bySlug.has(p.slug)) bySlug.set(p.slug, p);
    }
    return Array.from(bySlug.values());
};

export const ProjectProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [projects, setProjects] = useState<Project[]>(INITIAL_PROJECTS);

    const loadFallbackProjects = useCallback(() => {
        try {
            const savedProjects = localStorage.getItem('naxit_projects');
            if (savedProjects) {
                const parsed = JSON.parse(savedProjects);
                if (Array.isArray(parsed) && parsed.length > 0) {
                    setProjects(mergeProjectsWithDefaults(parsed));
                    return;
                }
            }
        } catch {
            // Ignore malformed localStorage cache
        }
        setProjects(INITIAL_PROJECTS);
    }, []);

    const fetchProjects = useCallback(async () => {
        if (!isSupabaseEnvConfigured) {
            loadFallbackProjects();
            return;
        }

        try {
            const { supabase, isSupabaseConfigured } = await import('../supabase');
            if (!isSupabaseConfigured) {
                loadFallbackProjects();
                return;
            }

            const { data, error } = await supabase
                .from('projects')
                .select('*')
                .order('created_at', { ascending: false });

            if (error) throw error;
            if (data && data.length > 0) {
                const mappedProjects: Project[] = data.map((p: any) => ({
                    ...p,
                    fullDescription: p.full_description ?? p.fullDescription,
                    designDecisions: p.design_decisions ?? p.designDecisions,
                    resultOutcome: p.result_outcome ?? p.resultOutcome
                }));

                const merged = mergeProjectsWithDefaults(mappedProjects);
                setProjects(merged);
                try {
                    localStorage.setItem('naxit_projects', JSON.stringify(merged));
                } catch {
                    // Ignore storage quota errors
                }
            } else {
                loadFallbackProjects();
            }
        } catch {
            // Silently fall back to cached or bundled projects so offline/paused Supabase never emits console errors
            loadFallbackProjects();
        }
    }, [loadFallbackProjects]);

    useEffect(() => {
        // Defer non-critical Supabase network sync until after first paint
        const timer = window.setTimeout(() => {
            fetchProjects();
        }, 1200);

        window.addEventListener('projectsUpdated', fetchProjects);
        return () => {
            window.clearTimeout(timer);
            window.removeEventListener('projectsUpdated', fetchProjects);
        };
    }, [fetchProjects]);

    const getProjectBySlug = useCallback((slug: string) => projects.find(p => p.slug === slug), [projects]);
    const getFeaturedProjects = useCallback(() => projects.filter(p => p.featured).slice(0, 4), [projects]);

    return (
        <ProjectContext.Provider value={{ projects, getProjectBySlug, getFeaturedProjects, refreshProjects: fetchProjects }}>
            {children}
        </ProjectContext.Provider>
    );
};

export const useProjects = () => {
    const context = useContext(ProjectContext);
    if (context === undefined) {
        throw new Error('useProjects must be used within a ProjectProvider');
    }
    return context;
};
