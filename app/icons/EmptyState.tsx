import Lottie from 'lottie-react';
import Search from '../search imm.json';

export default function EmptyState() {
  return (
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
      <div className='space-y-2 text-lg font-light leading-relaxed text-white/60 md:text-xl'>
        <p className='text-2xl leading-relaxed text-white/80 md:text-4xl'>No icons match your filters</p>
        <p>Try a different search or category.</p>
      </div>
    </div>
  );
}
