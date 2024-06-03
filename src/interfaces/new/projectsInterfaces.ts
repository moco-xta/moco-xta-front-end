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