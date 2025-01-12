import type {
  TExternalLinkData,
  TPageData,
  TResourcesParagraphData,
  TSectionData,
  TSkillsParagraphData,
} from '@/types/data/components/layout/types'

// PAGES

export type TPage = {
  pageData: TPageData
  backgroundCanvas?: JSX.Element
}

export type TPlayerPage = {
  canvas: JSX.Element
}

// SIDE NAVIGATION MENU

export type TSideNavigationMenu = {
  pageData: TPageData
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

export type TSection = {
  translationPath: string
  sectionData: TSectionData
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
  translationPath: string
}

// LINKS

export type TLinksArray = {
  translationPath: string
  title: string
  links: TExternalLinkData[]
  youtubePlaylistlink?: string
}

export type TExternalLink = {
  url: string
}
