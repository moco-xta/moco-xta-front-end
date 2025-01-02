export type TTitle = {
  text: string
}

export type TExternalLink = {
  urlName?: string
  url: string
  description?: string
  languages?: string[]
}

export type TDocumentationLinks = {
  documentation: TExternalLink[]
}

export type TChannelsLinks = {
  channels: TExternalLink[]
}
