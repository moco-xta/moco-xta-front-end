import React, { forwardRef } from 'react'

import type { TGroup } from '@/types/animation/three/componentTypes'
import type { TWord3D } from '@/types/three/lib/word3DTypes'

import Letter3D from './Letter3D'

export const Word3D = forwardRef<TGroup, TWord3D>(
  ({ keySuffix, position, splittedWord, children, ...rest }, ref) => {
    return (
      <group
        key={`word_3D_${keySuffix}`}
        ref={ref}
        position={position}
      >
        {splittedWord.map((letter, index) => {
          return (
            <Letter3D
              key={`letter_3D_component_${keySuffix}_${letter}_${index}`}
              keySuffix={keySuffix}
              {...rest}
              letter={letter}
              index={index}
            >
              {children}
            </Letter3D>
          )
        })}
      </group>
    )
  },
)
