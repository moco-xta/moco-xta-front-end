import React, { useLayoutEffect, useRef } from 'react'
import * as THREE from 'three'
import { Bloom, DepthOfField, EffectComposer } from '@react-three/postprocessing'
import { DepthOfFieldEffect, KernelSize, Resolution } from 'postprocessing'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'
import { useFrame } from '@react-three/fiber'

import { default as heroAnimationsConstants } from '@/constants/animations/home/heroAnimationsConstants.json'

export default function PostProcessing() {
  const depthOfFieldRef = useRef<DepthOfFieldEffect>(null!)
  const dofTargetRef = useRef<THREE.Vector3>(new THREE.Vector3(0, 0, 3))

  useLayoutEffect(() => {
    depthOfFieldRef.current.target = dofTargetRef.current
  }, [])

  useFrame(() => {
    depthOfFieldRef.current.target = dofTargetRef.current
  })

  useGSAP(() => {
    gsap.to(dofTargetRef.current, {
      keyframes: {
        '0%': { z: 4, ease: 'back.in' },
        '20%': { z: 4, ease: 'back.in' },
        '40%': { z: 4, ease: 'back.in' },
        '60%': { z: 5, ease: 'back.in' },
        '80%': { z: 0, ease: 'power1.in' },
        '100%': { z: 0 },
        easeEach: 'none',
      },
      delay: heroAnimationsConstants.SCENES.HI_I_M_FEDERICO.DELAY / heroAnimationsConstants.SPEED,
      duration:
        heroAnimationsConstants.SCENES.HI_I_M_FEDERICO.STEPS / heroAnimationsConstants.SPEED,
      ease: 'none',
    })
  })

  return (
    <EffectComposer>
      <DepthOfField
        ref={depthOfFieldRef}
        focalLength={0.005}
        bokehScale={20}
        height={4096}
        width={4096}
      />
      <Bloom
        intensity={1}
        kernelSize={KernelSize.LARGE}
        luminanceThreshold={0.05}
        luminanceSmoothing={0.025}
        mipmapBlur={false}
        resolutionX={Resolution.AUTO_SIZE}
        resolutionY={Resolution.AUTO_SIZE}
      />
    </EffectComposer>
  )
}
