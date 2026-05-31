import { slot4BrandConfig } from '@/editable/theme/brand.config'

export const globalContent = {
  site: {
    name: slot4BrandConfig.siteName,
    tagline: slot4BrandConfig.tagline || 'A place for thoughtful reading',
    domain: slot4BrandConfig.domain,
    baseUrl: slot4BrandConfig.baseUrl,
  },
  nav: {
    tagline: 'Read the latest, save the best, keep moving.',
    primaryLinks: [
      { label: 'Latest', href: '/article' },
      { label: 'About', href: '/about' },
      { label: 'Comments', href: '/comments' },
      { label: 'Contact', href: '/contact' },
    ],
    actions: {
      primary: { label: 'Browse stories', href: '/article' },
      secondary: { label: 'Send a note', href: '/contact' },
    },
  },
  footer: {
    tagline: 'Simple, calm, and built around reading well.',
    description: 'Fresh articles, clear discovery, and a smooth way to move between stories without losing your place.',
    columns: [
      {
        title: 'Explore',
        links: [
          { label: 'Latest', href: '/article' },
          { label: 'About', href: '/about' },
          { label: 'Comments', href: '/comments' },
          { label: 'Contact', href: '/contact' },
        ],
      },
      {
        title: 'More',
        links: [
          { label: 'Privacy', href: '/privacy' },
          { label: 'Terms', href: '/terms' },
          { label: 'Home', href: '/' },
        ],
      },
    ],
    bottomNote: 'Designed for long-form reading, clean browsing, and a quieter rhythm.',
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
