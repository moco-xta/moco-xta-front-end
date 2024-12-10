import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'

import useModelHoverEffect from '@/hooks/useModelHoverEffect'

import IntersectCube from './IntersectCube'

import { mainSkillsLogoMaterial } from '../../materials/mainSkillsLogoMaterial'

import { default as mainSkillsConstants } from '@/constants/three/mainSkillsConstants.json'
import { default as gltfConstants } from '@/constants/assets/gltfConstants.json'
import { GroupProps } from '@react-three/fiber'

type GLTFResult = GLTF & {
  nodes: {
    LogoAngular_1: THREE.Mesh
    LogoAngular_2: THREE.Mesh
    LogoAngular_3: THREE.Mesh
  }
  materials: {}
}

export default function LogoAngular({ position, rotation, scale }: GroupProps) {
  const { nodes } = useGLTF(gltfConstants.LOGOS.LOGO_ANGULAR) as GLTFResult

  const logoAngularRef = useRef<THREE.Group<THREE.Object3DEventMap>>(null!)
  const logoAngularInRef = useRef<THREE.Group<THREE.Object3DEventMap>>(null!)

  useGSAP(() => {
    gsap.from(logoAngularRef.current.position, {
      y: -3,
      delay: 0.5,
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
    gsap.from(logoAngularRef.current.rotation, {
      y: THREE.MathUtils.degToRad(540),
      delay: 0.5,
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
    gsap.from(logoAngularRef.current.scale, {
      x: 0,
      y: 0,
      z: 0,
      delay: 0.5,
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
    gsap.to(logoAngularInRef.current.rotation, {
      y: THREE.MathUtils.degToRad(-360),
      duration: 2,
      repeat: -1,
      ease: 'none',
    })
  })

  /* const { handleOnPointerMove, handleOnPointerLeave } = useModelHoverEffect(
    logoAngularRef,
    mainSkillsConstants.HANDLE_ON_PONTER_MOVE,
  ) */

  return (
    <group
      ref={logoAngularRef}
      dispose={null}
      position={position}
      rotation={rotation}
      scale={scale}
    >
      <group ref={logoAngularInRef}>
        {/* <IntersectCube
        handleOnPointerMove={handleOnPointerMove}
        handleOnPointerLeave={handleOnPointerLeave}
      /> */}
        <mesh
          geometry={nodes.LogoAngular_1.geometry}
          material={mainSkillsLogoMaterial('#dd002d')}
          receiveShadow
          castShadow
        />
        <mesh
          geometry={nodes.LogoAngular_2.geometry}
          material={mainSkillsLogoMaterial('#ffffff')}
          receiveShadow
          castShadow
        />
        <mesh
          geometry={nodes.LogoAngular_3.geometry}
          material={mainSkillsLogoMaterial('#c4002b')}
          receiveShadow
          castShadow
        />
      </group>
    </group>
  )
}

useGLTF.preload(gltfConstants.LOGOS.LOGO_ANGULAR)
