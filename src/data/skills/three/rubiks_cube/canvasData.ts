import type { TCanvasData } from '@/types/data/three/types'

export const canvasDefaultValues: TCanvasData = {
  id: 'skills_canvas',
  style: {
    width: '42vw',
    height: '100vh',
  },
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
