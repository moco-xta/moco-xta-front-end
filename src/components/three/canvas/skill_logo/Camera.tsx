import React, { useRef } from 'react'
import * as THREE from 'three'
import { PerspectiveCamera } from '@react-three/drei'
import { cameraDefaultValues } from '@/data/skills/skill_logo/three/cameraData'

export default function Camera() {
  const cameraRef = useRef<THREE.PerspectiveCamera>(null!)

  return (
    <PerspectiveCamera
      ref={cameraRef}
      {...cameraDefaultValues.defaultValues.camera}
    />
  )
}
