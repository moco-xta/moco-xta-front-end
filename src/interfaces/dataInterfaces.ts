interface MainSkillInterface {
  key: string
  backgroundImage: string
}

export interface MainSkillsDataInterface {
  mainSkills: MainSkillInterface[]
}

export interface ProjectDataInterface {
  key: string
  url: string
  name: string
  image: string
  descriptionsKey: string
  dates: {
    [key: string]: string
  }
  roles: string[]
  tools: string[]
  backgroundColor: {
    page: string
    card: string
  }
}

export interface CompanyOrSchollDataInterface {
  name: string
  logo: {
    src: string
    width: number
    height: number
  }
  url: string
  as: string
  dates: {
    [key: string]: string
  }
}
