import React from 'react'
import * as THREE from 'three'
import { useTexture } from '@react-three/drei'

import { default as texturesConstants } from '@/constants/new/assets/texturesConstants.json'

export default function ContactScene() {
  const profilPictureTexture = useTexture(
    texturesConstants.CONTACT.PROFIL_PICTURE,
  )

  return (
    <mesh rotation={[0, Math.PI, 0]}>
      <planeGeometry
        attach='geometry'
        args={[1, 1.5]}
      />
      <meshStandardMaterial
        attach='material'
        color='white'
        map={profilPictureTexture}
      />
    </mesh>
  )
}
