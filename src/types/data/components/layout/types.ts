// SKILLS

import { TLogoData } from '../three/types'

export type TSkillsData = {
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
