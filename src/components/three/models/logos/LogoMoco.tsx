import * as THREE from 'three'
import React, { useEffect, useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'

import useModelHoverEffect from '@/hooks/useModelHoverEffect'

import Anaglyph from '../../post_processing/Anaglyph'

import { logoMocoAnimation } from 'animations/header'

import { default as logoConstants } from '@/constants/canvas/logoConstants.json'
import { default as gltfConstants } from '@/constants/assets/gltfConstants.json'

type GLTFResult = GLTF & {
  nodes: {
    LogoMoco: THREE.Mesh
  }
  materials: {}
}

gsap.registerPlugin(useGSAP)

export default function LogoMoco() {
  const { nodes } = useGLTF(gltfConstants.LOGOS.LOGO_MOCO) as GLTFResult

  const logoMocoRef = useRef<THREE.Group<THREE.Object3DEventMap>>(null!)
  const logoMocoMaterialRef = useRef<THREE.MeshNormalMaterial>(null!)

  const { handleOnPointerMove, handleOnPointerLeave } = useModelHoverEffect(
    logoMocoRef,
    logoConstants.HANDLE_ON_PONTER_MOVE,
  )

  useGSAP(() => {
    gsap.from(logoMocoMaterialRef.current, logoMocoAnimation.opacity.params)
  })

  useEffect(() => {
    console.log('logoMocoMaterialRef', logoMocoMaterialRef)
  }, [logoMocoMaterialRef])

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
        geometry={nodes.LogoMoco.geometry}
        onPointerMove={handleOnPointerMove}
        onPointerOut={handleOnPointerLeave}
      >
        <meshNormalMaterial
          ref={logoMocoMaterialRef}
          attach='material'
          transparent
        />
      </mesh>
    </group>
  )
}

useGLTF.preload(gltfConstants.LOGOS.LOGO_MOCO)
