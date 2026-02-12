export default function UsageSection() {
  return (
    <section className='mt-32 border-t border-zinc-800/80 pt-20'>
      <p className='mb-10 text-3xl font-medium leading-tight tracking-tight text-white/30 md:text-4xl lg:text-5xl'>Usage</p>

      <div className='mt-10 rounded-sm border border-zinc-800 bg-zinc-900/30 p-8'>
        <h3 className='mb-4 text-lg font-semibold text-white'>Install</h3>
        <pre className='font-mono text-base text-zinc-400'>npm install @onimuxha/oxycons</pre>
      </div>

      <div className='mt-8 rounded-sm border border-zinc-800 bg-zinc-900/30 p-8'>
        <h3 className='mb-4 text-lg font-semibold text-white'>Import all</h3>
        <pre className='overflow-x-auto rounded-sm bg-black/50 p-6 font-mono text-sm text-zinc-400'>
          <code>{`import { Oxycons } from '@onimuxha/oxycons'

<Oxycons name="ReactJS" size={24} className="text-cyan-400" />
<Oxycons name="Figma" size={24} color="#874FFF" />`}</code>
        </pre>
      </div>
    </section>
  );
}
