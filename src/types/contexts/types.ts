import type { TLabelData } from '../animation/types'
import type { TPageData, TSkillData, TSectionData } from '../data/components/layout/types'

// GSAP TIMELINE CONTEXT

export type TGSAPTimelineContext = {
  timeline: GSAPTimeline
  playTimeline: () => void
  pauseTimeline: () => void
}

export type TGSAPTimelineProvider = {
  delay?: number
  timeScale?: number
  labels?: TLabelData[]
  children: JSX.Element
}

// PAGE CONTEXT

export type TSkillsPageContext = {
  currentSection: TSectionData
  handleSetCurrentSection: (newCurrentSection: TSectionData) => void
  currentSkill: TSkillData
  handleSetCurrentSkill: (newCurrentParagraph: TSkillData) => void
}

export type TSkillsPageProvider = {
  skillsData: TPageData
  children: JSX.Element
}
