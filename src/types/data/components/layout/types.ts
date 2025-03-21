// PAGE

export type TPageData = {
  key: string
  translationKey: string
  sections: TSectionData[]
}

export type TSectionData = {
  key: string
  translationKey: string
  skills: TSkillData[]
}

export type TSkillData = {
  key: string
  used: boolean
  translationKey: string
  logo: {
    name: string
  }
}
