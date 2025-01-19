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
  paragraphs: TParagraphData[] | TSkillsParagraphData[] | TResourcesParagraphData[]
}

// PARAGRAPH

type TParagraphData = {
  key: string
  translationKey: string
}

export type TSkillsParagraphData = TParagraphData & {
  logo: TLogoData
}

export type TResourcesParagraphData = TParagraphData & {
  documentation: TLinksArrayData[]
  youtubePlaylistlink?: {
    url: string
  }
  websites: TLinksArrayData[]
  channels: TLinksArrayData[]
  articles: TLinksArrayData[]
}

// LINKS

export type TLinksArrayData = {
  translationPath: string
  title: string
  links: TExternalLinkData[]
  youtubePlaylistlink?: {
    url: string
  }
}

export type TExternalLinkData = {
  translationKey?: string
  urlName?: string
  url: string
  languages?: string[]
}
