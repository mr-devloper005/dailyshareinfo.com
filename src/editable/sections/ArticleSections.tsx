import Link from 'next/link'
import { ArrowRight, BookOpen, ChevronLeft, Filter, Newspaper, Search } from 'lucide-react'
import type { SitePost, SiteFeedPagination } from '@/lib/site-connector'
import { CATEGORY_OPTIONS } from '@/lib/categories'
import { taskPageVoices } from '@/editable/content/task-pages.content'
import { pagesContent } from '@/editable/content/pages.content'
import { editableDesignContract as dc, editablePalette as pal } from '@/editable/layouts/design-contract'
import { ArticleListCard, getEditableExcerpt, getEditablePostImage, postHref } from '@/editable/cards/PostCards'

function ArchiveFeature({ post, href }: { post: SitePost; href: string }) {
  return (
    <Link href={href} className="group relative block min-h-[390px] overflow-hidden rounded-[1.25rem] bg-black text-white shadow-[0_26px_85px_rgba(0,0,0,0.22)]">
      <img src={getEditablePostImage(post)} alt={post.title} className="absolute inset-0 h-full w-full object-cover opacity-72 transition duration-700 group-hover:scale-105" />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.02),rgba(0,0,0,0.82))]" />
      <div className="relative z-10 flex min-h-[390px] flex-col justify-end p-6 sm:p-8">
        <span className="w-fit bg-[var(--slot4-accent)] px-3 py-1 text-[11px] font-black uppercase tracking-[0.2em]">Latest lead</span>
        <h2 className="mt-4 max-w-3xl text-4xl font-black leading-[0.98] tracking-[-0.065em] sm:text-5xl">{post.title}</h2>
        <p className="mt-5 max-w-2xl text-sm font-semibold leading-7 text-white/72">{getEditableExcerpt(post, 170)}</p>
      </div>
    </Link>
  )
}

function ArchiveMini({ post, href, index }: { post: SitePost; href: string; index: number }) {
  return (
    <Link href={href} className="group grid grid-cols-[96px_minmax(0,1fr)] gap-4 rounded-[1rem] border border-white/10 bg-white/8 p-3 text-white transition hover:bg-white/12">
      <div className="relative min-h-24 overflow-hidden rounded-[0.75rem] bg-white/10">
        <img src={getEditablePostImage(post)} alt={post.title} className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105" />
      </div>
      <div className="min-w-0 py-1">
        <p className="text-[10px] font-black uppercase tracking-[0.2em] text-[var(--slot4-accent)]">Pick {String(index + 1).padStart(2, '0')}</p>
        <h3 className="mt-2 line-clamp-3 text-base font-black leading-tight tracking-[-0.04em]">{post.title}</h3>
      </div>
    </Link>
  )
}

