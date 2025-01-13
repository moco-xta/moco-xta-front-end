import React from 'react'
import * as THREE from 'three'
import { Html } from '@react-three/drei'

import type { TProjects } from '@/types/data/components/three/types'

export default function Projects({ projectsData }: TProjects) {
  return (
    <>
      {projectsData.map(({ name, url, description }, index) => (
        <group key={`project_${name}_${index}`}>
          <Html
            scale={0.1}
            style={{ userSelect: 'none', opacity: '0.5' }}
            castShadow
            receiveShadow
            occlude='blending'
            transform
            position={new THREE.Vector3(index * 5, 2, 0)}
          >
            <iframe
              title='embed'
              width={1600}
              height={900}
              src={url}
            />
          </Html>
          <Html
            scale={0.25}
            castShadow
            receiveShadow
            transform
            position={new THREE.Vector3(index * 5, 0, 0)}
          >
            <div style={{ width: '600px', background: '#00000000', textAlign: 'justify' }}>
              <h1>{name}</h1>
              <p>{description}</p>
            </div>
          </Html>
        </group>
      ))}
    </>
  )
}
