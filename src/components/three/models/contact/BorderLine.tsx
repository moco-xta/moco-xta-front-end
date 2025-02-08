import React, { forwardRef } from 'react'
import * as THREE from 'three'
import { useGLTF } from '@react-three/drei'

import type { GLTFResult } from '@/types/data/components/three/types'

import { default as glbConstants } from '@/constants/assets/glbConstants.json'

import { metroParisBlue } from '../../materials/contact/contactMaterials'

const BorderLine = forwardRef<THREE.Group, JSX.IntrinsicElements['group']>((props, ref) => {
  const { nodes } = useGLTF(glbConstants.CONTACT.BORDER_LINE) as GLTFResult

  return (
    <group
      ref={ref}
      {...props}
      dispose={null}
    >
      <mesh
        geometry={nodes.BorderLine.geometry}
        material={metroParisBlue}
        castShadow
        receiveShadow
      />
    </group>
  )
})

BorderLine.displayName = 'BorderLine'

useGLTF.preload(glbConstants.CONTACT.BORDER_LINE)

export default BorderLine
