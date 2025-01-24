import React from 'react'

import { PerspectiveCamera } from '@react-three/drei'

import { cameraDefaultValues } from '@/data/projects/three/cameraData'

export default function Camera() {
  return <PerspectiveCamera {...cameraDefaultValues.camera} />
}
