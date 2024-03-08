import { ForwardRefExoticComponent, RefAttributes } from 'react'
import { MeshProps } from '@react-three/fiber';

export type LogoRefType = THREE.Mesh & {
  width: number
};

export interface PerformedWithDataInterface {
  logo: ForwardRefExoticComponent<Omit<MeshProps, "ref"> & RefAttributes<LogoRefType>>
  scale: THREE.Vector3
}
