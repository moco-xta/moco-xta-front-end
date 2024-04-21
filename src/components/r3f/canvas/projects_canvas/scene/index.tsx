import React, { createRef, useEffect, useMemo } from 'react'
import * as THREE from 'three'
import { GroupProps, useThree } from '@react-three/fiber'
import gsap from 'gsap'

import { ProjectsSceneInterface } from '@/interfaces/r3fInterfaces'

import useProjectsTimeline from '@/hooks/useProjectsTimeline'

import { projectsData } from '@/data/projectsData'
import { companiesAndSchollData } from '@/data/companiesAndSchoolData'

export default function ProjectsScene({
  projectsRefs,
}: ProjectsSceneInterface) {
  const { gl } = useThree()
  gl.toneMapping = THREE.ACESFilmicToneMapping
  gl.toneMappingExposure = 4

  const { scrollFlow, currentProject } = useProjectsTimeline(
    projectsData,
    companiesAndSchollData,
  )

  function getInitialPosition(index: number, currentProject: number) {
    return (index - currentProject) * -3 + 3
  }

  useEffect(() => {
    projectsRefs.forEach(({ ref }, index) => {
      if (ref.current) {
        gsap.fromTo(
          ref.current.position,
          {
            y: getInitialPosition(index, currentProject),
          },
          {
            duration: 1,
            ease: 'power3.out',
            y:
              scrollFlow === 'up'
                ? getInitialPosition(index, currentProject) + 3
                : getInitialPosition(index, currentProject) - 3,
          },
        )
      }
    })
  }, [currentProject, projectsRefs, scrollFlow])

  return (
    <>
      {projectsData.map((project, index) => {
        const MainLogo = project.logos.main.component
        return (
          <group
            key={`projects_${project.key}`}
            ref={projectsRefs[index].ref}
            position={[0, -3 * index + 3, 0]}
          >
            <MainLogo scale={project.logos.main.scale} />
            <>
              {project.logos.tools.map((tool, index) => {
                const ToolLogo = tool.component
                return (
                  <ToolLogo
                    key={`projects_${project.key}_tool: ${index}`}
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
      })}
    </>
  )
}
