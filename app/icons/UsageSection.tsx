export default function UsageSection() {
  return (
    <section className='mt-24 border-t border-zinc-800/80 pt-16'>
      <p className='mb-3 text-2xl font-medium leading-tight tracking-tight text-white/30 md:text-5xl lg:text-6xl'>Usage</p>

      <div className='mt-8 rounded-sm border border-zinc-800 bg-zinc-900/30 p-6'>
        <h3 className='mb-3 text-sm font-semibold text-white'>Install</h3>
        <pre className='font-mono text-sm text-zinc-400'>npm install @onimuxha/oxycons</pre>
      </div>

      <div className='mt-8 rounded-sm border border-zinc-800 bg-zinc-900/30 p-6'>
        <h3 className='mb-3 text-sm font-semibold text-white'>Import all</h3>
        <pre className='overflow-x-auto rounded-sm bg-black/50 p-4 font-mono text-xs text-zinc-400'>
          <code>{`import { Oxycons } from '@onimuxha/oxycons'

<Oxycons name="ReactJS" size={24} className="text-cyan-400" />
<Oxycons name="Figma" size={24} color="#874FFF" />`}</code>
        </pre>
      </div>
    </section>
  );
}
