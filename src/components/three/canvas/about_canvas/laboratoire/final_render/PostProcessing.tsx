import React from 'react'
import { EffectComposer, N8AO, BrightnessContrast } from '@react-three/postprocessing'

import { default as laboratoireFinalRenderConstants } from '@/constants/canvas/about/laboratoire/laboratoireFinalRenderConstants.json'

export default function PostProcessing() {
  return (
    <EffectComposer>
      <N8AO
        color={laboratoireFinalRenderConstants.POST_PROCESSING.NBA.COLOR}
        aoRadius={laboratoireFinalRenderConstants.POST_PROCESSING.NBA.AO_RADIUS}
        intensity={laboratoireFinalRenderConstants.POST_PROCESSING.NBA.INTENSITY}
      />
      <BrightnessContrast
        brightness={laboratoireFinalRenderConstants.POST_PROCESSING.BRIGHTNESS_CONTRAST.BRIGHTNESS}
        contrast={laboratoireFinalRenderConstants.POST_PROCESSING.BRIGHTNESS_CONTRAST.CONTRAST}
      />
    </EffectComposer>
  )
}
