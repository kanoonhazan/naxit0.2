
import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { Project } from '../types';
import { PROJECTS as INITIAL_PROJECTS } from '../data';

interface ProjectContextType {
    projects: Project[];
    getProjectBySlug: (slug: string) => Project | undefined;
    getFeaturedProjects: () => Project[];
}

const ProjectContext = createContext<ProjectContextType | undefined>(undefined);

export const ProjectProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [projects, setProjects] = useState<Project[]>(INITIAL_PROJECTS);

    useEffect(() => {
        // Sync with localStorage (managed by Admin page)
        const syncProjects = () => {
            const savedProjects = localStorage.getItem('naxit_projects');
            if (savedProjects) {
                setProjects(JSON.parse(savedProjects));
            }
        };

        // Initial sync
        syncProjects();

        // Listen for storage changes (for multi-tab support)
        window.addEventListener('storage', syncProjects);

        // Add a custom event listener for local changes within the same tab
        window.addEventListener('projectsUpdated', syncProjects);

        return () => {
            window.removeEventListener('storage', syncProjects);
            window.removeEventListener('projectsUpdated', syncProjects);
        };
    }, []);

    const getProjectBySlug = (slug: string) => projects.find(p => p.slug === slug);
    const getFeaturedProjects = () => projects.filter(p => p.featured).slice(0, 4);

    return (
        <ProjectContext.Provider value={{ projects, getProjectBySlug, getFeaturedProjects }}>
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
