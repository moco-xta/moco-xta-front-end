import React, { useEffect, useLayoutEffect, useRef } from 'react'
import * as THREE from 'three'
import { gsap } from 'gsap'

import type { TProjectData } from '@/types/data/components/layout/types'

import ProjectLogo from './ProjectLogo'

export type TToolsLogos = {
  projectData: TProjectData
  currentProject: number
  index: number
}

export default function ToolsLogos({ projectData, currentProject, index }: TToolsLogos) {
  const toolsLogosRef = useRef<THREE.Group>(null!)

  useLayoutEffect(() => {
    if (toolsLogosRef.current) {
      const children = [...toolsLogosRef.current.children]
      console.log('children', children)
      // const toolsLogos: THREE.Group[] = gsap.utils.toArray(projectLogosRef.current.children)
      children.forEach((toolLogoRef, index) => {
        console.log('TEST')
        gsap.from(toolLogoRef.position, {
          y: -5,
          duration: 2,
          ease: 'power3.inOut',
          delay: index * 0.1,
        })
      })
    }
  }, [currentProject])

  return (
    <group
      ref={toolsLogosRef}
      position={new THREE.Vector3(-5, -2, 0)}
    >
      {projectData.logos.tools.map((logoData, index) => (
        <ProjectLogo
          key={`project_logo_${logoData.name}`}
          logoData={logoData}
          position={new THREE.Vector3(index, 0, 0)}
        />
      ))}
    </group>
  )
}
