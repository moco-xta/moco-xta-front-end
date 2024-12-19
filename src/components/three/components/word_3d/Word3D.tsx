import React, { forwardRef, useEffect } from 'react'
import * as THREE from 'three'

import { TWord3D } from '@/types/three/word3DTypes'

import type { TGroup } from '@/types/animation/componentTypes'

import Letter3D from './Letter3D'

export const Word3D = forwardRef<TGroup, TWord3D>(function Word3D(
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
  ref,
) {
  useEffect(() => {
    // @ts-ignore
    if (ref.current && center) {
      const box3 = new THREE.Box3()
      // @ts-ignore
      box3.setFromObject(ref.current)
      // @ts-ignore
      ref.current.position.set(
        position ? -(box3.max.x - box3.min.x) / 2 + position.x : -(box3.max.x - box3.min.x) / 2,
        position ? -(box3.max.y - box3.min.y) / 2 + position.y : -(box3.max.y - box3.min.y) / 2,
        position ? -(box3.max.z - box3.min.z) / 2 + position.z : -(box3.max.z - box3.min.z) / 2,
      )
    }
  }, [center, position, ref])

  return (
    <group
      key={`word_3D_${keyPrefix}`}
      ref={ref}
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
