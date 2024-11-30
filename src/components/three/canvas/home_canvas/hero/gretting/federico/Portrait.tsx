import React, { useRef } from 'react'
import * as THREE from 'three'
import { Plane } from '@react-three/drei'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'

// import HeptagramComponent from './HeptagramComponent'

import { default as texturesConstants } from '@/constants/assets/texturesConstants.json'
import { default as heroAnimationsConstants } from '@/constants/animations/heroAnimationsConstants.json'

export default function Portrait() {
  const portraitMap = new THREE.TextureLoader().load(texturesConstants.HOME.PORTRAIT)
  portraitMap.magFilter = THREE.NearestFilter

  const portraitMaterial = new THREE.MeshStandardMaterial({
    map: portraitMap,
    transparent: true,
    opacity: 1,
    side: THREE.DoubleSide,
  })

  const portraitGroupRef = useRef<THREE.Group>(null!)
  const portraitMeshRef = useRef<THREE.Mesh>(null!)

  /* useGSAP(() => {
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
  }) */

  return (
    <group ref={portraitGroupRef}>
      {/* <HeptagramComponent /> */}
      <Plane
        ref={portraitMeshRef}
        args={[5, 5]}
        material={portraitMaterial}
      />
    </group>
  )
}
