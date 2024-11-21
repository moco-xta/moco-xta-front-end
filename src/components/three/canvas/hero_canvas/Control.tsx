import React, { useEffect, useRef } from 'react'
import * as THREE from 'three'
import { OrbitControls } from '@react-three/drei'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'

export default function Control() {
  const controlRef = useRef<any>(null!)

  useEffect(() => {
    console.log('controlRef', controlRef)
  }, [controlRef])

  /* useGSAP(() => {
    gsap.from(controlRef.current.target, {
      x: 10,
      duration: 10,
    })
  }) */

  return <OrbitControls ref={controlRef} />
}
