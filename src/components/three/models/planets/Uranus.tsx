import { forwardRef } from 'react'
import * as THREE from 'three'
import { useGLTF } from '@react-three/drei'

import type { GLTFResult } from '@/types/components/three/types'

import { default as glbConstants } from '@/constants/assets/glbConstants.json'

const Uranus = forwardRef<THREE.Group, JSX.IntrinsicElements['group']>((props, ref) => {
  const { nodes, materials } = useGLTF(glbConstants.PLANETS.URANUS) as GLTFResult

  return (
    <group
      ref={ref}
      {...props}
      dispose={null}
    >
      <mesh
        geometry={nodes.Uranus.geometry}
        material={materials.Uranus}
        rotation={[1.098, -0.052, -1.041]}
      />
      <mesh
        geometry={nodes.Circle.geometry}
        material={materials.Material}
        rotation={[1.098, -0.052, -1.041]}
      />
    </group>
  )
})

Uranus.displayName = 'Uranus'

useGLTF.preload(glbConstants.PLANETS.URANUS)

export default Uranus
