import { RefObject } from 'react'

import { ProjectDataInterface } from '../data/projectsDataInterface'

export interface ProjectsContainerInterface {
  projectsRefs: { ref: RefObject<HTMLDivElement> }[]
  projectsData: ProjectDataInterface[]
}
