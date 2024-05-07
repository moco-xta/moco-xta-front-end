import React from 'react'
import * as THREE from 'three'

import { LightsInterface } from '@/interfaces/r3fInterfaces'

export default function Lights({ canvasName, data }: LightsInterface) {
  return (
    <>
      {data.map((lightByCategory) => {
        return lightByCategory.POSITIONS.map((position, index) => {
          const vector3Position = new THREE.Vector3(
            position.X,
            position.Y,
            position.Z,
          )
          return (
            <>
              {(() => {
                switch (lightByCategory.TYPE) {
                  case 'pointLight':
                    return (
                      <pointLight
                        key={`point_light_${canvasName}_${index}`}
                        position={vector3Position}
                        color={lightByCategory?.COLOR ? lightByCategory.COLOR : 0xffffff}
                        intensity={lightByCategory.INTENSITY}
                        castShadow
                      />
                    )
                  case 'ambientLight':
                    return (
                      <pointLight
                        key={`ambient_light_${canvasName}_${index}`}
                        position={vector3Position}
                        intensity={lightByCategory.INTENSITY}
                        castShadow
                      />
                    )
                  default:
                    return null
                }
              })()}
            </>
          )
        })
      })}
    </>
  )
}
