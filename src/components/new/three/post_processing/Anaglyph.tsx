import React, { useEffect, useState } from 'react'
import { useFrame, useThree } from '@react-three/fiber'
// @ts-ignore
import { AnaglyphEffect } from 'three/examples/jsm/effects/AnaglyphEffect'

export default function Anaglyph({ enabled = false }) {
  const { gl, scene, camera, size } = useThree()

  const [effect] = useState(() => new AnaglyphEffect(gl))

  useEffect(() => void effect.setSize(size.width, size.height), [size])
  
  return useFrame(() => (enabled ? effect : gl).render(scene, camera), 1)
}
