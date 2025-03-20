import { ReactNode } from 'react'

import type { TPageData, TSectionData } from '@/types/data/components/layout/types'

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
  sections: TSectionData[]
}

// SIDE NAVIGATION MENU

export type TSideNavigationMenu = {
  pageData: TPageData
}
