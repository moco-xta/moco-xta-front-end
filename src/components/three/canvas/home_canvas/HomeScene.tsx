import React, { useEffect, useLayoutEffect, useRef } from 'react'
import * as THREE from 'three'
import { useFrame, useThree } from '@react-three/fiber'
import { Billboard, Environment, Float, Sky, Text, useHelper, useScroll } from '@react-three/drei'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import { Building001 } from '../../models/home/buildings/Building001'
import { Building002 } from '../../models/home/buildings/Building002'
import { TruckRed } from '../../models/home/trucks/TruckRed'
import { TruckWhite } from '../../models/home/trucks/TruckWhite'

import { default as imgConstants } from '@/constants/assets/imgConstants.json'
import { Bench001 } from '../../models/home/street_fournitures/Bench001'
import { PlaneTree001 } from '../../models/home/vegetation/PlaneTree001'
import Particles from './Particles'
import { Building001Wall } from '../../models/home/buildings/Building001Wall'
import { ExoMarket } from '../../models/home/buildings/ExoMarket'

gsap.registerPlugin(useGSAP)

export default function HomeScene() {
  const { camera } = useThree()
  /* const scroll = useScroll() */
  /* const tl = useRef<GSAPTimeline>(null!) */

  useEffect(() => {
    /* console.log('camera', camera) */
  }, [camera])

  useFrame(({ camera }, delta, xrFrame) => {
    /* tl.current.seek(scroll.offset * tl.current.duration()) */
    /* console.log('camera.position', camera.position) */
  })

  useGSAP(() => {
    gsap.from(camera.position, {
      z: 11,
      duration: 1,
      delay: 4,
    })
    /* gsap.from('#box_test_first_section', {
      x: 200,
      rotation: 360,
      duration: 2,
      delay: 5,
    }) */
    /* gsap.from('#box_test_second_section', {
      x: 200,
      rotation: 360,
      duration: 2,
      scrollTrigger: {
        trigger: '.trigger',
        start: 'top 25%'
      },
    }) */

    /* tl.current = gsap.timeline({ defaults: { duration: 2 , ease: 'power1.inOut' } }) */

    /* tl.current */
    /* .to(camera.position, { x: 1 }, 1) */
    /* .to(camera.rotation, {y: -1}, 2) */
    /* .to(camera.position, {x: 1}, 2) */

    /* .to(robot.current.rotation, {y: 1}, 6)    */
    /* .to(camera.position, { x: -1 }, 6) */

    /* .to(robot.current.rotation, {y: 0}, 11)
    .to(robot.current.rotation, {x: 1}, 11) */
    /* .to(camera.position, { x: 0 }, 11) */

    /* .to(robot.current.rotation, {y: 0}, 13)
    .to(robot.current.rotation, {x: -1}, 13)     */
    /* .to(camera.position, { x: 0 }, 13) */

    /* .to(robot.current.rotation, {y: 0}, 16)   
    .to(robot.current.rotation, {x: 0}, 16)  */
    /* .to(camera.position, { x: 0 }, 16) */

    /* .to(robot.current.rotation, {y: 0}, 20)   
    .to(robot.current.rotation, {x: 0}, 20)  */
    /* .to(camera.position, { x: 0 }, 20) */
  })

  return (
    <>
      {/* <Float
        rotation={[-0.8, 0, -Math.PI / 2.5]}
        floatIntensity={4}
        rotationIntensity={4}
      > */}
      <Building001Wall />
      {/* <ExoMarket /> */}
      {/* <Building001 />
        <Building002 />
        <TruckRed />
        <TruckWhite />
        <Bench001 />
        <PlaneTree001 /> */}
      {/* <hemisphereLight /> */}
      {/* <spotLight
        color={0xffa95c}
        intensity={200}
        castShadow
        position={[10, 10, 10]}
        rotation={new THREE.Euler(THREE.MathUtils.degToRad(30), THREE.MathUtils.degToRad(0), THREE.MathUtils.degToRad(20))}
      /> */}
      {/* </Float> */}

      {/* <Particles particlesCount={100} /> */}

      <Billboard>
        <Text
          position={[0, 25, 0]}
          rotation={[0, 0, 0]}
          fontSize={5}
          letterSpacing={2}
          color='#ff0000'
        >
          Text
        </Text>
      </Billboard>
      {/* <Sky
        turbidity={8}
        rayleigh={6}
        mieCoefficient={0.005}
        mieDirectionalG={0.8}
        sunPosition={[1, 0, 0]}
        distance={450000}
        inclination={0}
        azimuth={0}
      /> */}
      {/* <Environment files={imgConstants.HDRS.HOME_ENVIRONMENT} /> */}
    </>
  )
}
