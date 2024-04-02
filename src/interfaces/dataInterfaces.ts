import { ForwardRefExoticComponent, RefAttributes } from 'react'
import { GroupProps, MeshProps } from '@react-three/fiber'
import { IconType } from 'react-icons'

import { LogoRefType } from 'types/logoRefType'
import { ForwardRefGltfInterface } from './r3fInterfaces'

export interface IntroductionCardDataInterface {
  name: string
  logo: {
    component: (props: GroupProps) => JSX.Element
    position: {
      [key: string]: number
    }
    scale: {
      [key: string]: number
    }
  }
  description: {
    key: string
    position: {
      [key: string]: number
    }
  }
}

export interface ProjectDataInterface {
  key: string
  url: string
  name: string
  descriptionsKey: {
    [key: string]: string
  }
  picture: {
    [key: string]: string
  }
  dates: {
    [key: string]: string
  }
  roles: string[]
  tools: IconType[]
}

export interface ProjectsCardInterface {
  content: ProjectDataInterface
  index: number
  currentProject: number
}

export interface CompanyOrSchollDataInterface {
  name: string
  logo: {
    component:
      | ForwardRefExoticComponent<
          Omit<MeshProps, 'ref'> & RefAttributes<LogoRefType>
        >
      | ForwardRefExoticComponent<
          Omit<MeshProps, 'ref'> & RefAttributes<THREE.Mesh>
        >
    position: {
      [key: string]: number
    }
    scale: {
      [key: string]: number
    }
  }
  url: string
  as: {
    key: 'STUDENT' | 'INTERN' | 'EMPLOYEE'
    position: {
      [key: string]: number
    }
  }
  dates: {
    [key: string]: string
  }
}

export interface IconsDataInterface {
  totalLength: number
  widths: number[]
}

export interface SkillsLogoInterface {
  name: string
  category: string
  logo: {
    component: ForwardRefExoticComponent<
      Omit<GroupProps, 'ref'> &
        RefAttributes<THREE.Group<THREE.Object3DEventMap>>
    >
    scale: THREE.Vector3
  }
}
