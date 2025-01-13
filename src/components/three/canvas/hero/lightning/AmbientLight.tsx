import React from 'react'

import { ambientLightData } from '@/data/hero/three/lightning/ambientLightData'

export default function AmbientLight() {
  return <ambientLight {...ambientLightData.defaultValues} />
}
