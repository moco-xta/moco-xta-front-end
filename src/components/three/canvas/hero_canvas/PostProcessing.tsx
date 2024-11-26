import React, { useLayoutEffect, useRef } from 'react'
import * as THREE from 'three'
import { Bloom, DepthOfField, EffectComposer } from '@react-three/postprocessing'
import { DepthOfFieldEffect, KernelSize, Resolution } from 'postprocessing'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'
import { useFrame } from '@react-three/fiber'

export default function PostProcessing() {
  const depthOfFieldRef = useRef<DepthOfFieldEffect>(null!)
  const dofTargetRef = useRef<THREE.Vector3>(new THREE.Vector3(0, 0, 0))

  useLayoutEffect(() => {
    depthOfFieldRef.current.target = dofTargetRef.current
  }, [])

  useFrame(() => {
    depthOfFieldRef.current.target = dofTargetRef.current
  })

  useGSAP(() => {
    gsap.to(dofTargetRef.current, {
      x: -20,
      y: -20,
      z: -20,
      delay: 1,
      duration: 3,
      ease: 'none',
    })
  })

  return (
    <EffectComposer>
      <DepthOfField
        ref={depthOfFieldRef}
        focalLength={0.02}
        bokehScale={10}
        height={1024}
        width={1024}
      />
      {/* <Bloom
        intensity={1}
        kernelSize={KernelSize.LARGE}
        luminanceThreshold={0.05}
        luminanceSmoothing={0.025}
        mipmapBlur={false}
        resolutionX={Resolution.AUTO_SIZE}
        resolutionY={Resolution.AUTO_SIZE}
      /> */}
    </EffectComposer>
  )
}
