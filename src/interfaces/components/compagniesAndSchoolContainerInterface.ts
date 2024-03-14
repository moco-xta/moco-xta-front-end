import { RefObject } from 'react'

import { CompanyOrSchollDataInterface } from '../data/companyOrSchollDataInterface'

export interface CompagniesAndSchoolContainerInterface {
  companiesAndSchoolRefs: { ref: RefObject<HTMLDivElement> }[]
  companiesAndSchollData: CompanyOrSchollDataInterface[]
}
