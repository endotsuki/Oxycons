import { Button } from '@/components/ui/button';
import { CATEGORIES, getCategoryInfo } from '@/lib/icons/registry';
import { Search01Icon } from '@hugeicons/core-free-icons';
import { HugeiconsIcon } from '@hugeicons/react';

interface SearchAndFiltersProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  selectedCategory: string | null;
  setSelectedCategory: (category: string | null) => void;
  iconsByCategory: Record<string, { name: string; component: any }[]>;
}

export default function SearchAndFilters({
  searchQuery,
  setSearchQuery,
  selectedCategory,
  setSelectedCategory,
  iconsByCategory,
}: SearchAndFiltersProps) {
  return (
    <div className='mb-16 space-y-10'>
      {/* Search Input */}
      <div className='relative w-full max-w-2xl'>
        <input
          id='search'
          type='text'
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder='Search icons...'
          className='w-full border-b-2 bg-transparent py-6 pl-0 pr-10 text-2xl text-white placeholder-white/30 transition-colors focus:border-white focus:outline-none md:text-3xl'
        />

        <HugeiconsIcon
          icon={Search01Icon}
          strokeWidth={2}
          className='pointer-events-none absolute right-0 top-1/2 -translate-y-1/2 text-white/50'
          size={28}
        />
      </div>

      {/* Category Filters */}
      <div>
        <p className='mb-6 text-3xl font-medium leading-tight tracking-tight text-white/30 md:text-4xl lg:text-5xl'>Category</p>
        <div className='flex flex-wrap gap-3'>
          <Button
            variant='primary'
            onClick={() => setSelectedCategory(null)}
            className={`border px-6 py-3 text-base font-medium transition-colors ${
              selectedCategory === null
                ? 'border-white bg-white text-black'
                : 'border-zinc-700 bg-zinc-900/50 text-zinc-400 hover:border-zinc-600'
            }`}
          >
            All{' '}
            <span className='ml-1.5 text-sm text-sky-500'>
              ({Object.values(iconsByCategory).reduce((acc, icons) => acc + icons.length, 0)})
            </span>
          </Button>
          {CATEGORIES.map((category) => {
            const info = getCategoryInfo(category);
            const isSelected = selectedCategory === category;
            return (
              <Button
                key={category}
                variant='primary'
                onClick={() => setSelectedCategory(category)}
                className={`border px-6 py-3 text-base font-medium transition-colors ${
                  isSelected ? 'border-white bg-white text-black' : 'border-zinc-700 bg-zinc-900/50 text-zinc-400'
                }`}
              >
                {info?.name ?? category} <span className='ml-1.5 text-sm text-sky-500'>({iconsByCategory[category]?.length ?? 0})</span>
              </Button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
