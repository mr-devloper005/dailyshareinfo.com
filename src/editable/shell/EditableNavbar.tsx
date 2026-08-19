'use client'

import { useMemo, useState, type CSSProperties } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { BookOpen, ChevronDown, LogIn, Menu, PlusCircle, Search, UserPlus, X } from 'lucide-react'
import { SITE_CONFIG } from '@/lib/site-config'
import { globalContent } from '@/editable/content/global.content'
import { useEditableLocalAuthSession } from '@/editable/components/EditableLocalAuthForms'

export function EditableNavbar() {
  const [open, setOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)
  const pathname = usePathname()
  const { session, logout } = useEditableLocalAuthSession()
  const navVars = {
    '--editable-nav-bg': '#ffffff',
    '--editable-nav-text': '#1a1a1a',
    '--editable-nav-muted': '#6b6b6b',
    '--editable-nav-active': '#c0392b',
    '--editable-nav-active-text': '#c0392b',
    '--editable-nav-accent-bar': '#c0392b',
    '--editable-cta-bg': '#1a1a1a',
    '--editable-cta-text': '#ffffff',
    '--editable-search-bg': '#f5f5f5',
    '--editable-border': '#e8e8e8',
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
    <header style={navVars} className="sticky top-0 z-50">
      <div className="h-[3px] bg-[var(--editable-nav-accent-bar)]" />

      <nav className="border-b border-[var(--editable-border)] bg-[var(--editable-nav-bg)] shadow-[0_1px_3px_rgba(0,0,0,0.06)]">
        <div className="mx-auto flex min-h-[68px] w-full max-w-[var(--editable-container)] items-center justify-between px-4 sm:px-6 lg:px-8">
          <Link href="/" className="group flex shrink-0 items-center gap-3">
            <img src="/favicon.png?v=20260413" alt={globalContent.site.name} className="h-9 w-9 object-contain" />
            <span className="hidden min-w-0 sm:block">
              <span className="block max-w-[220px] truncate text-base font-extrabold tracking-tight text-[var(--editable-nav-text)]">{globalContent.site.name}</span>
              <span className="block max-w-[220px] truncate text-[10.5px] font-semibold uppercase tracking-[0.14em] text-[var(--editable-nav-muted)]">{globalContent.nav?.tagline || SITE_CONFIG.tagline}</span>
            </span>
          </Link>

          <div className="hidden items-center gap-1 lg:flex">
            {navItems.map((item) => {
              const active = item.href === '/' ? pathname === '/' : pathname === item.href || pathname.startsWith(`${item.href}/`)
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`relative px-3.5 py-2 text-[13px] font-semibold tracking-wide transition ${active ? 'text-[var(--editable-nav-active)]' : 'text-[var(--editable-nav-muted)] hover:text-[var(--editable-nav-text)]'}`}
                >
                  {item.label}
                  {active && <span className="absolute bottom-0 left-3.5 right-3.5 h-[2px] rounded-full bg-[var(--editable-nav-active)]" />}
                </Link>
              )
            })}
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => setSearchOpen(!searchOpen)}
              className="flex h-9 w-9 items-center justify-center rounded-full text-[var(--editable-nav-muted)] transition hover:bg-[var(--editable-search-bg)] hover:text-[var(--editable-nav-text)]"
              aria-label="Search"
            >
              <Search className="h-[18px] w-[18px]" />
            </button>

            <div className="mx-1 hidden h-5 w-px bg-[var(--editable-border)] sm:block" />

            {session ? (
              <>
                <Link href="/create" className="hidden items-center gap-1.5 rounded-md px-3 py-2 text-[13px] font-semibold text-[var(--editable-nav-muted)] transition hover:bg-[var(--editable-search-bg)] hover:text-[var(--editable-nav-text)] sm:inline-flex">
                  <PlusCircle className="h-4 w-4" /> Create
                </Link>
                <Link href="/create" className="hidden items-center gap-1.5 rounded-md bg-[var(--editable-cta-bg)] px-4 py-2 text-[13px] font-semibold text-[var(--editable-cta-text)] shadow-sm transition hover:opacity-90 sm:inline-flex">
                  <BookOpen className="h-3.5 w-3.5 shrink-0" /> <span className="max-w-[120px] truncate">{session.name}</span>
                </Link>
                <button type="button" onClick={logout} className="hidden items-center px-3 py-2 text-[13px] font-semibold text-[var(--editable-nav-muted)] transition hover:text-[var(--editable-nav-text)] sm:inline-flex">Logout</button>
              </>
            ) : (
              <>
                <Link href="/login" className="hidden items-center gap-1.5 px-3 py-2 text-[13px] font-semibold text-[var(--editable-nav-muted)] transition hover:text-[var(--editable-nav-text)] sm:inline-flex">
                  <LogIn className="h-4 w-4" /> Login
                </Link>
                <Link href="/signup" className="hidden items-center gap-1.5 rounded-md bg-[var(--editable-cta-bg)] px-4 py-2 text-[13px] font-semibold text-[var(--editable-cta-text)] shadow-sm transition hover:opacity-90 sm:inline-flex">
                  <UserPlus className="h-4 w-4" /> Sign up
                </Link>
              </>
            )}

            <button type="button" onClick={() => setOpen((v) => !v)} className="ml-1 flex h-9 w-9 items-center justify-center rounded-md border border-[var(--editable-border)] text-[var(--editable-nav-muted)] transition hover:bg-[var(--editable-search-bg)] lg:hidden" aria-label="Toggle menu">
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {searchOpen && (
          <div className="border-t border-[var(--editable-border)] bg-[var(--editable-search-bg)]">
            <div className="mx-auto max-w-[var(--editable-container)] px-4 py-3 sm:px-6 lg:px-8">
              <form action="/search" className="flex items-center gap-3">
                <Search className="h-4 w-4 shrink-0 text-[var(--editable-nav-muted)]" />
                <input name="q" type="search" placeholder="Search articles..." autoFocus className="min-w-0 flex-1 bg-transparent text-sm text-[var(--editable-nav-text)] outline-none placeholder:text-[var(--editable-nav-muted)]" />
                <button type="button" onClick={() => setSearchOpen(false)} className="text-xs font-semibold text-[var(--editable-nav-muted)] hover:text-[var(--editable-nav-text)]">Close</button>
              </form>
            </div>
          </div>
        )}
      </nav>

      {open && (
        <div className="border-b border-[var(--editable-border)] bg-[var(--editable-nav-bg)] shadow-lg lg:hidden">
          <div className="mx-auto max-w-[var(--editable-container)] px-4 py-3 sm:px-6">
            <form action="/search" className="mb-3 flex items-center gap-3 rounded-lg border border-[var(--editable-border)] bg-[var(--editable-search-bg)] px-3 py-2.5">
              <Search className="h-4 w-4 text-[var(--editable-nav-muted)]" />
              <input name="q" type="search" placeholder="Search articles..." className="min-w-0 flex-1 bg-transparent text-sm text-[var(--editable-nav-text)] outline-none placeholder:text-[var(--editable-nav-muted)]" />
            </form>
            <div className="grid gap-px overflow-hidden rounded-lg border border-[var(--editable-border)]">
              {[...navItems, ...(session ? [{ label: session.name, href: '/create' }] : [{ label: 'Login', href: '/login' }, { label: 'Sign up', href: '/signup' }])].map((item, i) => {
                const active = item.href === '/' ? pathname === '/' : pathname === item.href || pathname.startsWith(`${item.href}/`)
                return (
                  <Link
                    key={item.href + item.label}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className={`flex items-center px-4 py-3 text-sm font-semibold transition ${active ? 'bg-red-50 text-[var(--editable-nav-active)]' : 'bg-white text-[var(--editable-nav-text)] hover:bg-[var(--editable-search-bg)]'}`}
                  >
                    {item.label}
                  </Link>
                )
              })}
              {session && (
                <button type="button" onClick={() => { logout(); setOpen(false) }} className="flex items-center px-4 py-3 text-left text-sm font-semibold text-[var(--editable-nav-text)] transition hover:bg-[var(--editable-search-bg)]">
                  Logout
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
