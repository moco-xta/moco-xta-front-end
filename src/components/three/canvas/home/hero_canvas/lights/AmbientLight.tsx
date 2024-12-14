import React from 'react'
import * as THREE from 'three'

import { default as ambientLightConstants } from '@/constants/animations/home/hero/canvas/lights/ambientLightConstants.json'

import variables from '@/styles/variables.module.scss'

export default function AmbientLight() {
  return (
    <ambientLight
      color={ambientLightConstants.ANIMATION['0_PERCENT'].COLOR}
      intensity={ambientLightConstants.ANIMATION['0_PERCENT'].INTENSITY}
    />
  )
}
