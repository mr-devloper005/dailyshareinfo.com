'use client'

import { useMemo, useState, type CSSProperties } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { BookOpen, LogIn, Menu, PlusCircle, Search, UserPlus, X } from 'lucide-react'
import { SITE_CONFIG } from '@/lib/site-config'
import { globalContent } from '@/editable/content/global.content'
import { useEditableLocalAuthSession } from '@/editable/components/EditableLocalAuthForms'

export function EditableNavbar() {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()
  const { session, logout } = useEditableLocalAuthSession()
  const navVars = {
    '--editable-nav-bg': '#101010',
    '--editable-nav-text': '#ffffff',
    '--editable-nav-active': '#ff3f2f',
    '--editable-nav-active-text': '#ffffff',
    '--editable-cta-bg': '#ff3f2f',
    '--editable-cta-text': '#ffffff',
    '--editable-search-bg': '#1b1b1b',
    '--editable-border': 'rgba(255,255,255,0.13)',
    '--editable-container': '1120px',
  } as CSSProperties
  const navItems = useMemo(
    () => [
      { label: 'Home', href: '/' },
      ...SITE_CONFIG.tasks.filter((task) => task.enabled).map((task) => ({ label: task.label, href: task.route })),
      { label: 'About', href: '/about' },
      { label: 'Contact', href: '/contact' },
    ],
    []
  )

  return (
    <header style={navVars} className="sticky top-0 z-50 border-b border-[var(--editable-border)] bg-[var(--editable-nav-bg)]/96 text-[var(--editable-nav-text)] backdrop-blur-2xl">
      <nav className="mx-auto grid min-h-[76px] w-full max-w-[var(--editable-container)] grid-cols-[1fr_auto] items-center gap-4 px-4 sm:px-6 lg:px-8 xl:grid-cols-[1fr_auto_1fr]">
        <div className="hidden items-center gap-2 lg:flex">
          {navItems.slice(0, 5).map((item) => {
            const active = item.href === '/' ? pathname === '/' : pathname === item.href || pathname.startsWith(`${item.href}/`)
            return (
              <Link key={item.href} href={item.href} className={`rounded-full px-3.5 py-2 text-sm font-black transition ${active ? 'bg-[var(--editable-nav-active)] text-[var(--editable-nav-active-text)]' : 'text-white/82 hover:bg-white/10 hover:text-white'}`}>
                {item.label}
              </Link>
            )
          })}
        </div>

        <Link href="/" className="group flex shrink-0 items-center justify-self-start gap-3 text-white xl:justify-self-center">
          <span className="flex h-11 w-11 items-center justify-center overflow-hidden rounded-[1rem] border border-white/12 bg-white shadow-[0_12px_40px_rgba(0,0,0,0.22)] transition-transform group-hover:-rotate-2">
            <img src="/favicon.png?v=20260413" alt={globalContent.site.name} className="h-8 w-8 object-contain" />
          </span>
          <span className="hidden min-w-0 sm:block">
            <span className="block max-w-[220px] truncate text-sm font-black tracking-[-0.03em]">{globalContent.site.name}</span>
            <span className="block max-w-[220px] truncate text-[11px] font-bold uppercase tracking-[0.18em] text-white/55">{globalContent.nav?.tagline || SITE_CONFIG.tagline}</span>
          </span>
        </Link>

        <div className="ml-auto flex items-center justify-self-end gap-2">
          <form action="/search" className="hidden min-w-0 md:flex">
            <label className="relative flex w-full max-w-[280px] items-center rounded-full border border-[var(--editable-border)] bg-[var(--editable-search-bg)] px-4 py-2.5 shadow-sm">
              <Search className="h-4 w-4 text-white/65" />
              <input name="q" type="search" placeholder="Search articles" className="min-w-0 flex-1 bg-transparent px-3 text-sm font-semibold text-white outline-none placeholder:text-white/35" />
            </label>
          </form>
          {session ? (
            <>
              <Link href="/create" className="hidden items-center gap-2 rounded-full border border-white/10 px-4 py-2.5 text-sm font-black text-white/92 transition hover:bg-white/10 sm:inline-flex"><PlusCircle className="h-4 w-4" /> Create</Link>
              <Link href="/create" className="hidden max-w-[170px] items-center gap-2 truncate rounded-full bg-[var(--editable-cta-bg)] px-4 py-2.5 text-sm font-black text-[var(--editable-cta-text)] shadow-sm transition hover:opacity-95 sm:inline-flex"><BookOpen className="h-4 w-4 shrink-0" /> {session.name}</Link>
              <button type="button" onClick={logout} className="hidden items-center gap-2 rounded-full px-4 py-2.5 text-sm font-black text-white/88 transition hover:bg-white/10 sm:inline-flex">Logout</button>
            </>
          ) : (
            <>
              <Link href="/login" className="hidden items-center gap-2 rounded-full px-4 py-2.5 text-sm font-black text-white/88 transition hover:bg-white/10 sm:inline-flex"><LogIn className="h-4 w-4" /> Login</Link>
              <Link href="/signup" className="hidden items-center gap-2 rounded-full bg-[var(--editable-cta-bg)] px-4 py-2.5 text-sm font-black text-[var(--editable-cta-text)] shadow-sm transition hover:opacity-95 sm:inline-flex"><UserPlus className="h-4 w-4" /> Sign up</Link>
            </>
          )}
          <button type="button" onClick={() => setOpen((value) => !value)} className="rounded-full border border-[var(--editable-border)] bg-white/10 p-2.5 text-white lg:hidden" aria-label="Toggle menu">
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {open ? (
        <div className="border-t border-[var(--editable-border)] bg-[var(--editable-nav-bg)] px-4 py-4 lg:hidden">
          <form action="/search" className="mb-4 flex rounded-2xl border border-[var(--editable-border)] bg-[var(--editable-search-bg)] px-3 py-2.5">
            <Search className="mt-1 h-4 w-4 text-white/65" />
            <input name="q" type="search" placeholder="Search articles" className="min-w-0 flex-1 bg-transparent px-3 text-sm text-white outline-none placeholder:text-white/35" />
          </form>
          <div className="grid gap-2">
            {[...navItems, ...(session ? [{ label: session.name, href: '/create' }] : [{ label: 'Login', href: '/login' }, { label: 'Sign up', href: '/signup' }])].map((item) => (
              <Link key={item.href + item.label} href={item.href} onClick={() => setOpen(false)} className="rounded-2xl border border-[var(--editable-border)] bg-white/96 px-4 py-3 text-sm font-black text-[var(--editable-nav-bg)]">
                {item.label}
              </Link>
            ))}
            {session ? <button type="button" onClick={() => { logout(); setOpen(false) }} className="rounded-2xl border border-[var(--editable-border)] bg-white/96 px-4 py-3 text-left text-sm font-black text-[var(--editable-nav-bg)]">Logout</button> : null}
          </div>
        </div>
      ) : null}
    </header>
  )
}
