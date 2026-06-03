import Link from 'next/link'
import { ArrowRight, BookOpen, Search, Sparkles } from 'lucide-react'
import type { SitePost } from '@/lib/site-connector'
import type { HomeTimeSection } from '@/lib/task-data'
import type { TaskKey } from '@/lib/site-config'
import { SITE_CONFIG } from '@/lib/site-config'
import { pagesContent } from '@/editable/content/pages.content'
import { editableDesignContract as dc, editablePalette as pal } from '@/editable/layouts/design-contract'
import { getEditableCategory, getEditablePostImage, postHref } from '@/editable/cards/PostCards'

type HomeSectionProps = {
  primaryTask: TaskKey
  primaryRoute: string
  posts: SitePost[]
  timeSections: HomeTimeSection[]
}

function getExcerpt(post?: SitePost | null, limit = 130) {
  const content = post?.content && typeof post.content === 'object' ? post.content as Record<string, unknown> : {}
  const raw =
    (typeof content.description === 'string' && content.description) ||
    (typeof content.summary === 'string' && content.summary) ||
    post?.summary ||
    ''
  const clean = raw.replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' ').trim()
  return clean.length > limit ? `${clean.slice(0, limit).trim()}...` : clean
}

function taskLabel(task: TaskKey) {
  return SITE_CONFIG.tasks.find((item) => item.key === task)?.label || task
}

function SectionHeader({ eyebrow, title, body, href }: { eyebrow: string; title: string; body?: string; href?: string }) {
  return (
    <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
      <div>
        <p className={`${dc.type.eyebrow} ${pal.accentText}`}>{eyebrow}</p>
        <h2 className="mt-3 max-w-3xl text-3xl font-black leading-[1.04] tracking-[-0.055em] text-[var(--slot4-page-text)] sm:text-4xl">{title}</h2>
        {body ? <p className={`mt-4 max-w-2xl text-sm font-semibold leading-7 ${pal.mutedText}`}>{body}</p> : null}
      </div>
      {href ? (
        <Link href={href} className="inline-flex w-fit items-center gap-2 rounded-full border border-black/[0.1] bg-white px-5 py-3 text-sm font-black shadow-sm transition hover:-translate-y-0.5 hover:shadow-lg">
          View all <ArrowRight className="h-4 w-4" />
        </Link>
      ) : null}
    </div>
  )
}

function CoverStory({ post, href }: { post: SitePost; href: string }) {
  return (
    <Link href={href} className="group relative block min-h-[520px] overflow-hidden rounded-[1.15rem] bg-[#101010] text-white shadow-[0_28px_90px_rgba(16,16,16,0.28)]">
      <img src={getEditablePostImage(post)} alt={post.title} className="absolute inset-0 h-full w-full object-cover opacity-74 transition duration-700 group-hover:scale-105" />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.04)_0%,rgba(0,0,0,0.28)_42%,rgba(0,0,0,0.86)_100%)]" />
      <div className="relative z-10 flex min-h-[520px] flex-col justify-between p-6 sm:p-8">
        <div className="flex items-center justify-between gap-4">
          <span className="bg-[var(--slot4-accent)] px-3 py-1 text-[11px] font-black uppercase tracking-[0.2em]">Cover story</span>
          <span className="rounded-full border border-white/20 bg-white/10 px-3 py-1 text-[11px] font-black uppercase tracking-[0.18em] backdrop-blur">Premium read</span>
        </div>
        <div>
          <p className="text-xs font-black uppercase tracking-[0.24em] text-white/62">{getEditableCategory(post)}</p>
          <h2 className="mt-4 max-w-3xl text-4xl font-black leading-[0.96] tracking-[-0.07em] sm:text-5xl lg:text-6xl">{post.title}</h2>
          <p className="mt-5 max-w-2xl text-sm font-semibold leading-7 text-white/74 sm:text-base">{getExcerpt(post, 190)}</p>
        </div>
      </div>
    </Link>
  )
}

function EditorCard({ post, href, index }: { post: SitePost; href: string; index: number }) {
  return (
    <Link href={href} className="group grid gap-4 rounded-[1rem] border border-black/[0.08] bg-white p-3 shadow-[0_14px_46px_rgba(31,24,18,0.08)] transition hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(31,24,18,0.14)] sm:grid-cols-[118px_minmax(0,1fr)]">
      <div className="relative min-h-28 overflow-hidden rounded-[0.75rem] bg-[var(--slot4-media-bg)]">
        <img src={getEditablePostImage(post)} alt={post.title} className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105" />
      </div>
      <div className="min-w-0 py-1">
        <p className={`${dc.type.eyebrow} ${pal.accentText}`}>Editor's cut {String(index + 1).padStart(2, '0')}</p>
        <h3 className="mt-2 line-clamp-3 text-xl font-black leading-tight tracking-[-0.045em] text-[var(--slot4-page-text)]">{post.title}</h3>
        <p className={`mt-2 line-clamp-2 text-sm font-semibold leading-6 ${pal.mutedText}`}>{getExcerpt(post, 90)}</p>
      </div>
    </Link>
  )
}

