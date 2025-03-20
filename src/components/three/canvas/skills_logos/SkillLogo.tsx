import React, { lazy, Suspense, useRef } from 'react'
import * as THREE from 'three'

export type TSkillLogo = {
  pathToModel: string
  componentName: string
  currentLogoName: string
}

export default function SkillLogo({ pathToModel, componentName, currentLogoName }: TSkillLogo) {
  const Logo = lazy(() => import(`@/components/three/models/${pathToModel}${componentName}`))

  const logoRef = useRef<THREE.Group>(null!)

  return (
    <Suspense fallback={null}>
      <Logo
        ref={logoRef}
        position={new THREE.Vector3(0, 0, 0)}
        visible={componentName === currentLogoName}
        name={componentName}
      />
    </Suspense>
  )
}
