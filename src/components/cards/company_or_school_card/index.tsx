import React, { Suspense, forwardRef, useEffect, useState } from 'react'
import { Canvas } from '@react-three/fiber'
import { PerspectiveCamera, Text } from '@react-three/drei'
import { useTranslations } from 'next-intl'

import { CompanyOrSchoolCardInterface } from '@/interfaces/data/companyOrSchollDataInterface'

import { default as projectsConstants } from '@/constants/projectsConstants.json'

import './index.scss'

export const CompanyOrSchoolCard = forwardRef<
  HTMLDivElement,
  CompanyOrSchoolCardInterface
>(({ content, index, currentCompanyOrSchool }, ref) => {
  const t = useTranslations('PROJECTS')

  const Logo = content.logo.component

  const [isActive, setIsActive] = useState<boolean>(false)

  useEffect(() => {
    currentCompanyOrSchool === index ? setIsActive(true) : setIsActive(false)
  }, [currentCompanyOrSchool])

  function handleOnClick() {
    window.open(content.url, "_blank")
  }

  return (
    <div
      ref={ref}
      className='company_or_school_card'
      style={{ opacity: isActive ? '1' : '0.5' }}
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
          position={[0, -0.1, 5.5]}
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
          <Text
            /* font={descriptionFont} */
            textAlign={'center'}
            fontSize={projectsConstants.COMPANY_OR_SCHOOL_CARDS.AS.FONT_SIZE}
            position={[
              content.as.position.x,
              content.as.position.z,
              content.as.position.y,
            ]}
            receiveShadow
            castShadow
          >
            {t(`AS.${content.as.key}`)}
          </Text>
        </Suspense>
      </Canvas>
    </div>
  )
})
