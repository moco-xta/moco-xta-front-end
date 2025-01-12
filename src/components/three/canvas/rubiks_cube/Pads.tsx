import React, { useRef } from 'react'
import * as THREE from 'three'

import type { TPads } from '@/types/components/three/types'

import { setPadRotation, setRoundedCubeType } from '@/helpers/rubiksCubeHelpers'
import Pad from './Pad'

export default function Pads({ coordinates, padIndexRef }: TPads) {
  const padRef = useRef<THREE.Mesh>(null!)

  return (
    <>
      {[...Array(setRoundedCubeType(coordinates))].map((_, index) => {
        const currentPadIndex = padIndexRef.current
        padIndexRef.current += 1

        return (
          <Pad
            key={`pad_${padIndexRef.current}`}
            ref={padRef}
            currentPadIndex={currentPadIndex}
            rotation={setPadRotation(coordinates, index)}
          />
        )
      })}
    </>
  )
}
