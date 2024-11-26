import React from 'react'
import * as THREE from 'three'

interface IphoneKeyboardTouch {
  position: THREE.Vector3
  map: THREE.Texture
}

export default function IphoneKeyboardTouch({ position, map }: IphoneKeyboardTouch) {
  return (
    <mesh position={position}>
      <circleGeometry
        attach={'geometry'}
        args={[0.5, 64]}
      />
      <meshStandardMaterial
        attach={'material'}
        map={map}
      />
    </mesh>
  )
}
