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
    <div className='mb-12 space-y-6'>
      {/* Search Input */}
      <div className='relative w-full max-w-lg'>
        <input
          id='search'
          type='text'
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder='Search icons...'
          className='w-full border-b-2 bg-transparent py-4 pl-0 pr-7 text-xl text-white placeholder-white/30 transition-colors focus:border-white focus:outline-none'
        />

        <HugeiconsIcon
          icon={Search01Icon}
          strokeWidth={2}
          className='pointer-events-none absolute right-0 top-1/2 -translate-y-1/2 text-white/50'
          size={23}
        />
      </div>

      {/* Category Filters */}
      <div>
        <p className='mb-3 text-2xl font-medium leading-tight tracking-tight text-white/30 md:text-5xl lg:text-6xl'>Category</p>
        <div className='flex flex-wrap gap-2'>
          <Button
            variant='primary'
            onClick={() => setSelectedCategory(null)}
            className={`border px-4 py-2 text-sm font-medium transition-colors ${
              selectedCategory === null
                ? 'border-white bg-white text-black'
                : 'border-zinc-700 bg-zinc-900/50 text-zinc-400 hover:border-zinc-600'
            }`}
          >
            All{' '}
            <span className='ml-1 text-xs text-sky-500'>
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
                className={`border px-4 py-2 text-sm font-medium transition-colors ${
                  isSelected ? 'border-white bg-white text-black' : 'border-zinc-700 bg-zinc-900/50 text-zinc-400'
                }`}
              >
                {info?.name ?? category} <span className='ml-1 text-xs text-sky-500'>({iconsByCategory[category]?.length ?? 0})</span>
              </Button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
