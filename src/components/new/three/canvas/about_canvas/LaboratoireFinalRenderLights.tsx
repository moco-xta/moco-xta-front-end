import React, { useRef } from 'react'
import * as THREE from 'three'
import { useHelper } from '@react-three/drei'
import { useControls } from 'leva'

import { TableLamp } from '../../models/about/TableLamp'
import { CeilingLamp } from '../../models/about/CeilingLamp'

const K = 6
const MAP_SIZE = [1024 * K, 1024 * K]

export default function LaboratoireFinalRenderLights() {
  /* const directionalLightCeilingNWRef = useRef<THREE.DirectionalLight>(null!)
  const directionalLightCeilingNEtRef = useRef<THREE.DirectionalLight>(null!)
  const directionalLightCeilingSWtRef = useRef<THREE.DirectionalLight>(null!)
  const directionalLightCeilingSEtRef = useRef<THREE.DirectionalLight>(null!)
  useHelper(
    directionalLightCeilingNWRef,
    THREE.DirectionalLightHelper,
    1,
    'blue',
  )
  useHelper(
    directionalLightCeilingNEtRef,
    THREE.DirectionalLightHelper,
    1,
    'red',
  )
  useHelper(
    directionalLightCeilingSWtRef,
    THREE.DirectionalLightHelper,
    1,
    'hotpink',
  )
  useHelper(
    directionalLightCeilingSEtRef,
    THREE.DirectionalLightHelper,
    1,
    'green',
  ) */

  /* const directionalLigthsPosition = useControls('directionalLigthsPosition', {
    'position-x': { value: 5, min: 0, max: 40, step: 0.1 },
    'position-y': { value: 28, min: 0, max: 40, step: 0.1 },
    'position-z': { value: 3, min: 0, max: 40, step: 0.1 },
    'target-position-x': { value: 13, min: 0, max: 40, step: 0.1 },
    'target-position-y': { value: 0, min: 0, max: 40, step: 0.1 },
    'target-position-z': { value: 13, min: 0, max: 40, step: 0.1 },
  })

  const directionalLigthsConfig = useControls('directionalLigthsConfig', {
    color: '#ffffff',
    intensity: { value: 0.3, min: 0, max: 3, step: 0.1 },
    'shadow-camera-far': { value: 100, min: 0, max: 500, step: 10 },
    'shadow-camera-left': { value: -100, min: -500, max: 0, step: 10 },
    'shadow-camera-right': { value: 100, min: 0, max: 500, step: 10 },
    'shadow-camera-top': { value: 100, min: 0, max: 500, step: 10 },
    'shadow-camera-bottom': { value: -100, min: -500, max: 0, step: 10 },
    'shadow-radius': { value: 3, min: 0, max: 10, step: 0.01 },
    'shadow-bias': { value: 0.0001, min: 0, max: 0.1, step: 0.0001 },
  }) */

  const spotLightCeilingNWtRef = useRef<THREE.SpotLight>(null!)
  const spotLightCeilingNEtRef = useRef<THREE.SpotLight>(null!)
  const spotLightCeilingSWtRef = useRef<THREE.SpotLight>(null!)
  const spotLightCeilingSEtRef = useRef<THREE.SpotLight>(null!)
  /* useHelper(spotLightCeilingNWtRef, THREE.SpotLightHelper, 'orange')
  useHelper(spotLightCeilingNEtRef, THREE.SpotLightHelper, 'red')
  useHelper(spotLightCeilingSWtRef, THREE.SpotLightHelper, 'blue')
  useHelper(spotLightCeilingSEtRef, THREE.SpotLightHelper, 'hotpink') */

  const ambientLigthsConfig = useControls('AMBIENT LIGHTS: Config', {
    color: '#fcf8ef',
    intensity: { value: 0.25, min: 0, max: 10, step: 0.01 },
  })

  const spotLigthsPosition = useControls('SPOT LIGHTS: Position', {
    'position-x': { value: 5, min: 0, max: 40, step: 0.1 },
    'position-y': { value: 26.5, min: 0, max: 40, step: 0.1 },
    'position-z': { value: 3, min: 0, max: 40, step: 0.1 },
    'target-position-x': { value: 26.5, min: 0, max: 40, step: 0.1 },
    'target-position-y': { value: 0, min: 0, max: 40, step: 0.1 },
    'target-position-z': { value: 26.5, min: 0, max: 40, step: 0.1 },
  })

  const spotLigthsConfig = useControls('SPOT LIGHTS: Config', {
    color: '#ffffff',
    intensity: { value: 25, min: 0, max: 200, step: 0.01 },
    distance: { value: 52, min: 0, max: 100, step: 1 },
    angle: { value: 1.87, min: 0, max: 2, step: 0.01 },
    penumbra: { value: 0.9, min: 0, max: 2, step: 0.01 },
    decay: { value: 1.1, min: 0, max: 10, step: 0.1 },
  })

  return (
    <>
      <ambientLight {...ambientLigthsConfig} />
      {/* <directionalLight
        ref={directionalLightCeilingNWRef}
        position={[-directionalLigthsPosition['position-x'], directionalLigthsPosition['position-y'], -directionalLigthsPosition['position-z']]}
        target-position={new THREE.Vector3(-directionalLigthsPosition['target-position-x'], directionalLigthsPosition['target-position-y'], -directionalLigthsPosition['target-position-z'])}
        castShadow
        shadow-mapSize={MAP_SIZE}
        {...directionalLigthsConfig}
      />
      <directionalLight
        ref={directionalLightCeilingNEtRef}
        color={directionalLigthsConfig.color}
        position={[directionalLigthsPosition['position-x'], directionalLigthsPosition['position-y'], -directionalLigthsPosition['position-z']]}
        target-position={new THREE.Vector3(directionalLigthsPosition['target-position-x'], directionalLigthsPosition['target-position-y'], -directionalLigthsPosition['target-position-z'])}
        castShadow
        shadow-mapSize={MAP_SIZE}
        {...directionalLigthsConfig}
      />
      <directionalLight
        ref={directionalLightCeilingSWtRef}
        position={[-directionalLigthsPosition['position-x'], directionalLigthsPosition['position-y'], directionalLigthsPosition['position-z']]}
        target-position={new THREE.Vector3(-directionalLigthsPosition['target-position-x'], directionalLigthsPosition['target-position-y'], directionalLigthsPosition['target-position-z'])}
        castShadow
        shadow-mapSize={MAP_SIZE}
        {...directionalLigthsConfig}
      />
      <directionalLight
        ref={directionalLightCeilingSEtRef}
        position={[directionalLigthsPosition['position-x'], directionalLigthsPosition['position-y'], directionalLigthsPosition['position-z']]}
        target-position={new THREE.Vector3(directionalLigthsPosition['target-position-x'], directionalLigthsPosition['target-position-y'], directionalLigthsPosition['target-position-z'])}
        castShadow
        shadow-mapSize={MAP_SIZE}
        {...directionalLigthsConfig}
        /> */}
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
        shadow-mapSize={MAP_SIZE}
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
        shadow-mapSize={MAP_SIZE}
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
        shadow-mapSize={MAP_SIZE}
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
        shadow-mapSize={MAP_SIZE}
        {...spotLigthsConfig}
      />
      <CeilingLamp position={[0, 28.6, 0]} />
      <TableLamp position={[11.776, 1.012, -9.08]} />
    </>
  )
}
