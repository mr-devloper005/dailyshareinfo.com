import { slot4BrandConfig } from '@/editable/theme/brand.config'

export const pagesContent = {
  home: {
    metadata: {
      title: 'Useful reads, clear thinking, and stories worth keeping',
      description: 'A calm article home with stronger reading flow, clearer discovery, and a magazine-like structure.',
      openGraphTitle: 'Useful reads, clear thinking, and stories worth keeping',
      openGraphDescription: 'Browse article stories through a clean layout made for long reading and easy discovery.',
      keywords: ['articles', 'reading', 'guides', 'stories', 'ideas'],
    },
    hero: {
      badge: 'Reading home',
      title: ['Useful reads for', 'curious minds.'],
      description: 'Explore practical articles, sharp perspectives, and longer reads arranged with more breathing room and less noise.',
      primaryCta: { label: 'Browse articles', href: '/article' },
      secondaryCta: { label: 'Contact us', href: '/contact' },
      searchPlaceholder: 'Search stories, guides, and topics',
      focusLabel: 'Search the archive',
      featureCardBadge: 'Featured now',
      featureCardTitle: 'A calmer way to move through stories and ideas.',
      featureCardDescription: 'Fresh articles are surfaced with stronger hierarchy, richer image treatment, and a smoother reading path.',
    },
    intro: {
      badge: 'Why it works',
      title: 'Built for reading first, with discovery that still feels easy.',
      paragraphs: [
        'The home page keeps articles at the center while giving related pieces and supporting topics enough space to breathe.',
        'Different card shapes and section rhythms keep the page from feeling repetitive or cramped.',
        'The result is a browsing experience that feels clean, calm, and easy to return to.',
      ],
      sideBadge: 'At a glance',
      sidePoints: [
        'Stronger typography with generous spacing and a clearer pace.',
        'A mix of feature stories, compact rows, and discovery modules.',
        'A layout that keeps articles easy to scan without flattening them.',
        'Simple navigation that helps readers come back quickly.',
      ],
      primaryLink: { label: 'Start reading', href: '/article' },
      secondaryLink: { label: 'Learn more', href: '/about' },
    },
    cta: {
      badge: 'Stay connected',
      title: 'Read more, explore deeper, and come back when you have a minute.',
      description: 'Find fresh articles, save ideas, and move through related topics with less friction and more visual clarity.',
      primaryCta: { label: 'Browse all articles', href: '/article' },
      secondaryCta: { label: 'Send feedback', href: '/contact' },
    },
    taskSection: {
      heading: 'Latest {label}',
      descriptionSuffix: 'Fresh posts from this section, arranged for easy browsing.',
    },
  },
  about: {
    badge: 'About the site',
    title: 'A reading space shaped around clarity, pace, and good taste.',
    description: `${slot4BrandConfig.siteName} brings together practical articles and thoughtful ideas in a calmer, more focused layout.`,
    paragraphs: [
      'The goal is simple: make reading feel easier, make browsing feel cleaner, and keep the experience grounded in useful content.',
      'Instead of crowding every page with the same visual pattern, each section gets its own rhythm so the journey feels more considered.',
    ],
    values: [
      {
        title: 'Clarity before clutter',
        description: 'Keep the layout disciplined so the story stays in focus.',
      },
      {
        title: 'Discovery with structure',
        description: 'Connect articles and supporting pages without turning them into noise.',
      },
      {
        title: 'A better reading pace',
        description: 'More whitespace, sharper hierarchy, and calmer cards help people stay engaged.',
      },
    ],
  },
  contact: {
    eyebrow: `Contact ${slot4BrandConfig.siteName}`,
    title: 'A direct line for questions, ideas, and collaboration.',
    description: 'Send a note when something needs a response. Keep it short or detailed; either way it reaches the right place.',
    formTitle: 'Send your message',
  },
  detailPages: {
    article: {
      relatedTitle: 'More to read next',
      fallbackTitle: 'Article details',
    },
    listing: {
      relatedTitle: 'Related listings',
      fallbackTitle: 'Listing details',
    },
    image: {
      relatedTitle: 'Related visuals',
      fallbackTitle: 'Image details',
    },
    profile: {
      relatedTitle: 'Suggested reads',
      fallbackDescription: 'Profile details will appear here once available.',
      visitButton: 'Visit official site',
    },
  },
} as const
