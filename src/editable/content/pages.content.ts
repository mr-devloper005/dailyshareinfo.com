import { slot4BrandConfig } from '@/editable/theme/brand.config'

export const pagesContent = {
  home: {
    metadata: {
      title: 'Article publishing with a cleaner reading experience',
      description: 'Explore featured articles, editorial highlights, and related posts through a modern magazine-style layout.',
      openGraphTitle: 'Article publishing with a cleaner reading experience',
      openGraphDescription: 'Discover article-led stories, clean navigation, and richer editorial pages through a modern magazine layout.',
      keywords: ['article site', 'editorial layout', 'magazine homepage', 'content discovery'],
    },
    hero: {
      badge: 'Magazine home',
      title: ['Read sharper stories', 'without the clutter.'],
      description: 'Explore article-led stories, useful explainers, and editorial collections in a compact magazine layout built for comfortable reading.',
      primaryCta: { label: 'Read latest articles', href: '/article' },
      secondaryCta: { label: 'Search archive', href: '/search' },
      searchPlaceholder: 'Search articles, topics, authors, or tags',
      focusLabel: 'Featured reading',
      featureCardBadge: "editor's pick",
      featureCardTitle: 'Strong visuals, clear story hierarchy, and article-first browsing.',
      featureCardDescription: 'Each section keeps reading focused while making room for discovery, context, and movement between stories.',
    },
    intro: {
      badge: 'About the publication',
      title: 'Built for reading, browsing, and keeping articles easy to follow.',
      paragraphs: [
        'This site brings together article-led publishing, search, and related reading cues so visitors can move naturally from one story to the next.',
        'Instead of stretching the layout too wide or scattering the experience across disconnected blocks, the pages stay centered, readable, and easy to scan.',
        'Whether someone starts on the homepage, opens an article detail page, or jumps into search, the content remains visually consistent and simple to use.',
      ],
      sideBadge: 'Reading goals',
      sidePoints: [
        'Centered layouts that feel normal on desktop and stay comfortable on smaller screens.',
        'Article cards with stronger titles, summaries, and cleaner category labels.',
        'Editorial sidebars that guide readers without making the pages feel crowded.',
        'Auth, search, and contact pages written to feel useful instead of generic.',
      ],
      primaryLink: { label: 'Browse articles', href: '/article' },
      secondaryLink: { label: 'Search stories', href: '/search' },
    },
    cta: {
      badge: 'Start exploring',
      title: 'Find your next useful article in a few calm clicks.',
      description: 'Move between featured stories, article pages, search results, and account actions through one cleaner editorial system.',
      primaryCta: { label: 'Browse Articles', href: '/article' },
      secondaryCta: { label: 'Contact us', href: '/contact' },
    },
    taskSection: {
      heading: 'Latest {label}',
      descriptionSuffix: 'Browse the newest article-led posts in this section.',
    },
  },
  about: {
    badge: 'Our story',
    title: 'A calmer, clearer way to read articles online.',
    description: `${slot4BrandConfig.siteName} is designed as an article-first publication where stories, context, and discovery all stay in one readable flow.`,
    paragraphs: [
      'The goal is simple: keep the reading experience centered, beautiful, and easy to understand without stretching the layout too far or overloading each page.',
      'The homepage, article archive, search, and account screens share one editorial tone so the site feels intentional from top to bottom.',
      'Every page is shaped around article discovery: strong headlines, useful summaries, readable forms, and actions that are easy to spot.',
      'We favor purposeful whitespace, image-led cards, and compact sections that help readers choose what to open next without feeling rushed.',
    ],
    values: [
      {
        title: 'Article-first layout',
        description: 'We prioritize strong headlines, useful summaries, and clear article sections so the reading path is always obvious.',
      },
      {
        title: 'Connected discovery',
        description: 'Homepage rails, search results, and task detail pages all help readers move naturally from one post to the next.',
      },
      {
        title: 'Simple and trustworthy',
        description: 'We focus on centered layouts, clean spacing, and visible actions so the site feels easy to trust and easy to use.',
      },
    ],
  },
  contact: {
    eyebrow: `Contact ${slot4BrandConfig.siteName}`,
    title: 'Send article pitches, corrections, and publishing questions.',
    description: 'Share a story idea, a correction, a partnership note, or a request for help with the article workflow. The contact page is tuned for editorial conversations.',
    formTitle: 'Send your message',
  },

  search: {
    metadata: {
      title: 'Search',
      description: 'Search articles, topics, categories, and content across the site.',
    },
    hero: {
      badge: 'Search the archive',
      title: 'Find articles and editorial stories faster.',
      description: 'Use keywords, categories, and content types to discover the most relevant posts across the archive.',
      placeholder: 'Search by keyword, topic, author, or title',
    },
    resultsTitle: 'Latest searchable content',
  },
  create: {
    metadata: {
      title: 'Create',
      description: 'Create and submit new article content for the site.',
    },
    locked: {
      badge: 'Creator access',
      title: 'Login to create a new article draft.',
      description: 'Use your account to open the publishing workspace and write article content with title, summary, links, and body copy.',
    },
    hero: {
      badge: 'Publishing workspace',
      title: 'Create article content with a clean publishing workflow.',
      description: 'Choose the article type, add rich details, and prepare a polished post with images, links, summary, and body content.',
    },
    formTitle: 'Article details',
    submitLabel: 'Submit content',
    successTitle: 'Content submitted successfully.',
  },
  auth: {
    login: {
      metadataDescription: 'Login page for this article publishing site.',
      badge: 'Member access',
      title: 'Welcome back to the reading desk.',
      description: 'Login to continue browsing articles, opening the create workspace, and keeping your editorial activity connected to your account.',
      formTitle: 'Login',
      submitLabel: 'Continue',
      noAccount: 'No account matched these details. Create an account first, then login.',
      success: 'Login successful. Redirecting...',
      createCta: 'Create an account',
    },
    signup: {
      metadataDescription: 'Signup page for this article publishing site.',
      badge: 'Site access',
      title: 'Create your account for article publishing.',
      description: 'Join the site to open the publishing workspace, draft article ideas, and submit story-led content through a cleaner interface.',
      formTitle: 'Create account',
      submitLabel: 'Create account',
      passwordShort: 'Use at least 4 characters for the password.',
      success: 'Account created successfully. Redirecting...',
      loginCta: 'Login',
    },
  },
  detailPages: {
    article: {
      relatedTitle: 'Related articles',
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
      relatedTitle: 'Suggested articles',
      fallbackDescription: 'Profile details will appear here once available.',
      visitButton: 'Visit Official Site',
    },
  },
} as const
