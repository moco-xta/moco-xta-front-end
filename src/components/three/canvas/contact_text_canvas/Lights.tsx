import { useRef } from 'react'
import * as THREE from 'three'
import { useHelper } from '@react-three/drei'
import { useControls } from 'leva'

export function Lights() {
  const pointLightRef = useRef<THREE.PointLight>(null!)

  useHelper(pointLightRef, THREE.PointLightHelper, 0.7, 'cyan')

  const config = useControls('Lights', {
    color: '#ffffff',
    intensity: {
      value: 30,
      min: 0,
      max: 5000,
      step: 0.01,
    },
    distance: {
      value: 12,
      min: 0,
      max: 100,
      step: 0.1,
    },
    decay: {
      value: 1,
      min: 0,
      max: 5,
      step: 0.1,
    },
    position: {
      value: [2, 4, 6],
    },
  })
  return (
    <pointLight
      ref={pointLightRef}
      {...config}
    />
  )
}
