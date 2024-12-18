export interface CanvasInterface {
  dpr?: number
  legacy?: boolean
  shadows?: boolean
  gl?: GlInterface
}

interface GlInterface {
  antialias?: boolean
  alpha?: boolean
  powerPreference?: string
  preserveDrawingBuffer?: boolean
}

export interface CameraInterface {
  default?: {
    makeDefault?: boolean
    position?: THREE.Vector3
    fov?: number
    near?: number
    far?: number
  }
  // animations?: ???
}

export interface FloatInterface {
  speed?: number
  rotationIntensity?: number
}

export interface AmbientLightInterface {
  default: {
    color?: string
    intensity?: number
  }
}

export interface DirectionalLightInterface {
  default: {
    color?: string
    intensity?: number
    position?: THREE.Vector3
    positions?: THREE.Vector3[]
    target?: THREE.Object3D
    castShadow?: boolean
    'shadow-mapSize'?: number[]
    'shadow-camera-far'?: number
    'shadow-camera-left'?: number
    'shadow-camera-right'?: number
    'shadow-camera-top'?: number
    'shadow-camera-bottom'?: number
    'shadow-radius'?: number
    'shadow-bias'?: number
  }
}
