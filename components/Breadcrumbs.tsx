import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

export interface BreadcrumbItem {
  label: string;
  path?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ items }) => {
  const allItems: BreadcrumbItem[] = [{ label: 'Home', path: '/' }, ...items];

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: allItems.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.label,
      item: item.path ? `https://www.naxitofficial.de${item.path}` : undefined,
    })),
  };

  return (
    <>
      <Helmet>
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>
      <nav aria-label="Breadcrumb" className="mb-6 flex items-center text-xs font-mono tracking-wider text-gray-400">
        <ol className="flex flex-wrap items-center gap-2">
          {allItems.map((item, idx) => {
            const isLast = idx === allItems.length - 1;
            return (
              <li key={idx} className="flex items-center gap-2">
                {idx > 0 && <ChevronRight className="w-3 h-3 text-gray-600" aria-hidden="true" />}
                {isLast || !item.path ? (
                  <span className="text-naxit-cyan font-semibold" aria-current="page">
                    {idx === 0 && <Home className="w-3.5 h-3.5 inline mr-1 -mt-0.5" />}
                    {item.label}
                  </span>
                ) : (
                  <Link
                    to={item.path}
                    className="hover:text-white transition-colors flex items-center gap-1"
                  >
                    {idx === 0 && <Home className="w-3.5 h-3.5 inline mr-1 -mt-0.5" />}
                    {item.label}
                  </Link>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
    </>
  );
};

export default Breadcrumbs;

