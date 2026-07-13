import { ArrowRight, CheckCircle2, Clock3, Send } from 'lucide-react'
import { pagesContent } from '@/editable/content/pages.content'
import { EditableContactLeadForm } from '@/editable/components/EditableContactLeadForm'
import { EditableSiteShell } from '@/editable/shell/EditableSiteShell'
import Ads from '@/lib/ads/ads'

export default function ContactPage() {
  return (
    <EditableSiteShell>
      <main className="bg-[#f4f1ec] text-[var(--editable-page-text,#151515)]">
        <section className="mx-auto max-w-[var(--editable-container)] px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
          <div className="grid gap-8 lg:grid-cols-[0.92fr_1.08fr] lg:items-start">
            <div>
              <div className="rounded-[1.15rem] border border-black/[0.08] bg-[var(--slot4-dark-bg)] p-7 text-white shadow-[0_28px_90px_rgba(0,0,0,0.18)] sm:p-9">
                <p className="text-xs font-black uppercase tracking-[0.24em] text-[var(--slot4-accent)]">{pagesContent.contact.eyebrow}</p>
                <h1 className="mt-5 text-5xl font-black leading-[0.96] tracking-[-0.075em] sm:text-6xl">{pagesContent.contact.title}</h1>
                <p className="mt-6 max-w-2xl text-base font-semibold leading-8 text-white/66">{pagesContent.contact.description}</p>
                <div className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-black text-[var(--slot4-page-text)]">
                  Start with a clear subject <ArrowRight className="h-4 w-4" />
                </div>
              </div>

              <div className="mt-8 border-y border-black/[0.1] py-7">
                <p className="text-xs font-black uppercase tracking-[0.24em] text-[var(--slot4-accent)]">Before you send</p>
                <h2 className="mt-3 text-3xl font-black tracking-[-0.055em]">A little context helps us respond well.</h2>
                <p className="mt-4 max-w-xl text-sm font-semibold leading-7 text-[var(--slot4-muted-text)]">Include the company or topic, the key market angle, and any source links or correction details. Partnership messages should also include timing and placement goals.</p>
                <div className="mt-5 flex flex-wrap gap-x-6 gap-y-3 text-sm font-black">
                  <span className="inline-flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-[var(--slot4-accent)]" /> Clear subject</span>
                  <span className="inline-flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-[var(--slot4-accent)]" /> Useful links</span>
                  <span className="inline-flex items-center gap-2"><Clock3 className="h-4 w-4 text-[var(--slot4-accent)]" /> Typical reply: 1–2 days</span>
                </div>
              </div>
            </div>

            <div className="rounded-[1.15rem] border border-black/[0.08] bg-white p-5 shadow-[0_28px_90px_rgba(31,24,18,0.12)] sm:p-7">
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
        <div className="border-t border-black/[0.08] bg-white">
          <div className="mx-auto max-w-6xl px-4 py-6">
            <Ads slot="footer" showLabel className="mx-auto w-full" />
          </div>
        </div>
      </main>
    </EditableSiteShell>
  )
}
