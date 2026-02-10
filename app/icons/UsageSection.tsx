export default function UsageSection() {
  return (
    <section className='mt-24 border-t border-zinc-800/80 pt-16'>
      <p className='mb-6 text-xs font-semibold uppercase text-zinc-500'>Usage</p>
      <div className='mt-8 rounded-sm border border-zinc-800 bg-zinc-900/30 p-6'>
        <h3 className='mb-3 text-sm font-semibold text-white'>Install</h3>
        <pre className='font-mono text-sm text-zinc-400'>npm install @onimuxha/oxycons</pre>
      </div>

      <div className='mt-8 rounded-sm border border-zinc-800 bg-zinc-900/30 p-6'>
        <h3 className='mb-3 text-sm font-semibold text-white'>Import all</h3>
        <pre className='overflow-x-auto rounded-sm bg-black/50 p-4 font-mono text-xs text-zinc-400'>
          <code>{`import { Oxycons } from '@onimuxha/oxycons'

<Oxycons.React size={24} />
<Oxycons.Figma size={24} />`}</code>
        </pre>
      </div>
    </section>
  );
}