function PosterCard({ post, href, index }: { post: SitePost; href: string; index: number }) {
  return (
    <Link href={href} className="group block w-[255px] shrink-0">
      <article className="overflow-hidden rounded-[1rem] border border-black/[0.08] bg-white p-2 shadow-[0_16px_50px_rgba(31,24,18,0.09)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_70px_rgba(31,24,18,0.15)]">
        <div className="relative aspect-[4/5] overflow-hidden rounded-[0.75rem] bg-[var(--slot4-media-bg)]">
          <img src={getEditablePostImage(post)} alt={post.title} className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105" />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.02)_20%,rgba(0,0,0,0.76)_100%)]" />
          <span className="absolute left-3 top-3 rounded-full bg-white/92 px-3 py-1 text-[10px] font-black uppercase tracking-[0.18em] text-black">No. {String(index + 1).padStart(2, '0')}</span>
          <div className="absolute bottom-0 left-0 right-0 p-4">
            <p className="text-[10px] font-black uppercase tracking-[0.2em] text-[var(--slot4-accent-soft)]">{getEditableCategory(post)}</p>
            <h3 className="mt-2 line-clamp-3 text-lg font-black leading-tight tracking-[-0.04em] text-white">{post.title}</h3>
          </div>
        </div>
      </article>
    </Link>
  )
}

function BentoCard({ post, href, featured = false }: { post: SitePost; href: string; featured?: boolean }) {
  return (
    <Link href={href} className={`group relative overflow-hidden rounded-[1.15rem] border border-black/[0.08] bg-white shadow-[0_18px_60px_rgba(31,24,18,0.09)] transition hover:-translate-y-1 hover:shadow-[0_26px_80px_rgba(31,24,18,0.15)] ${featured ? 'md:col-span-2' : ''}`}>
      <div className={`relative overflow-hidden bg-[var(--slot4-media-bg)] ${featured ? 'aspect-[16/7]' : 'aspect-[16/11]'}`}>
        <img src={getEditablePostImage(post)} alt={post.title} className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105" />
      </div>
      <div className="p-5 sm:p-6">
        <p className={`${dc.type.eyebrow} ${pal.accentText}`}>{getEditableCategory(post)}</p>
        <h3 className={`${featured ? 'text-3xl sm:text-4xl' : 'text-2xl'} mt-3 line-clamp-3 font-black leading-tight tracking-[-0.055em] text-[var(--slot4-page-text)]`}>{post.title}</h3>
        <p className={`mt-4 line-clamp-3 text-sm font-semibold leading-7 ${pal.mutedText}`}>{getExcerpt(post, featured ? 170 : 120)}</p>
      </div>
    </Link>
  )
}

function IndexStory({ post, href, index }: { post: SitePost; href: string; index: number }) {
  return (
    <Link href={href} className="group flex gap-4 rounded-[1rem] border border-black/[0.08] bg-white p-4 shadow-sm transition hover:-translate-y-0.5 hover:shadow-lg">
      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[var(--slot4-dark-bg)] text-xs font-black text-white">{index + 1}</span>
      <div className="min-w-0">
        <p className={`${dc.type.eyebrow} ${pal.accentText}`}>{getEditableCategory(post)}</p>
        <h3 className="mt-2 line-clamp-2 text-lg font-black leading-tight tracking-[-0.04em] text-[var(--slot4-page-text)]">{post.title}</h3>
        <p className={`mt-2 line-clamp-2 text-sm font-semibold leading-6 ${pal.mutedText}`}>{getExcerpt(post, 95)}</p>
      </div>
    </Link>
  )
}

