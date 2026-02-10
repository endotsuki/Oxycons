'use client';

import { useState, useMemo, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { motion } from 'framer-motion';
import { CATEGORIES, getIconsByCategory } from '@/lib/icons/registry';
import Lottie from 'lottie-react';
import Fire from '../fire.json';
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
        <motion.div className='mb-16' initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
          <p className='mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500'>Browse</p>
          <h1 className='flex items-center text-4xl font-bold tracking-tight text-white sm:text-5xl'>
            <Lottie
              animationData={Fire}
              style={{ width: 48, height: 48 }}
              autoplay
              rendererSettings={{
                preserveAspectRatio: 'xMidYMid slice',
              }}
            />
            Oxycons
          </h1>
          <p className='mt-4 max-w-xl text-lg text-zinc-400'>Click an icon to copy the import and component code.</p>
          <motion.div
            className='mt-8 flex flex-wrap items-center gap-6'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.15 }}
          >
            <span className='rounded-sm border border-zinc-700 bg-zinc-900/60 px-4 py-2 text-sm font-medium text-zinc-300'>
              {totalIcons} icons
            </span>
            <span className='rounded-sm border border-zinc-700 bg-zinc-900/60 px-4 py-2 text-sm font-medium text-zinc-300'>
              {CATEGORIES.length} categories
            </span>
          </motion.div>
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
