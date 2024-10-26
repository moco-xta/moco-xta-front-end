import React, { useEffect, useRef } from 'react'
import * as THREE from 'three'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'
import { useLenis } from 'lenis/react'
import { PerspectiveCamera } from '@theatre/r3f'

import { default as heroConstants } from '@/constants/canvas/heroConstants.json'

export default function Camera() {
  const perspectiveCameraRef = useRef<THREE.PerspectiveCamera>(null!)

  // #################################
  // #################################
  // #################################

  /* useEffect(() => {
    gsap.registerPlugin(useGSAP)
  }, []) */

  /* const timelineRef = useRef<GSAPTimeline>(gsap.timeline()) */

  /* const lenis = useLenis() */

  /* const lenis = useLenis((lenis) => {
    timelineRef.current.seek(
      (100 / (lenis.dimensions.scrollHeight - lenis.dimensions.height)) * lenis.scroll,
    )
  }) */

  /* useGSAP(() => {
    gsap.from(perspectiveCameraRef.current.position, {
      z: 11,
      duration: 1,
      delay: 5,
    })

    timelineRef.current
      .to(perspectiveCameraRef.current.position, { x: 20, duration: 75, ease: 'sine.out' }, 25)
      .to(
        perspectiveCameraRef.current.rotation,
        { y: THREE.MathUtils.degToRad(45), duration: 75, ease: 'sine.out' },
        25,
      )
  }) */

  // #################################
  // #################################
  // #################################

  return (
    <PerspectiveCamera
      theatreKey='Camera'
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
      fov={heroConstants.PERSPECTIVE_CAMERA.FOV}
    />
  )
}
