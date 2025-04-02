import React, { useLayoutEffect, useRef } from 'react'
import * as THREE from 'three'
import { Bloom, DepthOfField, EffectComposer, Vignette } from '@react-three/postprocessing'
import { BlendFunction, DepthOfFieldEffect, KernelSize, Resolution } from 'postprocessing'

export default function PostProcessing() {
  const depthOfFieldRef = useRef<DepthOfFieldEffect>(null!)
  const depthOfFieldTargetRef = useRef<THREE.Vector3>(new THREE.Vector3(0, 0, 5))

  useLayoutEffect(() => {
    depthOfFieldRef.current.target = depthOfFieldTargetRef.current
  }, [])

  return (
    <EffectComposer enableNormalPass>
      <DepthOfField
        ref={depthOfFieldRef}
        focalLength={0.5}
        bokehScale={2.5}
        height={1024}
        width={1024}
      />
      <Bloom
        intensity={0.25}
        kernelSize={KernelSize.LARGE}
        luminanceThreshold={0.05}
        luminanceSmoothing={0.025}
        mipmapBlur={false}
        resolutionX={Resolution.AUTO_SIZE}
        resolutionY={Resolution.AUTO_SIZE}
      />
      <Vignette
        offset={0.5}
        darkness={0.5}
        eskil={false}
        blendFunction={BlendFunction.NORMAL}
      />
    </EffectComposer>
  )
}
