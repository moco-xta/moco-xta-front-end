import { ReactNode, RefObject } from 'react'

import {
  CompanyOrSchollDataInterface,
  IntroductionCardDataInterface,
  ProjectDataInterface,
  SkillsCategoryInterface,
} from '@/interfaces/dataInterfaces'

export interface AuthenticationComponentsInterface {
  authenticationIsOpen: boolean
  handleSetAuthenticationIsOpen: () => void
}

export interface SignUpSignInInterface {
  setIsSignIn: (value: boolean) => void
  handleSetAuthenticationIsOpen: () => void
}

export interface IntroductionCardsInterface {
  data: IntroductionCardDataInterface[]
  type: string
}

export interface SkillsSectionInterface {
  index: number
  category: string
  content: SkillsCategoryInterface
}

export interface LastProjectsCardInterface {
  content: ProjectDataInterface
}

export interface ProjectsContainerInterface {
  projectsData: ProjectDataInterface[]
  currentProject: number
}

export interface CompagniesAndSchoolContainerInterface {
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

export interface InstructionsInterface {
  showInstructions: boolean
  HandleShowInstructions: () => void
}

export interface DeviceMotionPermissionInterface {
  permissionGranted: boolean
  setPermissionGranted: (value: boolean) => void
}
