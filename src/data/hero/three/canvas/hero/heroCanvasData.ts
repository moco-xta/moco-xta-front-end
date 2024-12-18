import { CanvasInterface } from '@/interfaces/three'

export const heroCanvasData: CanvasInterface = {
  dpr: 2,
  legacy: false,
  shadows: true,
  gl: {
    antialias: true,
    alpha: true,
    powerPreference: 'high-performance',
    preserveDrawingBuffer: true,
  },
}
