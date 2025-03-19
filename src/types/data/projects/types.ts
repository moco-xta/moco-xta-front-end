export type TProjectData = {
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
    project: TLogoData
    tools: TLogoData[]
  }
}
