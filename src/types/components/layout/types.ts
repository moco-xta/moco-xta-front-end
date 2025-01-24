import type { ReactNode } from 'react'
import type {
  TExternalLinkData,
  TPageData,
  TResourcesParagraphData,
  TSectionData,
  TSkillsParagraphData,
} from '@/types/data/components/layout/types'

// LAYOUT

export type TRootLayout = {
  children: ReactNode
}

// PAGES

export type TPage = {
  pageData: TPageData
  displayPage?: boolean
  extraButtons?: ReactNode[]
  backgroundCanvas?: JSX.Element
}

export type TPlayerPage = {
  introduction: ReactNode
  canvas: JSX.Element
}

// SIDE NAVIGATION MENU

export type TSideNavigationMenu = {
  pageData: TPageData
  extraButtons?: ReactNode[]
}

// CONTENT

export type TContent = {
  pageData: TPageData
}

// SECTIONS

export type TPageIntroduction = {
  prefixKey: string
  translationPath: string
}

export type TPlayerPageIntroduction = {
  translationPath: string
}

export type TSection = {
  translationPath: string
  sectionData: TSectionData
}

// PLAYER PAGE GREETING

export type TPlayerPageGreeting = {
  introduction: ReactNode
}

// PROJECTS

// CURRENT DATE

export type TCurrentDate = {
  currentDate: Date
}

// PARAGRAPH

export type TParagraph = {
  sectionData: TSectionData
  translationPath: string
  paragraphData: TSkillsParagraphData | TResourcesParagraphData
}

export type TSkillsParagraph = {
  key: string
  translationPath: string
  paragraphData: TSkillsParagraphData
}

export type TResourcesParagraph = {
  key: string
  translationPath: string
  paragraphData: TResourcesParagraphData
}

// TITLES

export type TTitle = {
  title?: string
  translationPath?: string
}

// LINKS

export type TLinksArray = {
  translationPath: string
  title: string
  links: TExternalLinkData[]
  youtubePlaylistlink?: {
    url: string
  }
}

export type TExternalLink = {
  url: string
}
