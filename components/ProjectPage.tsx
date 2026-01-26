
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import ProjectDetail from './ProjectDetail';
import { useProjects } from '../context/ProjectContext';
import { Project } from '../types';
import NotFound from './NotFound';

const ProjectPage: React.FC = () => {
    const { slug } = useParams<{ slug: string }>();
    const navigate = useNavigate();
    const [project, setProject] = useState<Project | null>(null);
    const [isNotFound, setIsNotFound] = useState(false);
    const { getProjectBySlug } = useProjects();

    useEffect(() => {
        const foundProject = getProjectBySlug(slug || '');
        if (foundProject) {
            setProject(foundProject);
            setIsNotFound(false);
        } else {
            setIsNotFound(true);
        }
    }, [slug, getProjectBySlug]);

    if (isNotFound) return <NotFound />;
    if (!project) return null;

    return (
        <ProjectDetail
            project={project}
            onBack={() => navigate('/')}
        />
    );
};

export default ProjectPage;
