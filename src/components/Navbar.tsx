"use client"

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="mx-auto max-w-7xl px-6 py-4 lg:px-10">
        <div className="glass relative flex items-center justify-between rounded-2xl px-4 py-3">
          <div className="flex items-center gap-3">
            <Image src="/logo.svg" alt="Lumina AI" width={28} height={28} />
            <span className="text-sm font-semibold tracking-wide">Lumina AI</span>
          </div>

          <nav className="hidden items-center gap-6 md:flex">
            <NavLink href="#product">Product</NavLink>
            <NavLink href="#research">Research</NavLink>
            <NavLink href="#pricing">Pricing</NavLink>
            <NavLink href="#blog">Blog</NavLink>
            <Link
              href="#get-access"
              className="rounded-xl bg-white/10 px-4 py-2 text-xs font-medium text-white shadow-inner transition hover:bg-white/15"
            >
              Get early access
            </Link>
          </nav>

          <button
            aria-label="Menu"
            className="md:hidden"
            onClick={() => setOpen((v) => !v)}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4 7h16M4 12h16M4 17h16" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </button>

          {open && (
            <div className="absolute right-2 top-14 w-56 overflow-hidden rounded-xl border border-white/10 bg-base-800/95 p-2 shadow-2xl backdrop-blur md:hidden">
              <div className="grid">
                <MobileLink href="#product" onClick={() => setOpen(false)}>Product</MobileLink>
                <MobileLink href="#research" onClick={() => setOpen(false)}>Research</MobileLink>
                <MobileLink href="#pricing" onClick={() => setOpen(false)}>Pricing</MobileLink>
                <MobileLink href="#blog" onClick={() => setOpen(false)}>Blog</MobileLink>
                <Link
                  href="#get-access"
                  onClick={() => setOpen(false)}
                  className="mt-1 rounded-lg bg-gradient-to-r from-primary-600 to-accent-600 px-3 py-2 text-center text-xs font-medium"
                >
                  Get early access
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="text-xs text-white/70 transition hover:text-white"
    >
      {children}
    </Link>
  )
}

function MobileLink({ href, children, onClick }: { href: string; children: React.ReactNode; onClick?: () => void }) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className="rounded-lg px-3 py-2 text-xs text-white/80 transition hover:bg-white/5 hover:text-white"
    >
      {children}
    </Link>
  )
}
