import { Text3D } from '@react-three/drei'
import React, { MutableRefObject, useEffect, useRef } from 'react'

interface Letter3DInterface {
  keyPrefix: string
  letter: string
  index: number
  lengthRef: MutableRefObject<number>
}

export default function Letter3D({ keyPrefix, letter, index, lengthRef }: Letter3DInterface) {
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
      font='fonts/json/Gilroy_Heavy.json'
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
