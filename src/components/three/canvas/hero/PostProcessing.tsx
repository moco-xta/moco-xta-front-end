import React /* , { useRef } */ from 'react'
// import * as THREE from 'three'
// import { useFrame } from '@react-three/fiber'
import {
  Bloom,
  DepthOfField,
  EffectComposer,
  ToneMapping,
  Vignette,
} from '@react-three/postprocessing'
import { BlendFunction, KernelSize, Resolution } from 'postprocessing'
// import { gsap } from 'gsap'
// import { useGSAP } from '@gsap/react'

export default function PostProcessing() {
  // const depthOfFieldRef = useRef<DepthOfFieldEffect>(null!)
  // const depthOfFieldTargetRef = useRef<THREE.Vector3>(new THREE.Vector3(0, 0, 0))

  /* useLayoutEffect(() => {
    depthOfFieldRef.current.target = depthOfFieldTargetRef.current
  }, []) */

  /* useFrame(() => {
    depthOfFieldRef.current.target = depthOfFieldTargetRef.current
  }) */

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
        focusDistance={0.015}
        focalLength={0.0035}
        bokehScale={5}
      />
      <Bloom
        intensity={2.5}
        blurPass={undefined}
        kernelSize={KernelSize.LARGE}
        luminanceThreshold={0.9}
        luminanceSmoothing={0.025}
        mipmapBlur={true}
        resolutionX={Resolution.AUTO_SIZE}
        resolutionY={Resolution.AUTO_SIZE}
      />
      <ToneMapping
        blendFunction={BlendFunction.NORMAL} // blend mode
        adaptive={true} // toggle adaptive luminance map usage
        resolution={1024} // texture resolution of the luminance map
        middleGrey={0.5} // middle grey factor
        maxLuminance={40.0} // maximum luminance
        averageLuminance={2.0} // average luminance
        adaptationRate={1.0} // luminance adaptation rate
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
