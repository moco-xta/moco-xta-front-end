import type { TCanvasData } from '@/types/data/three/types'

export const canvasDefaultValues: TCanvasData = {
  id: 'introduction_canvas',
  style: {
    width: '100vw',
    height: '100vh',
  },
  dpr: 1,
  legacy: true,
  linear: false,
  flat: false,
  shadows: true,
  gl: {
    antialias: true,
    alpha: true,
    powerPreference: 'high-performance',
    preserveDrawingBuffer: true,
  },
}
