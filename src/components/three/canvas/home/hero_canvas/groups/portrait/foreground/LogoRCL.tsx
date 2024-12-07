import React, { useRef } from 'react'
import * as THREE from 'three'
import { Plane } from '@react-three/drei'

import { default as texturesConstants } from '@/constants/assets/texturesConstants.json'

interface LogoRCLInterface {
  timeline: GSAPTimeline
}

export default function LogoRCL({ timeline }: LogoRCLInterface) {
  const logoRclMap = new THREE.TextureLoader().load(texturesConstants.HOME.LOGO_RCL)
  logoRclMap.magFilter = THREE.NearestFilter

  const logoRclMaterial = new THREE.MeshStandardMaterial({
    map: logoRclMap,
    transparent: true,
    opacity: 1,
    side: THREE.DoubleSide,
  })

  const logoRclGroupRef = useRef<THREE.Group>(null!)
  const logoRclMeshRef = useRef<THREE.Mesh>(null!)

  return (
    <group
      ref={logoRclGroupRef}
      position={new THREE.Vector3(1.5, -4.35, 0.05)}
    >
      {/* <HeptagramComponent /> */}
      <Plane
        ref={logoRclMeshRef}
        args={[1.25, 1.75]}
        material={logoRclMaterial}
        receiveShadow
        castShadow
      />
    </group>
  )
}
