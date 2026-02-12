'use client';

import { useState, useMemo, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { motion } from 'framer-motion';
import { CATEGORIES, getIconsByCategory, Oxycons } from '@/lib/icons/registry';
import SearchAndFilters from './SearchAndFilters';
import IconsGrid from './IconsGrid';
import EmptyState from './EmptyState';
import UsageSection from './UsageSection';

export default function IconsPageContent() {
  const searchParams = useSearchParams();
  const categoryFromUrl = searchParams.get('category');

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  useEffect(() => {
    if (categoryFromUrl && CATEGORIES.includes(categoryFromUrl)) {
      setSelectedCategory(categoryFromUrl);
    }
  }, [categoryFromUrl]);

  const iconsByCategory = useMemo(() => {
    const raw = getIconsByCategory();

    const result: Record<string, { name: string; component: any }[]> = {};
    CATEGORIES.forEach((cat) => {
      result[cat] = [];
    });

    Object.entries(raw).forEach(([category, components]) => {
      if (!result[category]) return;
      components.forEach((item: any) => {
        if (!item) return;
        const exportName = item.name || (item.component && (item.component.displayName || item.component.name));
        const component = item.component || item;

        let name = String(exportName || 'icon').replace(/Icon$/, '');
        name = name.charAt(0).toUpperCase() + name.slice(1);

        result[category].push({ name, component });
      });
    });

    return result;
  }, []);

  const filteredIcons = useMemo(() => {
    const filtered: {
      category: string;
      icons: { name: string; component: any }[];
    }[] = [];
    const categoryToShow = selectedCategory || undefined;

    Object.entries(iconsByCategory).forEach(([category, icons]) => {
      if (categoryToShow && category !== categoryToShow) return;

      const q = searchQuery.toLowerCase();
      const matchingIcons = icons.filter((icon) => {
        if (!q) return true;
        // match against the display name
        if (icon.name.toLowerCase().includes(q)) return true;

        // match against metadata keywords (if present)
        const meta = (icon.component as any)?.metadata;
        if (meta && Array.isArray(meta.keywords)) {
          for (const kw of meta.keywords) {
            if (String(kw).toLowerCase().includes(q)) return true;
          }
        }

        return false;
      });

      if (matchingIcons.length > 0) {
        filtered.push({ category, icons: matchingIcons });
      }
    });

    return filtered;
  }, [searchQuery, selectedCategory, iconsByCategory]);

  const totalIcons = Object.values(iconsByCategory).reduce((sum, icons) => sum + icons.length, 0);

  return (
    <div className='min-h-screen border-t border-zinc-800/80'>
      <div className='mx-auto px-6 py-12'>
        {/* Hero Section */}
        <motion.div
          className='mb-9 border-b-4 border-black'
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className='mb-6 text-7xl font-black uppercase tracking-tighter md:text-8xl lg:text-9xl'>Oxycons</h1>
          <p className='max-w-3xl text-xl font-light leading-tight md:text-2xl lg:text-3xl'>
            {totalIcons} icons organized by category. Click to copy code.
          </p>
        </motion.div>

        {/* Search & Filters */}
        <SearchAndFilters
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
          iconsByCategory={iconsByCategory}
        />

        {/* Icons Grid or Empty State */}
        {filteredIcons.length > 0 ? <IconsGrid filteredIcons={filteredIcons} /> : <EmptyState />}

        {/* Usage Section */}
        <UsageSection />

        {/* Footer */}
        <footer className='mt-20 border-t border-zinc-800/80 py-10 text-center text-sm text-zinc-500'>
          Oxycons · Organized icon library for modern applications
        </footer>
      </div>
    </div>
  );
}
