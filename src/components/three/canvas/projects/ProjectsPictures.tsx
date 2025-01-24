import React, { useEffect, useRef } from 'react'
import * as THREE from 'three'
import { gsap } from 'gsap'

import type { TProjectsPictures } from '@/types/components/layout/types'

import ProjectPicture from './ProjectPicture'

import { projectsData } from '@/data/projects/projectsData'
import { layoutData } from '@/data/projects/three/layoutData'

export default function ProjectsPictures({ currentProject }: TProjectsPictures) {
  const projectsPicturesGroupRef = useRef<THREE.Group>(null!)

  useEffect(() => {
    gsap.to(projectsPicturesGroupRef.current.position, {
      y: layoutData.pictures.gap * currentProject,
      opacity: 0,
      duration: 0.5,
      ease: 'power3.inOut',
      delay: 0.2,
    })
  }, [currentProject])

  return (
    <group
      ref={projectsPicturesGroupRef}
      name={'projects_images_group'}
    >
      {projectsData.map((projectData, index) => (
        <ProjectPicture
          key={`project_image_${projectData.key}`}
          position={
            new THREE.Vector3(
              layoutData.pictures.position.x,
              -index * layoutData.pictures.gap + layoutData.pictures.position.y,
              layoutData.pictures.position.z,
            )
          }
          imageUrl={projectData.imageUrl}
        />
      ))}
    </group>
  )
}
