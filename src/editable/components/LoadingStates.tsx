import { cn } from '@/lib/utils'

type LoadingStateProps = {
  label?: string
  className?: string
}

function PulseBlock({ className }: { className?: string }) {
  return <div className={cn('animate-pulse rounded-2xl bg-black/8', className)} />
}

export function PageLoadingState({ label = 'Loading page', className }: LoadingStateProps) {
  return (
    <div className={cn('mx-auto w-full max-w-[1320px] px-4 py-12 sm:px-6 lg:px-8', className)} aria-live="polite" aria-busy="true">
      <div className="rounded-[2rem] border border-black/10 bg-white p-6 shadow-[0_18px_50px_rgba(17,17,17,0.05)] sm:p-8">
        <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-black/45">{label}</p>
        <PulseBlock className="mt-5 h-14 w-3/4 max-w-4xl" />
        <PulseBlock className="mt-4 h-5 w-2/3 max-w-2xl" />
        <div className="mt-8 grid gap-4 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="rounded-[1.5rem] border border-black/10 p-5">
            <PulseBlock className="h-72 w-full" />
          </div>
          <div className="grid gap-4">
            {[0, 1, 2].map((item) => (
              <div key={item} className="rounded-[1.4rem] border border-black/10 p-5">
                <PulseBlock className="h-32 w-full" />
                <PulseBlock className="mt-4 h-5 w-4/5" />
                <PulseBlock className="mt-3 h-4 w-3/5" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export function CardGridLoadingState({ count = 6, className }: LoadingStateProps & { count?: number }) {
  return (
    <div className={cn('grid gap-5 sm:grid-cols-2 lg:grid-cols-3', className)} aria-live="polite" aria-busy="true">
      {Array.from({ length: count }).map((_, index) => (
        <div key={index} className="overflow-hidden rounded-[1.5rem] border border-black/10 bg-white p-4 shadow-[0_14px_35px_rgba(17,17,17,0.04)]">
          <PulseBlock className="h-44 w-full" />
          <PulseBlock className="mt-4 h-5 w-5/6" />
          <PulseBlock className="mt-3 h-4 w-2/3" />
          <PulseBlock className="mt-6 h-9 w-32 rounded-full" />
        </div>
      ))}
    </div>
  )
}

export function DetailLoadingState({ label = 'Loading detail', className }: LoadingStateProps) {
  return (
    <div className={cn('mx-auto grid w-full max-w-[1040px] gap-8 px-4 py-12 lg:grid-cols-[minmax(0,1fr)_280px]', className)} aria-live="polite" aria-busy="true">
      <div className="rounded-[2rem] border border-black/10 bg-white p-5 shadow-[0_18px_50px_rgba(17,17,17,0.05)]">
        <PulseBlock className="h-[420px] w-full rounded-[1.5rem]" />
      </div>
      <div className="rounded-[2rem] border border-black/10 bg-white p-6 shadow-[0_18px_50px_rgba(17,17,17,0.05)] sm:p-8">
        <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-black/45">{label}</p>
        <PulseBlock className="mt-5 h-14 w-4/5" />
        <PulseBlock className="mt-5 h-4 w-full" />
        <PulseBlock className="mt-3 h-4 w-5/6" />
        <PulseBlock className="mt-3 h-4 w-2/3" />
        <div className="mt-8 grid gap-3 sm:grid-cols-2">
          <PulseBlock className="h-12 w-full rounded-full" />
          <PulseBlock className="h-12 w-full rounded-full" />
        </div>
      </div>
    </div>
  )
}
