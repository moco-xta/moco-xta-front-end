import React from 'react'
import * as THREE from 'three'

import { Trestle } from './Trestle'
import Parquet from './Parquet'

export default function LaboratoireFinalRender() {
  return (
    <>
      <Trestle position={new THREE.Vector3(-7.5, 0, -10)}/>
      <Trestle position={new THREE.Vector3(7.5, 0, -10)}/>
      <Parquet />
    </>
  )
}
