import React from 'react'
import { OrbitControls } from '@react-three/drei'

export default function Controls() {
  return (
    <OrbitControls
      enableZoom={false}
      // autoRotate
      // autoRotateSpeed={0.75}
    />
  )
}
