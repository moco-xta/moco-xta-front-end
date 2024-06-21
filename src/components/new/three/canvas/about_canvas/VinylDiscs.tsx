import React from 'react'
import * as THREE from 'three'

import { VinylDisc } from '../../models/about/VinylDisc'

export default function VinylDiscs() {
  return (
    <VinylDisc
      position={new THREE.Vector3(7.5, 1.57452, -7.45)}
      texture={'FINIRA'}
    />
  )
}
