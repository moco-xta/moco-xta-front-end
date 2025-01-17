import React, { useLayoutEffect, useRef } from 'react'
import * as THREE from 'three'
import { useFrame } from '@react-three/fiber'
import {
  Bloom,
  DepthOfField,
  EffectComposer,
  Noise,
  // Scanline,
  Vignette,
} from '@react-three/postprocessing'
import { BlendFunction, DepthOfFieldEffect, KernelSize, Resolution } from 'postprocessing'
// import { gsap } from 'gsap'
// import { useGSAP } from '@gsap/react'

export default function PostProcessing() {
  const depthOfFieldRef = useRef<DepthOfFieldEffect>(null!)
  const depthOfFieldTargetRef = useRef<THREE.Vector3>(new THREE.Vector3(0, 0, 2))

  useLayoutEffect(() => {
    depthOfFieldRef.current.target = depthOfFieldTargetRef.current
  }, [])

  useFrame(() => {
    depthOfFieldRef.current.target = depthOfFieldTargetRef.current
  })

  /* useGSAP(() => {
    gsap.to(depthOfFieldTargetRef.current, {
      x: 0,
      y: 0,
      z: 0,
      delay: 1,
      duration: 3,
      ease: 'none',
    })
  }) */

  return (
    <EffectComposer>
      <DepthOfField
        ref={depthOfFieldRef}
        focalLength={0.01}
        bokehScale={5}
        height={1024}
        width={1024}
      />
      {/* <Bloom
        intensity={0.05}
        kernelSize={KernelSize.LARGE}
        luminanceThreshold={0.05}
        luminanceSmoothing={0.025}
        mipmapBlur={false}
        resolutionX={Resolution.AUTO_SIZE}
        resolutionY={Resolution.AUTO_SIZE}
      /> */}
      {/* <Scanline
        blendFunction={BlendFunction.DARKEN}
        opacity={0.1}
        density={0.8}
      /> */}
      <Noise opacity={0.5} />
      <Vignette
        offset={0.5}
        darkness={0.5}
        eskil={false}
        blendFunction={BlendFunction.NORMAL}
      />
    </EffectComposer>
  )
}
