import { ForwardRefExoticComponent, RefAttributes } from 'react'
import { GroupProps, MeshProps } from '@react-three/fiber'
import { IconType } from 'react-icons'

import { LogoRefType } from 'types/logoRefType'
import { ForwardRefGltfGroupInterface } from './r3fInterfaces'

interface position {
  x: number
  y: number
  z: number
}

export interface IntroductionCardDataInterface {
  name: string
  logo: {
    component: (props: GroupProps) => JSX.Element
    scale: number
  }
  rate: {
    value: number
    position: position
  }
  category: {
    text: string[]
    position: position[]
  }
}

interface ImageInterface {
  src: string
  alt: string
}

export interface SkillsCategoryInterface {
  pictures: ImageInterface[][]
  categoryKey: string
  titleFontSizes?: {
    [key: string]: number
  }
}

export interface SkillsDataInterface {
  [key: string]: SkillsCategoryInterface
}

interface ProjectsLogoInterface {
  component: ForwardRefExoticComponent<Omit<GroupProps, 'ref'> & RefAttributes<ForwardRefGltfGroupInterface>>
  position: { [key: string]: number }
  scale: number
}

export interface ProjectDataInterface {
  key: string
  url: string
  name: string
  image: string
  descriptionsKey: string
  dates: {
    [key: string]: string
  }
  roles: string[]
  tools: string[]
  backgroundColor: {
    page: string
    card: string
  }
}

export interface ProjectsCardInterface {
  content: ProjectDataInterface
  index: number
  currentProject: number
}

export interface CompanyOrSchollDataInterface {
  name: string
  logo: {
    src: string
    width: number
    height: number
  }
  url: string
  as: string
  dates: {
    [key: string]: string
  }
}

export interface IconsDataInterface {
  totalLength: number
  widths: number[]
}

export interface PerformedWithLogoInterface {
  name: string
  logo: {
    component: ForwardRefExoticComponent<Omit<GroupProps, 'ref'> & RefAttributes<THREE.Group<THREE.Object3DEventMap>>>
    rotation: THREE.Euler
    scale: THREE.Vector3
  }
}

export interface SkillsLogoInterface {
  name: string
  category: string
  component: ForwardRefExoticComponent<Omit<GroupProps, 'ref'> & RefAttributes<THREE.Group<THREE.Object3DEventMap>>>
  geometry: {
    position: THREE.Vector3
    rotation: THREE.Euler
    scale: THREE.Vector3
  }
}
