import * as THREE from 'three'

// UNIFORMS

export type TUniforms = Record<string, TUniform>

type TUniform = {
  type: string
  value: number | THREE.Texture | THREE.Vector2 | THREE.Vector3
}

// MOCO

declare global {
  interface Window {
    sparkles: Sparkle[]
  }
}

export class Sparkle extends THREE.Vector3 {
  x: number = 0
  y: number = 0
  z: number = 0
  _size: number = 0
  size: number = 0
  dest: THREE.Vector3 = new THREE.Vector3()
  scaleSpeed: number = 0
  stop: boolean = false
  setup(origin: THREE.Vector3) {
    this.add(origin).multiplyScalar(4)
    this.dest = origin
    this._size = Math.random() * 0.5 + 0.5
    this.size = 3
    this.scaleSpeed = Math.random() * 0.3 + 0.3
    this.stop = false
  }
  update() {
    this.x += (this.dest.x - this.x) * 0.08
    this.y += (this.dest.y - this.y) * 0.08
    this.z += (this.dest.z - this.z) * 0.08
    if (this.size < this._size) {
      this.size += this.scaleSpeed
    } else {
      if (this.distanceTo(this.dest) < 0.1) {
        this.stop = true
      }
    }
  }
}

export type TLine = {
  colorIndex: number
  previous: THREE.Vector3
}
