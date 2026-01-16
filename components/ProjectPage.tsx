
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import ProjectDetail from './ProjectDetail';
import { PROJECTS } from '../data';
import { Project } from '../types';

const ProjectPage: React.FC = () => {
    const { slug } = useParams<{ slug: string }>();
    const navigate = useNavigate();
    const [project, setProject] = useState<Project | null>(null);

    useEffect(() => {
        const foundProject = PROJECTS.find(p => p.slug === slug);
        if (foundProject) {
            setProject(foundProject);
        } else {
            // Handle not found - for now redirect to home
            navigate('/', { replace: true });
        }
    }, [slug, navigate]);

    if (!project) return null; // Or a loading spinner

    return (
        <ProjectDetail
            project={project}
            onBack={() => navigate('/')}
        />
    );
};

export default ProjectPage;
