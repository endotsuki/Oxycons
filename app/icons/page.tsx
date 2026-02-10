'use client';

import { Suspense } from 'react';
import IconsPageContent from './IconsPageContent';

export default function IconsPage() {
  return (
    <Suspense fallback={<div className='min-h-screen bg-[#0a0a0a]' />}>
      <IconsPageContent />
    </Suspense>
  );
}
