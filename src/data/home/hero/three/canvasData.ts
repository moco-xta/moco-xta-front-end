import { CanvasProps } from '@react-three/fiber'

import { default as canvasConstants } from '@/constants/home/hero/three/canvasConstants.json'

export const canvasDefaultValues: Partial<CanvasProps> = {
  dpr: canvasConstants.dpr,
  legacy: canvasConstants.legacy,
  shadows: canvasConstants.shadows,
  gl: {
    antialias: canvasConstants.gl.antialias,
    alpha: canvasConstants.gl.alpha,
    powerPreference: canvasConstants.gl.powerPreference,
    preserveDrawingBuffer: canvasConstants.gl.preserveDrawingBuffer,
  },
}
