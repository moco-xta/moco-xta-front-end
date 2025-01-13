import React from 'react'
import * as THREE from 'three'

import { AmsterdamScene } from '@/components/three/models/projects/AmsterdamScene'
import { LogoTheBrink } from '@/components/three/models/logos/LogoTheBrink'
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

export default function Amsterdam() {
  return (
    <group /* position={new THREE.Vector3(0, 0, -10)} */>
      <AmsterdamScene />
      <group position={new THREE.Vector3(7, 2, -6.5)}>
        <LogoTheBrink
          position={new THREE.Vector3(6.8, 4.5, 0)}
          scale={8}
        />
        <Projects projectsData={PROJECTS} />
      </group>
    </group>
  )
}
