import * as THREE from 'three'
import { useThree } from '@react-three/fiber'

export default function ToneMapping() {
  const { gl, viewport } = useThree()
  gl.toneMapping = THREE.ACESFilmicToneMapping
  gl.toneMappingExposure = 4

  return null
}
