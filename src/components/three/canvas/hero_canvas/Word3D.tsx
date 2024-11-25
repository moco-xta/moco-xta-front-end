import React, { forwardRef, useRef } from 'react'

import Letter3D from './Letter3D'

interface Word3DInterface {
  keyPrefix: string
  splittedWord: string[]
  position?: THREE.Vector3
}

export const Word3D = forwardRef<THREE.Group, Word3DInterface>(function Word3D(
  { keyPrefix, splittedWord, position },
  wordGroupRef,
) {
  const lengthRef = useRef<number>(0)

  return (
    <group
      key={`word_3D_${keyPrefix}`}
      ref={wordGroupRef}
      position={position}
    >
      {splittedWord.map((letter, index) => {
        return (
          <Letter3D
            keyPrefix={keyPrefix}
            letter={letter}
            index={index}
            lengthRef={lengthRef}
          />
        )
      })}
    </group>
  )
})
