import React from 'react'
import * as THREE from 'three'

import type { TProjectData } from '@/types/data/components/layout/types'

import ProjectLogo from './ProjectLogo'

import { getDegreeEuler } from '@/helpers/threeHelpers'
import ToolsLogos from './ToolsLogos'

export type TProjectLogos = {
  projectData: TProjectData
  currentProject: number
  index: number
}

export default function ProjectLogos({ projectData, currentProject, index }: TProjectLogos) {
  return (
    <group>
      <ProjectLogo
        logoData={projectData.logos.project}
        position={new THREE.Vector3(5, 0, 0)}
        rotation={getDegreeEuler({ y: -33 })}
        scale={new THREE.Vector3(2.5, 2.5, 2.5)}
      />
      <ToolsLogos
        projectData={projectData}
        currentProject={currentProject}
        index={index}
      />
    </group>
  )
}
