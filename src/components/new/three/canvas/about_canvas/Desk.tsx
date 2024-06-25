import React from 'react'
import * as THREE from 'three'

import { DeskChair } from '../../models/about/DeskChair'
import { MacBookPro } from '../../models/about/MacBookPro'
import { Screen } from '../../models/about/Screen'
import { TransfertBox } from '../../models/about/TransfertBox'
import VinylDiscs from './VinylDiscs'

export default function Desk() {
  return (
    <>
      <DeskChair
        position={[0, 0.02, 0]}
        rotation={[-Math.PI, 1.067, -Math.PI]}
      />
      <MacBookPro position={[0, 9.182, -8]} />
      <Screen position={[0, 9.182, -14.4]} />
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
      <VinylDiscs />
    </>
  )
}
