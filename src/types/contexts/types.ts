import { MutableRefObject } from 'react'

import type {
  TMenuData,
  TMenuParagraphData,
  TMenuSectionData,
  TPageData,
  TResourcesMenuData,
  TResourcesMenuSectionData,
  TResourcesPageData,
} from '../data/components/layout/types'
import type { TLabelData } from '../data/animation/types'

// PAGE CONTEXT

export type TPageContext = {
  menuRef: MutableRefObject<TMenuData>
  currentSection: TMenuSectionData
  handleSetCurrentSection: (newCurrentSection: TMenuSectionData) => void
  currentParagraph: TMenuParagraphData | null
  handleSetCurrentParagraph: (newCurrentParagraph: TMenuParagraphData) => void
}

export type TResourcesPageContext = {
  menuRef: MutableRefObject<TResourcesMenuData>
  currentSection: TResourcesMenuSectionData
  handleSetCurrentSection: (newCurrentSection: TResourcesMenuSectionData) => void
  // currentParagraph: TResourcesMenuParagraphData | null
  // handleSetCurrentParagraph: (newCurrentParagraph: TResourcesMenuParagraphData) => void
}

export type TPageProvider = {
  pageData: TPageData
  children: JSX.Element
}

export type TResourcesPageProvider = {
  resourcesPageData: TResourcesPageData
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
