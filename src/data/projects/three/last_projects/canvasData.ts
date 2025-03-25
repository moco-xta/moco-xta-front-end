import { CanvasProps } from '@react-three/fiber'

export const canvasDefaultValues: Partial<CanvasProps> = {
  id: 'projects_canvas',
  style: {
    top: 0,
    left: 0,
    width: '100%',
    aspectRatio: 9 / 24,
    backgroundColor: 'red',
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
