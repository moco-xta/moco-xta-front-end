import React from 'react'
import * as THREE from 'three'
import { Box } from '@react-three/drei'

import { ExoMarket } from '../../models/home/buildings/ExoMarket'
import { ExoMarketShutter } from '../../models/home/buildings/ExoMarketShutter'
import { Ganesh } from '../../models/home/buildings/Ganesh'

export default function HomeScene() {
  return (
    <>
      <ExoMarket />
      <ExoMarketShutter
        name='ExoMarketShutter_A1Left'
        position={[-5.57866, 8.80972, -0.012591]}
        rotation={new THREE.Euler(0, THREE.MathUtils.degToRad(155.863), 0)}
      />
      <ExoMarketShutter
        name='ExoMarketShutter_A1Right'
        position={[-4.70192, 8.80972, -0.012591]}
        scale={[-1, 1, 1]}
        rotation={new THREE.Euler(0, THREE.MathUtils.degToRad(-143.988), 0)}
      />
      <ExoMarketShutter
        name='ExoMarketShutter_B1Left'
        position={[-1.68599, 8.76814, -0.012591]}
        scale={[1, 0.992, 1]}
        rotation={new THREE.Euler(0, THREE.MathUtils.degToRad(18.5992), 0)}
      />
      <ExoMarketShutter
        name='ExoMarketShutter_B1Right'
        position={[-0.812365, 8.76814, -0.012591]}
        scale={[-1, 0.992, 1]}
        rotation={new THREE.Euler(0, THREE.MathUtils.degToRad(-3.18573), 0)}
      />
      {/* <Ganesh
        position={[-15, 0, -20]}
        rotation={new THREE.Euler(0, THREE.MathUtils.degToRad(33), 0)}
        scale={[0.3, 0.3, 0.3]}
      /> */}
      {/* <Ganesh
        position={[15, 0, -20]}
        rotation={new THREE.Euler(0, THREE.MathUtils.degToRad(-33), 0)}
        scale={[-0.3, 0.3, 0.3]}
      /> */}
      <Box
        args={[3, 20, 3]}
        position={[0, 10, -20]}
        rotation={[0, THREE.MathUtils.radToDeg(33), 0]}
        receiveShadow
        castShadow
      />
    </>
  )
}
