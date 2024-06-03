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