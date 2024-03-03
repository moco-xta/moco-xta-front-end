'use client'

import React, { Suspense, useEffect, useRef } from 'react'
import * as THREE from 'three'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, PerspectiveCamera, Stars } from '@react-three/drei'
/* import gsap from 'gsap' */
import { useGSAP } from '@gsap/react'

import WebPage from '../../models/hero/WebPage'
import { degreesToRadians, radiansToDegrees } from '@/helpers/r3fHelpers'
import { gsap } from 'gsap/dist/gsap'
import { Flip } from 'gsap/dist/Flip'

gsap.registerPlugin(Flip)

const speedFactor: number = 10

export default function HeroCanvas() {
  const webPageRef = useRef<THREE.Group>()
  const gsapContainerRef = useRef<HTMLCanvasElement>()

  useEffect(() => {
    console.log(webPageRef)
  }, [webPageRef])

  const tl = gsap.timeline()
  tl.delay(1)

  useGSAP(
    () => {
      gsap.timeline({ repeat: 2, repeatDelay: 1 })
      if (webPageRef.current) {
        tl.to(
          webPageRef.current.getObjectByName('page')!.position,
          {
            x: 0,
            y: 0,
            z: 0,
            duration: 0.1 * speedFactor,
            ease: 'expo.in',
            /* ease: 'back.out(2.2)', */
          },
          /* '<', */
        )
        /* tl.to(
          webPageRef.current.getObjectByName('page')!.rotation,
          {
            x: 0,
            y: 0,
            z: 0,
            duration: 0.1 * speedFactor,
            ease: 'back.out(2.2)',
          },
          '<',
        ) */
        tl.to(
          webPageRef.current.scale,
          {
            x: 1,
            y: 1,
            z: 1,
            duration: 0.1 * speedFactor,
            ease: 'expo.out',
            /* ease: 'back.out(2.2)', */
          },
          '<',
        )
        tl.to(
          webPageRef.current.rotation,
          {
            x: 0,
            y: 0,
            z: 0,
            duration: 0.1 * speedFactor,
            ease: 'expo.out',
            /* ease: 'back.out(2.2)', */
          },
          '<',
          /* '<0.5', */
          /* `>${-0.05 * speedFactor}`, */
        )
      }
    },
    { scope: gsapContainerRef },
  )

  return (
    <Canvas
      dpr={1}
      shadows
      legacy
      gl={{
        antialias: true,
        alpha: true,
        powerPreference: 'high-performance',
        preserveDrawingBuffer: true,
      }}
      ref={gsapContainerRef as any}
    >
      <Suspense>
        <PerspectiveCamera
          makeDefault
          position={[0, 0, 15]}
          fov={30}
          near={0.1}
          far={70}
        />
        <OrbitControls />
        <group
          position={new THREE.Vector3(3, 0, 0)}
          rotation={new THREE.Euler(0, degreesToRadians(-45), 0)}
        >
          <pointLight
            position={new THREE.Vector3(4, 4, 4)}
            intensity={15}
          />
          <pointLight
            position={new THREE.Vector3(-4, 4, 4)}
            intensity={15}
          />
          <pointLight
            position={new THREE.Vector3(0, 0, 4)}
            intensity={15}
          />
          <WebPage ref={webPageRef} />
        </group>
        <Stars
          radius={100}
          depth={10}
          count={1000}
          factor={2}
          saturation={0}
          fade
          speed={1}
        />
      </Suspense>
    </Canvas>
  )
}
