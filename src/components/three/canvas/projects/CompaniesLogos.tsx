import React, { useEffect, useRef } from 'react'
import * as THREE from 'three'
import { gsap } from 'gsap'

import type { TCompaniesLogos } from '@/types/components/layout/types'

import ProjectLogo from './ProjectLogo'

import { getDegreeEuler } from '@/helpers/threeHelpers'

import { companiesData } from '@/data/projects/companiesData'
import { layoutData } from '@/data/projects/three/layoutData'

export default function CompaniesLogos({ currentCompany }: TCompaniesLogos) {
  const companiesGroupRef = useRef<THREE.Group>(null!)

  useEffect(() => {
    gsap.to(companiesGroupRef.current.position, {
      y: layoutData.companiesLogos.gap * currentCompany,
      opacity: 0,
      duration: 0.5,
      ease: 'power3.inOut',
    })
  }, [currentCompany])

  return (
    <group ref={companiesGroupRef}>
      {companiesData
        .filter((companyData) => companyData.hasOwnProperty('logo'))
        .map((companyData) => (
          <ProjectLogo
            key={`project_logo_${companyData.key}`}
            path={companyData.logo!.path}
            prefix={companyData.logo!.prefix}
            logoData={companyData.logo!.logo!}
            position={
              new THREE.Vector3(
                layoutData.companiesLogos.position.x,
                -layoutData.companiesLogos.gap * companyData.index! -
                  layoutData.companiesLogos.position.y,
                layoutData.companiesLogos.position.z,
              )
            }
            rotation={getDegreeEuler({ y: -50 })}
            maxSize={2.2}
          />
        ))}
    </group>
  )
}
