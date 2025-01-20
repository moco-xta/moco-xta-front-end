import React, { Suspense, useEffect, useRef, useMemo, useLayoutEffect } from 'react'
import { ErrorBoundary } from 'react-error-boundary'
import * as THREE from 'three'

import type { TPads } from '@/types/components/three/types'

import { setPadColor, setPadRotation, setRoundedCubeType } from '@/helpers/rubiksCubeHelpers'

import { lazyPads, padsData } from '@/data/skills/rubiks_cube/three/padsData'

function ErrorBoundaryWrapper({ children }: { children: React.ReactNode }) {
  return <ErrorBoundary fallback={null}>{children}</ErrorBoundary>
}

function RenderPad({
  index,
  padIndexRef,
  coordinates,
  padRefs,
}: {
  index: number
  padIndexRef: React.MutableRefObject<number>
  coordinates: THREE.Vector3
  padRefs: React.MutableRefObject<(THREE.Mesh | null)[]>
}) {
  const currentColorPadIndex = padIndexRef.current
  padIndexRef.current += 1
  const Pad = lazyPads[currentColorPadIndex % padsData.lazy.models.length].model
  const name = lazyPads[currentColorPadIndex % padsData.lazy.models.length].componentName

  return (
    <ErrorBoundaryWrapper key={`error_boundary_wrapper_${name}_${currentColorPadIndex}`}>
      <Suspense fallback={null}>
        <Pad
          // @ts-expect-error: Error but good type
          ref={(el: THREE.Mesh) => (padRefs.current[index] = el)}
          key={`rubiks_cube_pad_${name}_${currentColorPadIndex}`}
          name={name}
          rotation={setPadRotation(coordinates, index)}
        />
      </Suspense>
    </ErrorBoundaryWrapper>
  )
}


export default function Pads({ padIndexRef, coordinates }: TPads) {
  const padRefs = useRef<(THREE.Mesh | null)[]>([])
  const padsColors = useMemo(() => padsData.defaultValues.material.colors, [])

  useEffect(() => {
    padRefs.current.forEach((ref) => {
      if (ref && ref.material instanceof THREE.MeshStandardMaterial) {
        ref.updateWorldMatrix(true, false)
        const normal = new THREE.Vector3(0, 1, 0)
        const euler = new THREE.Euler(ref.rotation.x, ref.rotation.y, ref.rotation.z, 'XYZ')
        normal.applyEuler(euler)
        ref.material.color.set(setPadColor(normal, padsColors))
      }
    })
  }, [padsColors])

  return (
    <>
      {[...Array(setRoundedCubeType(coordinates))].map((_, index) => (
        <RenderPad
          key={index}
          index={index}
          padIndexRef={padIndexRef}
          coordinates={coordinates}
          padsColors={padsColors}
          padRefs={padRefs}
        />
      ))}
    </>
  )
}
