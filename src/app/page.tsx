"use client"

import Spline from '@splinetool/react-spline/next'
import Link from 'next/link'
import Navbar from '@/components/Navbar'

export default function HomePage() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-radial-grid" aria-hidden />

      <section className="relative min-h-screen bg-white text-base-900 overflow-hidden">
        {/* Spline background covering entire hero */}
        <div className="absolute inset-0 -z-10">
          <Spline className="h-full w-full" scene="https://prod.spline.design/Od18UjFJmAz2ZSfC/scene.splinecode" />
        </div>

        {/* Light navbar over white hero */}
        <Navbar variant="light" />

        {/* Hero content */}
        <div className="relative">
          <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-8 px-6 pb-24 pt-28 md:grid-cols-2 lg:gap-14 lg:px-10 lg:pt-32">
            <div className="relative z-10 fade-in">
              <div className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-black/[0.04] px-3 py-1 text-xs text-black/60">
                <span className="h-2 w-2 animate-pulse rounded-full bg-primary-500" />
                Private beta is live
              </div>
              <h1 className="mt-6 text-4xl font-semibold leading-tight md:text-6xl">
                Build with
                <span className="bg-gradient-to-r from-primary-600 via-accent-600 to-primary-700 bg-clip-text text-transparent"> holographic intelligence</span>
              </h1>
              <p className="mt-5 max-w-xl text-balance text-black/70 md:text-lg">
                Lumina AI fuses metallic precision with glossy creativity. Prototype, deploy, and scale AI-native products with a canvas built for the future.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <Link
                  href="#get-access"
                  className="relative rounded-xl bg-gradient-to-r from-primary-600 via-accent-600 to-primary-700 px-6 py-3 text-sm font-medium text-white shadow-lg transition-transform hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-primary-600/30"
                >
                  Get early access
                </Link>
                <Link
                  href="#learn-more"
                  className="rounded-xl border border-black/10 bg-white/80 px-6 py-3 text-sm font-medium text-black/80 backdrop-blur transition hover:text-black hover:bg-white"
                >
                  Learn more
                </Link>
              </div>
              <div className="mt-10 flex items-center gap-6 text-xs text-black/50">
                <div className="flex -space-x-2">
                  <span className="h-7 w-7 rounded-full border border-black/10 bg-gradient-to-br from-black/[0.06] to-transparent" />
                  <span className="h-7 w-7 rounded-full border border-black/10 bg-gradient-to-br from-black/[0.06] to-transparent" />
                  <span className="h-7 w-7 rounded-full border border-black/10 bg-gradient-to-br from-black/[0.06] to-transparent" />
                </div>
                <span>Trusted by forward-thinking teams</span>
              </div>
            </div>

            <div className="relative h-[420px] w-full md:h-[560px]">
              {/* Spacer for layout symmetry; model is full-bleed in background */}
            </div>
          </div>
        </div>
      </section>

      <section id="learn-more" className="relative border-t border-white/10 py-16">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 px-6 md:grid-cols-3 lg:px-10">
          <Feature
            title="Metallic precision"
            desc="Deterministic orchestration, versioned prompts, and reproducible pipelines."
          />
          <Feature
            title="Holographic insight"
            desc="Multi-angle observability with real-time evals and drift detection."
          />
          <Feature
            title="Glossy delivery"
            desc="Edge-accelerated inference, streaming UX primitives, and zero-config previews."
          />
        </div>
      </section>

      <section id="get-access" className="relative pb-28">
        <div className="mx-auto max-w-3xl px-6 text-center lg:px-10">
          <div className="glass relative overflow-hidden rounded-2xl p-8 md:p-10">
            <h2 className="text-2xl font-semibold md:text-3xl">Join the private beta</h2>
            <p className="mx-auto mt-3 max-w-xl text-white/70">
              Be first to explore the Lumina AI platform. We onboard a limited number of teams each week.
            </p>
            <form
              className="mx-auto mt-6 flex flex-col gap-3 sm:flex-row"
              onSubmit={(e) => { e.preventDefault(); alert('Thanks! We\'ll be in touch.'); }}
            >
              <input
                type="email"
                required
                placeholder="you@company.com"
                className="w-full flex-1 rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-white/40 outline-none ring-0 focus:border-primary-600/60"
              />
              <button
                type="submit"
                className="rounded-xl bg-gradient-to-r from-primary-600 to-accent-600 px-6 py-3 text-sm font-medium text-white shadow-lg transition hover:opacity-95"
              >
                Request access
              </button>
            </form>
            <div className="pointer-events-none absolute inset-0 -z-10 opacity-40" aria-hidden>
              <div className="absolute -left-20 -top-20 h-60 w-60 rounded-full bg-primary-600/20 blur-3xl" />
              <div className="absolute -bottom-20 -right-10 h-60 w-60 rounded-full bg-accent-600/20 blur-3xl" />
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

function Feature({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="glass rounded-2xl p-6">
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="mt-2 text-sm text-white/70">{desc}</p>
    </div>
  )
}
