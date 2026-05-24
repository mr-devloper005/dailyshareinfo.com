import Link from 'next/link'
import { ArrowRight, SearchX } from 'lucide-react'
import { cn } from '@/lib/utils'

type EmptyStateProps = {
  title?: string
  description?: string
  actionLabel?: string
  actionHref?: string
  className?: string
}

export function EmptyState({
  title = 'Nothing here yet',
  description = 'New reads will appear automatically once this area has content.',
  actionLabel = 'Back to home',
  actionHref = '/',
  className,
}: EmptyStateProps) {
  return (
    <section
      className={cn(
        'relative overflow-hidden rounded-[2rem] border border-black/10 bg-white p-8 text-center shadow-[0_18px_50px_rgba(17,17,17,0.05)] sm:p-10',
        className,
      )}
    >
      <div className="pointer-events-none absolute inset-0 opacity-80 [background-image:linear-gradient(to_bottom,rgba(17,17,17,0.02),transparent_55%)]" />
      <div className="relative mx-auto flex h-14 w-14 items-center justify-center rounded-full border border-black/10 bg-[#fafaf8]">
        <SearchX className="h-6 w-6 text-[#111111]" />
      </div>
      <h2 className="relative mt-5 text-2xl font-semibold tracking-[-0.05em] text-[#111111] sm:text-3xl">{title}</h2>
      <p className="relative mx-auto mt-3 max-w-xl text-sm leading-7 text-[#666666] sm:text-base">{description}</p>
      <Link
        href={actionHref}
        className="relative mt-7 inline-flex items-center gap-2 rounded-full bg-black px-5 py-3 text-sm font-medium text-white transition hover:-translate-y-0.5 hover:bg-black/90"
      >
        {actionLabel}
        <ArrowRight className="h-4 w-4" />
      </Link>
    </section>
  )
}

export function TaskEmptyState({ taskLabel = 'posts', className }: { taskLabel?: string; className?: string }) {
  return (
    <EmptyState
      className={className}
      title={`No ${taskLabel} available yet`}
      description={`Once new ${taskLabel} are published, they will appear here automatically.`}
      actionLabel="Explore the site"
      actionHref="/"
    />
  )
}

export function ContactSuccessState({ className }: { className?: string }) {
  return (
    <EmptyState
      className={className}
      title="Message received"
      description="Your note has been saved. Someone will follow up through the contact workflow."
      actionLabel="Return home"
      actionHref="/"
    />
  )
}
