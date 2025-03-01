import React, { useLayoutEffect, useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'
import {
  Bloom,
  DepthOfField,
  EffectComposer,
  SSAO,
  ToneMapping,
  Vignette,
} from '@react-three/postprocessing'
import {
  BlendFunction,
  DepthOfFieldEffect,
  KernelSize,
  Resolution,
  ToneMappingMode,
} from 'postprocessing'

import { postProcessingData } from '@/data/hero/three/postProcessingData'

export default function PostProcessing() {
  const depthOfFieldRef = useRef<DepthOfFieldEffect>(null!)
  const depthOfFieldTargetRef = useRef<THREE.Vector3>(new THREE.Vector3(0, 0, 5))

  useLayoutEffect(() => {
    depthOfFieldRef.current.target = depthOfFieldTargetRef.current
  }, [])

  useFrame(() => {
    depthOfFieldRef.current.target = depthOfFieldTargetRef.current
  })

  return (
    <EffectComposer enableNormalPass>
      <DepthOfField
        ref={depthOfFieldRef}
        focalLength={0.025}
        bokehScale={2}
        height={2048}
        width={2048}
      />
      <SSAO
        blendFunction={BlendFunction.MULTIPLY}
        samples={30}
        rings={4}
        distanceThreshold={1.0}
        distanceFalloff={0.0}
        rangeThreshold={0.5}
        rangeFalloff={0.1}
        luminanceInfluence={0.9}
        radius={20}
        bias={0.5}
        worldDistanceThreshold={1.0}
        worldDistanceFalloff={0.0}
        worldProximityThreshold={0.5}
        worldProximityFalloff={0.1}
      />
      <SSAO
        blendFunction={BlendFunction.MULTIPLY}
        samples={30}
        rings={4}
        distanceThreshold={0.5}
        distanceFalloff={0.0}
        rangeThreshold={0.5}
        rangeFalloff={0.1}
        luminanceInfluence={0.5}
        radius={10}
        bias={0.5}
        worldDistanceThreshold={1.0}
        worldDistanceFalloff={0.0}
        worldProximityThreshold={0.5}
        worldProximityFalloff={0.1}
      />
      {/* <Bloom
        intensity={0.5}
        kernelSize={KernelSize.LARGE}
        luminanceThreshold={0.05}
        luminanceSmoothing={0.025}
        mipmapBlur={false}
        resolutionX={Resolution.AUTO_SIZE}
        resolutionY={Resolution.AUTO_SIZE}
      /> */}
      {/* <ToneMapping
        {...postProcessingData.toneMapping}
        blendFunction={BlendFunction.NORMAL}
      /> */}
      <Vignette
        offset={0.5}
        darkness={0.5}
        eskil={false}
        blendFunction={BlendFunction.NORMAL}
      />
    </EffectComposer>
  )
}
