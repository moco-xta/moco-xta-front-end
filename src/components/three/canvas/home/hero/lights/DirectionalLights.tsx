import React, { useRef } from 'react'
import * as THREE from 'three'
// import { gsap } from 'gsap'
// import { useGSAP } from '@gsap/react'

import { useGSAPTimelineContext } from '@/hooks/animations/useGSAPTimelineContext'

import { directionalLightsDefaultValues } from '@/data/home/hero/three/lights/directionalLightsData'

export default function DirectionalLights() {
  /* const { timeline } = useGSAPTimelineContext() */

  const directionalLightsGroupRef = useRef<THREE.Group>(null!)

  /* useGSAP(
    () => {
      const directionLights: THREE.DirectionalLight[] = gsap.utils.toArray(
        directionalLightsGroupRef.current.children,
      )
      directionLights.forEach((directionLightRef) => {
        directionalLightsAnimations(timeline, directionLightRef)
      })
    },
    { scope: directionalLightsGroupRef },
  ) */

  return (
    <group ref={directionalLightsGroupRef}>
      {directionalLightsDefaultValues().map((directionalLightData, index) => (
        <directionalLight
          key={`greeting_canvas_directional_light_${index}`}
          {...directionalLightData}
          /* color={directionalLightData.defaultValues.color}
          intensity={directionalLightData.defaultValues.intensity}
          position={directionalLightData.defaultValues.position}
          target={directionalLightData.defaultValues.target} */
          /* castShadow={directionalLightData.defaultValues.castShadow}
          shadow-mapSize={directionalLightData.defaultValues['shadow-mapSize']}
          shadow-camera-far={directionalLightData.defaultValues['shadow-camera-far']}
          shadow-camera-left={directionalLightData.defaultValues['shadow-camera-left']}
          shadow-camera-right={directionalLightData.defaultValues['shadow-camera-right']}
          shadow-camera-top={directionalLightData.defaultValues['shadow-camera-top']}
          shadow-camera-bottom={directionalLightData.defaultValues['shadow-camera-bottom']}
          shadow-radius={directionalLightData.defaultValues['shadow-radius']}
          shadow-bias={directionalLightData.defaultValues['shadow-bias']} */
        />
      ))}
    </group>
  )
}
