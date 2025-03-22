import { CanvasProps } from '@react-three/fiber'

export const canvasDefaultValues: Partial<CanvasProps> = {
  id: 'skills_logos_canvas',
  style: {
    // width: '300px!important',
    // height: '300px!important',
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
