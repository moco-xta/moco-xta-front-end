import { ForwardRefExoticComponent, RefAttributes } from 'react'
import { GroupProps, MeshProps } from '@react-three/fiber'
import { IconType } from 'react-icons'

import { LogoRefType } from 'types/logoRefType'
import { ForwardRefGltfGroupInterface } from './r3fInterfaces'

export interface IntroductionCardDataInterface {
  name: string
  logo: {
    component: ForwardRefExoticComponent<
      Omit<GroupProps, 'ref'> & RefAttributes<ForwardRefGltfGroupInterface>
    >
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

export interface PerformedWithLogoInterface {
  name: string
  logo: {
    component: ForwardRefExoticComponent<
      Omit<GroupProps, 'ref'> &
        RefAttributes<THREE.Group<THREE.Object3DEventMap>>
    >
    rotation: THREE.Euler
    scale: THREE.Vector3
  }
}

export interface SkillsLogoInterface {
  name: string
  category: string
  component: ForwardRefExoticComponent<
    Omit<GroupProps, 'ref'> & RefAttributes<THREE.Group<THREE.Object3DEventMap>>
  >
  geometry: {
    position: THREE.Vector3
    rotation: THREE.Euler
    scale: THREE.Vector3
  }
}
