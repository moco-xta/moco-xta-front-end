import React, { Suspense, useEffect, useRef } from 'react'
import * as THREE from 'three'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, PerspectiveCamera } from '@react-three/drei'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'

import Lights from './Lights'
import LaboratoryIntroductionScene from './LaboratoryIntroductionScene'
import PostProcessing from './PostProcessing'

import { canvasDefaultValues } from '@/data/laboratory_introduction/three/canvasData'
import { cameraDefaultValues } from '@/data/laboratory_introduction/three/cameraData'

export default function LaboratoryIntroductionCanvas() {
  const cameraRef = useRef<THREE.PerspectiveCamera>(null!)

  /* useEffect(() => {
    if (!cameraRef.current) return
    cameraRef.current.position.set(144, 14, 64)
    gsap.to(
      cameraRef.current.position,
      { x: 16, z: 8, duration: 20, ease: 'power1.out' },
    )
  }, [cameraRef]) */

  return (
    <Canvas {...canvasDefaultValues}>
      <PerspectiveCamera ref={cameraRef} {...cameraDefaultValues.camera} />
      <OrbitControls target={[0, 10, 0]} />
      <Lights />
      <Suspense fallback={null}>
        <LaboratoryIntroductionScene />
      </Suspense>
      <PostProcessing />
    </Canvas>
  )
}
