import React, { MutableRefObject, useEffect, useLayoutEffect, useRef } from 'react'
import { Text } from '@react-three/drei'

interface Letter2DInterface {
  keyPrefix: string
  letter: string
  index: number
  lengthRef: MutableRefObject<number>
}

export default function Letter2D({ keyPrefix, letter, index, lengthRef }: Letter2DInterface) {
  const letter2DRef = useRef<THREE.Mesh>(null!)

  const setPosition = (letter: string) => {
    /* console.log('letter', letter) */
    if (letter2DRef.current) {
      /* if (letter !== ' ') { */
      console.log(lengthRef.current)
      if (letter2DRef.current.geometry.boundingBox) {
        letter2DRef.current.position.x =
          lengthRef.current - letter2DRef.current.geometry.boundingBox.min.x
        lengthRef.current +=
          letter2DRef.current.geometry.boundingBox.max.x -
          letter2DRef.current.geometry.boundingBox.min.x +
          0.05
      }
      /* } else {
        lengthRef.current += 0.5
      } */
    }
  }

  useEffect(() => {
    console.log('letter useEffect', letter)
    if (letter === ' ') {
      lengthRef.current += 0.5
    }
  }, [letter])

  const fontProps = {
    font: '/fonts/ttf/Gilroy/Gilroy-Black.ttf',
    fontSize: 1,
    // letterSpacing: -0.05,
    lineHeight: 1,
    'material-toneMapped': false,
  }

  return (
    <>
      {letter !== ' ' && (
        <Text
          ref={letter2DRef}
          key={`letter_2D_${keyPrefix}_${letter}_${index}`}
          color='white'
          anchorX='center'
          anchorY='middle'
          {...fontProps}
          onSync={() => setPosition(letter)}
        >
          {letter}
          <meshStandardMaterial
            color={'white'}
            transparent
          />
        </Text>
      )}
    </>
  )
}
