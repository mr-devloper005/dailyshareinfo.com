import { siteIdentity } from '@/config/site.identity'
import { getFactoryState } from '@/design/factory/get-factory-state'
import { getProductKind } from '@/design/factory/get-product-kind'

const { recipe } = getFactoryState()
const productKind = getProductKind(recipe)

export const slot4BrandConfig = {
  siteName: siteIdentity.name,
  tagline: siteIdentity.tagline,
  domain: siteIdentity.domain,
  baseUrl: siteIdentity.url,
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
