import { Box } from '@react-three/drei'
import React, { createRef } from 'react'

export default function HeroScene() {
  const canvasRef = createRef()
  return <div ref={canvasRef}></div>
}
