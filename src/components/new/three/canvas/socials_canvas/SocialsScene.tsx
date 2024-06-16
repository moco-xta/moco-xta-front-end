import React, { useRef } from 'react'
import * as THREE from 'three'
import { Node, extend, useFrame } from '@react-three/fiber'
import { shaderMaterial } from '@react-three/drei'

import { LogoTwitter } from '../../models/logos/LogoTwitter'
import { LogoLinkedIn } from '../../models/logos/LogoLinkedIn'
import { LogoGitHub } from '../../models/logos/LogoGitHub'

import vertexShader from '@/components/new/three/shaders/deform_geometry/vertexShader.glsl'
import fragmentShader from '@/components/new/three/shaders/deform_geometry/fragmentShader.glsl'

import { default as texturesConstants } from '@/constants/new/assets/texturesConstants.json'

const uniforms = {
  tExplosion: {
    type: 't',
    value: new THREE.TextureLoader().load(texturesConstants.SHADERS.EXPLOSION),
  },
  time: {
    // float initialized to 0
    type: 'f',
    value: 0.0,
  },
}

export const deformGeometryShaderMaterial = new THREE.ShaderMaterial({
  uniforms: uniforms,
  vertexShader: vertexShader,
  fragmentShader: fragmentShader,
})

export default function SocialsScene() {
  const icosahedronRef = useRef<THREE.Mesh>(null!)

  useFrame((state, delta, xrFrame) => {
    // @ts-ignore
    icosahedronRef.current.material.uniforms.time = delta
    /* console.log(icosahedronRef.current.material) */
  })

  return (
    <>
      {/* <LogoTwitter />
      <LogoLinkedIn position={[2.5, 0, 0]} />
      <LogoGitHub position={[-2.5, 0, 0]} /> */}
      <mesh ref={icosahedronRef} material={deformGeometryShaderMaterial}>
        <icosahedronGeometry
          attach='geometry'
          args={[20, 20]}
        />
      </mesh>
    </>
  )
}
