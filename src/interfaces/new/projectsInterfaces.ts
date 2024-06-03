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

export interface TimelineInterface {
  currentDate: Date
  currentProject: number
  projectsData: ProjectDataInterface[]
}

export interface ProjectCardsInterface {
  currentProject: number
}

export interface ProjectCardInterface {
  index: number
  currentProject: number
  projectData: ProjectDataInterface
}

export interface CompagnyOrSchoolCardsInterface {
  currentCompanyOrSchool: number
  currentProject: number
}

export interface CompanyOrSchoolCardInterface {
  index: number
  currentCompanyOrSchool: number
  companyOrSchoolData: CompanyOrSchollDataInterface
  currentProject: number
}
