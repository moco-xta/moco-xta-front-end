import React from 'react'
import { EffectComposer, Pixelation } from '@react-three/postprocessing'

export default function PostProcessing() {
  return (
    <EffectComposer>
      <Pixelation granularity={1} />
    </EffectComposer>
  )
}
