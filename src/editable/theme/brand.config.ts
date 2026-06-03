import { siteIdentity } from '@/config/site.identity'
import { getFactoryState } from '@/design/factory/get-factory-state'
import { getProductKind } from '@/design/factory/get-product-kind'

const { recipe } = getFactoryState()
const productKind = getProductKind(recipe)
const envSiteName = process.env.NEXT_PUBLIC_SITE_NAME || siteIdentity.name
const envTagline = process.env.NEXT_PUBLIC_SITE_TAGLINE || siteIdentity.tagline
const envDomain = process.env.NEXT_PUBLIC_SITE_DOMAIN || siteIdentity.domain
const envBaseUrl = process.env.NEXT_PUBLIC_SITE_URL || siteIdentity.url

export const slot4BrandConfig = {
  siteName: envSiteName,
  tagline: envTagline,
  domain: envDomain,
  baseUrl: envBaseUrl,
  productKind,
  ogImage: siteIdentity.ogImage,
  accents:
    productKind === 'visual'
      ? { primary: '#111827', surface: '#f8fafc' }
      : productKind === 'editorial'
        ? { primary: '#111111', surface: '#ffffff' }
        : productKind === 'directory'
          ? { primary: '#0f172a', surface: '#f8fafc' }
          : { primary: '#111111', surface: '#fbfaf7' },
} as const
