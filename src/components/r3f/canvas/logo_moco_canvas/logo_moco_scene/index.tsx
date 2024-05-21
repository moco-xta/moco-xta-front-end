import React, { useEffect, useRef, useState } from 'react'
import * as THREE from 'three'
import { AnaglyphEffect } from 'three/examples/jsm/effects/AnaglyphEffect'

import useModelHoverEffect from '@/hooks/useModelHoverEffect'

import { default as logoMocoConstants } from '@/constants/canvas/logoMocoConstants.json'
import { LogoMoco } from '@/components/r3f/models/logos/LogoMoco'
import { useFrame, useThree } from '@react-three/fiber'

function Annaglyph({ enabled = false }) {
  const { gl, scene, camera, size } = useThree()

  console.log('size', size)

  const [effect] = useState(() => new AnaglyphEffect(gl))
  useEffect(() => void effect.setSize(size.width, size.height), [size])
  return useFrame(() => (enabled ? effect : gl).render(scene, camera), 1)
}

export default function LogoMocoScene() {
  const logoMocoRef = useRef<THREE.Group<THREE.Object3DEventMap>>(null!)

  const { handleOnPointerMove, handleOnPointerLeave } = useModelHoverEffect(
    logoMocoRef,
    logoMocoConstants.HANDLE_ON_PONTER_MOVE,
  )

  return (
    <group
      ref={logoMocoRef}
      rotation={
        new THREE.Euler(
          THREE.MathUtils.degToRad(logoMocoConstants.CARD.ROTATION.X),
          THREE.MathUtils.degToRad(logoMocoConstants.CARD.ROTATION.Y),
          THREE.MathUtils.degToRad(logoMocoConstants.CARD.ROTATION.Z),
        )
      }
    >
      {/* <Annaglyph enabled={true} /> */}
      <LogoMoco
        handleOnPointerMove={handleOnPointerMove}
        handleOnPointerLeave={handleOnPointerLeave}
      />
    </group>
  )
}
