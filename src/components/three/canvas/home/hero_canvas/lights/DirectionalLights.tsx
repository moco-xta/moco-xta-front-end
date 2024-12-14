import React, { useRef } from 'react'
import * as THREE from 'three'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'

import { useGSAPTimelineContext } from '@/hooks/animations/useGSAPTimelineContext'

import { default as directionalLightsConstants } from '@/constants/animations/home/hero/canvas/lights/directionalLightsConstants.json'

import { directionalLightsAnimations } from 'animations'

export default function DirectionalLights() {
  const { timeline } = useGSAPTimelineContext()

  const directionalLightsGroupRef = useRef<THREE.Group>(null!)

  useGSAP(
    () => {
      const directionLights: THREE.DirectionalLight[] = gsap.utils.toArray(
        directionalLightsGroupRef.current.children,
      )
      directionLights.forEach((directionLight, index) => {
        timeline.to(
          directionLight,
          {
            keyframes: directionalLightsAnimations.directionalLight.keyframes,
            duration: directionalLightsAnimations.directionalLight.duration,
          },
          directionalLightsAnimations.delay,
        )
      })
    },
    { scope: directionalLightsGroupRef },
  )

  return (
    <group ref={directionalLightsGroupRef}>
      {directionalLightsConstants.DEFAULT.POSITIONS.map((position, index) => {
        return (
          <directionalLight
            key={`greeting_canvas_directional_light_${index}`}
            position={[position.X, position.Y, position.Z]}
            target={new THREE.Object3D()}
            color={directionalLightsConstants.DEFAULT.COLOR}
            intensity={directionalLightsConstants.DEFAULT.INTENSITY}
            shadow-mapSize={directionalLightsConstants.DEFAULT.SHADOW.MAP_SIZE}
            shadow-camera-far={directionalLightsConstants.DEFAULT.SHADOW.SHADOW_CAMERA_FAR}
            shadow-camera-left={directionalLightsConstants.DEFAULT.SHADOW.SHADOW_CAMERA_LEFT}
            shadow-camera-right={directionalLightsConstants.DEFAULT.SHADOW.SHADOW_CAMERA_RIGHT}
            shadow-camera-top={directionalLightsConstants.DEFAULT.SHADOW.SHADOW_CAMERA_TOP}
            shadow-camera-bottom={directionalLightsConstants.DEFAULT.SHADOW.SHADOW_CAMERA_BOTTOM}
            shadow-radius={directionalLightsConstants.DEFAULT.SHADOW.SHADOW_RADIUS}
            shadow-bias={directionalLightsConstants.DEFAULT.SHADOW.SHADOW_BIAS}
            castShadow
          />
        )
      })}
    </group>
  )
}
