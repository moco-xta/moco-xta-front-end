import React, { forwardRef, MutableRefObject, useEffect, useRef } from 'react'
import * as THREE from 'three'
import { GroupProps } from '@react-three/fiber'
import Letter3D from './Letter3D'

interface Word3DInterface {
  keyPrefix: string
  font: string
  size?: number
  depth?: number
  spaceWidth?: number
  position?: THREE.Vector3
  center?: boolean
  splittedWord: string[]
  lengthRef?: MutableRefObject<number[]>
  children: JSX.Element
}

export const Word3D = forwardRef<THREE.Group, Word3DInterface>(function Word3D(
  {
    keyPrefix,
    font,
    size,
    depth,
    spaceWidth,
    splittedWord,
    position,
    center = false,
    lengthRef,
    children,
  },
  word3DGroupRef,
) {
  useEffect(() => {
    // @ts-ignore
    if (word3DGroupRef.current && center) {
      const box3 = new THREE.Box3()
      // @ts-ignore
      box3.setFromObject(word3DGroupRef.current)
      // @ts-ignore
      word3DGroupRef.current.position.set(
        position ? -(box3.max.x - box3.min.x) / 2 + position.x : -(box3.max.x - box3.min.x) / 2,
        position ? -(box3.max.y - box3.min.y) / 2 + position.y : -(box3.max.y - box3.min.y) / 2,
        position ? -(box3.max.z - box3.min.z) / 2 + position.z : -(box3.max.z - box3.min.z) / 2,
      )
    }
  }, [center, position, word3DGroupRef])

  return (
    <group
      key={`word_3D_${keyPrefix}`}
      ref={word3DGroupRef}
      position={position}
    >
      {splittedWord.map((letter, index) => {
        return (
          <Letter3D
            key={`letter_3D_component_${keyPrefix}_${letter}_${index}`}
            keyPrefix={keyPrefix}
            font={font}
            size={size}
            depth={depth}
            letter={letter}
            spaceWidth={spaceWidth}
            index={index}
            lengthRef={lengthRef}
          >
            {children}
          </Letter3D>
        )
      })}
    </group>
  )
})
