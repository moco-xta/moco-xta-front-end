import React, { lazy, Suspense, useRef } from 'react'
import * as THREE from 'three'
import { Box } from '@react-three/drei'

import useHoverModelAnimation from '@/hooks/three/useHoverModelAnimation'

import { skillsLogosData } from '@/data/skills/three/skills_logo/skillsLogosData'

export type TSkillLogo = {
  pathToModel: string
  componentName: string
  currentLogoName: string
}

export default function SkillLogo({ pathToModel, componentName, currentLogoName }: TSkillLogo) {
  const logoRef = useRef<THREE.Group>(null!)
  const boxRef = useRef<THREE.Mesh>(null!)

  const Logo = lazy(() => import(`@/components/three/models/${pathToModel}${componentName}`))

  const { handleOnPointerMove, handleOnPointerLeave } = useHoverModelAnimation({
    ref: logoRef,
    animationData: skillsLogosData.hoverModelAnimationData,
  })

  return (
    <>
      <group>
        <Box
          ref={boxRef}
          args={[2, 2, 0]}
          onPointerMove={handleOnPointerMove}
          onPointerOut={handleOnPointerLeave}
        >
          <meshStandardMaterial
            transparent
            opacity={0}
            side={THREE.DoubleSide}
          />
        </Box>
      </group>
      <Suspense fallback={null}>
        <Logo
          ref={logoRef}
          position={new THREE.Vector3(0, 0, 0)}
          visible={componentName === currentLogoName}
          name={componentName}
        />
      </Suspense>
    </>
  )
}
