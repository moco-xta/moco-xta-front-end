import { IconType } from 'react-icons'

export interface LastProjectsDataInterface {
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

export interface LastProjectsCardInterface {
  content: LastProjectsDataInterface
}
