import type { TPageData, TParagraphData, TSectionData } from '@/types/data/components/layout/types'
import type { TMenuData } from '@/types/components/layout/types'

/* export function getMenu(pageData: TPageData): TMenuData {
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
} */

export function getIndexByPropertyValue(
  array: TSectionData[] | TParagraphData[],
  property: keyof TSectionData | keyof TParagraphData,
  value: string,
) {
  return array.findIndex(
    (item) => (item as TSectionData | TParagraphData)[property as keyof typeof item] === value,
  )
}
