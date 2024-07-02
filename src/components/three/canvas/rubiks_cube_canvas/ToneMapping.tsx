import * as THREE from 'three'
import { useThree } from '@react-three/fiber'

import { default as rubiksCubeConstants } from '@/constants/new/canvas/rubiksCubeConstants.json'

export function ToneMapping() {
  const { gl } = useThree()
  gl.toneMapping = THREE.ACESFilmicToneMapping
  gl.toneMappingExposure = rubiksCubeConstants.TONE_MAPPING.EXPOSURE

  return null
}
