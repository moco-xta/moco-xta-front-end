import React, { useRef } from 'react'
import * as THREE from 'three'
import { GroupProps } from '@react-three/fiber'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

/* import useModelHoverEffect from '@/hooks/useModelHoverEffect' */

/* import IntersectCube from './IntersectCube' */

import { mainSkillsLogoMaterial } from '../../materials/mainSkillsLogoMaterial'

import { default as mainSkillsConstants } from '@/constants/canvas/mainSkillsConstants.json'
import { default as gltfConstants } from '@/constants/assets/gltfConstants.json'

type GLTFResult = GLTF & {
  nodes: {
    LogoNextjs_1: THREE.Mesh
    LogoNextjs_2: THREE.Mesh
  }
  materials: {}
}

gsap.registerPlugin(useGSAP, ScrollTrigger)

export default function LogoNextjs({ position, rotation, scale }: GroupProps) {
  const { nodes } = useGLTF(gltfConstants.LOGOS.LOGO_NEXTJS) as GLTFResult

  const logoNextjsRef = useRef<THREE.Group<THREE.Object3DEventMap>>(null!)

  const mainSkillsSlice = document.getElementById('#main_skills_slice')

  useGSAP(() => {
    gsap.from(logoNextjsRef.current.position, {
      y: -3,
      duration: 0.5,
      scrollTrigger: {
        trigger: '#main_skills_slice',
        scroller: 'body',
        start: 'top 10%',
        // end: 'bottom -50%',
        // toggleActions: 'restart pause reverse pause'
        // scrub: true,
      },
    })
    gsap.from(logoNextjsRef.current.rotation, {
      y: THREE.MathUtils.degToRad(540),
      duration: 0.5,
      scrollTrigger: {
        trigger: '#main_skills_slice',
        scroller: 'body',
        start: 'top 10%',
        // end: 'bottom -50%',
        // toggleActions: 'restart pause reverse pause'
        // scrub: true,
      },
    })
    gsap.from(logoNextjsRef.current.scale, {
      x: 0,
      y: 0,
      z: 0,
      duration: 0.5,
      scrollTrigger: {
        trigger: '#main_skills_slice',
        scroller: 'body',
        start: 'top 10%',
        // end: 'bottom -50%',
        // toggleActions: 'restart pause reverse pause'
        // scrub: true,
      },
    })
  })

  /* const { handleOnPointerMove, handleOnPointerLeave } = useModelHoverEffect(
    logoNextjsRef,
    mainSkillsConstants.HANDLE_ON_PONTER_MOVE,
  ) */

  return (
    <group
      ref={logoNextjsRef}
      dispose={null}
      position={position}
      rotation={rotation}
      scale={scale}
    >
      {/* <IntersectCube
        handleOnPointerMove={handleOnPointerMove}
        handleOnPointerLeave={handleOnPointerLeave}
      /> */}
      <mesh
        geometry={nodes.LogoNextjs_1.geometry}
        material={mainSkillsLogoMaterial('#000000')}
        receiveShadow
        castShadow
      />
      <mesh
        geometry={nodes.LogoNextjs_2.geometry}
        material={mainSkillsLogoMaterial('#ffffff')}
        receiveShadow
        castShadow
      />
    </group>
  )
}

useGLTF.preload(gltfConstants.LOGOS.LOGO_NEXTJS)
