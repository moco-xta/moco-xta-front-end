import React, { Suspense, useRef } from 'react'
import * as THREE from 'three'
import { Canvas } from '@react-three/fiber'
import { PerspectiveCamera } from '@react-three/drei'

import useHoverModelAnimation from '@/hooks/three/useHoverModelAnimation'

import LogoMoco from '../../models/logos/LogoMoco'

import { canvasDefaultValues } from '@/data/menu/header/logo_moco/three/canvasData'
import { cameraDefaultValues } from '@/data/menu/header/logo_moco/three/cameraData'
import { lightsData } from '@/data/menu/header/logo_moco/three/lightsData'
import { logoMocoData } from '@/data/menu/header/logo_moco/three/logoMocoData'

export default function LogoMocoCanvas() {
  const logoMocoRef = useRef<THREE.Group<THREE.Object3DEventMap>>(null!) // TODO: MouseEvent.mozPressure is deprecated. Use PointerEvent.pressure instead.

  const { handleOnPointerMove, handleOnPointerLeave } = useHoverModelAnimation({
    ref: logoMocoRef,
    animationData: logoMocoData.hoverModelAnimationData,
  })
  return (
    <Canvas {...canvasDefaultValues}>
      <PerspectiveCamera {...cameraDefaultValues.camera} />
      <ambientLight {...lightsData.ambientLight} />
      <Suspense fallback={null}>
        <LogoMoco
          ref={logoMocoRef}
          onPointerMove={handleOnPointerMove}
          onPointerOut={handleOnPointerLeave}
        />
      </Suspense>
    </Canvas>
  )
}
