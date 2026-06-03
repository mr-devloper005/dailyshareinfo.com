import { slot4BrandConfig } from '@/editable/theme/brand.config'

export const globalContent = {
  site: {
    name: slot4BrandConfig.siteName,
    tagline: slot4BrandConfig.tagline || 'Independent article publishing platform',
    domain: slot4BrandConfig.domain,
    baseUrl: slot4BrandConfig.baseUrl,
  },
  nav: {
    tagline: `${slot4BrandConfig.tagline}`,
    primaryLinks: [
      { label: 'Home', href: '/' },
      { label: 'Articles', href: '/article' },
      { label: 'Search', href: '/search' },
      { label: 'Contact', href: '/contact' },
    ],
    actions: {
      primary: { label: 'Browse stories', href: '/article' },
      secondary: { label: 'Create account', href: '/signup' },
    },
  },
  footer: {
    tagline: 'Stories, analysis, and guided discovery',
    description: 'A focused editorial home for articles, essays, explainers, and reader-friendly discovery.',
    columns: [
      {
        title: 'Explore',
        links: [
          { label: 'Latest articles', href: '/article' },
          { label: 'Search archive', href: '/search' },
          { label: 'Create post', href: '/create' },
          { label: 'Editorial archive', href: '/article' },
        ],
      },
      {
        title: 'Site',
        links: [
          { label: 'About', href: '/about' },
          { label: 'Contact', href: '/contact' },
          { label: 'Login', href: '/login' },
        ],
      },
    ],
    bottomNote: 'Built for clean reading, article discovery, and simple publishing workflows.',
  },
  commonLabels: {
    readMore: 'Read more',
    viewAll: 'View all',
    explore: 'Explore',
    latest: 'Latest',
    related: 'Related',
    published: 'Published',
  },
} as const
