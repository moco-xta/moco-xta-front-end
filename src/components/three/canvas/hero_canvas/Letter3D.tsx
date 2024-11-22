import { Text3D } from '@react-three/drei'
import React, { useEffect, useRef } from 'react'
import * as THREE from 'three'

interface Letter3DInterface {
  index: number
  letter: string
  positionX: number
  handleSetCreativeLength: (index: number, length: number) => void
}

export default function Letter3D({
  index,
  letter,
  positionX,
  handleSetCreativeLength,
}: Letter3DInterface) {
  const letter3DRef = useRef<THREE.Mesh>(null!)

  useEffect(() => {
    if (letter3DRef.current) {
      letter3DRef.current.geometry.computeBoundingBox()
      console.log(
        'letter3DRef.current.geometry.boundingBox',
        letter3DRef.current.geometry.boundingBox,
      )
    }
  }, [letter3DRef])

  return (
    <Text3D
      ref={letter3DRef}
      key={`creative_letter_${letter}_${index}`}
      position={[0, 0, 0]}
      font='fonts/json/Inter_Bold.json'
      receiveShadow
      castShadow
    >
      {letter}
      <meshStandardMaterial color={'white'} />
    </Text3D>
  )
}
