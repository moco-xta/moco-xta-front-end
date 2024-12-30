import React, { useLayoutEffect, useRef } from 'react'
import * as THREE from 'three'
import { Text3D } from '@react-three/drei'

import type { TLetter3DData } from '@/types/animation/three/types'

import { TLetter3D } from '@/types/three/lib/word3DTypes'

export default function Letter3D({
  name,
  font,
  size = 1,
  depth,
  spaceWidth = 0.25,
  lengthRef,
  letter,
  index,
  children,
}: TLetter3DData) {
  const letter3DRef = useRef<THREE.Mesh>(null!)

  useLayoutEffect(() => {
    if (letter3DRef.current && lengthRef) {
      if (letter !== ' ') {
        letter3DRef.current.geometry.computeBoundingBox()
        if (letter3DRef.current.geometry.boundingBox) {
          letter3DRef.current.position.x =
            lengthRef.current.reduce((a, b) => a + b, 0) -
            letter3DRef.current.geometry.boundingBox.min.x
          lengthRef.current.push(
            letter3DRef.current.geometry.boundingBox.max.x -
              letter3DRef.current.geometry.boundingBox.min.x +
              spaceWidth,
          )
        }
      } else {
        lengthRef.current.push(spaceWidth)
      }
    }
  }, [lengthRef, letter, letter3DRef, spaceWidth])

  return (
    <Text3D
      key={`letter_3D_${name}_${letter}_${index}`}
      ref={letter3DRef}
      font={font}
      size={size}
      scale={new THREE.Vector3(1, 1, depth ? depth : 1)}
      receiveShadow
      castShadow
    >
      {letter}
      {children}
    </Text3D>
  )
}
