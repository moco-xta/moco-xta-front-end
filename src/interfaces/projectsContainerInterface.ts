import { RefObject } from 'react'

import { ProjectDataInterface } from './projectsDataInterface'

export interface ProjectsContainerInterface {
  projectsRefs: { ref: RefObject<HTMLDivElement> }[]
  projectsData: ProjectDataInterface[]
  currentProject: number
}
