'use client'

import React, { Suspense, useEffect, useRef } from 'react'
import * as THREE from 'three'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, PerspectiveCamera, Stars } from '@react-three/drei'
import { useControls } from 'leva'
/* import gsap from 'gsap' */
import { gsap } from 'gsap/dist/gsap'
import { Flip } from 'gsap/dist/Flip'
import { useGSAP } from '@gsap/react'

import WebPage from '../../models/hero/WebPage'
import { degreesToRadians, radiansToDegrees } from '@/helpers/r3fHelpers'

gsap.registerPlugin(Flip)

const SPEED_FACTOR: number = 5

export default function HeroCanvas() {
  const webPageRef = useRef<THREE.Group>()
  const gsapContainerRef = useRef<HTMLCanvasElement>()

  /* const controls = useControls({
    intensityLightTopLeft: { value: 10, min: 0, max: 100, step: 0.1 },
    intensityLightTopRight: { value: 10, min: 0, max: 100, step: 0.1 },
    intensityLightFront: { value: 10, min: 0, max: 100, step: 0.1 },
  }) */

  useEffect(() => {
    console.log(webPageRef)
  }, [webPageRef])

  const tl = gsap.timeline({
    onComplete: () => {
      console.log('test')
    },
    repeat: -1,
    repeatDelay: 1,
  })
  tl.delay(1)

  useGSAP(
    () => {
      if (!webPageRef.current) return
      /* tl.fromTo(webPageRef.current.position,
        {
          z: -2,
        },
        {
          z: 0,
          duration: 0.1 * SPEED_FACTOR,
          ease: 'expo.in',
        }
      ), */
      tl.fromTo(
        webPageRef.current.scale,
        {
          x: 0,
          y: 0,
          z: 0,
        },
        {
          x: 1,
          y: 1,
          z: 1,
          duration: 0.1 * SPEED_FACTOR,
          ease: 'expo.in',
        },
        /* '<' */
      ),
        tl.fromTo(
          [
            // @ts-ignore
            webPageRef.current.children[0].material,
            // @ts-ignore
            webPageRef.current.children[1].material,
            // @ts-ignore
            webPageRef.current.children[2].material,
            // @ts-ignore
            webPageRef.current.children[3].material,
            // @ts-ignore
            webPageRef.current.children[4].material,
          ],
          { opacity: 0 },
          {
            opacity: 1,
            duration: 0.05 * SPEED_FACTOR,
            /* ease: 'expo.in', */
          },
          '<',
        ),
        // @ts-ignore
        tl.fromTo(
          [
            // @ts-ignore
            webPageRef.current.children[0].rotation,
            // @ts-ignore
            webPageRef.current.children[1].rotation,
            // @ts-ignore
            webPageRef.current.children[2].rotation,
            // @ts-ignore
            webPageRef.current.children[3].rotation,
            // @ts-ignore
            webPageRef.current.children[4].rotation,
          ],
          {
            x: degreesToRadians(-30),
            y: 0,
            z: 0,
          },
          {
            x: 0,
            y: 0,
            z: 0,
            duration: 0.1 * SPEED_FACTOR,
            ease: 'expo.in',
          },
          /* '<0.3' */
          `<${0.02 * SPEED_FACTOR}`,
        ),
        tl.to(
          [
            // @ts-ignore
            webPageRef.current.children[0].material,
            // @ts-ignore
            webPageRef.current.children[1].material,
            // @ts-ignore
            webPageRef.current.children[2].material,
            // @ts-ignore
            webPageRef.current.children[3].material,
            // @ts-ignore
            webPageRef.current.children[4].material,
          ],
          {
            opacity: 0,
            duration: 0.1 * SPEED_FACTOR,
            /* ease: 'expo.in', */
          },
          '>2',
        )
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
        {/* <OrbitControls /> */}
        <group
          position={new THREE.Vector3(3, 0, 0)}
          rotation={new THREE.Euler(0, degreesToRadians(-45), 0)}
        >
          <pointLight
            position={new THREE.Vector3(4, 4, 4)}
            /* intensity={controls.intensityLightTopLeft} */
            intensity={10}
            castShadow
          />
          <pointLight
            position={new THREE.Vector3(-4, 4, 4)}
            /* intensity={controls.intensityLightTopRight} */
            intensity={10}
            castShadow
          />
          <pointLight
            position={new THREE.Vector3(0, 0, 4)}
            /* intensity={controls.intensityLightFront} */
            intensity={10}
            castShadow
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
