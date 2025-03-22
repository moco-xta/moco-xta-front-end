import { createContext, useContext, useState } from 'react'

import type { TSkillsPageContext, TSkillsPageProvider } from '@/types/contexts/types'
import type { TSkillData, TSectionData } from '@/types/data/components/layout/types'

export const SkillsPageContext = createContext<TSkillsPageContext>(null!)

export const SkillsPageProvider = ({ skillsData, children }: TSkillsPageProvider) => {
  const [currentSection, setCurrentSection] = useState<TSectionData>({ ...skillsData.sections[0] })
  const [currentSkill, setCurrentSkill] = useState<TSkillData>({
    ...skillsData.sections[0].skills[0],
  })

  const handleSetCurrentSection = (newCurrentSection: TSectionData) => {
    setCurrentSection(newCurrentSection)
    setCurrentSkill({ ...newCurrentSection.skills[0] })
  }

  const handleSetCurrentSkill = (newCurrentParagraph: TSkillData) => {
    setCurrentSkill(newCurrentParagraph)
  }

  return (
    <SkillsPageContext.Provider
      value={{
        // menuRef: menuRef,
        currentSection: currentSection,
        handleSetCurrentSection: handleSetCurrentSection,
        currentSkill: currentSkill,
        handleSetCurrentSkill: handleSetCurrentSkill,
      }}
    >
      {children}
    </SkillsPageContext.Provider>
  )
}

export const useSkillsPageContext = () => useContext(SkillsPageContext)
