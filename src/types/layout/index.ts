// LAYOUT

export type TPage = {
  pageData: TPageData
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
  key: string
  translationPath: string
}

export type TSection = {
  translationPath: string
  sectionData: TSectionData
}

// TITLES

export type TTitle = {
  translationPath: string
}

// DATA

type TPageData = {
  key: string
  translationKey: string
  sections: TSectionData[]
}

export type TSectionData = {
  key: string
  translationKey: string
  paragraphs: TParagraph[]
}

type TParagraph = {
  key: string
  translationKey: string
}

export type TSkillsLogo = {
  logoData: TLogoData
}

// SKILLS

// PARAGRAPH

export type TSkillsParagraph = {
  key: string
  translationPath: string
  paragraphData: TSkillsParagraphData
}

export type TSkillsParagraphData = {
  key: string
  logo: TLogoData
  translationKey: string
}

export type TLogoData = {
  name: string
  path: string
}

// #################################
// #################################
// #################################

// RESOURCES

// SECTION

export type TResourcesSection = {
  sectionData: TResourcesSectionData
}

export type TResourcesSectionData = {
  key: string
  translationKey: string
  paragraphs: TResourcesParagraph[]
}

// PARAGRAPH

export type TResourcesParagraph = {
  key: string
  translationPathPrefix: string
  paragraphData: TResourcesParagraphData
}

export type TResourcesParagraphData = {
  key: string
  translationKey: string
  documentation: TLinksArray[]
  youtubePlaylistlink?: string
  websites: TLinksArray[]
  channels: TLinksArray[]
  articles: TLinksArray[]
}

export type TResourcesLogo = {
  pathToModel: string
  componentName: string
}

// LINKS ARRAY

export type TLinksArray = {
  translationPathPrefix: string
  title: string
  links: TExternalLink[]
  youtubePlaylistlink?: string
}

// LINKS

// EXTERNAL LINK

export type TExternalLink = {
  translationKey?: string
  urlName?: string
  url: string
  languages?: string[]
}
