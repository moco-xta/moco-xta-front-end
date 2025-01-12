// PAGE

import { TLogoData } from '../three/types'

export type TPageData = {
  key: string
  translationKey: string
  sections: TSectionData[]
}

// SECTION

export type TSectionData = {
  key: string
  translationKey: string
  paragraphs: TParagraphData[]
}

// PARAGRAPH

type TParagraphData = {
  key: string
  translationKey: string
}

export type TSkillsParagraphData = {
  key: string
  logo: TLogoData
  translationKey: string
}

export type TResourcesParagraphData = {
  key: string
  translationKey: string
  documentation: TLinksArrayData[]
  youtubePlaylistlink?: string
  websites: TLinksArrayData[]
  channels: TLinksArrayData[]
  articles: TLinksArrayData[]
}

// LINKS

export type TLinksArrayData = {
  translationPath: string
  title: string
  links: TExternalLinkData[]
  youtubePlaylistlink?: string
}

export type TExternalLinkData = {
  translationKey?: string
  urlName?: string
  url: string
  languages?: string[]
}
