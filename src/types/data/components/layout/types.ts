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

type TParagraphData = {
  key: string
  translationKey: string
}