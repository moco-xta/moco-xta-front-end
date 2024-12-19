import React, { useRef } from 'react'
import * as THREE from 'three'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'

import { useGSAPTimelineContext } from '@/hooks/animations/useGSAPTimelineContext'

import { directionalLightsData } from '@/data/hero/three/canvas/hero/lights/directionalLightsData'

import { directionalLightsAnimations } from 'animations'

export default function DirectionalLights() {
  const { timeline } = useGSAPTimelineContext()

  const directionalLightsGroupRef = useRef<THREE.Group>(null!)

  useGSAP(
    () => {
      const directionLights: THREE.DirectionalLight[] = gsap.utils.toArray(
        directionalLightsGroupRef.current.children,
      )
      directionLights.forEach((directionLightRef) => {
        directionalLightsAnimations(timeline, directionLightRef)
      })
    },
    { scope: directionalLightsGroupRef },
  )

  return (
    <group ref={directionalLightsGroupRef}>
      {directionalLightsData.default.positions!.map((position, index) => {
        return (
          <directionalLight
            key={`greeting_canvas_directional_light_${index}`}
            color={directionalLightsData.default.color}
            intensity={directionalLightsData.default.intensity}
            position={position}
            target={directionalLightsData.default.target}
            castShadow={directionalLightsData.default.castShadow}
            shadow-mapSize={directionalLightsData.default['shadow-mapSize']}
            shadow-camera-far={directionalLightsData.default['shadow-camera-far']}
            shadow-camera-left={directionalLightsData.default['shadow-camera-left']}
            shadow-camera-right={directionalLightsData.default['shadow-camera-right']}
            shadow-camera-top={directionalLightsData.default['shadow-camera-top']}
            shadow-camera-bottom={directionalLightsData.default['shadow-camera-bottom']}
            shadow-radius={directionalLightsData.default['shadow-radius']}
            shadow-bias={directionalLightsData.default['shadow-bias']}
          />
        )
      })}
    </group>
  )
}
