import React from 'react'
// import * as THREE from 'three'

import AmbientLight from './AmbientLight'
import SpotLights from './SpotLights'

export default function Lightning() {
  return (
    <>
      <AmbientLight />
      <SpotLights />
      {/* <spotLight
        intensity={2}
        position={new THREE.Vector3(0, 22, 0)}
        angle={Math.PI / 2}
        distance={100}
        decay={0.4}
        penumbra={0.4}
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
        shadow-camera-near={1}
        shadow-camera-far={50}
        shadow-camera-left={-50}
        shadow-camera-right={50}
        shadow-camera-top={50}
        shadow-camera-bottom={-50}
        shadow-radius={4}
        shadow-bias={0.00001}
        castShadow
      /> */}
    </>
  )
}
