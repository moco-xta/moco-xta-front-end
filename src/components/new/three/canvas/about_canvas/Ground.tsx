import React from 'react'
import * as THREE from 'three'
import { Plane } from '@react-three/drei'
import { RigidBody } from '@react-three/rapier'

import Parquet from '../../models/about/Parquet'

export default function Ground() {
  return (
    <>
      <Parquet />
      <RigidBody colliders='hull'>
        <Plane
          args={[50, 50, 20, 20]}
          rotation={[THREE.MathUtils.degToRad(90), 0, 0]}
        />
      </RigidBody>
    </>
  )
}
