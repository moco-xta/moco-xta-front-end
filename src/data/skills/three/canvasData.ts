import { CanvasProps } from '@react-three/fiber'

import { default as canvasConstants } from '@/constants/skills/three/canvasConstants.json'

export const canvasDefaultValues: Partial<CanvasProps> = {
  dpr: canvasConstants.defaultValues.dpr,
  legacy: canvasConstants.defaultValues.legacy,
  shadows: canvasConstants.defaultValues.shadows,
  gl: {
    antialias: canvasConstants.defaultValues.gl.antialias,
    alpha: canvasConstants.defaultValues.gl.alpha,
    powerPreference: canvasConstants.defaultValues.gl.powerPreference,
    preserveDrawingBuffer: canvasConstants.defaultValues.gl.preserveDrawingBuffer,
  },
}
