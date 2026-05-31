import type { TaskKey } from '@/lib/site-config'

export type TaskPageVoice = {
  eyebrow: string
  headline: string
  description: string
  filterLabel: string
  secondaryNote: string
  chips: string[]
}

export const taskPageVoices = {
  article: {
    eyebrow: 'Reading room',
    headline: 'Articles arranged with a quieter, more refined rhythm.',
    description: 'Use this page for guides, explainers, opinions, and long-form posts that deserve a proper reading surface.',
    filterLabel: 'Filter topics',
    secondaryNote: 'Good article pages feel spacious, legible, and easy to move through.',
    chips: ['Long reads', 'Topic filters', 'Reading first'],
  },
  classified: {
    eyebrow: 'Notice board',
    headline: 'Short updates that should be quick to scan.',
    description: 'Keep the pace brisk and the summaries direct so time-sensitive posts stay easy to act on.',
    filterLabel: 'Filter notice type',
    secondaryNote: 'Less decoration, more clarity, and faster decisions.',
    chips: ['Quick scan', 'Actionable', 'Time-sensitive'],
  },
  sbm: {
    eyebrow: 'Saved shelves',
    headline: 'Collections and bookmarks presented like a useful library.',
    description: 'This page should feel curated, calm, and organized around things people may want to return to later.',
    filterLabel: 'Filter collection',
    secondaryNote: 'Grouping and context matter more than visual noise here.',
    chips: ['Collections', 'References', 'Saved links'],
  },
  profile: {
    eyebrow: 'People and profiles',
    headline: 'Profiles with identity cues and a stronger sense of place.',
    description: 'Make it easy to understand who someone is, what they do, and why their page matters.',
    filterLabel: 'Filter profile type',
    secondaryNote: 'Identity, trust, and quick scanning should guide the layout.',
    chips: ['Identity first', 'Trust cues', 'Discoverable'],
  },
  pdf: {
    eyebrow: 'Document library',
    headline: 'PDFs and documents treated like practical reference material.',
    description: 'Use a cleaner archive style so downloads, guides, and documents are easier to browse.',
    filterLabel: 'Filter document type',
    secondaryNote: 'Helpful document pages feel precise and lightly structured.',
    chips: ['Documents', 'Guides', 'Archive'],
  },
  listing: {
    eyebrow: 'Business directory',
    headline: 'Listings built for comparison, trust, and action.',
    description: 'Keep the browsing path practical, with enough detail to compare options without slowing people down.',
    filterLabel: 'Filter category',
    secondaryNote: 'Strong listing pages feel organized, confident, and easy to sort.',
    chips: ['Compare', 'Trust cues', 'Direct action'],
  },
  image: {
    eyebrow: 'Visual gallery',
    headline: 'Image-led browsing with a more immersive feel.',
    description: 'Let the visuals carry the page first, then support them with thoughtful captions and clean metadata.',
    filterLabel: 'Filter visual theme',
    secondaryNote: 'Big imagery and clean spacing do most of the work here.',
    chips: ['Gallery', 'Visual-first', 'Immersive'],
  },
} satisfies Record<TaskKey, TaskPageVoice>
