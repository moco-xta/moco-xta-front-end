import React from 'react'
import * as THREE from 'three'

import { Brain } from '../../models/shared/Brain'
import Bust from './Bust'
import { Heart } from '../../models/shared/Heart'
import LogoAthleticoNacionalComponent from './LogoAthleticoNacionalComponent'
import { Knight } from '../../models/shared/Knight'
import { PineCone } from '../../models/shared/PineCone'
import { QueenOfHearts } from '../../models/shared/QueenOfHearts'
import { Crown } from '../../models/shared/Crown'
import { Hydrangea } from '../../models/shared/Hydrangea'

import { getDegreeEuler } from '@/helpers/threeHelpers'

// TODO: Knight data

export default function ContactScene() {
  return (
    <group>
      <Bust />
      <Heart
        position={new THREE.Vector3(1, -4.5, 0.5)}
        scale={1.4}
      />
      <LogoAthleticoNacionalComponent />
      <Knight
        position={new THREE.Vector3(-3, -3, 2)}
        rotation={getDegreeEuler({ x: 0, y: 90, z: 0 })}
        scale={1.5}
      />
      <Knight
        position={new THREE.Vector3(3, -3, 2)}
        rotation={getDegreeEuler({ x: 0, y: 90, z: 0 })}
        scale={1.5}
      />
      <PineCone
        position={new THREE.Vector3(0, 2, 0)}
        rotation={getDegreeEuler({ x: 90, y: 0, z: 0 })}
        scale={0.5}
      />
      {/* <Brain
        position={new THREE.Vector3(0, 2.1, 0.15)}
        scale={0.375}
      /> */}
      <QueenOfHearts
        position={new THREE.Vector3(2, -1, 0)}
        scale={0.25}
      />
      <Crown
        position={new THREE.Vector3(0, 3.7, -0.5)}
        rotation={getDegreeEuler({ x: -10 })}
      />
      <Hydrangea
        position={new THREE.Vector3(0, -3, 1.5)}
        scale={2}
      />
    </group>
  )
}
