'use client';

import { useState, useRef } from 'react';
import { getCategoryInfo } from '@/lib/icons/registry';

interface IconsGridProps {
  filteredIcons: {
    category: string;
    icons: { name: string; component: any }[];
  }[];
}

export default function IconsGrid({ filteredIcons }: IconsGridProps) {
  const [copied, setCopied] = useState('');
  const [hovered, setHovered] = useState('');
  const [rect, setRect] = useState({ x: 0, y: 0, w: 0, h: 0 });
  const refs = useRef<Record<string, HTMLButtonElement | null>>({});

  const copy = (name: string, cat: string) => {
    navigator.clipboard.writeText(`import { Oxycons } from '@onimuxha/oxycons';\n\n<Oxycons.${name} size={24} />`);
    setCopied(`${cat}-${name}`);
    setTimeout(() => setCopied(''), 2000);
  };

  const hover = (id: string, btn: HTMLButtonElement | null) => {
    setHovered(id);
    if (btn?.parentElement) {
      const b = btn.getBoundingClientRect();
      const p = btn.parentElement.getBoundingClientRect();
      setRect({ x: b.left - p.left, y: b.top - p.top, w: b.width, h: b.height });
    }
  };

  return (
    <div className='space-y-16'>
      {filteredIcons.map(({ category, icons }) => (
        <section key={category}>
          <div className='mb-8'>
            <h3 className='mb-3 text-3xl font-bold leading-tight tracking-tight md:text-4xl lg:text-5xl'>
              {getCategoryInfo(category)?.name ?? category}
            </h3>
            <div className='mb-8 text-xl font-light text-white/60 md:text-2xl'>{getCategoryInfo(category)?.description}</div>
          </div>
          <div className='grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-10'>
            {icons.map(({ name, component: Icon }) => {
              const id = `${category}-${name}`;
              return (
                <div key={id} className='relative'>
                  <button
                    ref={(el) => {
                      refs.current[id] = el;
                    }}
                    onClick={() => copy(name, category)}
                    onMouseEnter={(e) => hover(id, e.currentTarget)}
                    onMouseLeave={() => setHovered('')}
                    className='group flex w-full flex-col items-center border border-zinc-800 bg-zinc-900/40 p-6 hover:border-zinc-600 hover:bg-zinc-900/80'
                  >
                    {Icon && <Icon size={40} className='mb-3 text-zinc-400 group-hover:text-white' />}
                    <p className='w-full truncate text-center text-xl text-zinc-500 group-hover:text-zinc-300'>{name}</p>
                    {copied === id && <span className='absolute text-xs text-emerald-400'>Copied</span>}
                  </button>
                  {hovered === id && (
                    <div
                      className='pointer-events-none absolute'
                      style={{
                        left: rect.x,
                        top: rect.y,
                        width: rect.w,
                        height: rect.h,
                        boxShadow: '0 0 20px rgba(34,211,238,0.4)',
                      }}
                    >
                      <span className='absolute left-0 top-0 h-6 w-[2px] bg-cyan-400' />
                      <span className='absolute left-0 top-0 h-[2px] w-6 bg-cyan-400' />
                      <span className='absolute right-0 top-0 h-6 w-[2px] bg-cyan-400' />
                      <span className='absolute right-0 top-0 h-[2px] w-6 bg-cyan-400' />
                      <span className='absolute bottom-0 left-0 h-6 w-[2px] bg-cyan-400' />
                      <span className='absolute bottom-0 left-0 h-[2px] w-6 bg-cyan-400' />
                      <span className='absolute bottom-0 right-0 h-6 w-[2px] bg-cyan-400' />
                      <span className='absolute bottom-0 right-0 h-[2px] w-6 bg-cyan-400' />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>
      ))}
    </div>
  );
}
