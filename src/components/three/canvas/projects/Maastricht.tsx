import React from 'react'
import * as THREE from 'three'

import { MaastrichtScene } from '@/components/three/models/projects/MaastrichtScene'
import { LogoPonthus } from '@/components/three/models/logos/LogoPonthus'
import Projects from './Projects'

const PROJECTS = [
  {
    name: 'test',
    url: 'https://threejs.org/',
    description:
      'lorem ipsum dolor sit amet, consectetur adip eu et accusam et sapien et ea rebum er at vero e just ut et accusam et sapien et ea rebum er at vero e just ut et accusam et sapien et ea rebum er at vero e just ut et accus am et sapien et ea rebum er at vero e just ut et accusam et sapien et ea rebum er at vero e just ut et accusam et sapien et ea rebum er at ver o just ut et accusam et sapien et ea rebum er at ver.',
  },
  {
    name: 'test',
    url: 'https://threejs.org/',
    description:
      'lorem ipsum dolor sit amet, consectetur adip eu et accusam et sapien et ea rebum er at vero e just ut et accusam et sapien et ea rebum er at vero e just ut et accusam et sapien et ea rebum er at vero e just ut et accus am et sapien et ea rebum er at vero e just ut et accusam et sapien et ea rebum er at vero e just ut et accusam et sapien et ea rebum er at ver o just ut et accusam et sapien et ea rebum er at ver.',
  },
]

export default function Maastricht() {
  return (
    <group /* position={new THREE.Vector3(-50, 0, -10)} */>
      <MaastrichtScene />
      <group position={new THREE.Vector3(-43, 2, -2)}>
        <LogoPonthus
          position={new THREE.Vector3(3.5, 7.5, 0)}
          scale={[4, 4, 2]}
        />
        <Projects projectsData={PROJECTS} />
      </group>
    </group>
  )
}
