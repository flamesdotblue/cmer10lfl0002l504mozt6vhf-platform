"use client"

export default function GlobalError({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  return (
    <html>
      <body>
        <main className="min-h-screen grid place-items-center px-6 text-center">
          <div className="glass rounded-2xl p-8 max-w-lg">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70">
              <span className="h-2 w-2 rounded-full bg-primary-600" />
              Something went wrong
            </div>
            <h1 className="mt-4 text-2xl font-semibold">System glitch detected</h1>
            <p className="mt-2 text-white/70">{error?.message || 'An unexpected error occurred.'}</p>
            <button onClick={() => reset()} className="mt-6 rounded-xl bg-gradient-to-r from-primary-600 to-accent-600 px-6 py-3 text-sm font-medium text-white shadow-lg transition hover:opacity-95">Try again</button>
          </div>
        </main>
      </body>
    </html>
  )
}
