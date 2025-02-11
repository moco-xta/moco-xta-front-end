import type { TLogoData } from '../three/types'

// PAGE

export type TPageData = {
  key: string
  translationKey: string
  sections: TSectionData[]
}

export type TSectionData = {
  key: string
  translationKey: string
  videoIntroduction?: {
    from: string
    url: string
  }
  document?: TLinksArrayData[]
  paragraphs: TParagraphData[] | TSkillsParagraphData[] | TResourcesParagraphData[]
}

type TParagraphData = {
  key: string
  translationKey: string
}

export type TSkillsParagraphData = TParagraphData & {
  used: boolean
  logo: TLogoData
}

// RESOURCES

export type TResourcesPageData = {
  key: string
  translationKey: string
  sections: TResourcesSectionData[]
}

export type TResourcesSectionData = {
  key: string
  translationKey: string
  paragraphs: TResourcesParagraphData[]
}

export type TResourcesParagraphData = TParagraphData & {
  videoIntroduction?: {
    from: string
    url: string
  }
  categories: TResourcesCategoryData
}

export type TResourcesCategoryData = {
  key: string
  translationKey: string
  youtubePlaylistLink: {
    url: string
  }
  documentation?: TLinksArrayData[]
  channels?: TLinksArrayData[]
  websites?: TLinksArrayData[]
}

// MENU

export type TMenuData = {
  sections: TMenuSectionData[]
}

export type TResourcesMenuData = {
  sections: TResourcesMenuSectionData[]
}

export type TMenuSectionData = {
  key: string
  translationKey: string
  paragraphs: TMenuParagraphData[]
}

export type TResourcesMenuSectionData = {
  key: string
  translationKey: string
}

export type TMenuParagraphData = {
  key: string
  translationKey: string
}

// LINKS

export type TLinksArrayData = {
  key: string
  translationKey: string
  urlName: string
  url: string
  languages: string[]
  youtubePlaylistLink?: {
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