export function EditableArticleArchive({ posts, pagination, category = 'all', basePath = '/article' }: { posts: SitePost[]; pagination: SiteFeedPagination; category?: string; basePath?: string }) {
  const voice = taskPageVoices.article
  const page = pagination.page || 1
  const pageHref = (nextPage: number) => `${basePath}?${new URLSearchParams({ ...(category && category !== 'all' ? { category } : {}), page: String(nextPage) }).toString()}`
  const lead = posts[0]
  const miniPosts = posts.slice(1, 4)
  const listPosts = posts.slice(lead ? 4 : 0)

  return (
    <main className={dc.shell.page}>
      <section className="relative overflow-hidden bg-[#fbf8f3]">
        <div className="pointer-events-none absolute -left-28 top-8 h-80 w-80 rounded-full bg-[rgba(255,63,47,0.13)] blur-3xl" />
        <div className="mx-auto max-w-[var(--editable-container)] px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
          <div className="grid gap-7 lg:grid-cols-[0.92fr_1.08fr] lg:items-stretch">
            <div className="rounded-[1.35rem] border border-black/[0.08] bg-[var(--slot4-dark-bg)] p-7 text-white shadow-[0_28px_90px_rgba(0,0,0,0.18)] sm:p-9">
              <p className="text-xs font-black uppercase tracking-[0.24em] text-[var(--slot4-accent)]">{voice.eyebrow}</p>
              <h1 className="mt-5 text-5xl font-black leading-[0.96] tracking-[-0.075em] sm:text-6xl">{voice.headline}</h1>
              <p className="mt-6 max-w-2xl text-base font-semibold leading-8 text-white/68">{voice.description}</p>
              <form action={basePath} className="mt-8 grid gap-3 rounded-[1rem] border border-white/10 bg-white p-2 sm:grid-cols-[minmax(0,1fr)_auto]">
                <label className="flex items-center gap-3 px-3">
                  <Filter className="h-4 w-4 text-black/45" />
                  <select name="category" defaultValue={category || 'all'} className="min-w-0 flex-1 bg-transparent py-3 text-sm font-black text-black outline-none">
                    <option value="all">All categories</option>
                    {CATEGORY_OPTIONS.map((item) => <option key={item.slug} value={item.slug}>{item.name}</option>)}
                  </select>
                </label>
                <button className="rounded-[0.85rem] bg-[var(--slot4-accent)] px-6 py-3 text-sm font-black text-white">Filter</button>
              </form>
            </div>

            <div className="grid gap-4">
              {lead ? <ArchiveFeature post={lead} href={postHref('article', lead, basePath)} /> : null}
              <div className="grid gap-3 rounded-[1.2rem] border border-black/[0.08] bg-[var(--slot4-dark-bg)] p-4 shadow-[0_20px_70px_rgba(0,0,0,0.16)] md:grid-cols-3">
                {miniPosts.map((post, index) => <ArchiveMini key={post.id || post.slug} post={post} href={postHref('article', post, basePath)} index={index} />)}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={`${dc.shell.section} py-12 sm:py-14 lg:py-16`}>
        <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className={`${dc.type.eyebrow} ${pal.accentText}`}>{posts.length} articles on this page</p>
            <h2 className="mt-3 text-3xl font-black leading-tight tracking-[-0.055em] sm:text-4xl">Browse the editorial archive</h2>
          </div>
          <Link href="/search" className="inline-flex w-fit items-center gap-2 rounded-full border border-black/[0.1] bg-white px-5 py-3 text-sm font-black shadow-sm transition hover:-translate-y-0.5 hover:shadow-lg">
            <Search className="h-4 w-4" /> Search archive
          </Link>
        </div>

        {posts.length ? (
          <div className="grid gap-5">
            {(listPosts.length ? listPosts : posts).map((post, index) => (
              <ArticleListCard key={post.id || post.slug} post={post} href={postHref('article', post, basePath)} index={index + (page - 1) * pagination.limit} />
            ))}
          </div>
        ) : (
          <div className="rounded-[1.2rem] border border-dashed border-black/[0.16] bg-white p-10 text-center shadow-sm">
            <Newspaper className="mx-auto h-8 w-8 text-[var(--slot4-accent)]" />
            <h2 className="mt-4 text-3xl font-black tracking-[-0.05em]">No articles found</h2>
            <p className={`mt-3 text-sm font-semibold leading-7 ${pal.softMutedText}`}>Try another category or return to all articles.</p>
          </div>
        )}

        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          {pagination.hasPrevPage ? <Link href={pageHref(page - 1)} className="rounded-full border border-black/[0.1] bg-white px-5 py-3 text-sm font-black shadow-sm">Previous</Link> : null}
          <span className="inline-flex items-center gap-2 rounded-full bg-[var(--slot4-dark-bg)] px-5 py-3 text-sm font-black text-white"><BookOpen className="h-4 w-4" /> Page {page} of {pagination.totalPages || 1}</span>
          {pagination.hasNextPage ? <Link href={pageHref(page + 1)} className="rounded-full border border-black/[0.1] bg-white px-5 py-3 text-sm font-black shadow-sm">Next</Link> : null}
        </div>
      </section>
    </main>
  )
}

export function EditableArticleDetailShell({ slug, post }: { slug: string; post: SitePost | null }) {
  const voice = taskPageVoices.article
  return (
    <main className={dc.shell.page}>
      <section className={`${dc.shell.section} pt-10 sm:pt-14 lg:pt-16`}>
        <div className="grid gap-6 rounded-[1.35rem] border border-black/[0.08] bg-white p-6 shadow-[0_24px_80px_rgba(24,20,17,0.08)] lg:grid-cols-[minmax(0,1fr)_320px] lg:p-10">
          <div className="min-w-0">
            <Link href="/article" className="inline-flex items-center gap-2 rounded-full border border-black/[0.1] px-4 py-2 text-sm font-black text-[var(--slot4-page-text)]"><ChevronLeft className="h-4 w-4" /> Articles</Link>
            <p className={`${dc.type.eyebrow} mt-8 ${pal.accentText}`}>{voice.eyebrow}</p>
            <h1 className={`mt-4 max-w-4xl text-4xl font-black leading-[1] tracking-[-0.07em] ${pal.panelText} sm:text-5xl lg:text-6xl`}>{post?.title || pagesContent.detailPages.article.fallbackTitle}</h1>
          </div>
          <aside className="min-w-0 rounded-[1rem] bg-[var(--slot4-dark-bg)] p-6 text-white">
            <p className="text-xs font-black uppercase tracking-[0.2em] text-[var(--slot4-accent)]">Reading note</p>
            <p className="mt-4 text-sm font-semibold leading-7 text-white/72">{voice.secondaryNote}</p>
            <Link href="/contact" className="mt-6 inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-black text-[var(--slot4-page-text)]">Contact <ArrowRight className="h-4 w-4" /></Link>
          </aside>
        </div>
      </section>
      <section className="mx-auto w-full max-w-5xl px-4 pb-16 pt-6 sm:px-6 lg:px-8 lg:pb-24">
        <div className="rounded-[1.2rem] border border-black/[0.08] bg-white p-6 shadow-[0_24px_80px_rgba(24,20,17,0.08)] sm:p-8 lg:p-10">
          <p className={`text-sm font-semibold leading-8 ${pal.softMutedText}`}>{post?.summary || `Article detail content for ${slug} will render through the editable detail page.`}</p>
        </div>
      </section>
    </main>
  )
}
