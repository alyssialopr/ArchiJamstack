export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <div className="flex flex-col items-center gap-4">
          <h1 className="text-4xl font-bold">Hello World</h1>
          <p className="text-lg">Welcome to your new project.</p>
          <code>html</code>
          <code>css</code>
        </div>

        <div className="flex items-center flex-col sm:flex-row">
          <h5 className="line-through">Vive Mozart l`opéra Rock</h5>
        </div>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <h1 className="text-purple-400">Mais allô quoi</h1>
      </footer>
    </div>
  );
}
