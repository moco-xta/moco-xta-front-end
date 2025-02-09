// import * as THREE from 'three'

import type { TCanvasDefaultValues } from '@/types/components/three/types'

import { default as canvasConstants } from '@/constants/hero/three/canvasConstants.json'

export const canvasDefaultValues: TCanvasDefaultValues = {
  id: canvasConstants.defaultValues.id,
  dpr: canvasConstants.defaultValues.dpr,
  legacy: canvasConstants.defaultValues.legacy,
  linear: canvasConstants.defaultValues.linear,
  flat: canvasConstants.defaultValues.flat,
  shadows: canvasConstants.defaultValues.shadows,
  gl: {
    antialias: canvasConstants.defaultValues.gl.antialias,
    alpha: canvasConstants.defaultValues.gl.alpha,
    powerPreference: canvasConstants.defaultValues.gl.powerPreference as WebGLPowerPreference,
    preserveDrawingBuffer: canvasConstants.defaultValues.gl.preserveDrawingBuffer,
    // toneMapping: THREE.ACESFilmicToneMapping,
    // toneMappingExposure: canvasConstants.defaultValues.gl.toneMappingExposure,
  },
}
