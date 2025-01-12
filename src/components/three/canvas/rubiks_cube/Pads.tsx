import React, { Suspense, useRef } from 'react'
import { ErrorBoundary } from 'react-error-boundary'
import * as THREE from 'three'

import type { TPads } from '@/types/components/three/types'

import { setPadRotation, setRoundedCubeType } from '@/helpers/rubiksCubeHelpers'

import { lazyPads, padsData } from '@/data/skills/rubiks_cube/three/padsData'

function ErrorBoundaryWrapper({ children }: { children: React.ReactNode }) {
  return <ErrorBoundary fallback={null}>{children}</ErrorBoundary>
}

export default function Pads({ padIndexRef, coordinates }: TPads) {
  const padRef = useRef<THREE.Mesh>(null!)

  return (
    <>
      {[...Array(setRoundedCubeType(coordinates))].map((_, index) => {
        const currentColorPadIndex = padIndexRef.current
        padIndexRef.current += 1
        const Pad = lazyPads[currentColorPadIndex % padsData.lazy.models.length].model
        const name = lazyPads[currentColorPadIndex % padsData.lazy.models.length].componentName

        return (
          <ErrorBoundaryWrapper key={`error_boudary_wrapper_${name}_${currentColorPadIndex}`}>
            <Suspense fallback={null}>
              <Pad
                ref={padRef}
                key={`rubiks_cube_pad_${name}_${currentColorPadIndex}`}
                name={name}
                rotation={setPadRotation(coordinates, index)}
              />
            </Suspense>
          </ErrorBoundaryWrapper>
        )
      })}
    </>
  )
}
