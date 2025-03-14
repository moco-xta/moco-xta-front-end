import type { TPageData } from '@/types/data/components/layout/types'
import type {
  TMenuData,
  TMenuParagraphData,
  TMenuSectionData,
} from '@/types/components/layout/types'

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

export function getIndexByPropertyValue(
  array: TMenuSectionData[],
  property: keyof TMenuSectionData | keyof TMenuParagraphData,
  value: string,
) {
  return array.findIndex((item) => item[property] === value)
}
