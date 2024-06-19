import * as THREE from 'three'
import { useThree } from '@react-three/fiber'

import { default as aboutConstants } from '@/constants/new/canvas/aboutConstants.json'

export default function ToneMapping() {
  const { gl } = useThree()
  gl.toneMapping = THREE.ACESFilmicToneMapping
  gl.toneMappingExposure = aboutConstants.TONE_MAPPING.EXPOSURE

  return null
}
