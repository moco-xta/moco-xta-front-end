import * as THREE from 'three'
import { useThree } from '@react-three/fiber'

import { default as reviewConstants } from '@/constants/canvas/reviewConstants.json'

export default function ToneMapping() {
  const { gl } = useThree()
  gl.toneMapping = THREE.ACESFilmicToneMapping
  gl.toneMappingExposure = reviewConstants.TONE_MAPPING.EXPOSURE

  return null
}
