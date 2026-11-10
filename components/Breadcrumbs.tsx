import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

export interface BreadcrumbItem {
  label: string;
  path?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

const SITE_ORIGIN = 'https://www.naxitofficial.de';

const toFullUrl = (path?: string, fallbackPathname?: string): string | undefined => {
  const target = path || fallbackPathname;
  if (!target) return undefined;
  if (target.startsWith('http://') || target.startsWith('https://')) return target;
  return `${SITE_ORIGIN}${target.startsWith('/') ? target : `/${target}`}`;
};

const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ items }) => {
  const location = useLocation();
  const filteredItems = items.filter(
    (item, index) => !(index === 0 && item.label.trim().toLowerCase() === 'home')
  );
  const allItems: BreadcrumbItem[] = [{ label: 'Home', path: '/' }, ...filteredItems];

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: allItems.map((item, index) => {
      const isLast = index === allItems.length - 1;
      const fullUrl = toFullUrl(item.path, isLast ? location.pathname : undefined);
      return {
        '@type': 'ListItem',
        position: index + 1,
        name: item.label,
        ...(fullUrl ? { item: fullUrl } : {}),
      };
    }),
  };

  return (
    <>
      <Helmet>
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>
      <nav aria-label="Breadcrumb" className="mb-6 flex items-center text-xs font-mono tracking-wider text-gray-300">
        <ol className="flex flex-wrap items-center gap-2">
          {allItems.map((item, idx) => {
            const isLast = idx === allItems.length - 1;
            return (
              <li key={idx} className="flex items-center gap-2">
                {idx > 0 && <ChevronRight className="w-3 h-3 text-gray-400" aria-hidden="true" />}
                {isLast || !item.path ? (
                  <span className="text-naxit-cyan font-semibold" aria-current="page">
                    {idx === 0 && <Home className="w-3.5 h-3.5 inline mr-1 -mt-0.5" aria-hidden="true" />}
                    {item.label}
                  </span>
                ) : (
                  <Link
                    to={item.path}
                    className="hover:text-white transition-colors flex items-center gap-1"
                  >
                    {idx === 0 && <Home className="w-3.5 h-3.5 inline mr-1 -mt-0.5" aria-hidden="true" />}
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
