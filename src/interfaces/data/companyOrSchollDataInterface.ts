import { ForwardRefExoticComponent, RefAttributes } from 'react'
import { MeshProps } from '@react-three/fiber'

import { LogoRefType } from './performedWithDataInterface'

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

export interface CompanyOrSchoolCardInterface {
  content: CompanyOrSchollDataInterface,
  index: number
  currentCompanyOrSchool: number
}
