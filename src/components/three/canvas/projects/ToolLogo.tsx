import React, { useEffect, useRef } from 'react'
import * as THREE from 'three'
import { gsap } from 'gsap'

import type { TLogoData } from '@/types/data/components/three/types'

import ProjectLogo from './ProjectLogo'

export type TToolLogo = {
  path: string
  prefix: string
  logoData: TLogoData
  currentProject: number
  toolsGroupIndex: number
  index: number
} //TODO: To types

export default function ToolLogo({
  path,
  prefix,
  logoData,
  currentProject,
  toolsGroupIndex,
  index,
}: TToolLogo) {
  const toolLogoGroupRef = useRef<THREE.Group>(null!)

  useEffect(() => {
    if (toolsGroupIndex < currentProject) {
      gsap.to(toolLogoGroupRef.current.position, {
        x: index * 0.6,
        y: -1.75,
        z: -5.8,
        duration: 0.5,
        ease: 'power3.inOut',
        delay: index * 0.1,
      })
    } else if (toolsGroupIndex === currentProject) {
      gsap.to(toolLogoGroupRef.current.position, {
        x: index * 0.6,
        y: -1.75,
        z: 4,
        duration: 0.5,
        ease: 'power3.inOut',
        delay: index * 0.1,
      })
    } else {
      gsap.to(toolLogoGroupRef.current.position, {
        x: index * 0.6,
        y: -5,
        z: 4,
        duration: 0.5,
        ease: 'power3.inOut',
        delay: index * 0.1,
      })
    }
  }, [currentProject])

  return (
    <group
      ref={toolLogoGroupRef}
      // position={new THREE.Vector3(index * 0.6, -5, 4)}
    >
      <ProjectLogo
        path={path}
        prefix={prefix}
        logoData={logoData}
        maxSize={0.5}
      />
    </group>
  )
}
