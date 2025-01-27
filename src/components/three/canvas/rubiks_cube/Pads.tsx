import React, { Suspense, useRef } from 'react'
import { ErrorBoundary } from 'react-error-boundary'
import * as THREE from 'three'

import type { TPads } from '@/types/components/three/types'

import { getRotationAndMaterial, setRoundedCubeType } from '@/helpers/rubiksCubeHelpers'

import { lazyPads, padsData } from '@/data/skills/rubiks_cube/three/padsData'

function ErrorBoundaryWrapper({ children }: { children: React.ReactNode }) {
  return <ErrorBoundary fallback={null}>{children}</ErrorBoundary>
}

function RenderPad({
  index,
  padIndexRef,
  coordinates,
}: {
  index: number
  padIndexRef: React.MutableRefObject<number>
  coordinates: THREE.Vector3
}) {
  const padRef = useRef<THREE.Mesh>(null!)

  const currentColorPadIndex = padIndexRef.current
  padIndexRef.current += 1
  const Pad = lazyPads[currentColorPadIndex % padsData.lazy.models.length].model
  const name = lazyPads[currentColorPadIndex % padsData.lazy.models.length].componentName

  return (
    <ErrorBoundaryWrapper key={`error_boundary_wrapper_${name}_${currentColorPadIndex}`}>
      <Suspense fallback={null}>
        <Pad
          ref={padRef}
          key={`rubiks_cube_pad_${name}_${currentColorPadIndex}`}
          name={name}
          {...getRotationAndMaterial(coordinates, index)}
        />
      </Suspense>
    </ErrorBoundaryWrapper>
  )
}

export default function Pads({ padIndexRef, coordinates }: TPads) {
  return (
    <>
      {[...Array(setRoundedCubeType(coordinates))].map((_, index) => (
        <RenderPad
          key={index}
          index={index}
          padIndexRef={padIndexRef}
          coordinates={coordinates}
        />
      ))}
    </>
  )
}
