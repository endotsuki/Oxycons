"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { CATEGORIES, getCategoryInfo } from "@/lib/icons/categories-info";

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
      <section className="border-b border-zinc-800/80">
        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32">
          <motion.p
            className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500 mb-6"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            Icon library
          </motion.p>
          <motion.h1
            className="text-4xl font-black uppercase tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl max-w-4xl"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            The icon library for the modern web.
          </motion.h1>
          <motion.p
            className="mt-6 max-w-2xl text-lg text-zinc-400"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Categorized, tree-shakeable React icons. Sharp. Copy-paste ready.
          </motion.p>
          <motion.div
            className="mt-10 flex flex-wrap gap-4"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Link
              href="/icons"
              className="inline-flex h-12 items-center justify-center rounded-sm bg-white px-8 text-sm font-semibold text-black hover:bg-zinc-200 transition-colors"
            >
              Browse Icons
            </Link>
            <span className="inline-flex h-12 items-center rounded-sm border border-zinc-700 bg-zinc-900/50 px-6 font-mono text-sm text-zinc-400">
              npm install @endo/oxycons
            </span>
          </motion.div>
        </div>
      </section>

      {/* Categories grid */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <motion.p
          className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500 mb-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.4 }}
        >
          Categories
        </motion.p>
        <motion.div
          className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
        >
          {CATEGORIES.map((slug) => {
            const info = getCategoryInfo(slug);
            return (
              <motion.div key={slug} variants={item}>
                <Link
                  href={`/icons?category=${slug}`}
                  className="group block rounded-sm border border-zinc-800 bg-zinc-900/40 p-8 transition-colors hover:border-zinc-600 hover:bg-zinc-900/80"
                >
                  <h2 className="text-xl font-semibold text-white group-hover:text-white">
                    {info?.name ?? slug}
                  </h2>
                  <p className="mt-2 text-sm text-zinc-500">
                    {info?.description}
                  </p>
                  <span className="mt-4 inline-block text-sm font-medium text-zinc-400 group-hover:text-white transition-colors">
                    View icons →
                  </span>
                </Link>
              </motion.div>
            );
          })}
        </motion.div>
      </section>

      {/* Code strip */}
      <section className="border-t border-zinc-800/80 bg-zinc-950/50">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <motion.p
            className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500 mb-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            Use it
          </motion.p>
          <motion.div
            className="rounded-sm border border-zinc-800 bg-black/50 p-6 font-mono text-sm text-zinc-300 overflow-x-auto"
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            <pre>{`import { Oxycons } from '@endo/oxycons'

<Oxycons.React size={24} />
<Oxycons.Figma size={32} className="text-violet-400" />`}</pre>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-zinc-800/80">
        <div className="mx-auto max-w-7xl px-6 py-12">
          <p className="text-sm text-zinc-500">
            Oxycons · Organized icon library for modern applications
          </p>
        </div>
      </footer>
    </>
  );
}
