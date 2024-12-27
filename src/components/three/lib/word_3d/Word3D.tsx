import React, { forwardRef } from 'react'

import type { TWord3DData } from '@/types/animation/types'

import Letter3D from './Letter3D'

export const Word3D = forwardRef<THREE.Group, TWord3DData>(
  ({ position, splittedWord, children, ...rest }, ref) => {
    return (
      <group
        key={`word_3D_${rest.name}`}
        ref={ref}
        position={position}
      >
        {splittedWord.map((letter, index) => {
          return (
            <Letter3D
              key={`letter_3D_component_${rest.name}_${letter}_${index}`}
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
