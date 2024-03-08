import { ForwardRefExoticComponent } from 'react'

import { MeshProps } from '@react-three/fiber'

export interface PerformedWithDataInterface {
  logo: ForwardRefExoticComponent<Omit<MeshProps, "ref">>
  scale: THREE.Vector3
}
