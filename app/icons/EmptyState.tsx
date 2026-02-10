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
      <p className='text-lg font-medium text-zinc-400'>No icons match your filters.</p>
      <p className='mt-2 text-sm text-zinc-500'>Try a different search or category.</p>
    </div>
  );
}
