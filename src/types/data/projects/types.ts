import type { ILogoData } from '../components/three/types'

export interface IProjectData {
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
    project: ILogoData
    tools: ILogoData[]
  }
}
