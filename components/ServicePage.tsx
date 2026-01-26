
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import ServiceDetail from './ServiceDetail';
import { SERVICES } from '../data';
import { Service } from '../types';
import NotFound from './NotFound';

const ServicePage: React.FC = () => {
    const { slug } = useParams<{ slug: string }>();
    const navigate = useNavigate();
    const [service, setService] = useState<Service | null>(null);
    const [isNotFound, setIsNotFound] = useState(false);

    useEffect(() => {
        const foundService = SERVICES.find(s => s.slug === slug);
        if (foundService) {
            setService(foundService);
            setIsNotFound(false);
        } else {
            setIsNotFound(true);
        }
    }, [slug]);

    if (isNotFound) return <NotFound />;
    if (!service) return null;

    return (
        <ServiceDetail
            service={service}
            onBack={() => navigate('/')}
        />
    );
};

export default ServicePage;
