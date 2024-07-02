import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

import useModelHoverEffect from '@/hooks/new/useModelHoverEffect'

import Anaglyph from '../../post_processing/Anaglyph'

import { default as logoConstants } from '@/constants/new/canvas/logoConstants.json'
import { default as gltfConstants } from '@/constants/new/assets/gltfConstants.json'

type GLTFResult = GLTF & {
  nodes: {
    /* LogoMoco2: THREE.Mesh */
    LogoMoco3: THREE.Mesh
  }
  materials: {}
}

export default function LogoMoco() {
  const { nodes } = useGLTF(gltfConstants.LOGOS.LOGO_MOCO_3) as GLTFResult

  const logoMocoRef = useRef<THREE.Group<THREE.Object3DEventMap>>(null!)

  const { handleOnPointerMove, handleOnPointerLeave } = useModelHoverEffect(
    logoMocoRef,
    logoConstants.HANDLE_ON_PONTER_MOVE,
  )

  return (
    <group
      ref={logoMocoRef}
      rotation={
        new THREE.Euler(
          THREE.MathUtils.degToRad(logoConstants.LOGO.ROTATION.X),
          THREE.MathUtils.degToRad(logoConstants.LOGO.ROTATION.Y),
          THREE.MathUtils.degToRad(logoConstants.LOGO.ROTATION.Z),
        )
      }
    >
      <Anaglyph enabled={false} />
      <mesh
        geometry={nodes.LogoMoco3.geometry}
        onPointerMove={handleOnPointerMove}
        onPointerOut={handleOnPointerLeave}
        /* rotation={[0, -Math.PI / 2, 0]} */
      >
        <meshNormalMaterial attach='material' />
      </mesh>
    </group>
  )
}
