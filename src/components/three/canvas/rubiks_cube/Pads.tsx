import React, { Suspense, useEffect, useRef, useMemo } from 'react'
import { ErrorBoundary } from 'react-error-boundary'
import * as THREE from 'three'

import type { TPads } from '@/types/components/three/types'

import { setPadColor, setPadRotation, setRoundedCubeType } from '@/helpers/rubiksCubeHelpers'

import { lazyPads, padsData } from '@/data/skills/rubiks_cube/three/padsData'

function ErrorBoundaryWrapper({ children }: { children: React.ReactNode }) {
  return <ErrorBoundary fallback={null}>{children}</ErrorBoundary>
}

export default function Pads({ padIndexRef, coordinates }: TPads) {
  const padRefs = useRef<(THREE.Mesh | null)[]>([])

  const padsColors = useMemo(() => padsData.defaultValues.material.colors, [])

  useEffect(() => {
    padRefs.current.forEach((ref) => {
      if (ref) {
        ref.updateWorldMatrix(true, false)
        const normal = new THREE.Vector3(0, 1, 0)
        const euler = new THREE.Euler(ref.rotation.x, ref.rotation.y, ref.rotation.z, 'XYZ')
        normal.applyEuler(euler)
        if (ref.material instanceof THREE.MeshStandardMaterial) {
          ref.material.color.set(setPadColor(normal, padsColors))
        }
      }
    })
  }, [padsColors])

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
                /* // @ts-ignore */
                ref={(el: THREE.Mesh) => (padRefs.current[index] = el)} // Set the pad reference
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
