'use client'

import { useEffect, useMemo, useState } from 'react'
import Link from 'next/link'
import { MessageSquare, RefreshCcw, Search } from 'lucide-react'
import { Footer } from '@/components/shared/footer'
import { NavbarShell } from '@/components/shared/navbar-shell'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { EmptyState } from '@/editable/components/EmptyStates'

type StoredComment = {
  id: string
  name: string
  email?: string
  comment: string
  createdAt: string
  articleTitle?: string
  articleSlug?: string
}

const COMMENTS_PER_PAGE = 8
const COMMENT_KEY_PREFIX = 'slot4:article-comments:'

const formatDate = (value: string) => {
  try {
    return new Intl.DateTimeFormat('en-IN', {
      day: 'numeric',
      month: 'short',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    }).format(new Date(value))
  } catch {
    return 'Just now'
  }
}

const readCommentsFromStorage = (): StoredComment[] => {
  const items: StoredComment[] = []
  for (let index = 0; index < window.localStorage.length; index += 1) {
    const key = window.localStorage.key(index)
    if (!key?.startsWith(COMMENT_KEY_PREFIX)) continue
    const articleSlug = key.replace(COMMENT_KEY_PREFIX, '')
    try {
      const parsed = JSON.parse(window.localStorage.getItem(key) || '[]')
      if (!Array.isArray(parsed)) continue
      for (const item of parsed) {
        if (!item || typeof item !== 'object') continue
        if (typeof item.name !== 'string' || typeof item.comment !== 'string') continue
        items.push({
          id: typeof item.id === 'string' ? item.id : `${articleSlug}-${items.length}`,
          name: item.name,
          email: typeof item.email === 'string' ? item.email : undefined,
          comment: item.comment,
          createdAt: typeof item.createdAt === 'string' ? item.createdAt : new Date().toISOString(),
          articleTitle: typeof item.articleTitle === 'string' ? item.articleTitle : undefined,
          articleSlug: typeof item.articleSlug === 'string' ? item.articleSlug : articleSlug,
        })
      }
    } catch {
      // Ignore corrupted local comment records.
    }
  }

  return items.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
}

