import { BookOpen, Compass, Layers3, Quote, Sparkles } from 'lucide-react'
import { pagesContent } from '@/editable/content/pages.content'
import { EditableSiteShell } from '@/editable/shell/EditableSiteShell'

const metrics = [
  { label: 'Reading flow', value: '01', body: 'Centered pages, scannable sections, and article-first navigation.' },
  { label: 'Editorial tone', value: '02', body: 'Headlines, summaries, and context written for real readers.' },
  { label: 'Discovery layer', value: '03', body: 'Homepage rails, archive filters, and related reading paths.' },
]

export default function AboutPage() {
  return (
    <EditableSiteShell>
      <main className="bg-[var(--editable-page-bg,#f4f1ec)] px-4 py-12 text-[var(--editable-page-text,#151515)] sm:px-6 lg:px-8">
        <section className="mx-auto max-w-[var(--editable-container)]">
          <div className="grid gap-7 lg:grid-cols-[1.08fr_0.92fr] lg:items-stretch">
            <article className="relative overflow-hidden rounded-[1.35rem] border border-black/[0.08] bg-white p-7 shadow-[0_28px_90px_rgba(31,24,18,0.1)] sm:p-9 lg:p-11">
              <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-[rgba(255,63,47,0.12)] blur-3xl" />
              <div className="relative">
                <p className="text-xs font-black uppercase tracking-[0.24em] text-[var(--slot4-accent)]">{pagesContent.about.badge}</p>
                <h1 className="mt-5 max-w-3xl text-5xl font-black leading-[0.96] tracking-[-0.075em] sm:text-6xl">{pagesContent.about.title}</h1>
                <p className="mt-6 max-w-2xl text-base font-semibold leading-8 text-[var(--slot4-muted-text)]">{pagesContent.about.description}</p>
                <div className="mt-9 grid gap-4 text-sm font-semibold leading-8 text-[var(--slot4-muted-text)]">
                  {pagesContent.about.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                </div>
              </div>
            </article>

            <aside className="grid gap-4">
              <div className="rounded-[1.2rem] border border-black/[0.08] bg-[var(--slot4-dark-bg)] p-6 text-white shadow-[0_24px_75px_rgba(0,0,0,0.18)]">
                <Quote className="h-7 w-7 text-[var(--slot4-accent)]" />
                <p className="mt-5 text-2xl font-black leading-tight tracking-[-0.045em]">A good article site should feel calm before it feels clever.</p>
                <p className="mt-4 text-sm font-semibold leading-7 text-white/64">That is the design principle behind the refreshed pages: premium, readable, and never stretched wider than the content deserves.</p>
              </div>
              <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
                {metrics.map((item) => (
                  <div key={item.label} className="rounded-[1rem] border border-black/[0.08] bg-white p-5 shadow-sm">
                    <p className="text-3xl font-black tracking-[-0.06em] text-[var(--slot4-accent)]">{item.value}</p>
                    <h2 className="mt-3 text-lg font-black tracking-[-0.04em]">{item.label}</h2>
                    <p className="mt-2 text-sm font-semibold leading-6 text-[var(--slot4-muted-text)]">{item.body}</p>
                  </div>
                ))}
              </div>
            </aside>
          </div>

          <section className="mt-7 grid gap-4 md:grid-cols-3">
            {pagesContent.about.values.map((value, index) => {
              const Icon = [BookOpen, Compass, Layers3][index] || Sparkles
              return (
                <div key={value.title} className="group rounded-[1.15rem] border border-black/[0.08] bg-white p-6 shadow-[0_16px_50px_rgba(31,24,18,0.07)] transition hover:-translate-y-1 hover:shadow-[0_24px_70px_rgba(31,24,18,0.12)]">
                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[var(--slot4-accent-soft)] text-[var(--slot4-accent)]">
                    <Icon className="h-5 w-5" />
                  </span>
                  <h2 className="mt-5 text-xl font-black tracking-[-0.045em]">{value.title}</h2>
                  <p className="mt-3 text-sm font-semibold leading-7 text-[var(--slot4-muted-text)]">{value.description}</p>
                </div>
              )
            })}
          </section>
        </section>
      </main>
    </EditableSiteShell>
  )
}
