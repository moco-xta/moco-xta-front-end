import { ReactNode } from 'react'

import type { TSkillsData } from '@/types/data/components/layout/types'

// TITLES

export type TTitle = {
  title?: string
  translationPath?: string
  url?: string
}

// PLAYER PAGE

export type TPlayerPage = {
  id: string
  introduction: ReactNode
  canvas: JSX.Element
}

export type TPlayerPageGreeting = {
  introduction: ReactNode
}

export type TPlayerPageIntroduction = {
  translationPath: string
}

// SKILLS

export type TSkillsSideNavigationMenu = {
  skillsData: TSkillsData
}

// PROJECTS

export type TCurrentDate = {
  currentProject: number
  projectsNumber: number
  currentDate: Date
}
