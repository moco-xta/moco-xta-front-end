import type { ReactNode } from 'react'
import type {
  TExternalLinkData,
  TPageData,
  TResourcesPageData,
  TResourcesParagraphData,
  TResourcesSectionData,
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

// RESOURCES

export type TResourcesPage = {
  resourcesPageData: TResourcesPageData
  extraButtons?: ReactNode[]
  backgroundCanvas?: JSX.Element
}

export type TPlayerPage = {
  introduction: ReactNode
  canvas: JSX.Element
}

// SIDE NAVIGATION MENU

export type TSideNavigationMenu = {
  pageData: TPageData | TResourcesPageData
  extraButtons?: ReactNode[]
}

// CONTENT

export type TContent = {
  pageData: TPageData
}

// RESOURCES

export type TResourcesContent = {
  resourcesPageData: TResourcesPageData
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
  sectionData: TSectionData | TResourcesSectionData
}

// RESOURCES

export type TResourcesSection = {
  translationPath: string
  sectionData: TResourcesSectionData
}

// PLAYER PAGE GREETING

export type TPlayerPageGreeting = {
  introduction: ReactNode
}

// PROJECTS

export type TProjectScene = {
  currentProject: number
  currentCompany: number
  // currentLocation: number
}

export type TProjectsLogos = {
  currentProject: number
}

export type TCompaniesLogos = {
  currentCompany: number
}

export type TProjectsPictures = {
  currentProject: number
}

export type TLocations = {
  currentLocation: number
}

// CURRENT DATE

export type TCurrentDate = {
  currentDate: Date
}

// PARAGRAPH

export type TParagraph = {
  translationPath: string
  paragraphData: TSkillsParagraphData
}

export type TResourcesParagraph = {
  translationPath: string
  paragraphData: TResourcesParagraphData
}

export type TSkillsParagraph = {
  key: string
  translationPath: string
  paragraphData: TSkillsParagraphData
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
