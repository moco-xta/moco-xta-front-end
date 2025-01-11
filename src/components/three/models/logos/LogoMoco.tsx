import React, { useRef } from 'react'
import * as THREE from 'three'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

import useHoverModelAnimation from '@/hooks/three/useHoverModelAnimation'

import { logoMocoData } from '@/data/menu/header/logo_moco/three/logoMocoData'

import { default as glbConstants } from '@/constants/assets/glbConstants.json'

type GLTFResult = GLTF & {
  nodes: {
    LogoMoco: THREE.Mesh
  }
  materials: {}
}

export function LogoMoco(props: JSX.IntrinsicElements['group']) {
  const { nodes } = useGLTF(glbConstants.LOGOS.LOGO_MOCO) as GLTFResult

  const logoMocoRef = useRef<THREE.Group<THREE.Object3DEventMap>>(null!) // TODO: MouseEvent.mozPressure is deprecated. Use PointerEvent.pressure instead.

  const { handleOnPointerMove, handleOnPointerLeave } = useHoverModelAnimation({
    ref: logoMocoRef,
    animationData: logoMocoData.hoverModelAnimationData,
  })

  return (
    <group
      ref={logoMocoRef}
      {...props}
      dispose={null}
    >
      <mesh
        geometry={nodes.LogoMoco.geometry}
        onPointerMove={handleOnPointerMove}
        onPointerOut={handleOnPointerLeave}
      >
        <meshNormalMaterial
          attach='material'
          side={THREE.DoubleSide}
          transparent
        />
      </mesh>
    </group>
  )
}

useGLTF.preload(glbConstants.LOGOS.LOGO_MOCO)
