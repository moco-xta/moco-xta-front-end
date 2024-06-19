import React from 'react'
import * as THREE from 'three'

import { Trestle } from '../../models/about/Trestle'
import { TransfertBox } from '../../models/about/TransfertBox'

export default function Desk() {
  return (
    <>
      <TransfertBox
        position={new THREE.Vector3(-6.44055, 1.58283, -11.8189)}
        rotation={new THREE.Euler(0, 0, 0)}
      />
      <TransfertBox
        position={new THREE.Vector3(-6.38545, 1.58283, -11.0189)}
        rotation={new THREE.Euler(0, THREE.MathUtils.degToRad(2.67699), 0)}
      />
      <TransfertBox
        position={new THREE.Vector3(-6.52777, 1.58283, -10.0346)}
        rotation={new THREE.Euler(0, THREE.MathUtils.degToRad(-2.49071), 0)}
      />
      <Trestle position={new THREE.Vector3(-7.5, 0, -10)} />
      <Trestle position={new THREE.Vector3(7.5, 0, -10)} />
    </>
  )
}
