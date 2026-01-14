
import { ReactNode } from 'react';

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: ReactNode;
  tag: string;
  badge?: string;
  subtitle?: string;
  problem?: string;
  problemTitle?: string;
  targetAudience?: string[];
  targetAudienceTitle?: string;
  inclusions?: ServiceInclusion[];
  inclusionsTitle?: string;
  result?: string;
  resultTitle?: string;
  ctaText?: string;
  ctaSubtext?: string;
  ctaPrimary?: string;
  ctaSecondary?: string;
}

export interface ServiceInclusion {
  title: string;
  description: string;
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
  problem?: {
    title: string;
    content: string[];
  };
  solution?: {
    title: string;
    content: string[];
  };
  designDecisions?: string[];
  resultOutcome?: {
    title: string;
    content: string[];
  };
}
