import { Node, extend } from '@react-three/fiber'
import { shaderMaterial } from '@react-three/drei'

import vertexShader from '@/components/new/three/shaders/default/vertexShader.glsl'
import fragmentShader from '@/components/new/three/shaders/default/fragmentShader.glsl'

const uniforms = {
}

export const DefaultShaderMaterial = shaderMaterial(
  uniforms,
  vertexShader,
  fragmentShader,
)

declare global {
  namespace JSX {
    interface IntrinsicElements {
      defaultShaderMaterial: Node<
        typeof DefaultShaderMaterial & JSX.IntrinsicElements['shaderMaterial'],
        typeof DefaultShaderMaterial
      >
    }
  }
}

extend({ DefaultShaderMaterial })
