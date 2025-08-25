export default function NotFound() {
  return (
    <main className="min-h-screen grid place-items-center px-6 text-center">
      <div>
        <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70">
          <span className="h-2 w-2 rounded-full bg-accent-600" />
          404 — Page not found
        </div>
        <h1 className="mt-6 text-3xl font-semibold">This hologram doesn’t exist</h1>
        <p className="mt-3 text-white/70">The page you’re looking for has drifted out of phase. Check the URL or return home.</p>
        <a href="/" className="mt-6 inline-block rounded-xl bg-gradient-to-r from-primary-600 to-accent-600 px-6 py-3 text-sm font-medium text-white shadow-lg transition hover:opacity-95">Go home</a>
      </div>
    </main>
  )
}
