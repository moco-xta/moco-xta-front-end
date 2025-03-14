import { MutableRefObject } from 'react'

import type { TLabelData } from '../animation/types'
import type { TMenuData, TMenuParagraphData, TMenuSectionData } from '../components/layout/types'
import type { TPageData } from '../data/components/layout/types'

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

export type TPageContext = {
  menuRef: MutableRefObject<TMenuData>
  currentSection: TMenuSectionData
  handleSetCurrentSection: (newCurrentSection: TMenuSectionData) => void
  currentParagraph: TMenuParagraphData
  handleSetCurrentParagraph: (newCurrentParagraph: TMenuParagraphData) => void
}

export type TPageProvider = {
  pageData: TPageData
  children: JSX.Element
}
