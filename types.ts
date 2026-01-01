
import { ReactNode } from 'react';

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: ReactNode;
  tag: string;
}

export interface NavItem {
  label: string;
  href: string;
}

export interface Project {
  id: string;
  title: string;
  category: 'Design' | 'Strategy' | 'Engineering' | 'AI';
  tagline: string;
  image: string;
  impact: string;
  tech: string[];
  challenge: string;
  approach: string;
  fullDescription: string;
  gallery: string[];
}
