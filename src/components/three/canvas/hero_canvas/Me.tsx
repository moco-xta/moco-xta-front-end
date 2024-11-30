import React, { useRef } from 'react'
import * as THREE from 'three'
import { Plane } from '@react-three/drei'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'

import HeptagramComponent from './HeptagramComponent'

import { default as texturesConstants } from '@/constants/assets/texturesConstants.json'
import { default as heroAnimationsConstants } from '@/constants/animations/heroAnimationsConstants.json'

export default function Me() {
  const meMap = new THREE.TextureLoader().load(texturesConstants.HOME.ME)
  meMap.magFilter = THREE.NearestFilter

  const material = new THREE.MeshStandardMaterial({
    map: meMap,
    transparent: true,
    opacity: 0,
    side: THREE.DoubleSide,
  })

  const meGroupMeshRef = useRef<THREE.Group>(null!)
  const meMeshRef = useRef<THREE.Mesh>(null!)

  useGSAP(() => {
    gsap.to(meGroupMeshRef.current.position, {
      keyframes: {
        '0%': { x: 3, y: -3 },
        '60%': { x: 0, y: 0, z: 0 },
        '100%': { x: -0.5, z: -2 },
        easeEach: 'power1.in',
      },
      delay: 1,
      duration: 10 / heroAnimationsConstants.SPEED,
    })
    gsap.to(meGroupMeshRef.current.rotation, {
      keyframes: {
        '0%': { z: THREE.MathUtils.degToRad(40) },
        '60%': { z: THREE.MathUtils.degToRad(0) },
        '100%': { z: THREE.MathUtils.degToRad(-5) },
        easeEach: 'power1.in',
      },
      delay: 1,
      duration: 10 / heroAnimationsConstants.SPEED,
    })
    gsap.to(meMeshRef.current.material, {
      keyframes: {
        '0%': { opacity: 0 },
        '100%': { opacity: 1 },
        easeEach: 'power1.in',
      },
      delay: 1,
      duration: 10 / heroAnimationsConstants.SPEED,
    })
  })

  return (
    <group ref={meGroupMeshRef}>
      <HeptagramComponent />
      <Plane
        ref={meMeshRef}
        args={[5, 5]}
        material={material}
      />
    </group>
  )
}
