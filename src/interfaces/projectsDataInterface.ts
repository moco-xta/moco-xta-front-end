import { IconType } from 'react-icons'

export interface ProjectDataInterface {
  key: string
  url: string
  name: string
  descriptionsKey: {
    [key: string]: string
  }
  picture: {
    [key: string]: string
  }
  dates: {
    [key: string]: string
  }
  roles: string[]
  tools: IconType[]
}

export interface ProjectsCardInterface {
  content: ProjectDataInterface
  index: number
  currentProject: number
}

export interface LastProjectsCardInterface {
  content: ProjectDataInterface
}
