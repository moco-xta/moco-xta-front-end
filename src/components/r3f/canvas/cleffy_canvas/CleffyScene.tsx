import React from 'react'
import * as THREE from 'three'

import { ReactThreeDrei } from './ReactThreeDrei'
import { Ring } from '../../models/cleffy/Ring'
import { StringElement } from '../../models/cleffy/StringElement'

export default function CleffyScene() {
  return (
    <group position={new THREE.Vector3(0, 10, 0)}>
      <Ring rigidBodyType={'fixed'} />
      <group rotation={new THREE.Euler(0, 0, THREE.MathUtils.degToRad(0))}>
        {[...Array(5)].map((_, index) => (
          <StringElement
            key={`first_string_${index}`}
            position={new THREE.Vector3(0, -2.4 * index - 7, 0)}
            rotation={
              new THREE.Euler(0, THREE.MathUtils.degToRad(90 * index), 0)
            }
          />
        ))}
        <ReactThreeDrei position={new THREE.Vector3(0, -26.92, 0)} />
      </group>
      <group rotation={new THREE.Euler(0, 0, THREE.MathUtils.degToRad(-30))}>
        {[...Array(5)].map((_, index) => (
          <StringElement
            key={`second_string_${index}`}
            position={new THREE.Vector3(0, -2.4 * index - 7, 0)}
            rotation={
              new THREE.Euler(0, THREE.MathUtils.degToRad(90 * index), 0)
            }
          />
        ))}
      </group>
    </group>
  )
}
