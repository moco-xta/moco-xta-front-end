import React, { useEffect, useRef } from 'react'
import * as THREE from 'three'
import { Box } from '@react-three/drei'
import { gsap } from 'gsap'

import useProjectsTimeline from '@/hooks/useProjectsTimeline'

import { projectsData } from '@/data/projects/projectsData'

const OFFSET = 5

export default function ProjectsScene() {
  const { currentProject } = useProjectsTimeline(projectsData)

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
      {projectsData.map((projectsData, index) => (
        <Box position={new THREE.Vector3(0, -index * OFFSET, 0)} />
      ))}
    </group>
  )
}
