import React from 'react'
import * as THREE from 'three'
import {
  Box,
  MeshTransmissionMaterial,
  Plane,
} from '@react-three/drei'
import { RigidBody } from '@react-three/rapier'

import { Parquet, Trestle } from '../../models/about'

import { MacBookPro } from '../../models/about/MacBookPro'
import { SpeakerEnclosure } from '../../models/about/SpeakerEnclosure'
import { WorldMap } from '../../models/about/WorldMap'
import { WoodenShelf } from '../../models/about/WoodenShelf'
import { BrainSquare } from '../../models/about/BrainSquare'
import { TrinitySquare } from '../../models/about/TrinitySquare'
import { AmorAmorSquare } from '../../models/about/AmorAmorSquare'
import { CouronneSquare } from '../../models/about/CouronneSquare'
import { ButterflySquare } from '../../models/about/ButterflySquare'
import { CelestialMapSquare } from '../../models/about/CelestialMapSquare'

export default function AboutScene() {
  return (
    <>
      <MacBookPro />
      <Box
        args={[16, 0.1, 8]}
        position={[0, 6.07, 10]}
        receiveShadow
        castShadow
      >
        <MeshTransmissionMaterial
          backside
          backsideThickness={0.2}
          thickness={0.1}
        />
      </Box>
      <Trestle position={[6, 0.06, 10]} />
      <Trestle
        position={[-6, 0.06, 10]}
        rotation={[0, THREE.MathUtils.degToRad(180), 0]}
      />
      <Parquet />
      <RigidBody colliders='hull'>
        <Plane
          args={[50, 50, 20, 20]}
          rotation={[THREE.MathUtils.degToRad(90), 0, 0]}
        />
      </RigidBody>
      <SpeakerEnclosure
        position={[9.9, 0, 12.5]}
        rotation={new THREE.Euler(0, THREE.MathUtils.degToRad(180))}
      />
      <SpeakerEnclosure
        position={[-10.7, 0, 12.5]}
        rotation={new THREE.Euler(0, THREE.MathUtils.degToRad(180))}
      />
      <WorldMap
        position={[9.9, 8.2, 12.4]}
        rotation={new THREE.Euler(0, THREE.MathUtils.degToRad(180))}
      />
      <WoodenShelf
        position={[0, 15, 14.3]}
        rotation={new THREE.Euler(0, THREE.MathUtils.degToRad(180))}
      />
      <BrainSquare
        position={[17.66, 14.52, 14.519]}
        rotation={new THREE.Euler(0, THREE.MathUtils.degToRad(180))}
      />
      <TrinitySquare
        position={[15.68, 20.9, 14.5]}
        rotation={new THREE.Euler(0, THREE.MathUtils.degToRad(180))}
      />
      <AmorAmorSquare
        position={[10.2, 8, 14.52]}
        rotation={new THREE.Euler(0, THREE.MathUtils.degToRad(180))}
      />
      <CouronneSquare
        position={[0, 22.6, 14.52]}
        rotation={new THREE.Euler(0, THREE.MathUtils.degToRad(180))}
      />
      <ButterflySquare
        position={[15.576, 8.7, 14.3]}
        rotation={new THREE.Euler(0, THREE.MathUtils.degToRad(180))}
      />
      <CelestialMapSquare
        position={[-9.5, 10.3, 14.52]}
        rotation={new THREE.Euler(0, THREE.MathUtils.degToRad(180))}
      />
    </>
  )
}
