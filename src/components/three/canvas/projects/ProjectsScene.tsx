import React, { useEffect, useRef } from 'react'
import * as THREE from 'three'
import { gsap } from 'gsap'

import ProjectLogo from './ProjectLogo'
import ToolsLogosGroups from './ToolsLogosGroups'

import { getDegreeEuler } from '@/helpers/threeHelpers'

import { projectsData } from '@/data/projects/projectsData'
import { companiesData } from '@/data/projects/companiesData'

export type TProjectScene = {
  currentProject: number
  currentCompany: number
} //TODO: To types

const OFFSET = 8 //TODO: To data

export default function ProjectsScene({ currentProject, currentCompany }: TProjectScene) {
  const projectLogosGroupRef = useRef<THREE.Group>(null!)
  const companiesGroupRef = useRef<THREE.Group>(null!)

  useEffect(() => {
    gsap.to(projectLogosGroupRef.current.position, {
      y: OFFSET * currentProject,
      opacity: 0,
      duration: 0.5,
      ease: 'power3.inOut',
    })
  }, [currentProject])

  useEffect(() => {
    gsap.to(companiesGroupRef.current.position, {
      y: OFFSET * currentCompany,
      opacity: 0,
      duration: 0.5,
      ease: 'power3.inOut',
    })
  }, [currentCompany])

  return (
    <>
      <group ref={projectLogosGroupRef}>
        {projectsData.map((projectData, index) => (
          <ProjectLogo
            logoData={projectData.logos.project}
            position={new THREE.Vector3(4, -OFFSET * index + 1, 1)}
            rotation={getDegreeEuler({ y: -33 })}
            maxSize={7}
          />
        ))}
      </group>
      <group ref={companiesGroupRef}>
        {companiesData
          .filter((companyData) => companyData.hasOwnProperty('logo'))
          .map((companyData, index) => (
            <ProjectLogo
              logoData={companyData.logo!}
              position={new THREE.Vector3(3.3, -OFFSET * companyData.index! - 1.5, 3.5)}
              // position={new THREE.Vector3(3, -OFFSET * (index + 1) - 1, 2)}
              rotation={getDegreeEuler({ y: -50 })}
              maxSize={2.2}
            />
          ))}
      </group>
      <ToolsLogosGroups currentProject={currentProject} />
    </>
  )
}
