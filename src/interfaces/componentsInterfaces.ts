import { ReactNode, RefObject } from 'react'

import {
  CompanyOrSchollDataInterface,
  IntroductionCardDataInterface,
  ProjectDataInterface,
} from '@/interfaces/dataInterfaces'

export interface AuthenticationComponentsInterface {
  setAuthenticationIsOpen: (value: boolean) => void
}

export interface SignUpSignInInterface {
  setIsSignIn: (value: boolean) => void
  setAuthenticationIsOpen: (value: boolean) => void
}

export interface IntroductionCardsInterface {
  data: IntroductionCardDataInterface[]
  type: string
}

export interface LastProjectsCardInterface {
  content: ProjectDataInterface
}

export interface ProjectsContainerInterface {
  projectsRefs: { ref: RefObject<HTMLDivElement> }[]
  projectsData: ProjectDataInterface[]
  currentProject: number
}

export interface CompagniesAndSchoolContainerInterface {
  companiesAndSchoolRefs: { ref: RefObject<HTMLDivElement> }[]
  companiesAndSchollData: CompanyOrSchollDataInterface[]
  currentCompanyOrSchool: number
}

export interface CompanyOrSchoolCardInterface {
  content: CompanyOrSchollDataInterface
  index: number
  currentCompanyOrSchool: number
}

export interface TimelineInterface {
  currentDate: Date
}

export interface ReviewDataInterface {
  firstName: string
  review: string
  role: string
  rating: number
  date: Date
}

export interface ReviewInterface {
  data: ReviewDataInterface
}

export interface RatingStarsInterface {
  rating: number
}

export interface ScrollHandlerInterface {
  navWrapperRef: RefObject<HTMLDivElement>
}

export interface ScrollDownInterface {
  top: string
  color: string
}
