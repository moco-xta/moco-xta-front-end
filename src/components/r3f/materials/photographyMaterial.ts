import { Node, extend } from '@react-three/fiber'
import { shaderMaterial } from '@react-three/drei'

import vertexShader from '@/components/r3f/shaders/photography_shaders/vertexShader.glsl'
import fragmentShader from '@/components/r3f/shaders/photography_shaders/fragmentShader.glsl'

const uniforms = {
  uShift: 0.0,
  uTexture: null,
}

export const PhotographyMaterial = shaderMaterial(
  uniforms,
  vertexShader,
  fragmentShader,
)

declare global {
  namespace JSX {
    interface IntrinsicElements {
      photographyMaterial: Node<
        typeof PhotographyMaterial & JSX.IntrinsicElements['shaderMaterial'],
        typeof PhotographyMaterial
      >
    }
  }
}

extend({ PhotographyMaterial })
