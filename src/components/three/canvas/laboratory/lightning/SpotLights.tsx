import React from 'react'
import * as THREE from 'three'

import { spotLightsDefaultValues } from '@/data/about/three/lightsData'

export default function SpotLights() {
  return (
    <>
      {spotLightsDefaultValues.orientations.map((orientation, index) => {
        const { position, targetPosition, ...rest } = spotLightsDefaultValues
        return (
          <spotLight
            key={`spot_light_${index}`}
            position={
              new THREE.Vector3(
                orientation[0] * position.x,
                orientation[1] * position.y,
                orientation[2] * position.z,
              )
            }
            target-position={
              new THREE.Vector3(
                orientation[0] * targetPosition.x,
                orientation[1] * targetPosition.y,
                orientation[2] * targetPosition.z,
              )
            }
            {...rest}
          />
        )
      })}
    </>
  )
}
