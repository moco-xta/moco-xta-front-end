import React, { forwardRef, useEffect, useLayoutEffect, useRef, useState } from 'react'
import * as THREE from 'three'

import Letter3D from './Letter3D'

interface Word3DInterface {
  keyPrefix: string
  font: string
  size?: number
  depth?: number
  splittedWord: string[]
  position?: THREE.Vector3
  center?: boolean
}

export const Word3D = forwardRef<THREE.Group, Word3DInterface>(function Word3D(
  { keyPrefix, font, size, depth, splittedWord, position, center = false },
  word3DGroupRef,
) {
  const lengthRef = useRef<number>(0)

  const [centeredPosition, setCenteredPosition] = useState<THREE.Vector3>(
    new THREE.Vector3(0, 0, 0),
  )

  useEffect(() => {
    // @ts-ignore
    if (word3DGroupRef.current && center) {
      const box3 = new THREE.Box3()
      // @ts-ignore
      box3.setFromObject(word3DGroupRef.current)
      // @ts-ignore
      word3DGroupRef.current.position.set(
        -(box3.max.x - box3.min.x) / 2,
        -(box3.max.y - box3.min.y) / 2,
        -(box3.max.z - box3.min.z) / 2,
      )
      /* setCenteredPosition(new THREE.Vector3(
      -(box3.max.x - box3.min.x) / 2,
      -(box3.max.y - box3.min.y) / 2,
      -(box3.max.z - box3.min.z) / 2,
     )) */
    }
  }, [word3DGroupRef])

  return (
    <group
      key={`word_3D_${keyPrefix}`}
      ref={word3DGroupRef}
      position={centeredPosition}
    >
      {splittedWord.map((letter, index) => {
        return (
          <Letter3D
            keyPrefix={keyPrefix}
            font={font}
            size={size}
            depth={depth}
            letter={letter}
            index={index}
            lengthRef={lengthRef}
          />
        )
      })}
    </group>
  )
})
