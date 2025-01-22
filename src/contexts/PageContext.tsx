import { createContext, useContext, useRef, useState } from 'react'

import type { TPageContext, TPageProvider } from '@/types/contexts/types'
import type {
  TMenuData,
  TMenuParagraphData,
  TMenuSectionData,
} from '@/types/data/components/layout/types'

import { getMenu } from '@/helpers/pageHelpers'

export const PageContext = createContext<TPageContext>(null!)

export const PageProvider = ({ pageData, children }: TPageProvider) => {
  const menuRef = useRef<TMenuData>(getMenu(pageData))
  const [currentSection, setCurrentSection] = useState<TMenuSectionData>({
    key: 'introduction',
    translationKey: 'LAYOUT.SIDE_NAVIGATION_MENU.INTRODUCTION',
    paragraphs: [],
  })
  const [currentParagraph, setCurrentParagraph] = useState<TMenuParagraphData | null>(null)
  const [isScrolling, setIsScrolling] = useState<boolean>(false)

  const handleSetCurrentSection = (newCurrentSection: TMenuSectionData) => {
    setCurrentSection(newCurrentSection)
    setCurrentParagraph({
      key: 'introduction',
      translationKey: 'LAYOUT.SIDE_NAVIGATION_MENU.INTRODUCTION',
    })
  }

  const handleSetCurrentParagraph = (newCurrentParagraph: TMenuParagraphData) => {
    setCurrentParagraph(newCurrentParagraph)
  }

  const handleSetIsScrolling = (newState: boolean) => {
    setIsScrolling(newState)
  }

  return (
    <PageContext.Provider
      value={{
        menuRef: menuRef,
        currentSection: currentSection,
        handleSetCurrentSection: handleSetCurrentSection,
        currentParagraph: currentParagraph,
        handleSetCurrentParagraph: handleSetCurrentParagraph,
        isScrolling: isScrolling,
        handleSetIsScrolling: handleSetIsScrolling,
      }}
    >
      {children}
    </PageContext.Provider>
  )
}

export const usePageContext = () => useContext(PageContext)
