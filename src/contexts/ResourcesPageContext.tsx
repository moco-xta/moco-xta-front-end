import { createContext, useContext, useRef, useState } from 'react'

import type { TResourcesPageContext, TResourcesPageProvider } from '@/types/contexts/types'
import type {
  TResourcesMenuData,
  TResourcesMenuSectionData,
} from '@/types/data/components/layout/types'

import { getResourcesMenu } from '@/helpers/pageHelpers'

export const ResourcesPageContext = createContext<TResourcesPageContext>(null!)

export const ResourcesPageProvider = ({ resourcesPageData, children }: TResourcesPageProvider) => {
  const menuRef = useRef<TResourcesMenuData>(getResourcesMenu(resourcesPageData))
  const [currentSection, setCurrentSection] = useState<TResourcesMenuSectionData>({
    key: 'introduction',
    translationKey: 'LAYOUT.SIDE_NAVIGATION_MENU.INTRODUCTION',
  })

  const handleSetCurrentSection = (newCurrentSection: TResourcesMenuSectionData) => {
    setCurrentSection(newCurrentSection)
  }

  return (
    <ResourcesPageContext.Provider
      value={{
        menuRef: menuRef,
        currentSection: currentSection,
        handleSetCurrentSection: handleSetCurrentSection,
      }}
    >
      {children}
    </ResourcesPageContext.Provider>
  )
}

export const useResourcesPageContext = () => useContext(ResourcesPageContext)
