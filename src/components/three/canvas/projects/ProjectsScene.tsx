import React from 'react'
import * as THREE from 'three'

import { AmsterdamHouse } from '../../models/projects/AmsterdamHouse'
import { AmsterdamSign } from '../../models/projects/AmsterdamSign'
import { Aries } from '../../models/projects/Aries'
import { Forest001 } from '../../models/projects/Forest001'
import { Forest002 } from '../../models/projects/Forest002'
import { MaastrichtHouse } from '../../models/projects/MaastrichtHouse'
import { MaastrichtHouse002 } from '../../models/projects/MaastrichtHouse002'
import { MaastrichtHouse003 } from '../../models/projects/MaastrichtHouse003'
import { Tree001 } from '../../models/projects/Tree001'
import { Tree002 } from '../../models/projects/Tree002'

import { getRandomInt } from '@/helpers/mathHelpers'

export default function ProjectsScene() {
  return (
    <group scale={2}>
      <AmsterdamHouse scale={2} />
      <AmsterdamSign
        position={new THREE.Vector3(-2, 0.5, 0)}
        scale={0.5}
      />
      <Aries position={new THREE.Vector3(2, 0, 5)} />
      <Forest001 />
      <Forest002 />
      <MaastrichtHouse
        position={new THREE.Vector3(-5, 0, 5)}
        rotation={new THREE.Euler(0, THREE.MathUtils.degToRad(-180))}
      />
      <MaastrichtHouse002
        position={new THREE.Vector3(-7, 0, 5)}
        rotation={new THREE.Euler(0, THREE.MathUtils.degToRad(-180))}
      />
      <MaastrichtHouse003
        position={new THREE.Vector3(-7, 0, -5)}
        scale={1.65}
      />
      <group position={new THREE.Vector3(-15, 0, -15)}>
        {[...Array(100)].map((_, i) => (
          <React.Fragment key={i}>
            {(() => {
              switch (getRandomInt({ min: 0, max: 1 })) {
                case 0:
                  return (
                    <Tree001
                      position={
                        new THREE.Vector3(
                          getRandomInt({ min: 0, max: 30 }),
                          0,
                          getRandomInt({ min: 0, max: 30 }),
                        )
                      }
                      rotation={
                        new THREE.Euler(
                          0,
                          THREE.MathUtils.degToRad(getRandomInt({ min: 0, max: 180 })),
                          0,
                        )
                      }
                    />
                  )
                case 1:
                  return (
                    <Tree002
                      position={
                        new THREE.Vector3(
                          getRandomInt({ min: 0, max: 30 }),
                          0,
                          getRandomInt({ min: 0, max: 30 }),
                        )
                      }
                      rotation={
                        new THREE.Euler(
                          0,
                          THREE.MathUtils.degToRad(getRandomInt({ min: 0, max: 180 })),
                          0,
                        )
                      }
                    />
                  )
                default:
                  return null
              }
            })()}
          </React.Fragment>
        ))}
      </group>
    </group>
  )
}
