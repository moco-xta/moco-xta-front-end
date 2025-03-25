import { CanvasProps } from '@react-three/fiber'

export const canvasDefaultValues: Partial<CanvasProps> = {
  // id: 'projects_canvas',
  style: {
    backgroundColor: 'blue',
  },
  dpr: 2,
  shadows: true,
  legacy: false,
  linear: true,
  flat: true,
  gl: {
    antialias: true,
    alpha: true,
    powerPreference: 'high-performance',
    preserveDrawingBuffer: true,
  },
}
