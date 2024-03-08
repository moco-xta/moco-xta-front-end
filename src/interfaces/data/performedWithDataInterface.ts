import { ForwardRefExoticComponent, RefAttributes } from 'react'

import { LogoInterface } from '@/interfaces/components/r3f/logoInterface'

export interface PerformedWithDataInterface {
  logo: ForwardRefExoticComponent<RefAttributes<LogoInterface>>
  scale: THREE.Vector3
}
