'use client'

import Link from 'next/link'
import type { CSSProperties } from 'react'
import { ArrowUpRight, Mail } from 'lucide-react'
import { SITE_CONFIG } from '@/lib/site-config'
import { globalContent } from '@/editable/content/global.content'
import { useEditableLocalAuthSession } from '@/editable/components/EditableLocalAuthForms'

export function EditableFooter() {
  const footerVars = {
    '--editable-footer-bg': '#1a1a1a',
    '--editable-footer-text': '#e8e8e8',
    '--editable-footer-muted': '#999999',
    '--editable-footer-accent': '#c0392b',
    '--editable-footer-border': 'rgba(255,255,255,0.08)',
    '--editable-footer-link-hover': '#ffffff',
  } as CSSProperties
  const taskLinks = SITE_CONFIG.tasks.filter((task) => task.enabled)
  const year = new Date().getFullYear()
  const { session, logout } = useEditableLocalAuthSession()

  return (
    <footer style={footerVars} className="bg-[var(--editable-footer-bg)] text-[var(--editable-footer-text)]">
      <div className="h-[3px] bg-[var(--editable-footer-accent)]" />

      <div className="mx-auto max-w-[var(--editable-container)] px-4 pt-16 pb-10 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <Link href="/" className="inline-flex items-center gap-3">
              <img src="/favicon.png?v=20260413" alt={globalContent.site.name} className="h-10 w-10 object-contain" />
              <span className="text-lg font-extrabold tracking-tight text-white">{globalContent.site.name}</span>
            </Link>
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-[var(--editable-footer-muted)]">
              {globalContent.footer?.description || SITE_CONFIG.description}
            </p>
            <div className="mt-6 flex items-center gap-2 text-[13px] text-[var(--editable-footer-muted)]">
              <Mail className="h-4 w-4" />
              <Link href="/contact" className="transition hover:text-[var(--editable-footer-link-hover)]">Get in touch</Link>
            </div>
          </div>

          <div>
            <h3 className="text-[11px] font-bold uppercase tracking-[0.16em] text-[var(--editable-footer-muted)]">Explore</h3>
            <ul className="mt-5 grid gap-3">
              {taskLinks.map((task) => (
                <li key={task.key}>
                  <Link href={task.route} className="group inline-flex items-center gap-1.5 text-sm font-medium text-[var(--editable-footer-text)] transition hover:text-[var(--editable-footer-link-hover)]">
                    {task.label}
                    <ArrowUpRight className="h-3 w-3 text-[var(--editable-footer-muted)] transition group-hover:text-[var(--editable-footer-link-hover)]" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-[11px] font-bold uppercase tracking-[0.16em] text-[var(--editable-footer-muted)]">Company</h3>
            <ul className="mt-5 grid gap-3">
              {[
                ['About', '/about'],
                ['Contact', '/contact'],
              ].map(([label, href]) => (
                <li key={href}>
                  <Link href={href} className="text-sm font-medium text-[var(--editable-footer-text)] transition hover:text-[var(--editable-footer-link-hover)]">{label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-[11px] font-bold uppercase tracking-[0.16em] text-[var(--editable-footer-muted)]">Account</h3>
            <ul className="mt-5 grid gap-3">
              {session ? (
                <>
                  <li><Link href="/create" className="text-sm font-medium text-[var(--editable-footer-text)] transition hover:text-[var(--editable-footer-link-hover)]">Create article</Link></li>
                  <li><button type="button" onClick={logout} className="text-left text-sm font-medium text-[var(--editable-footer-text)] transition hover:text-[var(--editable-footer-link-hover)]">Logout ({session.name})</button></li>
                </>
              ) : (
                <>
                  <li><Link href="/login" className="text-sm font-medium text-[var(--editable-footer-text)] transition hover:text-[var(--editable-footer-link-hover)]">Login</Link></li>
                  <li><Link href="/signup" className="text-sm font-medium text-[var(--editable-footer-text)] transition hover:text-[var(--editable-footer-link-hover)]">Sign up</Link></li>
                </>
              )}
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-[var(--editable-footer-border)]">
        <div className="mx-auto flex max-w-[var(--editable-container)] flex-col items-center justify-between gap-3 px-4 py-5 sm:flex-row sm:px-6 lg:px-8">
          <span className="text-xs font-medium text-[var(--editable-footer-muted)]">
            &copy; {year} {globalContent.site.name}. All rights reserved.
          </span>
          <div className="flex items-center gap-4 text-xs font-medium text-[var(--editable-footer-muted)]">
            <Link href="/about" className="transition hover:text-[var(--editable-footer-link-hover)]">About</Link>
            <span className="text-[var(--editable-footer-border)]">|</span>
            <Link href="/contact" className="transition hover:text-[var(--editable-footer-link-hover)]">Contact</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
