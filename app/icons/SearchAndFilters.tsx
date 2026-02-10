import { Input } from '@/components/ui/input';
import { CATEGORIES, getCategoryInfo } from '@/lib/icons/registry';

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

      {/* Category Filters */}
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
  );
}
