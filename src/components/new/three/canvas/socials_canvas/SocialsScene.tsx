import React from 'react'
import { Node, extend } from '@react-three/fiber'
import { shaderMaterial } from '@react-three/drei'

import { LogoTwitter } from '../../models/logos/LogoTwitter'
import { LogoLinkedIn } from '../../models/logos/LogoLinkedIn'
import { LogoGitHub } from '../../models/logos/LogoGitHub'

import vertexShader from '@/components/new/three/shaders/deform_geometry/vertexShader.glsl'
import fragmentShader from '@/components/new/three/shaders/deform_geometry/fragmentShader.glsl'

const uniforms = {
}

export const DeformGeometryShaderMaterial = shaderMaterial(
  uniforms,
  vertexShader,
  fragmentShader,
)

declare global {
  namespace JSX {
    interface IntrinsicElements {
      deformGeometryShaderMaterial: Node<
        typeof DeformGeometryShaderMaterial & JSX.IntrinsicElements['shaderMaterial'],
        typeof DeformGeometryShaderMaterial
      >
    }
  }
}

extend({ DeformGeometryShaderMaterial })

export default function SocialsScene() {
  return (
    <>
      {/* <LogoTwitter />
      <LogoLinkedIn position={[2.5, 0, 0]} />
      <LogoGitHub position={[-2.5, 0, 0]} /> */}
      <mesh>
        <icosahedronGeometry attach='geometry' args={[2, 4]} />
        <deformGeometryShaderMaterial attach='material' />        
      </mesh>
    </>
  )
}
