import type {
  TMenuData,
  TMenuParagraphData,
  TMenuSectionData,
  TPageData,
  TResourcesMenuData,
  TResourcesPageData,
} from '@/types/data/components/layout/types'

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

export function getResourcesMenu(pageData: TResourcesPageData): TResourcesMenuData {
  return {
    sections: pageData.sections.map((sectionData) => ({
      key: sectionData.key,
      translationKey: sectionData.translationKey,
    })),
  }
}

export function getIndexByPropertyValue(
  array: TMenuSectionData[] | TMenuParagraphData[],
  property: keyof TMenuSectionData | keyof TMenuParagraphData,
  value: string,
) {
  return array.findIndex(
    (item) =>
      (item as TMenuSectionData | TMenuParagraphData)[property as keyof typeof item] === value,
  )
}
