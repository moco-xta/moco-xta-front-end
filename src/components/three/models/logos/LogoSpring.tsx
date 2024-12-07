import * as THREE from 'three'
import React, { useRef } from 'react'
import { GroupProps } from '@react-three/fiber'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'

import useModelHoverEffect from '@/hooks/useModelHoverEffect'

import IntersectCube from './IntersectCube'

import { mainSkillsLogoMaterial } from '../../materials/mainSkillsLogoMaterial'

import { default as mainSkillsConstants } from '@/constants/three/mainSkillsConstants.json'
import { default as gltfConstants } from '@/constants/assets/gltfConstants.json'

type GLTFResult = GLTF & {
  nodes: {
    LogoSpring_1: THREE.Mesh
    LogoSpring_2: THREE.Mesh
  }
  materials: {}
}

export default function LogoSpring({ position, rotation, scale }: GroupProps) {
  const { nodes } = useGLTF(gltfConstants.LOGOS.LOGO_SPRING) as GLTFResult

  const logoSpringRef = useRef<THREE.Group<THREE.Object3DEventMap>>(null!)
  const logoSpringInRef = useRef<THREE.Group<THREE.Object3DEventMap>>(null!)

  useGSAP(() => {
    gsap.from(logoSpringRef.current.position, {
      y: -3,
      delay: 1,
      duration: 0.5,
      scrollTrigger: {
        trigger: '#main_skills_slice',
        scroller: 'body',
        start: 'top 20%',
        // end: 'bottom -50%',
        // toggleActions: 'restart pause reverse pause'
        // scrub: true,
      },
    })
    gsap.from(logoSpringRef.current.rotation, {
      y: THREE.MathUtils.degToRad(540),
      delay: 1,
      duration: 0.5,
      scrollTrigger: {
        trigger: '#main_skills_slice',
        scroller: 'body',
        start: 'top 20%',
        // end: 'bottom -50%',
        // toggleActions: 'restart pause reverse pause'
        // scrub: true,
      },
    })
    gsap.from(logoSpringRef.current.scale, {
      x: 0,
      y: 0,
      z: 0,
      delay: 1,
      duration: 0.5,
      scrollTrigger: {
        trigger: '#main_skills_slice',
        scroller: 'body',
        start: 'top 20%',
        // end: 'bottom -50%',
        // toggleActions: 'restart pause reverse pause'
        // scrub: true,
      },
    })
    gsap.to(logoSpringInRef.current.rotation, {
      y: THREE.MathUtils.degToRad(-360),
      duration: 2,
      repeat: -1,
      ease: 'none',
    })
  })

  const { handleOnPointerMove, handleOnPointerLeave } = useModelHoverEffect(
    logoSpringRef,
    mainSkillsConstants.HANDLE_ON_PONTER_MOVE,
  )

  return (
    <group
      ref={logoSpringRef}
      dispose={null}
      position={position}
      rotation={rotation}
      scale={scale}
    >
      <group ref={logoSpringInRef}>
        <IntersectCube
          handleOnPointerMove={handleOnPointerMove}
          handleOnPointerLeave={handleOnPointerLeave}
        />
        <mesh
          geometry={nodes.LogoSpring_1.geometry}
          material={mainSkillsLogoMaterial('#74b61d')}
          receiveShadow
          castShadow
        />
        <mesh
          geometry={nodes.LogoSpring_2.geometry}
          material={mainSkillsLogoMaterial('#ffffff')}
          receiveShadow
          castShadow
        />
      </group>
    </group>
  )
}

useGLTF.preload(gltfConstants.LOGOS.LOGO_SPRING)
