import { MeshProps } from '@react-three/fiber'
import React from 'react'
import * as THREE from 'three'

interface IphoneKeyboardTouch extends MeshProps {
  map: THREE.Texture
  children: JSX.Element
}

export default function IphoneKeyboardTouch({ map, children, ...props }: IphoneKeyboardTouch) {
  return (
    <mesh {...props}>
      <circleGeometry
        attach={'geometry'}
        args={[0.5, 64]}
      />
      {children}
    </mesh>
  )
}
