import { IconType } from 'react-icons'

export interface LastProjectsDataInterface {
  key: string
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
