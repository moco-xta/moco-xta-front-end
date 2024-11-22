import React, { useEffect, useRef } from 'react'
import * as THREE from 'three'
import { OrbitControls } from '@react-three/drei'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'

export default function Control() {
  const controlRef = useRef<any>(null!)

  return <OrbitControls ref={controlRef} />
}
