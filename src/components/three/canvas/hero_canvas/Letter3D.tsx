import React, { MutableRefObject, useEffect, useRef } from 'react'
import * as THREE from 'three'
import { Text3D } from '@react-three/drei'

interface Letter3DInterface {
  keyPrefix: string
  font: string
  size?: number
  depth?: number
  letter: string
  index: number
  lengthRef: MutableRefObject<number>
}

export default function Letter3D({
  keyPrefix,
  font,
  size,
  depth,
  letter,
  index,
  lengthRef,
}: Letter3DInterface) {
  const letter3DRef = useRef<THREE.Mesh>(null!)

  useEffect(() => {
    if (letter3DRef.current) {
      if (letter !== ' ') {
        letter3DRef.current.geometry.computeBoundingBox()
        if (letter3DRef.current.geometry.boundingBox) {
          letter3DRef.current.position.x =
            lengthRef.current - letter3DRef.current.geometry.boundingBox.min.x
          lengthRef.current +=
            letter3DRef.current.geometry.boundingBox.max.x -
            letter3DRef.current.geometry.boundingBox.min.x +
            0.05
        }
      } else {
        lengthRef.current += 0.5
      }
    }
  }, [letter3DRef])

  return (
    <Text3D
      ref={letter3DRef}
      key={`letter_3D_${keyPrefix}_${letter}_${index}`}
      font={font}
      size={size ? size : 1}
      scale={new THREE.Vector3(1, 1, depth ? depth : 1)}
      receiveShadow
      castShadow
    >
      {letter}
      <meshStandardMaterial
        color={'white'}
        transparent
      />
    </Text3D>
  )
}
