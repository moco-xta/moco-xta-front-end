import React, { useEffect, useRef } from 'react'
import * as THREE from 'three'
import { PerspectiveCamera } from '@react-three/drei'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'
import { useLenis } from 'lenis/react'

import { default as heroConstants } from '@/constants/canvas/heroConstants.json'

export default function Camera() {
  const perspectiveCameraRef = useRef<THREE.PerspectiveCamera>(null!)

  const timelineRef = useRef<GSAPTimeline>(gsap.timeline())

  useEffect(() => {
    gsap.registerPlugin(useGSAP)
  }, [])

  useLenis((lenis) => {
    timelineRef.current.seek(
      (100 / (lenis.dimensions.scrollHeight - lenis.dimensions.height)) * lenis.scroll,
    )
  })

  useGSAP(() => {
    gsap.from(perspectiveCameraRef.current.position, {
      z: 11,
      duration: 1,
      delay: 5,
    })

    timelineRef.current
      .to(
        perspectiveCameraRef.current.position,
        { x: 2, duration: 55 /* ease: 'power1.out' */ },
        25,
      )
      .to(
        perspectiveCameraRef.current.position,
        { x: 5, duration: 20 /* ease: 'power1.out' */ },
        80,
      )
  })

  return (
    <PerspectiveCamera
      ref={perspectiveCameraRef}
      makeDefault
      position={[
        heroConstants.PERSPECTIVE_CAMERA.POSITION.X,
        heroConstants.PERSPECTIVE_CAMERA.POSITION.Y,
        heroConstants.PERSPECTIVE_CAMERA.POSITION.Z,
      ]}
      rotation={[
        THREE.MathUtils.degToRad(heroConstants.PERSPECTIVE_CAMERA.ROTATION.X),
        THREE.MathUtils.degToRad(heroConstants.PERSPECTIVE_CAMERA.ROTATION.Y),
        THREE.MathUtils.degToRad(heroConstants.PERSPECTIVE_CAMERA.ROTATION.Z),
      ]}
    />
  )
}
