// PAGE

export type TPageData = {
  key: string
  translationKey: string
  sections: TSectionData[]
}

export type TSectionData = {
  key: string
  translationKey: string
  paragraphs: TParagraphData[]
}

export type TParagraphData = {
  key: string
  used: boolean
  translationKey: string
  logo: {
    name: string
  }
}
