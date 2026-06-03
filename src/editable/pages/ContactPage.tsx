'use client'

import { ArrowRight, FileText, Mail, Send, Sparkles } from 'lucide-react'
import { pagesContent } from '@/editable/content/pages.content'
import { EditableContactLeadForm } from '@/editable/components/EditableContactLeadForm'
import { EditableSiteShell } from '@/editable/shell/EditableSiteShell'

const contactLanes = [
  { icon: FileText, title: 'Editorial submissions', body: 'Pitch stories, explainers, and article ideas with enough context for a quick editorial review.' },
  { icon: Mail, title: 'Newsletter partnerships', body: 'Talk through sponsorships, branded placements, and article newsletter collaborations.' },
  { icon: Sparkles, title: 'Contributor support', body: 'Ask about formatting, image guidance, or how to shape a draft for this publication.' },
]

export default function ContactPage() {
  return (
    <EditableSiteShell>
      <main className="bg-[var(--editable-page-bg,#f4f1ec)] px-4 py-12 text-[var(--editable-page-text,#151515)] sm:px-6 lg:px-8">
        <section className="mx-auto max-w-[var(--editable-container)]">
          <div className="grid gap-8 lg:grid-cols-[0.92fr_1.08fr] lg:items-start">
            <div>
              <div className="rounded-[1.35rem] border border-black/[0.08] bg-[var(--slot4-dark-bg)] p-7 text-white shadow-[0_28px_90px_rgba(0,0,0,0.18)] sm:p-9">
                <p className="text-xs font-black uppercase tracking-[0.24em] text-[var(--slot4-accent)]">{pagesContent.contact.eyebrow}</p>
                <h1 className="mt-5 text-5xl font-black leading-[0.96] tracking-[-0.075em] sm:text-6xl">{pagesContent.contact.title}</h1>
                <p className="mt-6 max-w-2xl text-base font-semibold leading-8 text-white/66">{pagesContent.contact.description}</p>
                <div className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-black text-[var(--slot4-page-text)]">
                  Start with a clear subject <ArrowRight className="h-4 w-4" />
                </div>
              </div>

              <div className="mt-5 grid gap-4">
                {contactLanes.map((lane) => (
                  <div key={lane.title} className="rounded-[1rem] border border-black/[0.08] bg-white p-5 shadow-sm">
                    <lane.icon className="h-5 w-5 text-[var(--slot4-accent)]" />
                    <h2 className="mt-3 text-xl font-black tracking-[-0.04em]">{lane.title}</h2>
                    <p className="mt-2 text-sm font-semibold leading-7 text-[var(--slot4-muted-text)]">{lane.body}</p>
                  </div>
                ))}
              </div>

            </div>

            <div className="rounded-[1.35rem] border border-black/[0.08] bg-white p-5 shadow-[0_28px_90px_rgba(31,24,18,0.12)] sm:p-7">
              <div className="flex items-start gap-4">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[var(--slot4-accent-soft)] text-[var(--slot4-accent)]">
                  <Send className="h-5 w-5" />
                </span>
                <div>
                  <h2 className="text-3xl font-black tracking-[-0.055em]">{pagesContent.contact.formTitle}</h2>
                  <p className="mt-3 max-w-xl text-sm font-semibold leading-7 text-[var(--slot4-muted-text)]">Use the form to send a pitch, ask a question, or request help with the article publishing flow. Every field is styled for clear readability.</p>
                </div>
              </div>
              <div className="mt-6">
                <EditableContactLeadForm />
              </div>
            </div>
          </div>
        </section>
      </main>
    </EditableSiteShell>
  )
}
