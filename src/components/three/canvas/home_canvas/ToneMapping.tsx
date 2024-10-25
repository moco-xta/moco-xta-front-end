import * as THREE from 'three'
import { useThree } from '@react-three/fiber'

import { default as homeConstants } from '@/constants/canvas/homeConstants.json'

export default function ToneMapping() {
  const { gl } = useThree()
  gl.toneMapping = THREE.ReinhardToneMapping
  gl.toneMappingExposure = homeConstants.TONE_MAPPING.EXPOSURE

  return null
}
