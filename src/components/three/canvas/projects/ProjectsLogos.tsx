import React, { useEffect, useRef } from 'react'
import * as THREE from 'three'
import { gsap } from 'gsap'

import type { TProjectsLogos } from '@/types/components/layout/types'

import ProjectLogo from './ProjectLogo'

import { getDegreeEuler } from '@/helpers/threeHelpers'

import { projectsData } from '@/data/projects/projectsData'
import { layoutData } from '@/data/projects/three/layoutData'

export default function ProjectsLogos({ currentProject }: TProjectsLogos) {
  const projectLogosGroupRef = useRef<THREE.Group>(null!)

  useEffect(() => {
    gsap.to(projectLogosGroupRef.current.position, {
      y: layoutData.projectsLogos.gap * currentProject,
      opacity: 0,
      duration: 0.5,
      ease: 'power3.inOut',
    })
  }, [currentProject])

  return (
    <group ref={projectLogosGroupRef}>
      {projectsData.map((projectData, index) => (
        <ProjectLogo
          key={`project_logo_${projectData.key}`}
          path={projectData.logos.path}
          prefix={projectData.logos.prefix}
          logoData={projectData.logos.project}
          position={
            new THREE.Vector3(
              layoutData.projectsLogos.position.x,
              -layoutData.projectsLogos.gap * index + layoutData.projectsLogos.position.y,
              layoutData.projectsLogos.position.z,
            )
          }
          rotation={getDegreeEuler({ y: -33 })}
          maxSize={7}
        />
      ))}
    </group>
  )
}
