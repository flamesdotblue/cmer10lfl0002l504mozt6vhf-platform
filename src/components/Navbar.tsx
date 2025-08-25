"use client"

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'

export default function Navbar({ variant = 'dark' }: { variant?: 'light' | 'dark' }) {
  const [open, setOpen] = useState(false)
  const isLight = variant === 'light'

  const textBase = isLight ? 'text-base-900' : 'text-white'
  const textFaint = isLight ? 'text-black/60' : 'text-white/70'
  const hoverText = isLight ? 'hover:text-black' : 'hover:text-white'
  const borderColor = isLight ? 'border-black/10' : 'border-white/10'
  const bgGlass = 'glass'

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="mx-auto max-w-7xl px-6 py-4 lg:px-10">
        <div className={`${bgGlass} relative flex items-center justify-between rounded-2xl px-4 py-3 ${borderColor}`}>
          <div className="flex items-center gap-3">
            <Image src="/logo.svg" alt="Lumina AI" width={28} height={28} />
            <span className={`text-sm font-semibold tracking-wide ${textBase}`}>Lumina AI</span>
          </div>

          <nav className="hidden items-center gap-6 md:flex">
            <NavLink href="#product" className={`${textFaint} ${hoverText}`}>Product</NavLink>
            <NavLink href="#research" className={`${textFaint} ${hoverText}`}>Research</NavLink>
            <NavLink href="#pricing" className={`${textFaint} ${hoverText}`}>Pricing</NavLink>
            <NavLink href="#blog" className={`${textFaint} ${hoverText}`}>Blog</NavLink>
            <Link
              href="#get-access"
              className={`${isLight ? 'bg-black/[0.06] hover:bg-black/[0.09] text-black' : 'bg-white/10 hover:bg-white/15 text-white'} rounded-xl px-4 py-2 text-xs font-medium shadow-inner transition`}
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
              <path d="M4 7h16M4 12h16M4 17h16" stroke={isLight ? 'black' : 'white'} strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </button>

          {open && (
            <div className={`absolute right-2 top-14 w-56 overflow-hidden rounded-xl ${isLight ? 'border border-black/10 bg-white/95' : 'border border-white/10 bg-base-800/95'} p-2 shadow-2xl backdrop-blur md:hidden`}>
              <div className="grid">
                <MobileLink href="#product" onClick={() => setOpen(false)} light={isLight}>Product</MobileLink>
                <MobileLink href="#research" onClick={() => setOpen(false)} light={isLight}>Research</MobileLink>
                <MobileLink href="#pricing" onClick={() => setOpen(false)} light={isLight}>Pricing</MobileLink>
                <MobileLink href="#blog" onClick={() => setOpen(false)} light={isLight}>Blog</MobileLink>
                <Link
                  href="#get-access"
                  onClick={() => setOpen(false)}
                  className="mt-1 rounded-lg bg-gradient-to-r from-primary-600 to-accent-600 px-3 py-2 text-center text-xs font-medium text-white"
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

function NavLink({ href, children, className }: { href: string; children: React.ReactNode; className?: string }) {
  return (
    <Link
      href={href}
      className={`text-xs transition ${className || ''}`}
    >
      {children}
    </Link>
  )
}

function MobileLink({ href, children, onClick, light }: { href: string; children: React.ReactNode; onClick?: () => void; light?: boolean }) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className={`rounded-lg px-3 py-2 text-xs transition ${light ? 'text-black/80 hover:bg-black/[0.04] hover:text-black' : 'text-white/80 hover:bg-white/5 hover:text-white'}`}
    >
      {children}
    </Link>
  )
}
