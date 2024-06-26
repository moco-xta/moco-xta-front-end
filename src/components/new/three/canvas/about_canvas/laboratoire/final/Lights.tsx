import React, { useRef } from 'react'
import * as THREE from 'three'
import { useHelper } from '@react-three/drei'
import { useControls } from 'leva'

import { default as aboutConstants } from '@/constants/new/canvas/aboutConstants.json'

export default function Lights() {
  const spotLightCeilingNWtRef = useRef<THREE.SpotLight>(null!)
  const spotLightCeilingNEtRef = useRef<THREE.SpotLight>(null!)
  const spotLightCeilingSWtRef = useRef<THREE.SpotLight>(null!)
  const spotLightCeilingSEtRef = useRef<THREE.SpotLight>(null!)
  /* useHelper(spotLightCeilingNWtRef, THREE.SpotLightHelper, 'orange')
  useHelper(spotLightCeilingNEtRef, THREE.SpotLightHelper, 'red')
  useHelper(spotLightCeilingSWtRef, THREE.SpotLightHelper, 'blue')
  useHelper(spotLightCeilingSEtRef, THREE.SpotLightHelper, 'hotpink') */

  const spotLigthsPosition = useControls('SPOT LIGHTS: Position', {
    'position-x': {
      value:
        aboutConstants.LIGHTS.LABORATOIRE.FINAL_RENDER.SPOT_LIGHTS.POSITION.X,
      min: 0,
      max: 40,
      step: 0.1,
    },
    'position-y': {
      value:
        aboutConstants.LIGHTS.LABORATOIRE.FINAL_RENDER.SPOT_LIGHTS.POSITION.Y,
      min: 0,
      max: 40,
      step: 0.1,
    },
    'position-z': {
      value:
        aboutConstants.LIGHTS.LABORATOIRE.FINAL_RENDER.SPOT_LIGHTS.POSITION.Z,
      min: 0,
      max: 40,
      step: 0.1,
    },
    'target-position-x': {
      value:
        aboutConstants.LIGHTS.LABORATOIRE.FINAL_RENDER.SPOT_LIGHTS
          .TARGET_POSITION.X,
      min: 0,
      max: 40,
      step: 0.1,
    },
    'target-position-y': {
      value:
        aboutConstants.LIGHTS.LABORATOIRE.FINAL_RENDER.SPOT_LIGHTS
          .TARGET_POSITION.Y,
      min: 0,
      max: 40,
      step: 0.1,
    },
    'target-position-z': {
      value:
        aboutConstants.LIGHTS.LABORATOIRE.FINAL_RENDER.SPOT_LIGHTS
          .TARGET_POSITION.Z,
      min: 0,
      max: 40,
      step: 0.1,
    },
  })

  const spotLigthsConfig = useControls('SPOT LIGHTS: Config', {
    color: aboutConstants.LIGHTS.LABORATOIRE.FINAL_RENDER.SPOT_LIGHTS.COLOR,
    intensity: {
      value:
        aboutConstants.LIGHTS.LABORATOIRE.FINAL_RENDER.SPOT_LIGHTS.INTENSITY,
      min: 0,
      max: 200,
      step: 0.01,
    },
    distance: {
      value:
        aboutConstants.LIGHTS.LABORATOIRE.FINAL_RENDER.SPOT_LIGHTS.DISTANCE,
      min: 0,
      max: 100,
      step: 1,
    },
    angle: {
      value: aboutConstants.LIGHTS.LABORATOIRE.FINAL_RENDER.SPOT_LIGHTS.ANGLE,
      min: 0,
      max: 2,
      step: 0.01,
    },
    penumbra: {
      value:
        aboutConstants.LIGHTS.LABORATOIRE.FINAL_RENDER.SPOT_LIGHTS.PENUMBRA,
      min: 0,
      max: 2,
      step: 0.01,
    },
    decay: {
      value: aboutConstants.LIGHTS.LABORATOIRE.FINAL_RENDER.SPOT_LIGHTS.DECAY,
      min: 0,
      max: 10,
      step: 0.1,
    },
  })

  return (
    <>
      <spotLight
        ref={spotLightCeilingNWtRef}
        position={[
          -spotLigthsPosition['position-x'],
          spotLigthsPosition['position-y'],
          -spotLigthsPosition['position-z'],
        ]}
        target-position={
          new THREE.Vector3(
            -spotLigthsPosition['target-position-x'],
            spotLigthsPosition['target-position-y'],
            -spotLigthsPosition['target-position-z'],
          )
        }
        castShadow
        shadow-mapSize={[
          aboutConstants.LIGHTS.LABORATOIRE.FINAL_RENDER.SPOT_LIGHTS
            .SHADOW_MAP_SIZE *
            aboutConstants.LIGHTS.LABORATOIRE.FINAL_RENDER.SPOT_LIGHTS.K,
          aboutConstants.LIGHTS.LABORATOIRE.FINAL_RENDER.SPOT_LIGHTS
            .SHADOW_MAP_SIZE *
            aboutConstants.LIGHTS.LABORATOIRE.FINAL_RENDER.SPOT_LIGHTS.K,
        ]}
        {...spotLigthsConfig}
      />
      <spotLight
        ref={spotLightCeilingNEtRef}
        position={[
          spotLigthsPosition['position-x'],
          spotLigthsPosition['position-y'],
          -spotLigthsPosition['position-z'],
        ]}
        target-position={
          new THREE.Vector3(
            spotLigthsPosition['target-position-x'],
            spotLigthsPosition['target-position-y'],
            -spotLigthsPosition['target-position-z'],
          )
        }
        castShadow
        shadow-mapSize={[
          aboutConstants.LIGHTS.LABORATOIRE.FINAL_RENDER.SPOT_LIGHTS
            .SHADOW_MAP_SIZE *
            aboutConstants.LIGHTS.LABORATOIRE.FINAL_RENDER.SPOT_LIGHTS.K,
          aboutConstants.LIGHTS.LABORATOIRE.FINAL_RENDER.SPOT_LIGHTS
            .SHADOW_MAP_SIZE *
            aboutConstants.LIGHTS.LABORATOIRE.FINAL_RENDER.SPOT_LIGHTS.K,
        ]}
        {...spotLigthsConfig}
      />
      <spotLight
        ref={spotLightCeilingSWtRef}
        position={[
          -spotLigthsPosition['position-x'],
          spotLigthsPosition['position-y'],
          spotLigthsPosition['position-z'],
        ]}
        target-position={
          new THREE.Vector3(
            -spotLigthsPosition['target-position-x'],
            spotLigthsPosition['target-position-y'],
            spotLigthsPosition['target-position-z'],
          )
        }
        castShadow
        shadow-mapSize={[
          aboutConstants.LIGHTS.LABORATOIRE.FINAL_RENDER.SPOT_LIGHTS
            .SHADOW_MAP_SIZE *
            aboutConstants.LIGHTS.LABORATOIRE.FINAL_RENDER.SPOT_LIGHTS.K,
          aboutConstants.LIGHTS.LABORATOIRE.FINAL_RENDER.SPOT_LIGHTS
            .SHADOW_MAP_SIZE *
            aboutConstants.LIGHTS.LABORATOIRE.FINAL_RENDER.SPOT_LIGHTS.K,
        ]}
        {...spotLigthsConfig}
      />
      <spotLight
        ref={spotLightCeilingSEtRef}
        position={[
          spotLigthsPosition['position-x'],
          spotLigthsPosition['position-y'],
          spotLigthsPosition['position-z'],
        ]}
        target-position={
          new THREE.Vector3(
            spotLigthsPosition['target-position-x'],
            spotLigthsPosition['target-position-y'],
            spotLigthsPosition['target-position-z'],
          )
        }
        castShadow
        shadow-mapSize={[
          aboutConstants.LIGHTS.LABORATOIRE.FINAL_RENDER.SPOT_LIGHTS
            .SHADOW_MAP_SIZE *
            aboutConstants.LIGHTS.LABORATOIRE.FINAL_RENDER.SPOT_LIGHTS.K,
          aboutConstants.LIGHTS.LABORATOIRE.FINAL_RENDER.SPOT_LIGHTS
            .SHADOW_MAP_SIZE *
            aboutConstants.LIGHTS.LABORATOIRE.FINAL_RENDER.SPOT_LIGHTS.K,
        ]}
        {...spotLigthsConfig}
      />
      {/* <CeilingLamp position={[0, 28.6, 0]} />
      <TableLamp position={[11.776, 1.012, -9.08]} /> */}
    </>
  )
}
