
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import ServiceDetail from './ServiceDetail';
import { SERVICES } from '../data';
import { Service } from '../types';

const ServicePage: React.FC = () => {
    const { slug } = useParams<{ slug: string }>();
    const navigate = useNavigate();
    const [service, setService] = useState<Service | null>(null);

    useEffect(() => {
        const foundService = SERVICES.find(s => s.slug === slug);
        if (foundService) {
            setService(foundService);
        } else {
            // Handle not found - for now redirect to home
            navigate('/', { replace: true });
        }
    }, [slug, navigate]);

    if (!service) return null; // Or a loading spinner

    return (
        <ServiceDetail
            service={service}
            onBack={() => navigate('/')}
        />
    );
};

export default ServicePage;
