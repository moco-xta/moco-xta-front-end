import { MutableRefObject } from 'react'

import type {
  TMenuData,
  TMenuParagraphData,
  TMenuSectionData,
  TPageData,
} from '../data/components/layout/types'
import type { TLabelData } from '../data/animation/types'

// PAGE CONTEXT

export type TPageContext = {
  menuRef: MutableRefObject<TMenuData>
  currentSection: TMenuSectionData
  handleSetCurrentSection: (newCurrentSection: TMenuSectionData) => void
  currentParagraph: TMenuParagraphData | null
  handleSetCurrentParagraph: (newCurrentParagraph: TMenuParagraphData) => void
  isScrolling: boolean
  handleSetIsScrolling: (newState: boolean) => void
}

export type TPageProvider = {
  pageData: TPageData
  children: JSX.Element
}

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
