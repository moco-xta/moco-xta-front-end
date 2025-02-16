import React, { forwardRef } from 'react'
import * as THREE from 'three'
import { useGLTF } from '@react-three/drei'

import type { GLTFResult } from '@/types/data/components/three/types'

import { default as glbConstants } from '@/constants/assets/glbConstants.json'

import { metroParisBlue } from '../../materials/contact/contactMaterials'

const StationLamarckColaincourt = forwardRef<THREE.Group, JSX.IntrinsicElements['group']>(
  (props, ref) => {
    const { nodes } = useGLTF(glbConstants.CONTACT.STATION_LAMARCK_COLAINCOURT) as GLTFResult

    return (
      <group
        ref={ref}
        {...props}
        dispose={null}
      >
        <mesh
          geometry={nodes.StationLamarckColaincourt.geometry}
          material={metroParisBlue}
          castShadow
          receiveShadow
        />
      </group>
    )
  },
)

StationLamarckColaincourt.displayName = 'StationLamarckColaincourt'

useGLTF.preload(glbConstants.CONTACT.STATION_LAMARCK_COLAINCOURT)

export default StationLamarckColaincourt
