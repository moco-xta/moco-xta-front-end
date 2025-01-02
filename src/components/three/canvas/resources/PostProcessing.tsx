import React, { useLayoutEffect, useRef } from 'react'
import * as THREE from 'three'
import {
  Bloom,
  DepthOfField,
  EffectComposer,
  Noise,
  Scanline,
  SSAO,
  Vignette,
} from '@react-three/postprocessing'
import { BlendFunction, DepthOfFieldEffect, KernelSize, Resolution } from 'postprocessing'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'
import { useFrame } from '@react-three/fiber'

export default function PostProcessing() {
  const depthOfFieldRef = useRef<DepthOfFieldEffect>(null!)
  const depthOfFieldTargetRef = useRef<THREE.Vector3>(new THREE.Vector3(0, 0, 5))

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
      <SSAO
        blendFunction={BlendFunction.MULTIPLY} // blend mode
        samples={30} // amount of samples per pixel (shouldn't be a multiple of the ring count)
        rings={4} // amount of rings in the occlusion sampling pattern
        distanceThreshold={1.0} // global distance threshold at which the occlusion effect starts to fade out. min: 0, max: 1
        distanceFalloff={0.0} // distance falloff. min: 0, max: 1
        rangeThreshold={0.5} // local occlusion range threshold at which the occlusion starts to fade out. min: 0, max: 1
        rangeFalloff={0.1} // occlusion range falloff. min: 0, max: 1
        luminanceInfluence={0.9} // how much the luminance of the scene influences the ambient occlusion
        radius={20} // occlusion sampling radius
        // scale={0.5} // scale of the ambient occlusion
        bias={0.5} // occlusion bias
        worldDistanceThreshold={1.0} // global distance threshold in world units
        worldDistanceFalloff={0.0} // distance falloff in world units
        worldProximityThreshold={0.5} // local occlusion range threshold in world units
        worldProximityFalloff={0.1} // occlusion range falloff in world units
      />
      <SSAO
        blendFunction={BlendFunction.MULTIPLY} // blend mode
        samples={30} // amount of samples per pixel (shouldn't be a multiple of the ring count)
        rings={4} // amount of rings in the occlusion sampling pattern
        distanceThreshold={0.5} // global distance threshold at which the occlusion effect starts to fade out. min: 0, max: 1
        distanceFalloff={0.0} // distance falloff. min: 0, max: 1
        rangeThreshold={0.5} // local occlusion range threshold at which the occlusion starts to fade out. min: 0, max: 1
        rangeFalloff={0.1} // occlusion range falloff. min: 0, max: 1
        luminanceInfluence={0.5} // how much the luminance of the scene influences the ambient occlusion
        radius={10} // occlusion sampling radius
        // scale={0.5} // scale of the ambient occlusion
        bias={0.5} // occlusion bias
        worldDistanceThreshold={1.0} // global distance threshold in world units
        worldDistanceFalloff={0.0} // distance falloff in world units
        worldProximityThreshold={0.5} // local occlusion range threshold in world units
        worldProximityFalloff={0.1} // occlusion range falloff in world units
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
      {/* <Scanline
        blendFunction={BlendFunction.DARKEN}
        opacity={0.1}
        density={0.8}
      /> */}
      {/* <Noise opacity={0.5} /> */}
      <Vignette
        offset={0.5}
        darkness={0.5}
        eskil={false}
        blendFunction={BlendFunction.NORMAL}
      />
    </EffectComposer>
  )
}
