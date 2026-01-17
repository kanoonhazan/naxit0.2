import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { Project } from '../types';
import { PROJECTS as INITIAL_PROJECTS } from '../data';
import { supabase } from '../supabase';

interface ProjectContextType {
    projects: Project[];
    getProjectBySlug: (slug: string) => Project | undefined;
    getFeaturedProjects: () => Project[];
    refreshProjects: () => Promise<void>;
}

const ProjectContext = createContext<ProjectContextType | undefined>(undefined);

export const ProjectProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [projects, setProjects] = useState<Project[]>(INITIAL_PROJECTS);

    const fetchProjects = async () => {
        try {
            const { data, error } = await supabase
                .from('projects')
                .select('*')
                .order('created_at', { ascending: false });

            if (error) throw error;
            if (data && data.length > 0) {
                // Map snake_case from DB to camelCase for the app if needed, 
                // but let's assume we use the same names for simplicity or map them.
                // The Project interface uses camelCase: fullDescription, designDecisions, resultOutcome.
                setProjects(data.map(p => ({
                    ...p,
                    fullDescription: p.full_description,
                    designDecisions: p.design_decisions,
                    resultOutcome: p.result_outcome
                })));
            }
        } catch (err) {
            console.error('Error fetching projects from Supabase:', err);
            // Fallback to local storage or initial data
            const savedProjects = localStorage.getItem('naxit_projects');
            if (savedProjects) {
                setProjects(JSON.parse(savedProjects));
            }
        }
    };

    useEffect(() => {
        fetchProjects();

        // Listen for custom event for immediate refresh
        window.addEventListener('projectsUpdated', fetchProjects);
        return () => window.removeEventListener('projectsUpdated', fetchProjects);
    }, []);

    const getProjectBySlug = (slug: string) => projects.find(p => p.slug === slug);
    const getFeaturedProjects = () => projects.filter(p => p.featured).slice(0, 4);

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
