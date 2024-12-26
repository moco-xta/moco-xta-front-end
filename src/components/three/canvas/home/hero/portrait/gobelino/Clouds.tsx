import React from 'react'
import * as THREE from 'three'

import CloudComponent from './CloudComponent'

import { getCloudsDefaultValues } from '@/data/home/hero/three/portrait/gobelino/cloudsData'

import { animate } from 'animations'

export default function Clouds() {
  return (
    <>
      {Array.isArray(getCloudsDefaultValues.position) &&
        getCloudsDefaultValues.position.map(({ x, y, z }, index) => (
          <CloudComponent
            key={`cloud_${index}`}
            position={new THREE.Vector3(x, y, z)}
          />
        ))}
    </>
  )
}
