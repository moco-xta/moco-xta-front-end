import React from 'react'
import * as THREE from 'three'

import ContacMe from './ContacMe'
import PhoneNumber from './PhoneNumber'

export default function PhoneNumberScene() {
  return (
    <group position={new THREE.Vector3(0, -15)}>
      <ContacMe />
      <PhoneNumber />
    </group>
  )
}
