import React from 'react'
import * as THREE from 'three'
import { Plane } from '@react-three/drei'

import { ExoMarket } from '../../models/home/buildings/ExoMarket'
import { ExoMarketShutter } from '../../models/home/buildings/ExoMarketShutter'

import './index.scss'
import Heading from './Heading'

export default function HomeScene() {
  return (
    <>
      {/* <ExoMarket />
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
      <Plane
        args={[25, 25]}
        rotation={new THREE.Euler(THREE.MathUtils.degToRad(-90), 0, 0)}
        receiveShadow
      >
        <meshStandardMaterial color={'white'} />
      </Plane> */}
      <Heading />
    </>
  )
}
