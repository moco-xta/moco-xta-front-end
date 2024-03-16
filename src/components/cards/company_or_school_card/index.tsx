import React, { Suspense, forwardRef } from 'react'
import { Canvas } from '@react-three/fiber'
import { Box, PerspectiveCamera } from '@react-three/drei'

import { CompanyOrSchoolCardInterface } from '@/interfaces/data/companyOrSchollDataInterface'

import { default as projectsConstants } from '@/constants/projectsConstants.json'

import './index.scss'

export const CompanyOrSchoolCard = forwardRef<
  HTMLDivElement,
  CompanyOrSchoolCardInterface
>(({ content }, ref) => {
  const Logo = content.logo.component

  function handleOnClick() {
    window.open(content.url, "_blank")
  }

  return (
    <div
      ref={ref}
      className='company_or_school_card'
    >
      <Canvas
        dpr={projectsConstants.COMPANY_OR_SCHOOL_CARDS.SCENE.CANVAS.DPR}
        shadows
        legacy
        gl={{
          antialias:
            projectsConstants.COMPANY_OR_SCHOOL_CARDS.SCENE.CANVAS.ANTIALIAS,
          alpha: projectsConstants.COMPANY_OR_SCHOOL_CARDS.SCENE.CANVAS.ALPHA,
          powerPreference:
            projectsConstants.COMPANY_OR_SCHOOL_CARDS.SCENE.CANVAS
              .POWER_PREFERENCE,
        }}
      >
        <PerspectiveCamera
          makeDefault
          position={[0, 0, 4]}
          fov={15}
        />
        <ambientLight intensity={0.5} />
        <pointLight
          position={[0, 0, 3]}
          intensity={20}
        />
        <Suspense fallback={null}>
          <Logo
            position={[content.logo.position.x, content.logo.position.z, content.logo.position.y]}
            scale={[content.logo.scale.x, content.logo.scale.z, content.logo.scale.y]}
            onClick={handleOnClick}
          />
        </Suspense>
      </Canvas>
    </div>
  )
})
