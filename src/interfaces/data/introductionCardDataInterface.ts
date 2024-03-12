import { ForwardRefExoticComponent, RefAttributes } from 'react'
import { MeshProps } from '@react-three/fiber'

import { LogoRefType } from './performedWithDataInterface'

export interface IntroductionCardDataInterface {
  name: string
  logo:
    | ForwardRefExoticComponent<
        Omit<MeshProps, 'ref'> & RefAttributes<LogoRefType>
      >
    | ForwardRefExoticComponent<
        Omit<MeshProps, 'ref'> & RefAttributes<THREE.Mesh>
      >
  descriptionKey: string
  position: {
    [key: string]: number
  }
  scale: {
    [key: string]: number
  }
}
