import { ReactNode } from 'react'

import type { TPageData } from '@/types/data/components/layout/types'

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

// MENU

export type TMenuData = {
  sections: TMenuSectionData[]
}

export type TMenuSectionData = {
  key: string
  translationKey: string
  paragraphs: TMenuParagraphData[]
}

export type TMenuParagraphData = {
  key: string
  translationKey: string
  logoName: string
}

// SIDE NAVIGATION MENU

export type TSideNavigationMenu = {
  pageData: TPageData
}
