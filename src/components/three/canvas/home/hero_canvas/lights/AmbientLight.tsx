import React from 'react'
import * as THREE from 'three'

import { default as ambientLightConstants } from '@/constants/animations/home/hero/canvas/lights/ambientLightConstants.json'

import variables from '@/styles/variables.module.scss'
import { ambientLightData } from '@/data/hero/three/canvas/hero/lights/ambientLightData'

export default function AmbientLight() {
  return <ambientLight {...ambientLightData.default} />
}
