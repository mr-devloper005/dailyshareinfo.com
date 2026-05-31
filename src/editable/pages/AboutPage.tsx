import Link from 'next/link'
import { Badge } from '@/components/ui/badge'
import { PageShell } from '@/components/shared/page-shell'
import { SITE_CONFIG } from '@/lib/site-config'
import { pagesContent } from '@/editable/content/pages.content'

export default function AboutPage() {
  return (
    <PageShell title={`About ${SITE_CONFIG.name}`} description={pagesContent.about.description}>
      <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_320px] lg:items-start">
        <div className="rounded-[2rem] border border-black/10 bg-white p-6 shadow-[0_18px_50px_rgba(17,17,17,0.05)] sm:p-8">
          <Badge className="rounded-full border border-black/10 bg-black px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.28em] text-white shadow-none hover:bg-black">
            {pagesContent.about.badge}
          </Badge>
          <h2 className="mt-5 max-w-3xl text-4xl font-semibold tracking-[-0.08em] text-[#111111] sm:text-5xl">{pagesContent.about.title}</h2>
          <p className="mt-5 max-w-2xl text-sm leading-8 text-[#666666] sm:text-base">{pagesContent.about.description}</p>
          <div className="mt-7 space-y-4">
            {pagesContent.about.paragraphs.map((paragraph) => (
              <p key={paragraph} className="rounded-[1.35rem] border border-black/10 bg-[#fafaf8] p-4 text-sm leading-7 text-[#666666] shadow-[0_14px_35px_rgba(17,17,17,0.04)]">
                {paragraph}
              </p>
            ))}
          </div>
        </div>

        <div className="grid gap-4 lg:sticky lg:top-24">
          <div className="rounded-[1.75rem] border border-black/10 bg-[#111111] p-6 text-white shadow-[0_18px_50px_rgba(17,17,17,0.12)]">
            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-white/60">What this site values</p>
            <div className="mt-5 grid gap-3">
              {pagesContent.about.values.map((value) => (
                <div key={value.title} className="rounded-[1.25rem] border border-white/10 bg-white/5 p-4">
                  <h3 className="text-lg font-semibold tracking-[-0.04em]">{value.title}</h3>
                  <p className="mt-2 text-sm leading-7 text-white/76">{value.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[1.75rem] border border-black/10 bg-white p-6 shadow-[0_18px_50px_rgba(17,17,17,0.05)]">
            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#6d6d6d]">Navigation</p>
            <div className="mt-4 flex flex-wrap gap-3">
              <Link href="/article" className="rounded-full border border-black/10 bg-[#fafaf8] px-4 py-2 text-sm font-medium text-[#111111] transition hover:bg-black/[0.03]">
                Articles
              </Link>
              <Link href="/comments" className="rounded-full border border-black/10 bg-[#fafaf8] px-4 py-2 text-sm font-medium text-[#111111] transition hover:bg-black/[0.03]">
                Comments
              </Link>
              <Link href="/contact" className="rounded-full border border-black/10 bg-[#fafaf8] px-4 py-2 text-sm font-medium text-[#111111] transition hover:bg-black/[0.03]">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </div>
    </PageShell>
  )
}
