import React, { forwardRef, lazy, Suspense, useLayoutEffect, useRef } from 'react'
import * as THREE from 'three'

import type { TLazyFactory } from '@/types/components/types'
import type { TProjectLogo } from '@/types/components/three/types'
import { setGroupSize } from '@/helpers/threeHelpers'

const lazyWithForwardRef = (factory: TLazyFactory, componentName: string, maxSize?: number) => {
  const LazyComponent = lazy(() =>
    factory().then(({ default: Component }) => {
      const ForwardedComponent = forwardRef((props, ref) => {
        useLayoutEffect(() => {
          if (ref && maxSize) {
            const boundingBox = new THREE.Box3()
            if (ref && 'current' in ref) {
              const group = ref.current as THREE.Group as THREE.Group
              boundingBox.setFromObject(ref.current as THREE.Object3D)
              setGroupSize(boundingBox, group, maxSize)
            }
          }
        }, [ref])

        return (
          <Component
            {...props}
            ref={ref}
          />
        )
      })
      ForwardedComponent.displayName = componentName
      return { default: ForwardedComponent }
    }),
  )
  return LazyComponent
}

export default function ProjectLogo({ path, prefix, logoData, maxSize, ...rest }: TProjectLogo) {
  const logoRef = useRef<THREE.Group>(null!)

  const LazyLogo = lazyWithForwardRef(
    () => import(`@/components/three/models/${path}${prefix}${logoData.name}`),
    `${prefix}${logoData.name}`,
    maxSize,
  )

  return (
    <Suspense fallback={null}>
      <LazyLogo
        ref={logoRef}
        {...rest}
      />
    </Suspense>
  )
}
