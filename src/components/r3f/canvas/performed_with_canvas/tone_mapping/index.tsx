import * as THREE from 'three'
import { useThree } from '@react-three/fiber'

export function ToneMapping() {
  const { gl } = useThree()
  gl.toneMapping = THREE.ACESFilmicToneMapping
  gl.toneMappingExposure = 6

  return null
}
