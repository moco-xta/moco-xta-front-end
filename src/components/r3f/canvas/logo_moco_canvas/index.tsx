import React, { Suspense, useRef } from 'react'
import * as THREE from 'three'
import { Canvas } from '@react-three/fiber'
import { PerspectiveCamera } from '@react-three/drei'

import useModelHoverEffect from '@/hooks/useModelHoverEffect'

import { LogoMoco } from '../../models/logos/LogoMoco'

import { default as logoMocoConstants } from '@/constants/canvas/logoMocoConstants.json'

export default function LogoMocoCanvas() {

  const logoMocoRef = useRef<THREE.Group<THREE.Object3DEventMap>>(null!)

  const { handleOnPointerMove, handleOnPointerLeave } = useModelHoverEffect(
    logoMocoRef,
    logoMocoConstants.HANDLE_ON_PONTER_MOVE,
  )

  return (
    <Canvas
      dpr={logoMocoConstants.CANVAS.DPR}
      shadows
      legacy={logoMocoConstants.CANVAS.LEGACY}
      linear
      flat
      gl={{
        antialias: logoMocoConstants.CANVAS.GL.ANTIALIAS,
        alpha: logoMocoConstants.CANVAS.GL.ALPHA,
        powerPreference: logoMocoConstants.CANVAS.GL.POWER_PREFERENCE,
      }}
    >
      <PerspectiveCamera
        makeDefault
        position={[
          logoMocoConstants.PERSPECTIVE_CAMERA.POSITION.X,
          logoMocoConstants.PERSPECTIVE_CAMERA.POSITION.Y,
          logoMocoConstants.PERSPECTIVE_CAMERA.POSITION.Z,
        ]}
        fov={logoMocoConstants.PERSPECTIVE_CAMERA.FOV}
      />
      <ambientLight intensity={2} />
      <Suspense>
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
          <LogoMoco
            handleOnPointerMove={handleOnPointerMove}
            handleOnPointerLeave={handleOnPointerLeave}
          />
        </group>
      </Suspense>
    </Canvas>
  )
}
