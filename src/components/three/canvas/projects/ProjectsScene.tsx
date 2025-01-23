import React, { useEffect, useRef } from 'react'
import * as THREE from 'three'
import { gsap } from 'gsap'

import ProjectLogos from './ProjectLogos'

import { projectsData } from '@/data/projects/projectsData'

export type TProjectScene = {
  currentProject: number
}

const OFFSET = 8

export default function ProjectsScene({ currentProject }: TProjectScene) {
  const projectsGroupRef = useRef<THREE.Group>(null!)

  useEffect(() => {
    gsap.to(projectsGroupRef.current.position, {
      y: OFFSET * currentProject,
      opacity: 0,
      duration: 0.5,
      ease: 'power3.inOut',
    })
  }, [currentProject])

  return (
    <group ref={projectsGroupRef}>
      {projectsData.map((projectData, index) => (
        <group
          key={`projects_logos_${projectData.key}`}
          position={new THREE.Vector3(0, -index * OFFSET, 0)}
        >
          <ProjectLogos
            projectData={projectData}
            currentProject={currentProject}
            index={index}
          />
        </group>
      ))}
    </group>
  )
}
