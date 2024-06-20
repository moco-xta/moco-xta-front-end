import React from 'react'
import { EffectComposer, SSAO } from '@react-three/postprocessing'
import { BlendFunction } from 'postprocessing'

import { default as aboutConstants } from '@/constants/new/canvas/aboutConstants.json'

export default function PostProcessing() {
  return (
    <EffectComposer>
      <SSAO
        blendFunction={BlendFunction.DARKEN}
        samples={30}
        rings={4}
        distanceThreshold={1.0}
        distanceFalloff={0.0}
        rangeThreshold={0.5}
        rangeFalloff={0.1}
        luminanceInfluence={0.9}
        radius={20}
        // @ts-ignore
        scale={1}
        bias={-1}
      />
    </EffectComposer>
  )
}
