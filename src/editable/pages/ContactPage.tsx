'use client'

import { BookOpen, Building2, FileText, Image as ImageIcon, Mail, MapPin, Phone, Sparkles, Bookmark } from 'lucide-react'
import { NavbarShell } from '@/components/shared/navbar-shell'
import { Footer } from '@/components/shared/footer'
import { pagesContent } from '@/editable/content/pages.content'
import { getFactoryState } from '@/design/factory/get-factory-state'
import { getProductKind } from '@/design/factory/get-product-kind'
import { ContactLeadForm } from '@/components/shared/contact-lead-form'

function getTone() {
  return {
    shell: 'bg-[#f7f7f4] text-[#111111]',
    panel: 'border border-black/10 bg-white shadow-[0_18px_50px_rgba(17,17,17,0.05)]',
    soft: 'border border-black/10 bg-[#fafaf8]',
    muted: 'text-[#666666]',
    action: 'bg-black text-white hover:bg-black/90',
  }
}

export default function ContactPage() {
  const { recipe } = getFactoryState()
  const productKind = getProductKind(recipe)
  const tone = getTone()

  const lanes =
    productKind === 'directory'
      ? [
          { icon: Building2, title: 'Business onboarding', body: 'Ask about listing setup, visibility, and directory placement.' },
          { icon: Phone, title: 'Partnership support', body: 'Discuss bulk publishing or longer-term collaboration.' },
          { icon: MapPin, title: 'Coverage requests', body: 'Share a category or location that should be easier to explore.' },
        ]
      : productKind === 'editorial'
        ? [
            { icon: FileText, title: 'Article pitches', body: 'Send essays, guides, and story ideas that fit a reading-first site.' },
            { icon: Mail, title: 'Collaborations', body: 'Discuss partnerships and publication-friendly requests.' },
            { icon: Sparkles, title: 'Contributor help', body: 'Get support with formatting, voice, and submission details.' },
          ]
        : productKind === 'visual'
          ? [
              { icon: ImageIcon, title: 'Visual features', body: 'Talk about gallery launches, creator highlights, and visual campaigns.' },
              { icon: Sparkles, title: 'Licensing and use', body: 'Ask about usage rights, commercial requests, and collaborations.' },
              { icon: Mail, title: 'Media kits', body: 'Request creator decks, feature placement, or contact details.' },
            ]
          : [
              { icon: Bookmark, title: 'Collection submissions', body: 'Share resources, boards, and links worth saving.' },
              { icon: BookOpen, title: 'Reference pages', body: 'Discuss curation projects and helpful content structure.' },
              { icon: Mail, title: 'General support', body: 'Use the form for questions, notes, and site feedback.' },
            ]

  return (
    <div className={tone.shell}>
      <NavbarShell />
      <main className="mx-auto max-w-[1320px] px-4 pb-14 pt-10 sm:px-6 lg:px-8 lg:pt-14">
        <section className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#6d6d6d]">{pagesContent.contact.eyebrow}</p>
            <h1 className="mt-4 max-w-3xl text-5xl font-semibold tracking-[-0.08em] text-[#111111] sm:text-6xl">{pagesContent.contact.title}</h1>
            <p className={`mt-5 max-w-2xl text-sm leading-8 ${tone.muted}`}>{pagesContent.contact.description}</p>

            <div className="mt-8 grid gap-4">
              {lanes.map((lane) => (
                <div key={lane.title} className={`rounded-[1.5rem] p-5 ${tone.soft}`}>
                  <lane.icon className="h-5 w-5 text-[#111111]" />
                  <h2 className="mt-3 text-xl font-semibold tracking-[-0.04em]">{lane.title}</h2>
                  <p className={`mt-2 text-sm leading-7 ${tone.muted}`}>{lane.body}</p>
                </div>
              ))}
            </div>
          </div>

          <div className={`rounded-[2rem] p-6 sm:p-7 ${tone.panel}`}>
            <div className="flex flex-wrap items-start justify-between gap-3">
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#6d6d6d]">{pagesContent.contact.eyebrow}</p>
                <h2 className="mt-3 text-3xl font-semibold tracking-[-0.06em] text-[#111111]">{pagesContent.contact.formTitle}</h2>
              </div>
              <span className={`rounded-full px-3 py-2 text-[11px] font-semibold uppercase tracking-[0.24em] ${tone.soft}`}>Response ready</span>
            </div>
            <div className="mt-6 rounded-[1.5rem] border border-black/10 bg-white p-5 shadow-[0_14px_35px_rgba(17,17,17,0.04)]">
              <ContactLeadForm />
            </div>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {[
                ['Clear subject', 'Tell us what the message is about.'],
                ['Fast route', 'Specific asks are easier to sort and answer.'],
              ].map(([title, text]) => (
                <div key={title} className={`rounded-[1.25rem] p-4 ${tone.soft}`}>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#6d6d6d]">{title}</p>
                  <p className={`mt-2 text-sm leading-7 ${tone.muted}`}>{text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
