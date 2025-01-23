import React from 'react'

import ToolsLogosGroup from './ToolsLogosGroup'

import { projectsData } from '@/data/projects/projectsData'

export type TToolsLogosGroups = {
  currentProject: number
} //TODO: To types

export default function ToolsLogosGroups({ currentProject }: TToolsLogosGroups) {
  return (
    <group>
      {projectsData.map((projectData, index) => (
        <ToolsLogosGroup
          key={`tools_logos_group_${index}`}
          projectData={projectData}
          currentProject={currentProject}
          index={index}
        />
      ))}
    </group>
  )
}
