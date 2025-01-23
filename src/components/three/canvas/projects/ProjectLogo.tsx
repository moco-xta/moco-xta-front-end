import React, { forwardRef, lazy, Suspense, useRef } from 'react'
import * as THREE from 'three'

import type { TLazyFactory } from '@/types/components/types'
import type { TProjectLogo } from '@/types/components/three/types'

const lazyWithForwardRef = (factory: TLazyFactory, componentName: string) => {
  const LazyComponent = lazy(() =>
    factory().then(({ default: Component }) => {
      const ForwardedComponent = forwardRef((props, ref) => {
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

export default function ProjectLogo({ logoData, ...rest }: TProjectLogo) {
  const logoRef = useRef<THREE.Group>(null!)

  const LazyLogo = lazyWithForwardRef(
    () => import(`@/components/three/models/logos/${logoData.name}`),
    logoData.name,
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
