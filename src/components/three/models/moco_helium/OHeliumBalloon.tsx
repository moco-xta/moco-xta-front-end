import { forwardRef } from 'react'
import * as THREE from 'three'
import { useGLTF } from '@react-three/drei'

import type { GLTFResult } from '@/types/components/three/types'

import { default as glbConstants } from '@/constants/assets/glbConstants.json'

import { heliumBalloonMaterial } from '../../materials'

const OHeliumBalloon = forwardRef<THREE.Mesh, JSX.IntrinsicElements['mesh']>((props, ref) => {
  const { nodes } = useGLTF(glbConstants.MOCO_HELIUM.O_HELIUM_BALLOON) as GLTFResult

  return (
    <mesh
      ref={ref}
      geometry={nodes.OHeliumBalloon.geometry}
      material={heliumBalloonMaterial}
      {...props}
    />
  )
})

OHeliumBalloon.displayName = 'OHeliumBalloon'

useGLTF.preload(glbConstants.MOCO_HELIUM.O_HELIUM_BALLOON)

export default OHeliumBalloon
