'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { CATEGORIES, getCategoryInfo } from '@/lib/icons/categories-info';
import LightPillar from '@/components/LightPillar';

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.06, delayChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0 },
};

export function LandingContent() {
  return (
    <>
      {/* Hero */}
      <section className='relative overflow-hidden border-b border-zinc-800/80'>
        <div className='absolute inset-0 -z-10'>
          <LightPillar
            topColor='#5227FF'
            bottomColor='#FF9FFC'
            intensity={1.3}
            rotationSpeed={1}
            glowAmount={0.003}
            pillarWidth={3}
            pillarHeight={0.4}
            noiseIntensity={0}
            pillarRotation={30}
            interactive={false}
            mixBlendMode='screen'
            quality='high'
          />
        </div>
        <div className='relative z-10 mx-auto px-6 py-24 sm:py-32'>
          <motion.p
            className='mb-6 text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500'
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            Icon library
          </motion.p>
          <motion.h1
            className='max-w-4xl text-4xl font-black uppercase tracking-tight text-white sm:text-5xl md:text-6xl lg:text-8xl'
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            The icon library for modern web.
          </motion.h1>
          <motion.p
            className='mt-6 max-w-2xl text-lg text-zinc-400'
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Categorized, tree-shakeable React icons. Sharp. Copy-paste ready.
          </motion.p>
          <motion.div
            className='mt-10 flex flex-wrap gap-4'
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Link
              href='/icons'
              className='inline-flex h-12 items-center justify-center rounded-sm bg-white px-8 text-sm font-semibold text-black transition-colors hover:bg-zinc-200'
            >
              Browse Icons
            </Link>
            <span className='inline-flex h-12 items-center rounded-sm border border-zinc-700 bg-zinc-900/50 px-6 font-mono text-sm text-zinc-400'>
              npm install @onimuxha/oxycons
            </span>
          </motion.div>
        </div>
      </section>

      {/* Categories grid */}
      <section className='mx-auto px-6 py-24'>
        <motion.p
          className='mb-8 text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500'
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.4 }}
        >
          Categories
        </motion.p>
        <motion.div
          className='grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3'
          variants={container}
          initial='hidden'
          whileInView='show'
          viewport={{ once: true, margin: '-80px' }}
        >
          {CATEGORIES.map((slug) => {
            const info = getCategoryInfo(slug);
            return (
              <motion.div key={slug} variants={item}>
                <Link
                  href={`/icons?category=${slug}`}
                  className='group block rounded-sm border border-zinc-800 bg-zinc-900/40 p-8 transition-colors hover:border-zinc-600 hover:bg-zinc-900/80'
                >
                  <h2 className='text-xl font-semibold text-white group-hover:text-white'>{info?.name ?? slug}</h2>
                  <p className='mt-2 text-sm text-zinc-500'>{info?.description}</p>
                  <span className='mt-4 inline-block text-sm font-medium text-zinc-400 transition-colors group-hover:text-white'>
                    View icons →
                  </span>
                </Link>
              </motion.div>
            );
          })}
        </motion.div>
      </section>

      {/* Code strip */}
      <section className='border-t border-zinc-800/80 bg-zinc-950/50'>
        <div className='mx-auto px-6 py-16'>
          <motion.p
            className='mb-6 text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500'
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            Use it
          </motion.p>
          <motion.div
            className='overflow-x-auto rounded-sm border border-zinc-800 bg-black/50 p-6 font-mono text-sm text-zinc-300'
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            <pre>{`import { Oxycons } from '@onimuxha/oxycons'

<Oxycons name="ReactJS" size={24} className="text-blue-500" />
<Oxycons name="ChatGPT" size={32} color="#10a37f" />`}</pre>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className='border-t border-zinc-800/80'>
        <div className='mx-auto px-6 py-12'>
          <p className='text-sm text-zinc-500'>Oxycons · Organized icon library for modern applications</p>
        </div>
      </footer>
    </>
  );
}
