import type { TMenuData } from '@/types/components/layout/types'
import type { TPageData } from '@/types/data/components/layout/types'

export function getMenu(pageData: TPageData): TMenuData {
  return {
    sections: pageData.sections.map((sectionData) => ({
      key: sectionData.key,
      translationKey: sectionData.translationKey,
      paragraphs: sectionData.paragraphs.map((paragraphData) => ({
        key: paragraphData.key,
        translationKey: paragraphData.translationKey,
      })),
    })),
  }
}
