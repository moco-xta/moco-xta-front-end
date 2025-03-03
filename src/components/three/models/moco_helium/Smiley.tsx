import { forwardRef } from 'react'
import * as THREE from 'three'
import { useGLTF } from '@react-three/drei'

import type { GLTFResult } from '@/types/components/three/types'

import { default as glbConstants } from '@/constants/assets/glbConstants.json'

const Smiley = forwardRef<THREE.Mesh, JSX.IntrinsicElements['mesh']>((props, ref) => {
  const { nodes, materials } = useGLTF(glbConstants.MOCO_HELIUM.SMILEY) as GLTFResult

  return (
    <mesh
      ref={ref}
      geometry={nodes.Smiley.geometry}
      material={materials['smiley']}
      {...props}
    />
  )
})

Smiley.displayName = 'Smiley'

useGLTF.preload(glbConstants.MOCO_HELIUM.SMILEY)

export default Smiley
