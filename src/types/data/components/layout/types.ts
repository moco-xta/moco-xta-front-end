import type { TLogoData } from '../three/types'

// PAGE

export type TPageData = {
  key: string
  translationKey: string
  sections: TSectionData[]
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
  used: boolean
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

// PROJECTS

export type TProjectData = {
  key: string
  url: string
  name: string
  imageUrl: string
  descriptionsKey: string
  dates: {
    [key: string]: string
  }
  roles: string[]
  logos: {
    prefix: string
    path: string
    project: TLogoData
    tools: TLogoData[]
  }
}

export type TCompanyData = {
  key?: string
  index?: number
  name?: string
  logo?: {
    prefix: string
    path: string
    logo?: TLogoData
  }
  url?: string
  dates: {
    [key: string]: string
  }
}

export type TLocationData = {
  city: string
  country: string
  gpsCoordinates: TGpsCoordinates
  dates: {
    [key: string]: string
  }
  flag: {
    prefix: string
    path: string
    flag: {
      name: string
    }
  }
}

export type TGpsCoordinates = {
  longitude: number
  latitude: number
}

// COLORS

export type TColorData = {
  name: string
  hex: string
}
