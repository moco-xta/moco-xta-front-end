import React, { useRef } from 'react'
import * as THREE from 'three'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'

import { default as glbConstants } from '@/constants/assets/glbConstants.json'

type GLTFResult = GLTF & {
  nodes: {
    MacBookPro_1: THREE.Mesh
    MacBookPro_2: THREE.Mesh
  }
  materials: {
    mac_book_pro_bottom_part: THREE.MeshStandardMaterial
    mac_book_pro_top_part: THREE.MeshStandardMaterial
  }
}

export function MacBookPro(props: JSX.IntrinsicElements['group']) {
  const { nodes } = useGLTF(glbConstants.HOME.MAC_BOOK_PRO) as GLTFResult

  const macBookProTopPartRef = useRef<THREE.Mesh>(null!)

  const material = new THREE.MeshStandardMaterial({
    color: 'white',
  })

  useGSAP(() => {
    gsap.to(macBookProTopPartRef.current.rotation, {
      x: THREE.MathUtils.degToRad(-120),
      delay: 1,
      duration: 0.1,
      ease: 'none',
    })
  })

  return (
    <group
      {...props}
      dispose={null}
    >
      <mesh
        name='MacBookPro_1'
        geometry={nodes.MacBookPro_1.geometry}
        material={material}
        castShadow
        receiveShadow
      />
      <mesh
        ref={macBookProTopPartRef}
        name='MacBookPro_2'
        geometry={nodes.MacBookPro_2.geometry}
        material={material}
        castShadow
        receiveShadow
      />
    </group>
  )
}

useGLTF.preload(glbConstants.HOME.MAC_BOOK_PRO)
