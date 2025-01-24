import React, { useRef } from 'react'
import * as THREE from 'three'

import { TProjectData } from '@/types/data/components/layout/types'
import ToolLogo from './ToolLogo'

export type TToolsLogosGroup = {
  projectData: TProjectData
  currentProject: number
  toolsGroupIndex: number
} //TODO: To types

export default function ToolsLogosGroup({
  projectData,
  currentProject,
  toolsGroupIndex,
}: TToolsLogosGroup) {
  const toolsLogosGroupRef = useRef<THREE.Group>(null!)

  return (
    <group
      ref={toolsLogosGroupRef}
      position={new THREE.Vector3(-4, 0, 0)}
    >
      {projectData.logos.tools.map((logoData, index) => (
        <ToolLogo
          logoData={logoData}
          currentProject={currentProject}
          toolsGroupIndex={toolsGroupIndex}
          index={index}
        />
      ))}
    </group>
  )
}
