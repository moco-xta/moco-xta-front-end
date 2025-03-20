import { MutableRefObject } from 'react'

import type { TLabelData } from '../animation/types'
import type { TMenuData } from '../components/layout/types'
import type { TPageData, TParagraphData, TSectionData } from '../data/components/layout/types'

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
  // menuRef: MutableRefObject<TMenuData>
  currentSection: TSectionData
  handleSetCurrentSection: (newCurrentSection: TSectionData) => void
  currentParagraph: TParagraphData
  handleSetCurrentParagraph: (newCurrentParagraph: TParagraphData) => void
}

export type TPageProvider = {
  pageData: TPageData
  children: JSX.Element
}
