'use client';

import { useState, useMemo, useEffect, Suspense, useRef } from 'react';
import { useSearchParams } from 'next/navigation';
import { motion } from 'framer-motion';
import { Input } from '@/components/ui/input';
import { CATEGORIES, getCategoryInfo, getIconsByCategory } from '@/lib/icons/registry';
import Lottie from 'lottie-react';
import Fire from '../fire.json';
import Search from '../search imm.json';

const staggerContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.03, delayChildren: 0.05 },
  },
};

const staggerItem = {
  hidden: { opacity: 0, y: 8 },
  show: { opacity: 1, y: 0 },
};

function IconsPageContent() {
  const searchParams = useSearchParams();
  const categoryFromUrl = searchParams.get('category');

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [copiedIcon, setCopiedIcon] = useState<string | null>(null);
  const [hoveredIcon, setHoveredIcon] = useState<string | null>(null);
  const [focusRect, setFocusRect] = useState({
    x: 0,
    y: 0,
    width: 0,
    height: 0,
  });
  const buttonRefs = useRef<Record<string, HTMLButtonElement | null>>({});

  useEffect(() => {
    if (categoryFromUrl && CATEGORIES.includes(categoryFromUrl)) {
      setSelectedCategory(categoryFromUrl);
    }
  }, [categoryFromUrl]);

  const iconsByCategory = useMemo(() => {
    // Use registry helper to get raw category arrays (values)
    const raw = getIconsByCategory();

    const result: Record<string, { name: string; component: any }[]> = {};
    CATEGORIES.forEach((cat) => {
      result[cat] = [];
    });

    Object.entries(raw).forEach(([category, components]) => {
      if (!result[category]) return;
      components.forEach((item: any) => {
        if (!item) return;
        // Registry now returns { name, component } items
        const exportName = item.name || (item.component && (item.component.displayName || item.component.name));
        const component = item.component || item;

        // Prefer the export/const name (what you asked for)
        let name = String(exportName || 'icon').replace(/Icon$/, '');
        // Normalize casing: capitalize first letter, keep rest as-is
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

      const matchingIcons = icons.filter((icon) => icon.name.toLowerCase().includes(searchQuery.toLowerCase()));

      if (matchingIcons.length > 0) {
        filtered.push({ category, icons: matchingIcons });
      }
    });

    return filtered;
  }, [searchQuery, selectedCategory, iconsByCategory]);

  const handleCopyIcon = (iconName: string, category: string) => {
    const code = `import { Oxycons } from '@onimuxha/oxycons';\n\n<Oxycons.${iconName} size={24} />`;
    navigator.clipboard.writeText(code);
    setCopiedIcon(`${category}-${iconName}`);
    setTimeout(() => setCopiedIcon(null), 2000);
  };

  const handleIconHover = (iconId: string, buttonElement: HTMLButtonElement | null) => {
    setHoveredIcon(iconId);
    if (buttonElement) {
      const rect = buttonElement.getBoundingClientRect();
      const parentRect = buttonElement.parentElement?.getBoundingClientRect();
      if (parentRect) {
        setFocusRect({
          x: rect.left - parentRect.left,
          y: rect.top - parentRect.top,
          width: rect.width,
          height: rect.height,
        });
      }
    }
  };

  const handleIconLeave = () => {
    setHoveredIcon(null);
  };

  const totalIcons = Object.values(iconsByCategory).reduce((sum, icons) => sum + icons.length, 0);

  return (
    <div className='min-h-screen border-t border-zinc-800/80'>
      <div className='mx-auto px-6 py-12'>
        {/* Hero block */}
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

        {/* Search + filters */}
        <div className='mb-12 space-y-6'>
          <div>
            <label htmlFor='search' className='sr-only'>
              Search icons
            </label>
            <Input
              id='search'
              type='text'
              placeholder='Search icons...'
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className='h-12 max-w-md rounded-sm border-zinc-700 bg-zinc-900/50 text-white placeholder:text-zinc-500 focus-visible:ring-zinc-500'
            />
          </div>
          <div>
            <p className='mb-3 text-xs font-semibold uppercase tracking-[0.15em] text-zinc-500'>Category</p>
            <div className='flex flex-wrap gap-2'>
              <button
                type='button'
                onClick={() => setSelectedCategory(null)}
                className={`rounded-sm border px-4 py-2 text-sm font-medium transition-colors ${
                  selectedCategory === null
                    ? 'border-white bg-white text-black'
                    : 'border-zinc-700 bg-zinc-900/50 text-zinc-400 hover:border-zinc-600 hover:text-white'
                }`}
              >
                All
              </button>
              {CATEGORIES.map((category) => {
                const info = getCategoryInfo(category);
                const isSelected = selectedCategory === category;
                return (
                  <button
                    key={category}
                    type='button'
                    onClick={() => setSelectedCategory(category)}
                    title={info?.description}
                    className={`rounded-sm border px-4 py-2 text-sm font-medium transition-colors ${
                      isSelected
                        ? 'border-white bg-white text-black'
                        : 'border-zinc-700 bg-zinc-900/50 text-zinc-400 hover:border-zinc-600 hover:text-white'
                    }`}
                  >
                    {info?.name ?? category} <span className='text-xs text-sky-500'>({iconsByCategory[category]?.length ?? 0})</span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Icon grid */}
        {filteredIcons.length > 0 ? (
          <div className='space-y-16'>
            {filteredIcons.map(({ category, icons }) => {
              const categoryInfo = getCategoryInfo(category);
              return (
                <motion.section
                  key={category}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.35 }}
                >
                  <div className='mb-8'>
                    <h2 className='text-2xl font-semibold text-white'>{categoryInfo?.name ?? category}</h2>
                    <p className='mt-1 text-sm text-zinc-500'>{categoryInfo?.description}</p>
                  </div>
                  <motion.div
                    className='grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-12'
                    variants={staggerContainer}
                    initial='hidden'
                    whileInView='show'
                    viewport={{ once: false, margin: '-20px' }}
                  >
                    {icons.map(({ name, component: IconComponent }) => {
                      const iconId = `${category}-${name}`;
                      const isCopied = copiedIcon === iconId;
                      const isHovered = hoveredIcon === iconId;
                      return (
                        <motion.div
                          key={iconId}
                          variants={staggerItem}
                          // whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          className='relative'
                        >
                          <button
                            ref={(el) => {
                              buttonRefs.current[iconId] = el;
                            }}
                            type='button'
                            onClick={() => handleCopyIcon(name, category)}
                            onMouseEnter={(e) => handleIconHover(iconId, e.currentTarget)}
                            onMouseLeave={handleIconLeave}
                            className='group relative flex w-full flex-col items-center justify-center border border-zinc-800 bg-zinc-900/40 p-6 transition-colors hover:border-zinc-600 hover:bg-zinc-900/80'
                            title={`Copy: ${name}`}
                          >
                            <div className='mb-3 flex h-12 w-12 items-center justify-center'>
                              {IconComponent && (
                                <IconComponent size={32} className='text-zinc-400 transition-colors group-hover:text-white' />
                              )}
                            </div>
                            <span className='w-full truncate text-center text-xs font-medium text-zinc-500 group-hover:text-zinc-300'>
                              {name}
                            </span>
                            {isCopied && <span className='absolute mt-1 text-xs text-emerald-400'>Copied</span>}
                          </button>

                          {/* Focus Frame */}
                          {isHovered && (
                            <motion.div
                              className='pointer-events-none absolute rounded-sm'
                              animate={{
                                left: focusRect.x,
                                top: focusRect.y,
                                width: focusRect.width,
                                height: focusRect.height,
                              }}
                              transition={{ duration: 0.2, ease: 'easeOut' }}
                              initial={false}
                            >
                              <div
                                className='absolute inset-0 border border-cyan-500/60 shadow-lg'
                                style={{
                                  boxShadow: '0 0 20px rgba(34, 211, 238, 0.4), inset 0 0 20px rgba(34, 211, 238, 0.1)',
                                }}
                              >
                                {/* Corner decorations */}
                                <span className='absolute -left-1 -top-1 h-5 w-5 border-l-2 border-t-2 border-cyan-400'></span>
                                <span className='absolute -right-1 -top-1 h-5 w-5 border-r-2 border-t-2 border-cyan-400'></span>
                                <span className='absolute -bottom-1 -left-1 h-5 w-5 border-b-2 border-l-2 border-cyan-400'></span>
                                <span className='absolute -bottom-1 -right-1 h-5 w-5 border-b-2 border-r-2 border-cyan-400'></span>
                              </div>
                            </motion.div>
                          )}
                        </motion.div>
                      );
                    })}
                  </motion.div>
                </motion.section>
              );
            })}
          </div>
        ) : (
          <div className='rounded-sm border border-zinc-800 bg-zinc-900/30 py-20 text-center'>
            <Lottie
              animationData={Search}
              style={{ width: 200, height: 200, margin: '0 auto' }}
              autoplay
              loop
              rendererSettings={{
                preserveAspectRatio: 'xMidYMid slice',
              }}
            />
            <p className='text-lg font-medium text-zinc-400'>No icons match your filters.</p>
            <p className='mt-2 text-sm text-zinc-500'>Try a different search or category.</p>
          </div>
        )}

        {/* Usage */}
        <section className='mt-24 border-t border-zinc-800/80 pt-16'>
          <p className='mb-6 text-xs font-semibold uppercase text-zinc-500'>Usage</p>
          <div className='grid gap-8 md:grid-cols-2'>
            <div className='rounded-sm border border-zinc-800 bg-zinc-900/30 p-6'>
              <h3 className='mb-3 text-sm font-semibold text-white'>Import all</h3>
              <pre className='overflow-x-auto rounded-sm bg-black/50 p-4 font-mono text-xs text-zinc-400'>
                <code>{`import { Oxycons } from '@onimuxha/oxycons'

<Oxycons.React size={24} />
<Oxycons.Figma size={24} />`}</code>
              </pre>
            </div>
          </div>

          <div className='mt-8 rounded-sm border border-zinc-800 bg-zinc-900/30 p-6'>
            <h3 className='mb-3 text-sm font-semibold text-white'>Install</h3>
            <pre className='font-mono text-sm text-zinc-400'>npm install @onimuxha/oxycons</pre>
          </div>
        </section>

        <footer className='mt-20 border-t border-zinc-800/80 py-10 text-center text-sm text-zinc-500'>
          Oxycons · Organized icon library for modern applications
        </footer>
      </div>
    </div>
  );
}

export default function IconsPage() {
  return (
    <Suspense fallback={<div className='min-h-screen bg-[#0a0a0a]' />}>
      <IconsPageContent />
    </Suspense>
  );
}
