import React, { forwardRef, useEffect, useRef } from 'react'

import Letter2D from './Letter2D'

interface Word2DInterface {
  keyPrefix: string
  splittedWord: string[]
  position?: THREE.Vector3
}

export const Word2D = forwardRef<THREE.Group, Word2DInterface>(function Word2D(
  { keyPrefix, splittedWord, position },
  wordGroupRef,
) {
  const lengthRef = useRef<number>(0)

  return (
    <group
      key={`word_2D_${keyPrefix}`}
      ref={wordGroupRef}
      position={position}
    >
      {splittedWord.map((letter, index) => {
        return (
          <Letter2D
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
