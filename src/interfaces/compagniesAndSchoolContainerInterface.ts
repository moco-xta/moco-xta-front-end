import { RefObject } from 'react'

import { CompanyOrSchollDataInterface } from './companyOrSchollDataInterface'

export interface CompagniesAndSchoolContainerInterface {
  companiesAndSchoolRefs: { ref: RefObject<HTMLDivElement> }[]
  companiesAndSchollData: CompanyOrSchollDataInterface[]
  currentCompanyOrSchool: number
}
