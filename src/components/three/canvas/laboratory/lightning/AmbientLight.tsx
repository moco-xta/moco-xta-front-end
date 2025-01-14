import React from 'react'

import { ambientLightDefaultValues } from '@/data/about/three/lightsData'

export default function AmbientLight() {
  return <ambientLight {...ambientLightDefaultValues} />
}
