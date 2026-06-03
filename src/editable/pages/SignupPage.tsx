import type { Metadata } from 'next'
import Link from 'next/link'
import { buildPageMetadata } from '@/lib/seo'
import { EditableSiteShell } from '@/editable/shell/EditableSiteShell'
import { EditableLocalSignupForm } from '@/editable/components/EditableLocalAuthForms'
import { pagesContent } from '@/editable/content/pages.content'

export async function generateMetadata(): Promise<Metadata> {
  return buildPageMetadata({ path: '/signup', title: 'Sign up', description: pagesContent.auth.signup.metadataDescription })
}

export default function SignupPage() {
  return (
    <EditableSiteShell>
      <main className="bg-[var(--editable-page-bg,#f4f1ec)] text-[var(--editable-page-text,#151515)]">
        <section className="mx-auto grid min-h-[calc(100vh-12rem)] max-w-[var(--editable-container)] items-center gap-8 px-4 py-12 sm:px-6 lg:grid-cols-[0.85fr_0.95fr] lg:px-8">
          <div className="rounded-[0.55rem] border border-[var(--editable-border)] bg-white p-6 shadow-[0_24px_70px_rgba(0,0,0,0.12)] sm:p-8">
            <h1 className="text-3xl font-black tracking-[-0.05em]">{pagesContent.auth.signup.formTitle}</h1>
            <EditableLocalSignupForm />
            <p className="mt-5 text-sm text-[var(--slot4-muted-text)]">Already have an account? <Link href="/login" className="font-black underline-offset-4 hover:underline">{pagesContent.auth.signup.loginCta}</Link></p>
          </div>
          <div>
            <p className="text-xs font-black uppercase tracking-[0.28em] text-[var(--slot4-accent)]">{pagesContent.auth.signup.badge}</p>
            <h2 className="mt-5 max-w-xl text-4xl font-black leading-[1.02] tracking-[-0.06em] sm:text-5xl">{pagesContent.auth.signup.title}</h2>
            <p className="mt-6 max-w-lg text-base leading-8 text-[var(--slot4-muted-text)]">{pagesContent.auth.signup.description}</p>
            <div className="mt-8 grid max-w-xl gap-3 sm:grid-cols-3">
              {['Publish stories', 'Build drafts', 'Join readers'].map((item) => (
                <div key={item} className="rounded-[0.45rem] border border-[var(--editable-border)] bg-white px-4 py-3 text-sm font-black shadow-sm">{item}</div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </EditableSiteShell>
  )
}
