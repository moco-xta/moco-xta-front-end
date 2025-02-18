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
import { postProcessingData } from '@/data/hero/three/postProcessingData'
// import { gsap } from 'gsap'
// import { useGSAP } from '@gsap/react'

export type TPostProcessing = {
  terminalType: 'isDesktop' | 'isMobile'
}

export default function PostProcessing({ terminalType }: TPostProcessing) {
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
      <DepthOfField {...postProcessingData.depthOfField[terminalType]} />
      <Bloom
        {...postProcessingData.bloom}
        kernelSize={KernelSize.LARGE}
        resolutionX={Resolution.AUTO_SIZE}
        resolutionY={Resolution.AUTO_SIZE}
      />
      <ToneMapping
        {...postProcessingData.toneMapping}
        blendFunction={BlendFunction.NORMAL}
      />
      <Vignette
        {...postProcessingData.vignette}
        blendFunction={BlendFunction.NORMAL}
      />
    </EffectComposer>
  )
}
