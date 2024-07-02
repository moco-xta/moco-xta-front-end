import * as THREE from 'three'
import { useThree } from '@react-three/fiber'

import { default as heroConstants } from '@/constants/canvas/heroConstants.json'

export default function ToneMapping() {
  const { gl } = useThree()
  gl.toneMapping = THREE.ACESFilmicToneMapping
  gl.toneMappingExposure = heroConstants.TONE_MAPPING.EXPOSURE

  return null
}
