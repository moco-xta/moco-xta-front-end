import React, { forwardRef, lazy, Suspense, useEffect, useRef } from 'react'
import * as THREE from 'three'
import { Box } from '@react-three/drei'

import type { TSkillsLogo } from '@/types/layout'

import useModelHoverEffect from '@/hooks/useModelHoverEffect'

import logoConstants from '@/constants/three/logoConstants.json'

type TLazyFactory = {
  (): Promise<{ default: React.ComponentType<any> }>
}

const lazyForwardRef = (factory: TLazyFactory) => {
  return lazy(() =>
    factory().then(({ default: Component }) => ({
      default: forwardRef((props, ref) => (
        <Component
          {...props}
          ref={ref}
        />
      )),
    })),
  )
}

export default function SkillsLogo({ logoData }: TSkillsLogo) {
  const logoRef = useRef<THREE.Group>(null!)
  const boxRef = useRef<THREE.Mesh>(null!)

  const { handleOnPointerMove, handleOnPointerLeave } = useModelHoverEffect(
    logoRef,
    logoConstants.HANDLE_ON_PONTER_MOVE,
  )

  const Logo = lazyForwardRef(
    () => import(`@/components/three/models/${logoData.path}${logoData.name}`),
  )

  useEffect(() => {
    if (logoRef.current && boxRef.current) {
      const boundingBox = new THREE.Box3().setFromObject(logoRef.current)
      const size = boundingBox.getSize(new THREE.Vector3())
      boxRef.current.scale.set(size.x, size.y, size.z)
      boxRef.current.updateMatrix()
      boxRef.current.updateMatrixWorld()
    }
  }, [logoRef.current])

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
        <Logo ref={logoRef} />
      </Suspense>
    </>
  )
}