function TimeSectionCard({ section, primaryTask, primaryRoute }: { section: HomeTimeSection; primaryTask: TaskKey; primaryRoute: string }) {
  const first = section.posts[0]
  if (!first) return null
  return (
    <div className="rounded-[1.15rem] border border-black/[0.08] bg-white p-5 shadow-[0_14px_45px_rgba(31,24,18,0.07)]">
      <p className={`${dc.type.eyebrow} ${pal.accentText}`}>{section.title}</p>
      <Link href={postHref(primaryTask, first, primaryRoute)} className="group mt-4 block">
        <div className="relative aspect-[16/9] overflow-hidden rounded-[0.85rem] bg-[var(--slot4-media-bg)]">
          <img src={getEditablePostImage(first)} alt={first.title} className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105" />
        </div>
        <h3 className="mt-4 line-clamp-2 text-xl font-black leading-tight tracking-[-0.045em]">{first.title}</h3>
      </Link>
      <div className="mt-4 grid gap-3">
        {section.posts.slice(1, 4).map((post) => (
          <Link key={post.id || post.slug} href={postHref(primaryTask, post, primaryRoute)} className="line-clamp-2 border-t border-black/[0.08] pt-3 text-sm font-bold leading-6 text-[var(--slot4-muted-text)] hover:text-[var(--slot4-accent)]">
            {post.title}
          </Link>
        ))}
      </div>
    </div>
  )
}

