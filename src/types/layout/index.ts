// RESOURCES

import { Dispatch, SetStateAction } from 'react'

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
  translationKey: string
  documentation: TLinksArray[]
  youtubePlaylistlink?: string
  channels: TLinksArray[]
  articles: TLinksArray[]
}

// TITLES

export type TTitle = {
  text: string
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
