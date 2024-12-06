import React, { useEffect, useRef } from 'react'
import * as THREE from 'three'
import { useHelper } from '@react-three/drei'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'

import { default as greetingCanvasConstants } from '@/constants/canvas/home/greetingCanvasConstants.json'

import variables from '@/styles/variables.module.scss'
import { useFrame } from '@react-three/fiber'
import DirectionalLights from './DirectionalLights'

interface LightsInterface {
  timeline: GSAPTimeline
}

export default function Lights({ timeline }: LightsInterface) {
  const lightsGroupRef = useRef<THREE.Group>(null!)
  /* useHelper(ref, THREE.DirectionalLightHelper) */
  const spotLightRef = useRef<THREE.SpotLight>(null!)

  useHelper(spotLightRef, THREE.SpotLightHelper, 'cyan')

  useEffect(() => {
    if (spotLightRef.current) {
      spotLightRef.current.target.position.set(6, 0, 0)
      spotLightRef.current.target.updateMatrixWorld()
    }
  }, [spotLightRef])

  useGSAP(() => {}, { scope: lightsGroupRef })

  return (
    <group ref={lightsGroupRef}>
      <ambientLight
        color={variables.white}
        intensity={greetingCanvasConstants.LIGHTS.AMBIENT_LIGHT.INTENSITY}
      />
      <DirectionalLights timeline={timeline} />
      {/* <spotLight
        ref={spotLightRef}
        position={[6.25, 9, 1]}
        intensity={30}
        distance={9}
        angle={THREE.MathUtils.degToRad(30)}
        penumbra={0.1}
        decay={0.5}
        castShadow
      /> */}
    </group>
  )
}
