import React, { ForwardRefExoticComponent, RefAttributes } from 'react'
import { MeshProps } from '@react-three/fiber'

import { LogoRefType } from './performedWithDataInterface'

export interface IntroductionSkillCardDataInterface {
  name: string
  logo: ForwardRefExoticComponent<
    Omit<MeshProps, 'ref'> & RefAttributes<LogoRefType>
  >
  description: string
}