import React, { useEffect, useRef } from 'react'
import * as THREE from 'three'
import { gsap } from 'gsap'

import ProjectLogo from './ProjectLogo'
import ToolsLogosGroups from './ToolsLogosGroups'

import { getDegreeEuler } from '@/helpers/threeHelpers'

import { projectsData } from '@/data/projects/projectsData'

export type TProjectScene = {
  currentProject: number
} //TODO: To types

const OFFSET = 8 //TODO: To data

export default function ProjectsScene({ currentProject }: TProjectScene) {
  const projectLogosGroupRef = useRef<THREE.Group>(null!)

  useEffect(() => {
    gsap.to(projectLogosGroupRef.current.position, {
      y: OFFSET * currentProject,
      opacity: 0,
      duration: 0.5,
      ease: 'power3.inOut',
    })
  }, [currentProject])

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
      <ToolsLogosGroups currentProject={currentProject} />
    </>
  )
}
