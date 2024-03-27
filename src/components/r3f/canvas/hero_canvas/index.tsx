'use client'

import React, { Suspense, useEffect, useRef } from 'react'
import * as THREE from 'three'
import { Canvas, useThree } from '@react-three/fiber'
import {
  Environment,
  PerspectiveCamera,
  Plane,
} from '@react-three/drei'
import { Physics, RigidBody } from '@react-three/rapier'

import { MHeliumBalloon } from '../../models/hero/MHeliumBalloon'
import { OHeliumBalloon } from '../../models/hero/OHeliumBalloon'
import { CHeliumBalloon } from '../../models/hero/CHeliumBalloon'

import { degreesToRadians } from '@/helpers/r3fHelpers'
import useMouseMove from '@/hooks/useMouseMove'

function HeroScene() {
  const occupySpaceRef = useRef<THREE.Mesh>(null!)
  const mRef = useRef(null!)
  const o1Ref = useRef(null!)
  const cRef = useRef(null!)
  const o2Ref = useRef(null!)

  const { gl } = useThree()
  gl.toneMapping = THREE.ACESFilmicToneMapping
  gl.toneMappingExposure = 6

  const { deltaX, deltaY } = useMouseMove()

  useEffect(() => {
    if (mRef.current) {
      if (deltaX > 0)
        // @ts-ignore
        mRef.current.applyImpulse({ x: deltaX * 0.01, y: -deltaY * 0.01, z: 0 })
      if (deltaX < 0)
        // @ts-ignore
        o2Ref.current.applyImpulse({
          x: deltaX * 0.01,
          y: -deltaY * 0.01,
          z: 0,
        })
    }
  }, [deltaX, deltaY])

  const width = 2.45
  const height = 1.1
  /* const height = 3.3 */
  const depth = 0.83
  const rotation = 33
  const opacity = 0

  return (
    <>
      {/* <group position={[0, - (height / 2) + 0.55, 0]}> */}
      <RigidBody type='fixed'>
        <Plane
          args={[width, depth]}
          position={[0, height / 2, 0]}
          rotation={[degreesToRadians(90), 0, 0]}
        >
          <meshStandardMaterial
            transparent
            opacity={opacity}
          />
        </Plane>
      </RigidBody>
      <RigidBody type='fixed'>
        <Plane
          args={[width, height]}
          position={[0, -height / 2, 0]}
          rotation={[degreesToRadians(90), 0, 0]}
        >
          <meshStandardMaterial
            transparent
            opacity={opacity}
          />
        </Plane>
      </RigidBody>
      <RigidBody type='fixed'>
        <Plane
          args={[width, height]}
          position={[0, 0, -depth / 2]}
        >
          <meshStandardMaterial
            transparent
            opacity={opacity}
          />
        </Plane>
      </RigidBody>
      <RigidBody type='fixed'>
        <Plane
          args={[width, height]}
          position={[0, 0, depth / 2]}
        >
          <meshStandardMaterial
            transparent
            opacity={opacity}
          />
        </Plane>
      </RigidBody>
      <RigidBody type='fixed'>
        <Plane
          args={[depth, height]}
          position={[-width / 2, 0, 0]}
          rotation={[0, degreesToRadians(90), 0]}
        >
          <meshStandardMaterial
            transparent
            opacity={opacity}
          />
        </Plane>
      </RigidBody>
      <RigidBody type='fixed'>
        <Plane
          args={[depth, height]}
          position={[width / 2, 0, 0]}
          rotation={[0, degreesToRadians(-90), 0]}
        >
          <meshStandardMaterial
            transparent
            opacity={opacity}
          />
        </Plane>
      </RigidBody>
      {/* </group> */}

      <RigidBody
        ref={mRef}
        colliders='hull'
      >
        <MHeliumBalloon
          position={[-0.96, 0, 0]}
          rotation={[0, degreesToRadians(rotation), 0]}
        />
      </RigidBody>
      <RigidBody
        ref={o1Ref}
        colliders='hull'
      >
        <OHeliumBalloon
          position={[-0.32, 0, 0]}
          rotation={[0, degreesToRadians(rotation), 0]}
        />
      </RigidBody>
      <RigidBody
        ref={cRef}
        colliders='hull'
      >
        <CHeliumBalloon
          position={[0.32, 0, 0]}
          rotation={[0, degreesToRadians(rotation), 0]}
        />
      </RigidBody>
      <RigidBody
        ref={o2Ref}
        colliders='hull'
      >
        <OHeliumBalloon
          position={[0.96, 0, 0]}
          rotation={[0, degreesToRadians(rotation), 0]}
        />
      </RigidBody>
      {/* <MHeliumBalloon position={[-0.96, -1.5, 0]} rotation={[0, degreesToRadians(rotation), 0]} />
      <OHeliumBalloon position={[-0.32, -1.5, 0]} rotation={[0, degreesToRadians(rotation), 0]} />
      <CHeliumBalloon position={[0.32, -1.5, 0]} rotation={[0, degreesToRadians(rotation), 0]} />
      <OHeliumBalloon position={[0.96, -1.5, 0]} rotation={[0, degreesToRadians(rotation), 0]} /> */}
    </>
  )
}

export default function HeroCanvas() {
  return (
    <Canvas
      dpr={1}
      shadows
      legacy={false}
      linear
      flat
      gl={{
        antialias: true,
        alpha: true,
        preserveDrawingBuffer: true,
      }}
    >
      <PerspectiveCamera
        makeDefault
        position={[-0.1, 0, 2.6]}
        fov={30}
        near={0.1}
        far={55}
      />
      {/* <OrbitControls /> */}
      <pointLight
        position={[5, 5, 5]}
        intensity={1}
        castShadow
      />
      <pointLight
        position={[-5, 5, 5]}
        intensity={1}
        castShadow
      />
      <pointLight
        position={[-0, -3, 5]}
        intensity={1}
        castShadow
      />
      <Suspense>
        <Physics /* debug */ gravity={[0, 0.05, 0]}>
          <Environment
            files='/img/hdr/peppermint_powerplant_2_1k.hdr'
            encoding={THREE.LinearEncoding}
          />
          <HeroScene />
        </Physics>
      </Suspense>
    </Canvas>
  )
}
