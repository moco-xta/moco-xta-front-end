import React from 'react'

import { ProjectCardSceneInterface } from '@/interfaces/r3fInterfaces'

export default function ProjectCardScene({ content }: ProjectCardSceneInterface) {
  const MainLogo = content.logos.main.component

  return (
    <group
      key={`projects_${content.key}`}
    >
      <MainLogo scale={content.logos.main.scale} />
      <>
        {content.logos.tools.map((tool, index) => {
          const ToolLogo = tool.component
          return (
            <ToolLogo
              key={`projects_${content.key}_tool: ${index}`}
              position={[
                tool.position.x,
                tool.position.y,
                tool.position.z,
              ]}
              scale={tool.scale}
            />
          )
        })}
      </>
    </group>
  )
}
