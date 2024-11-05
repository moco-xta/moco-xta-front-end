import React, { useRef } from 'react'
import * as THREE from 'three'
import { useFrame } from '@react-three/fiber'
import { HueSaturation, ToneMapping } from '@react-three/postprocessing'
import { BlendFunction } from 'postprocessing'

import { default as texturesConstants } from '@/constants/assets/texturesConstants.json'

export default function CylenderWorkShowcaseScene() {
  const cylenderRef = useRef<THREE.Mesh>(null!)

  useFrame((state, delta) => {
    cylenderRef.current.rotation.y += delta
  })

  const cylenderWorkShowcaseMap = new THREE.TextureLoader().load(
    texturesConstants.CYLENDER_WORK_SHOWCASE.DIFFUSE,
  )
  cylenderWorkShowcaseMap.needsUpdate = true

  return (
    <group rotation={[0, 1.4, 0.5]}>
      <mesh
        ref={cylenderRef}
        receiveShadow
        castShadow
      >
        <cylinderGeometry
          attach='geometry'
          args={[3, 3, 2.25, 60, 30, true]}
        />
        <meshStandardMaterial
          attach='material'
          map={cylenderWorkShowcaseMap}
          emissiveIntensity={3}
          emissiveMap={cylenderWorkShowcaseMap}
          side={THREE.DoubleSide}
          transparent
        />
        <HueSaturation
          blendFunction={BlendFunction.NORMAL} // blend mode
          hue={0} // hue in radians
          saturation={0} // saturation in radians
        />
        <ToneMapping adaptive />
      </mesh>
    </group>
  )
}