export default function CommentsPage() {
  const [comments, setComments] = useState<StoredComment[]>([])
  const [query, setQuery] = useState('')
  const [page, setPage] = useState(1)

  useEffect(() => {
    setComments(readCommentsFromStorage())
  }, [])

  const filtered = useMemo(() => {
    const term = query.trim().toLowerCase()
    if (!term) return comments
    return comments.filter((item) => {
      return [item.name, item.email, item.comment, item.articleTitle, item.articleSlug]
        .filter(Boolean)
        .some((value) => String(value).toLowerCase().includes(term))
    })
  }, [comments, query])

  const totalPages = Math.max(1, Math.ceil(filtered.length / COMMENTS_PER_PAGE))
  const currentPage = Math.min(page, totalPages)
  const visibleComments = filtered.slice((currentPage - 1) * COMMENTS_PER_PAGE, currentPage * COMMENTS_PER_PAGE)

  function refreshComments() {
    setComments(readCommentsFromStorage())
    setPage(1)
  }

  return (
    <div className="min-h-screen bg-[#f7f7f4] text-[#111111]">
      <NavbarShell />
      <main className="mx-auto max-w-[1320px] px-4 pb-14 pt-10 sm:px-6 lg:px-8 lg:pt-14">
        <section className="rounded-[2rem] border border-black/10 bg-white p-6 shadow-[0_18px_50px_rgba(17,17,17,0.05)] sm:p-8">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-3xl">
              <p className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.28em] text-[#6d6d6d]">
                <MessageSquare className="h-4 w-4" /> Saved thoughts
              </p>
              <h1 className="mt-4 text-5xl font-semibold tracking-[-0.08em] text-[#111111] sm:text-6xl">Comments</h1>
              <p className="mt-4 max-w-2xl text-sm leading-8 text-[#666666]">
                Browse comments saved in this browser from article pages. Search by name, email, article title, or the comment itself.
              </p>
            </div>
            <div className="flex items-center gap-3">
              <Button type="button" variant="outline" onClick={refreshComments} className="rounded-full border-black/10 bg-white px-5 py-3 text-sm font-medium text-[#111111] shadow-none hover:bg-black/[0.03]">
                <RefreshCcw className="mr-2 h-4 w-4" />
                Refresh
              </Button>
            </div>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {[
              ['Saved entries', `${comments.length}`],
              ['Filtered results', `${filtered.length}`],
              ['Pages', `${totalPages}`],
            ].map(([label, value]) => (
              <div key={label} className="rounded-[1.35rem] border border-black/10 bg-[#fafaf8] p-4">
                <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#6d6d6d]">{label}</p>
                <p className="mt-2 text-2xl font-semibold tracking-[-0.05em] text-[#111111]">{value}</p>
              </div>
            ))}
          </div>

          <div className="mt-6 flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
            <div className="relative w-full lg:max-w-md">
              <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-[#666666]" />
              <Input
                value={query}
                onChange={(event) => {
                  setQuery(event.target.value)
                  setPage(1)
                }}
                placeholder="Search comments..."
                className="h-12 rounded-full border-black/10 bg-white pl-10"
              />
            </div>
            <p className="text-sm text-[#666666]">
              {filtered.length} comment{filtered.length === 1 ? '' : 's'} found
            </p>
          </div>
        </section>

        {visibleComments.length ? (
          <section className="mt-8 grid gap-4">
            {visibleComments.map((item) => (
              <article key={`${item.articleSlug}-${item.id}`} className="rounded-[1.75rem] border border-black/10 bg-white p-5 shadow-[0_14px_35px_rgba(17,17,17,0.04)] sm:p-6">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <p className="text-lg font-semibold tracking-[-0.04em] text-[#111111]">{item.name}</p>
                    <p className="mt-1 text-xs font-semibold uppercase tracking-[0.22em] text-[#6d6d6d]">{formatDate(item.createdAt)}</p>
                  </div>
                  {item.articleSlug ? (
                    <Link href={`/article/${item.articleSlug}`} className="text-sm font-medium text-[#111111] transition hover:opacity-70">
                      Open article
                    </Link>
                  ) : null}
                </div>
                {item.articleTitle ? <p className="mt-4 text-sm font-medium text-[#111111]">{item.articleTitle}</p> : null}
                <p className="mt-3 text-sm leading-7 text-[#666666]">{item.comment}</p>
              </article>
            ))}
          </section>
        ) : (
          <section className="mt-8">
            <EmptyState
              title="No comments yet"
              description="Add a comment on any article page and it will appear here in this browser."
              actionLabel="Browse articles"
              actionHref="/article"
            />
          </section>
        )}

        {filtered.length > COMMENTS_PER_PAGE ? (
          <div className="mt-8 flex flex-wrap items-center justify-between gap-3 rounded-[1.35rem] border border-black/10 bg-white p-4 text-sm text-[#666666] shadow-[0_14px_35px_rgba(17,17,17,0.04)]">
            <span>
              Page {currentPage} of {totalPages}
            </span>
            <div className="flex gap-2">
              <Button type="button" variant="outline" size="sm" disabled={currentPage <= 1} onClick={() => setPage((value) => Math.max(1, value - 1))} className="rounded-full border-black/10 bg-white text-[#111111] hover:bg-black/[0.03]">
                Previous
              </Button>
              <Button type="button" variant="outline" size="sm" disabled={currentPage >= totalPages} onClick={() => setPage((value) => Math.min(totalPages, value + 1))} className="rounded-full border-black/10 bg-white text-[#111111] hover:bg-black/[0.03]">
                Next
              </Button>
            </div>
          </div>
        ) : null}
      </main>
      <Footer />
    </div>
  )
}
