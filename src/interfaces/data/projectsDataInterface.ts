import { IconType } from 'react-icons'

export interface projectsDataInterface {
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

export interface projectsCardInterface {
  content: projectsDataInterface
}
