import { CanvasProps } from '@react-three/fiber'

export const canvasDefaultValues: Partial<CanvasProps> = {
  id: 'projects_canvas',
  style: {
    zIndex: 1,
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100vw',
    height: '100vh',
    // backgroundColor: 'black',
  },
  dpr: 2,
  shadows: true,
  legacy: false,
  linear: false,
  flat: false,
  gl: {
    antialias: true,
    alpha: true,
    powerPreference: 'high-performance',
    preserveDrawingBuffer: true,
  },
}
