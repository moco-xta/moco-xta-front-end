import React, { Suspense, useRef } from 'react'
import * as THREE from 'three'
import { Canvas } from '@react-three/fiber'

import type { TLogoMocoCanvas } from '@/types/components/three/types'

import useHoverModelAnimation from '@/hooks/three/useHoverModelAnimation'

import CustomCamera from '../../lib/custom_camera/CustomCamera'
import Lights from './Lights'
import LogoMoco from '../../models/logos/LogoMoco'

import { canvasDefaultValues } from '@/data/header/logo_moco/three/canvasData'
import { cameraDefaultValues } from '@/data/header/logo_moco/three/cameraData'
import { logoMocoData } from '@/data/header/logo_moco/three/logoMocoData'

export default function LogoMocoCanvas({ logoMocoMaterial }: TLogoMocoCanvas) {
  const logoMocoRef = useRef<THREE.Group<THREE.Object3DEventMap>>(null!) // TODO: MouseEvent.mozPressure is deprecated. Use PointerEvent.pressure instead.

  const { handleOnPointerMove, handleOnPointerLeave } = useHoverModelAnimation({
    ref: logoMocoRef,
    animationData: logoMocoData.hoverModelAnimationData,
  })

  return (
    <Canvas {...canvasDefaultValues}>
      <CustomCamera defaultValues={cameraDefaultValues} />
      <Lights />
      <Suspense fallback={null}>
        <LogoMoco
          ref={logoMocoRef}
          material={logoMocoMaterial}
          onPointerMove={handleOnPointerMove}
          onPointerOut={handleOnPointerLeave}
        />
      </Suspense>
    </Canvas>
  )
}
