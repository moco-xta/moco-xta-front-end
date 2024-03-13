import { IconType } from 'react-icons'

export interface ProjectDataInterface {
  key: string
  url: string
  name: string
  descriptionKey: string
  picture: {
    [key: string]: string
  }
  dates: {
    [key: string]: string
  }
  tools: IconType[]
}

export interface ProjectsCardInterface {
  content: ProjectDataInterface
}
