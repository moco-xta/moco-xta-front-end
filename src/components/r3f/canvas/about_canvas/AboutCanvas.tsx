import React, { Suspense, useEffect, useMemo, useState } from 'react'
import * as THREE from 'three'
import { Canvas, useThree } from '@react-three/fiber'
import {
  Box,
  DeviceOrientationControls,
  KeyboardControls,
  MeshTransmissionMaterial,
  PerspectiveCamera,
  Plane,
  PointerLockControls,
} from '@react-three/drei'
import { Physics, RigidBody } from '@react-three/rapier'
import { isMobile } from 'react-device-detect'

import Player from '../../controls/Player'

import { Parquet, Trestle } from '../../models/about'

import { default as controlsConstants } from '@/constants/controlsConstants.json'
import { degreesToRadians } from '@/helpers/r3fHelpers'
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

function AboutScene() {
  const { gl } = useThree()
  gl.toneMappingExposure = 1.5

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
        rotation={[0, degreesToRadians(180), 0]}
      />
      <Parquet />
      {/* <RigidBody colliders='hull'>
        <Plane
          args={[50, 50, 20, 20]}
          rotation={[degreesToRadians(90), 0, 0]}
        />
      </RigidBody> */}
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

// @ts-ignore
function Accelerometer({ permissionGranted, setPermissionGranted }) {
  useEffect(() => {
    // @ts-ignore
    if (typeof DeviceMotionEvent.requestPermission === 'function') {
      // @ts-ignore
      DeviceMotionEvent.requestPermission()
        .then((permissionState: any) => {
          if (permissionState === 'granted') {
            setPermissionGranted(true)
          }
        })
        .catch(console.error)
    } else {
      setPermissionGranted(true)
    }

    return () => {}
  })

  function handlePermissionGranted() {
    // @ts-ignore
    DeviceMotionEvent.requestPermission()
      .then((permissionState: any) => {
        if (permissionState === 'granted') {
          setPermissionGranted(true)
          window.location.reload()
        }
      })
      .catch(console.error)
  }

  return (
    <>
      {permissionGranted ? null : (
        <div
          className='accelerometer-modal'
          id='modal'
        >
          <div>
            <h2>Allow access to device motion and orientation</h2>
            <p>
              This app requires access to device motion and orientation to
              function properly.
            </p>
            <button
              className='btn'
              onClick={handlePermissionGranted}
            >
              Grant Permission
            </button>
          </div>
        </div>
      )}
    </>
  )
}

export default function AboutCanvas() {
  const [permissionGranted, setPermissionGranted] = useState(false)

  const keyboardControlsMap = useMemo(
    () => [
      { name: controlsConstants.FORWARD, keys: controlsConstants.FORWARD_KEYS },
      {
        name: controlsConstants.BACKWARD,
        keys: controlsConstants.BACKWARD_KEYS,
      },
      { name: controlsConstants.LEFT, keys: controlsConstants.LEFT_KEYS },
      { name: controlsConstants.RIGHT, keys: controlsConstants.RIGHT_KEYS },
      { name: controlsConstants.JUMP, keys: controlsConstants.JUMP_KEY },
    ],
    [],
  )

  return (
    <>
      {permissionGranted ? (
        <Canvas
          shadows
          legacy
          gl={{
            antialias: true,
            alpha: true,
            powerPreference: 'high-performance',
            /* shadowMapEnabled: true */
          }}
        >
          <PerspectiveCamera
            makeDefault
            aspect={1200 / 600}
            fov={55}
            position={[0, 13, 0]}
            rotation={[0, THREE.MathUtils.degToRad(180), 0]}
            /* onUpdate={(self) => {
              if(!isMobile) self.updateProjectionMatrix()
            }} */
          />
          {/* {!isMobile && <PointerLockControls selector='#button' />} */}
          <DeviceOrientationControls />
          <ambientLight intensity={0.5} />
          <pointLight
            position={[10, 10, 10]}
            intensity={20}
            castShadow
          />
          <Suspense fallback={null}>
            {/* <Physics debug>
              {!isMobile && <Player />} */}
            <AboutScene />
            {/* </Physics> */}
          </Suspense>
        </Canvas>
      ) : (
        <Accelerometer
          permissionGranted={permissionGranted}
          setPermissionGranted={setPermissionGranted}
        />
      )}
    </>
  )
}
