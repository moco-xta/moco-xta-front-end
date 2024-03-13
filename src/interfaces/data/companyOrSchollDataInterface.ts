export interface CompanyOrSchollDataInterface {
  name: string
  as: string
  dates: {
    [key: string]: string
  }
}

export interface CompanyOrSchoolCardInterface {
  content: CompanyOrSchollDataInterface
}
