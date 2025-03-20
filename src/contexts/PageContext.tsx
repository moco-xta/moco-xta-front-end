import { createContext, useContext, /* useRef, */ useState } from 'react'

import type { TPageContext, TPageProvider } from '@/types/contexts/types'
import type { TParagraphData, TSectionData } from '@/types/data/components/layout/types'
// import type { TMenuData } from '@/types/components/layout/types'

// import { getMenu } from '@/helpers/pageHelpers'

export const PageContext = createContext<TPageContext>(null!)

export const PageProvider = ({ pageData, children }: TPageProvider) => {
  // const menuRef = useRef<TMenuData>(getMenu(pageData))

  const [currentSection, setCurrentSection] = useState<TSectionData>({ ...pageData.sections[0] })
  const [currentParagraph, setCurrentParagraph] = useState<TParagraphData>({
    ...pageData.sections[0].paragraphs[0],
  })

  const handleSetCurrentSection = (newCurrentSection: TSectionData) => {
    setCurrentSection(newCurrentSection)
    setCurrentParagraph({ ...newCurrentSection.paragraphs[0] })
  }

  const handleSetCurrentParagraph = (newCurrentParagraph: TParagraphData) => {
    setCurrentParagraph(newCurrentParagraph)
  }

  return (
    <PageContext.Provider
      value={{
        // menuRef: menuRef,
        currentSection: currentSection,
        handleSetCurrentSection: handleSetCurrentSection,
        currentParagraph: currentParagraph,
        handleSetCurrentParagraph: handleSetCurrentParagraph,
      }}
    >
      {children}
    </PageContext.Provider>
  )
}

export const usePageContext = () => useContext(PageContext)
