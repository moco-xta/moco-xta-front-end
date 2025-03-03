import type { TCanvasData } from '@/types/data/three/types'

export const canvasDefaultValues: TCanvasData = {
  id: 'hero_canvas',
  style: {},
  dpr: 2,
  legacy: false,
  linear: true,
  flat: true,
  shadows: true,
  gl: {
    antialias: true,
    alpha: true,
    powerPreference: 'high-performance',
    preserveDrawingBuffer: true,
  },
}
