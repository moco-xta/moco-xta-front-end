import React, { forwardRef, lazy, Suspense, useEffect, useRef } from 'react'
import * as THREE from 'three'
import { Box } from '@react-three/drei'

import type { TLazyFactory } from '@/types/components/types'
import type { TSkillLogo } from '@/types/components/three/types'

import useHoverModelAnimation from '@/hooks/three/useHoverModelAnimation'

import { skillLogoData } from '@/data/skills/skill_logo/three/skillLogoData'

const lazyWithForwardRef = (factory: TLazyFactory, componentName: string) => {
  const LazyComponent = lazy(() =>
    factory().then(({ default: Component }) => {
      const ForwardedComponent = forwardRef((props, ref) => (
        <Component
          {...props}
          ref={ref}
        />
      ))
      ForwardedComponent.displayName = componentName
      return { default: ForwardedComponent }
    }),
  )
  return LazyComponent
}

export default function SkillLogo({ logoData }: TSkillLogo) {
  const logoRef = useRef<THREE.Group>(null!)
  const boxRef = useRef<THREE.Mesh>(null!)

  const { handleOnPointerMove, handleOnPointerLeave } = useHoverModelAnimation({
    ref: logoRef,
    animationData: skillLogoData.hoverModelAnimationData,
  })

  const LazyLogo = lazyWithForwardRef(
    () => import(`@/components/three/models/logos/${logoData.name}`),
    logoData.name,
  )

  useEffect(() => {
    if (logoRef.current && boxRef.current) {
      const boundingBox = new THREE.Box3().setFromObject(logoRef.current)
      const size = boundingBox.getSize(new THREE.Vector3())
      boxRef.current.scale.set(size.x, size.y, size.z)
      boxRef.current.updateMatrix()
      boxRef.current.updateMatrixWorld()
    }
  }, [])

  return (
    <>
      <group>
        <Box
          ref={boxRef}
          args={[1.8, 1.8, 1.8]}
          onPointerMove={handleOnPointerMove}
          onPointerOut={handleOnPointerLeave}
        >
          <meshStandardMaterial
            transparent
            opacity={0}
          />
        </Box>
      </group>

      <Suspense fallback={null}>
        <LazyLogo ref={logoRef} />
      </Suspense>
    </>
  )
}
