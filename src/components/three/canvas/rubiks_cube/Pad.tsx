import React, { Suspense, forwardRef, lazy } from 'react'
import * as THREE from 'three'

import type { TPad } from '@/types/components/three/types'

import { padsData } from '@/data/skills/rubiks_cube/three/padsData'
import { TLazyFactory } from '@/types/components/types'

const lazyWithForwardRef = (
  factory: TLazyFactory,
  componentName: string,
  rotation: THREE.Euler,
) => {
  const LazyComponent = lazy(() =>
    factory().then(({ default: Component }) => {
      const ForwardedComponent = forwardRef((props, ref) => (
        <Component
          {...props}
          ref={ref}
          name={componentName}
          rotation={rotation}
        />
      ))
      ForwardedComponent.displayName = componentName
      return { default: ForwardedComponent }
    }),
  )
  return LazyComponent
}

const Pad = forwardRef<THREE.Mesh, TPad>(({ currentPadIndex, rotation }, ref) => {
  const componentName = padsData.lazy.models[currentPadIndex % padsData.lazy.models.length]

  const LazyPad = lazyWithForwardRef(
    () => import(`@/components/three/models/${padsData.lazy.pathToModel}${componentName}`),
    componentName,
    rotation,
  )

  return (
    <Suspense fallback={null}>
      <LazyPad ref={ref} />
    </Suspense>
  )
})

export default Pad
