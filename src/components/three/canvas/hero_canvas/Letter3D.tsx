import React, { MutableRefObject, useEffect, useLayoutEffect, useRef } from 'react'
import * as THREE from 'three'
import { Text3D } from '@react-three/drei'

interface Letter3DInterface {
  keyPrefix: string
  font: string
  size?: number
  depth?: number
  letter: string
  spaceWidth?: number
  index?: number
  lengthRef?: MutableRefObject<number[]>
  children: JSX.Element
}

export default function Letter3D({
  keyPrefix,
  font,
  size,
  depth,
  letter,
  spaceWidth = 0.25,
  index,
  lengthRef,
  children,
}: Letter3DInterface) {
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
              0.05,
          )
        }
      } else {
        lengthRef.current.push(spaceWidth)
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
      {children}
    </Text3D>
  )
}
