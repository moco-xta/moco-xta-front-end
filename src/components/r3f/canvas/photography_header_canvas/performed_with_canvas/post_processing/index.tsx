import React from 'react'
import { DepthOfField, EffectComposer } from '@react-three/postprocessing'
import { Bloom } from '@react-three/postprocessing'
import { KernelSize, Resolution } from 'postprocessing'

import { default as rubiksCubeConstants } from '@/constants/canvas/rubiksCubeConstants.json'

export default function PostProcessing() {
  return (
    <EffectComposer>
      <DepthOfField
        focusDistance={rubiksCubeConstants.POST_PROCESSING.DEPTH_OF_FIELD.FOCUS_DISTANCE}
        focalLength={rubiksCubeConstants.POST_PROCESSING.DEPTH_OF_FIELD.FOCAL_LENGTH}
        bokehScale={rubiksCubeConstants.POST_PROCESSING.DEPTH_OF_FIELD.BOKEH_SCALE}
      />
      <Bloom
        intensity={rubiksCubeConstants.POST_PROCESSING.BLOOM.INTENSITY}
        kernelSize={KernelSize.LARGE}
        luminanceThreshold={rubiksCubeConstants.POST_PROCESSING.BLOOM.LUMINANCE_THRESHOLD}
        luminanceSmoothing={rubiksCubeConstants.POST_PROCESSING.BLOOM.LUMINANCE_SMOOTHING}
        mipmapBlur={rubiksCubeConstants.POST_PROCESSING.BLOOM.MIPMAP_BLUR}
        resolutionX={Resolution.AUTO_SIZE}
        resolutionY={Resolution.AUTO_SIZE}
      />
    </EffectComposer>
  )
}
