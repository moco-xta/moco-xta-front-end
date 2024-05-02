import React from 'react'
import * as THREE from 'three'
import { Box, MeshTransmissionMaterial, Plane } from '@react-three/drei'
import { RigidBody } from '@react-three/rapier'

import { Parquet, Trestle } from '../../models/about'

import { MacBookPro } from '../../models/about/MacBookPro'
import { SpeakerEnclosure } from '../../models/about/SpeakerEnclosure'
import { WorldMap } from '../../models/about/WorldMap'
import { WoodenShelf } from '../../models/about/WoodenShelf'
import { CelestialMapSquare } from '../../models/about/CelestialMapSquare'
import { AmorLlamaAmorGlass } from '../../models/about/AmorLlamaAmorGlass'
import { MurNord } from '../../models/about/MurNord'
import TrinitySquare from '../../models/about/squares/trinity/TrinitySquare'
import Trinity from '../../models/about/squares/trinity/Trinity'
import TrinityGlass from '../../models/about/squares/trinity/TrinityGlass'
import BrainSquare from '../../models/about/squares/brain/BrainSquare'
import Brain from '../../models/about/squares/brain/Brain'
import BrainGlass from '../../models/about/squares/brain/BrainGlass'
import Couronnes from '../../models/about/squares/couronnes/Couronnes'
import ButterflySquare from '../../models/about/squares/butterfly/ButterflySquare'
import Butterfly from '../../models/about/squares/butterfly/Butterfly'
import ButterflyGlass from '../../models/about/squares/butterfly/ButterflyGlass'
import ButterflyBackground from '../../models/about/squares/butterfly/ButterflyBackground'
import AmorLlamaAmor from '../../models/about/squares/amor_llama_amor/AmorLlamaAmor'
import AmorLlamaAmorSquare from '../../models/about/squares/amor_llama_amor/AmorLlamaAmorSquare'

export default function AboutScene() {
  return (
    <>
      <Trinity
        rotation={new THREE.Euler(0, THREE.MathUtils.degToRad(180), 0)}
      />
      <TrinityGlass
        rotation={new THREE.Euler(0, THREE.MathUtils.degToRad(180), 0)}
      />
      <TrinitySquare
        rotation={new THREE.Euler(0, THREE.MathUtils.degToRad(180), 0)}
      />
      <Brain rotation={new THREE.Euler(0, THREE.MathUtils.degToRad(180), 0)} />
      <BrainGlass
        rotation={new THREE.Euler(0, THREE.MathUtils.degToRad(180), 0)}
      />
      <BrainSquare
        rotation={new THREE.Euler(0, THREE.MathUtils.degToRad(180), 0)}
      />
      <Couronnes
        rotation={new THREE.Euler(0, THREE.MathUtils.degToRad(180), 0)}
      />
      <Butterfly
        rotation={new THREE.Euler(0, THREE.MathUtils.degToRad(180), 0)}
      />
      <ButterflyGlass
        rotation={new THREE.Euler(0, THREE.MathUtils.degToRad(180), 0)}
      />
      <ButterflyBackground
        rotation={new THREE.Euler(0, THREE.MathUtils.degToRad(180), 0)}
      />
      <ButterflySquare
        rotation={new THREE.Euler(0, THREE.MathUtils.degToRad(180), 0)}
      />

      <AmorLlamaAmor
        rotation={new THREE.Euler(0, THREE.MathUtils.degToRad(180), 0)}
      />
      <AmorLlamaAmorGlass
        rotation={new THREE.Euler(0, THREE.MathUtils.degToRad(180), 0)}
      />
      <AmorLlamaAmorSquare
        rotation={new THREE.Euler(0, THREE.MathUtils.degToRad(180), 0)}
      />
      <MurNord
        rotation={new THREE.Euler(0, THREE.MathUtils.degToRad(180), 0)}
      />

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
      <CelestialMapSquare
        position={[-9.5, 10.3, 14.52]}
        rotation={new THREE.Euler(0, THREE.MathUtils.degToRad(180))}
      />
    </>
  )
}
