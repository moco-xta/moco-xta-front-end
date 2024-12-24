import React from 'react'
// import * as THREE from 'three'

import { ambientLightData } from '@/data/home/hero/three/lights/ambientLightData'

export default function AmbientLight() {
  return <ambientLight {...ambientLightData.defaultValues} />
  // return <ambientLight color={new THREE.Color(1, 0, 0)} intensity={100} />
}