export function EditableHomeHero({ primaryTask, primaryRoute, posts }: HomeSectionProps) {
  const heroTitle = pagesContent.home.hero.title.join(' ') || `Fresh ${taskLabel(primaryTask).toLowerCase()} for focused readers.`
  const lead = posts[0]
  const sidePosts = posts.slice(1, 4)

  return (
    <section className="relative overflow-hidden border-b border-black/[0.08] bg-[#fbf8f3]">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-28 top-0 h-80 w-80 rounded-full bg-[rgba(255,63,47,0.14)] blur-3xl" />
        <div className="absolute right-0 top-20 h-96 w-96 rounded-full bg-[#efe4d7] blur-3xl" />
      </div>
      <div className="relative mx-auto grid max-w-[var(--editable-container)] gap-10 px-4 py-12 sm:px-6 lg:grid-cols-[0.86fr_1.14fr] lg:items-center lg:px-8 lg:py-16">
        <div>
          <p className={`${dc.type.eyebrow} ${pal.accentText}`}>{pagesContent.home.hero.badge}</p>
          <h1 className="mt-4 max-w-xl text-5xl font-black leading-[0.94] tracking-[-0.08em] text-[var(--slot4-page-text)] sm:text-6xl lg:text-7xl">{heroTitle}</h1>
          <p className={`mt-6 max-w-lg text-base font-semibold leading-8 ${pal.mutedText}`}>{pagesContent.home.hero.description}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href={primaryRoute} className={dc.button.primary}>Read latest <ArrowRight className="h-4 w-4" /></Link>
            <Link href="/search" className={dc.button.secondary}>Search archive</Link>
          </div>
          <div className="mt-8 grid max-w-xl gap-3 sm:grid-cols-3">
            {['Editorial pacing', 'Compact layout', 'Article discovery'].map((item) => (
              <span key={item} className="rounded-full border border-black/[0.08] bg-white px-4 py-2 text-center text-xs font-black uppercase tracking-[0.14em] shadow-sm">{item}</span>
            ))}
          </div>
        </div>
        <div className="grid gap-4 lg:grid-cols-[minmax(0,1fr)_310px]">
          {lead ? <CoverStory post={lead} href={postHref(primaryTask, lead, primaryRoute)} /> : null}
          <div className="grid gap-4">
            {sidePosts.map((post, index) => <EditorCard key={post.id || post.slug} post={post} href={postHref(primaryTask, post, primaryRoute)} index={index} />)}
            <div className="rounded-[1rem] border border-black/[0.08] bg-[var(--slot4-dark-bg)] p-5 text-white shadow-[0_18px_60px_rgba(0,0,0,0.18)]">
              <Sparkles className="h-5 w-5 text-[var(--slot4-accent)]" />
              <p className="mt-4 text-sm font-bold leading-7 text-white/72">{pagesContent.home.hero.featureCardDescription}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export function EditableStoryRail({ primaryTask, primaryRoute, posts }: HomeSectionProps) {
  const railPosts = posts.slice(0, 12)
  if (!railPosts.length) return null
  return (
    <section className="bg-[#f4f1ec]">
      <div className="mx-auto max-w-[var(--editable-container)] px-4 py-14 sm:px-6 lg:px-8">
        <SectionHeader eyebrow="Reader picks" title="Trending articles with a cover-worthy feel." body="A horizontal shelf for the stories readers are most likely to open next." href={primaryRoute} />
        <div className="mt-8 flex snap-x gap-5 overflow-x-auto pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {railPosts.map((post, index) => <PosterCard key={post.id || post.slug} post={post} href={postHref(primaryTask, post, primaryRoute)} index={index} />)}
        </div>
      </div>
    </section>
  )
}

export function EditableMagazineSplit({ primaryTask, primaryRoute, posts }: HomeSectionProps) {
  const featured = posts.slice(3, 9)
  if (!featured.length) return null
  return (
    <section className="relative overflow-hidden bg-white">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-32 bg-[linear-gradient(180deg,#f4f1ec,transparent)]" />
      <div className="relative mx-auto max-w-[var(--editable-container)] px-4 py-16 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Editor's briefing"
          title={`A premium reading board for ${taskLabel(primaryTask).toLowerCase()}.`}
          body="A bento-style section gives strong articles more room while keeping secondary reads easy to scan."
        />
        <div className="mt-9 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {featured.slice(0, 5).map((post, index) => (
            <BentoCard key={post.id || post.slug} post={post} href={postHref(primaryTask, post, primaryRoute)} featured={index === 0} />
          ))}
        </div>
      </div>
    </section>
  )
}

export function EditableTimeCollections({ primaryTask, primaryRoute, posts, timeSections }: HomeSectionProps) {
  const fallbackPosts = posts.slice(8, 18)
  const sections = timeSections.filter((section) => section.posts.length).slice(0, 3)
  const indexPosts = fallbackPosts.slice(0, 6)

  return (
    <section className="bg-[#f7f5f1]">
      <div className="mx-auto grid max-w-[var(--editable-container)] gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[0.86fr_1.14fr] lg:px-8">
        <div className="rounded-[1.25rem] border border-black/[0.08] bg-[var(--slot4-dark-bg)] p-7 text-white shadow-[0_24px_80px_rgba(0,0,0,0.18)] lg:p-8">
          <p className="text-xs font-black uppercase tracking-[0.22em] text-[var(--slot4-accent)]">Archive search</p>
          <h2 className="mt-4 text-4xl font-black leading-[1.02] tracking-[-0.065em] sm:text-5xl">Find the article that fits the moment.</h2>
          <p className="mt-5 text-sm font-semibold leading-7 text-white/68">Search across topics, article titles, and summaries without leaving the premium editorial flow.</p>
          <form action="/search" className="mt-7 rounded-[1rem] border border-white/10 bg-white p-2">
            <label className="flex items-center gap-3">
              <Search className="ml-3 h-4 w-4 text-black/45" />
              <input name="q" placeholder="Search articles" className="min-w-0 flex-1 bg-transparent px-2 text-sm font-bold text-black outline-none placeholder:text-black/40" />
              <button className="inline-flex items-center gap-2 rounded-[0.8rem] bg-[var(--slot4-accent)] px-5 py-3 text-sm font-black text-white">Search</button>
            </label>
          </form>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {indexPosts.map((post, index) => <IndexStory key={post.id || post.slug} post={post} href={postHref(primaryTask, post, primaryRoute)} index={index} />)}
        </div>
      </div>

      {sections.length ? (
        <div className="mx-auto max-w-[var(--editable-container)] px-4 pb-16 sm:px-6 lg:px-8">
          <SectionHeader eyebrow="Reading paths" title="Browse the archive by editorial rhythm." body="These compact collections give repeat visitors quick routes back into the latest published material." />
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {sections.map((section) => <TimeSectionCard key={section.key || section.title} section={section} primaryTask={primaryTask} primaryRoute={primaryRoute} />)}
          </div>
        </div>
      ) : null}
    </section>
  )
}

export function EditableHomeCta() {
  return (
    <section id="get-app" className="relative scroll-mt-24 overflow-hidden bg-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(255,63,47,0.12),transparent_28rem)]" />
      <div className="relative mx-auto max-w-[var(--editable-container)] px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl rounded-[1.35rem] border border-black/[0.08] bg-[#fbf8f3] p-8 text-center shadow-[0_22px_75px_rgba(31,24,18,0.1)] sm:p-10">
          <BookOpen className="mx-auto h-7 w-7 text-[var(--slot4-accent)]" />
          <p className={`${dc.type.eyebrow} mt-5 ${pal.accentText}`}>{pagesContent.home.cta.badge}</p>
          <h2 className="mt-3 text-3xl font-black leading-tight tracking-[-0.055em] sm:text-4xl">{pagesContent.home.cta.title}</h2>
          <p className={`mx-auto mt-4 max-w-2xl text-base font-semibold leading-8 ${pal.mutedText}`}>{pagesContent.home.cta.description}</p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link href="/article" className={dc.button.primary}>Browse articles</Link>
            <Link href="/contact" className={dc.button.secondary}>Contact editorial</Link>
          </div>
        </div>
      </div>
    </section>
  )
}
