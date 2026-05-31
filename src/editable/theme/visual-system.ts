import { slot4BrandConfig } from './brand.config'

export type Slot4VisualPreset =
  | 'editorial-paper'
  | 'luxury-atelier'
  | 'brutalist-index'
  | 'organic-journal'
  | 'tech-directory'
  | 'retro-bulletin'
  | 'visual-gallery'

export const visualPresets = {
  'editorial-paper': {
    label: 'Ink Column',
    mood: 'quiet, premium, reading-first',
    fontDirection: 'serif-led headlines with a restrained text face',
    colors: {
      background: '#fbfbf9',
      foreground: '#111111',
      muted: '#666666',
      primary: '#111111',
      accent: '#6b6b6b',
      surface: '#ffffff',
    },
    shape: 'paper cards, thin borders, wide spacing',
  },
  'luxury-atelier': {
    label: 'Nocturne Velvet',
    mood: 'refined, dark, cinematic',
    fontDirection: 'tall display headings with airy body copy',
    colors: {
      background: '#0c0f14',
      foreground: '#f5eadc',
      muted: '#c0b2a0',
      primary: '#d8b36c',
      accent: '#8adcc0',
      surface: '#161b24',
    },
    shape: 'deep panels, soft glow, polished edges',
  },
  'brutalist-index': {
    label: 'Signal Index',
    mood: 'bold, direct, high-contrast',
    fontDirection: 'condensed headings with strong labels',
    colors: {
      background: '#f2f0eb',
      foreground: '#111111',
      muted: '#5f5a52',
      primary: '#111111',
      accent: '#d85c2f',
      surface: '#ffffff',
    },
    shape: 'hard borders, offset blocks, utility grid',
  },
  'organic-journal': {
    label: 'Field Notes',
    mood: 'warm, human, trustworthy',
    fontDirection: 'soft serif headlines with humanist text',
    colors: {
      background: '#f4efe6',
      foreground: '#273022',
      muted: '#6a705f',
      primary: '#405331',
      accent: '#c27d55',
      surface: '#fffaf1',
    },
    shape: 'rounded panels, natural texture, calm rhythm',
  },
  'tech-directory': {
    label: 'Slate Directory',
    mood: 'clean, fast, information-led',
    fontDirection: 'modern sans with crisp data accents',
    colors: {
      background: '#f5f8fb',
      foreground: '#111827',
      muted: '#5f6b7a',
      primary: '#0f172a',
      accent: '#0088ff',
      surface: '#ffffff',
    },
    shape: 'precise cards, data rails, compact hierarchy',
  },
  'retro-bulletin': {
    label: 'Paper Bulletin',
    mood: 'bright, tactile, memorable',
    fontDirection: 'playful headlines with sturdy body type',
    colors: {
      background: '#fff0c4',
      foreground: '#2d1d12',
      muted: '#7a5a38',
      primary: '#2b1d12',
      accent: '#d96b2b',
      surface: '#fff8db',
    },
    shape: 'tabs, stickers, framed modules',
  },
  'visual-gallery': {
    label: 'Midnight Gallery',
    mood: 'immersive, image-led, polished',
    fontDirection: 'minimal sans with oversized display moments',
    colors: {
      background: '#08111f',
      foreground: '#f8fbff',
      muted: '#a8b7c8',
      primary: '#8adcc0',
      accent: '#f0a6ff',
      surface: '#111b2d',
    },
    shape: 'dark glass, large media, cinematic spacing',
  },
} as const

export const visualSystem = {
  productKind: slot4BrandConfig.productKind,
  recommendedPreset:
    slot4BrandConfig.productKind === 'visual'
      ? 'visual-gallery'
      : slot4BrandConfig.productKind === 'editorial'
        ? 'editorial-paper'
        : slot4BrandConfig.productKind === 'directory'
          ? 'tech-directory'
          : 'organic-journal',
  radius: {
    sm: '0.6rem',
    md: '1rem',
    lg: '1.5rem',
    xl: '2rem',
  },
  motion: {
    pageLoad: 'animate-in fade-in slide-in-from-bottom-4 duration-700',
    cardHover: 'transition duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-black/8',
    softHover: 'transition duration-300 hover:opacity-90',
    reduceMotionSafe: 'motion-reduce:transform-none motion-reduce:transition-none',
  },
  typography: {
    eyebrow: 'text-[11px] font-semibold uppercase tracking-[0.26em]',
    heroTitle: 'text-5xl font-semibold tracking-[-0.07em] sm:text-6xl lg:text-7xl',
    sectionTitle: 'text-3xl font-semibold tracking-[-0.05em] sm:text-4xl',
    body: 'text-base leading-8',
    caption: 'text-[11px] font-semibold uppercase tracking-[0.22em]',
  },
  surfaces: {
    glass: 'border border-black/8 bg-white/85 backdrop-blur-xl',
    paper: 'border border-black/10 bg-white shadow-[0_20px_60px_rgba(17,17,17,0.06)]',
    quiet: 'border border-black/10 bg-black/[0.03]',
    dark: 'border border-white/10 bg-black/30 shadow-[0_24px_70px_rgba(0,0,0,0.25)]',
  },
  layout: {
    page: 'mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8',
    sectionY: 'py-12 sm:py-16 lg:py-20',
    cardGrid: 'grid gap-5 sm:grid-cols-2 lg:grid-cols-3',
  },
} as const

export function getVisualPreset(name: Slot4VisualPreset = visualSystem.recommendedPreset as Slot4VisualPreset) {
  return visualPresets[name]
}
