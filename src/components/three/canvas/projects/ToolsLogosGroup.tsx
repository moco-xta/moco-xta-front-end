import React, { useEffect, useRef } from 'react'
import * as THREE from 'three'
import { gsap } from 'gsap'

import ProjectLogo from './ProjectLogo'
import { TProjectData } from '@/types/data/components/layout/types'

export type TToolsLogosGroup = {
  projectData: TProjectData
  currentProject: number
  index: number
} //TODO: To types

export default function ToolsLogosGroup({ projectData, currentProject, index }: TToolsLogosGroup) {
  const toolsLogosGroupRef = useRef<THREE.Group>(null!)

  useEffect(() => {
    if (index < currentProject) {
      gsap.to(toolsLogosGroupRef.current.position, {
        x: -3,
        y: -1.5,
        z: -5.8,
        duration: 0.5,
        ease: 'power3.inOut',
      })
    } else if (index === currentProject) {
      gsap.to(toolsLogosGroupRef.current.position, {
        x: -3,
        y: -1.5,
        z: 0,
        duration: 0.5,
        ease: 'power3.inOut',
      })
    } else {
      gsap.to(toolsLogosGroupRef.current.position, {
        x: -3,
        y: -5,
        z: 0,
        duration: 0.5,
        ease: 'power3.inOut',
      })
    }
  }, [currentProject])

  return (
    <group ref={toolsLogosGroupRef}>
      {projectData.logos.tools.map((logoData, index) => (
        <ProjectLogo
          logoData={logoData}
          position={new THREE.Vector3(index * 0.6, 0, 4)}
          maxSize={0.5}
        />
      ))}
    </group>
  )
}
