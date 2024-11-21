import React, { useEffect, useRef } from 'react'
import * as THREE from 'three'
import { Center, Grid, Html, Plane, Text3D } from '@react-three/drei'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'

import { ExoMarket } from '../../models/home/buildings/ExoMarket'
import { ExoMarketShutter } from '../../models/home/buildings/ExoMarketShutter'
import { Ganesh } from '../../models/home/buildings/Ganesh'

import variables from '@/styles/variables.module.scss'

export default function HomeScene() {
  const groupRef = useRef<THREE.Group>(null!)
  const creativeTextRef = useRef<HTMLParagraphElement>(null!)
  // const creativeTextRef = useRef<THREE.Mesh>(null!)

  useEffect(() => {
    console.log('creativeTextRef', creativeTextRef)
  }, [creativeTextRef])

  const groundMaterial = new THREE.MeshStandardMaterial({
    color: variables.grey_darker,
    roughness: 1,
  })

  const timeline = gsap.timeline()

  /* useGSAP(() => {
    timeline.from(creativeTextRef.current.style.position, {
      x: 20,
      y: 10,
      z: 0,
      stagger: 0.5,
      duration: 5,
      ease: 'power2.out',
    })
  }) */

  return (
    <>
      <ExoMarket />
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
        args={[20, 20]}
        rotation={new THREE.Euler(THREE.MathUtils.degToRad(-90))}
        material={groundMaterial}
        receiveShadow
      />
      {/* <Html
        as='div'
        prepend
        center
        // fullscreen
        transform
        occlude
        material={
          <meshPhysicalMaterial
            side={THREE.DoubleSide} // Required
            opacity={0.1} // Degree of influence of lighting on the HTML
          />
        }
      >
        <p ref={creativeTextRef}>CREATIVE</p>
      </Html> */}
      {/* <group ref={groupRef}>
        {creativeTextRef.current.map((letter, index) => {
          return (
            <Text3D
              key={`skill_${letter}_${index}`}
              curveSegments={32}
              bevelEnabled
              bevelSize={0.04}
              bevelThickness={0.1}
              height={0.5}
              lineHeight={0.5}
              // letterSpacing={-0.06}
              size={1.5}
              font='fonts/json/Inter_Bold.json'
            >
              {letter}
              <meshNormalMaterial />
            </Text3D>
          )
        })}
      </group> */}
      {/* <Text3D
        ref={creativeTextRef}
        key={`skill_creative`}
        curveSegments={32}
        bevelEnabled
        bevelSize={0.04}
        bevelThickness={0.1}
        height={0.5}
        lineHeight={0.5}
        // letterSpacing={-0.06}
        size={1.5}
        font='fonts/json/Inter_Bold.json'
      >
        CREATIVE
        <meshBasicMaterial />
      </Text3D> */}
      {/* <Ganesh
        position={[-15, 0, -20]}
        rotation={new THREE.Euler(0, THREE.MathUtils.degToRad(33), 0)}
        scale={[0.3, 0.3, 0.3]}
      /> */}
      {/* <Ganesh
        position={[15, 0, -20]}
        rotation={new THREE.Euler(0, THREE.MathUtils.degToRad(-33), 0)}
        scale={[-0.3, 0.3, 0.3]}
      /> */}
      {/* <Box
        args={[3, 20, 3]}
        position={[0, 10, -20]}
        rotation={[0, THREE.MathUtils.radToDeg(33), 0]}
        receiveShadow
        castShadow
      /> */}
    </>
  )
}
