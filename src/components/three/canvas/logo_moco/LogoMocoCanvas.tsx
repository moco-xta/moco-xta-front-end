import React, { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { PerspectiveCamera } from '@react-three/drei'

import { LogoMoco } from '../../models/logos/LogoMoco'

import { canvasDefaultValues } from '@/data/menu/header/logo_moco/three/canvasData'
import { cameraDefaultValues } from '@/data/menu/header/logo_moco/three/cameraData'
import { lightsData } from '@/data/menu/header/logo_moco/three/lightsData'

export default function LogoMocoCanvas() {
  return (
    <Canvas {...canvasDefaultValues}>
      <PerspectiveCamera {...cameraDefaultValues} />
      <ambientLight {...lightsData.ambientLight} />
      <Suspense fallback={null}>
        <LogoMoco />
      </Suspense>
    </Canvas>
  )
}
