import React from 'react'
import * as THREE from 'three'
import {
  Bloom,
  ChromaticAberration,
  DepthOfField,
  EffectComposer,
  Pixelation,
  ToneMapping,
} from '@react-three/postprocessing'
import { BlendFunction, KernelSize, Resolution } from 'postprocessing'

export default function PostProcessing() {
  return (
    <EffectComposer>
      <DepthOfField
        focusDistance={0.004}
        focalLength={0.0035}
        bokehScale={5}
      />
      <Bloom
        intensity={1}
        kernelSize={KernelSize.LARGE}
        luminanceThreshold={0.9}
        luminanceSmoothing={0.025}
        mipmapBlur={false}
        resolutionX={Resolution.AUTO_SIZE}
        resolutionY={Resolution.AUTO_SIZE}
      />
      {/* <Pixelation granularity={1} /> */}
      {/* <ChromaticAberration
        blendFunction={BlendFunction.LUMINOSITY} // blend mode
        offset={new THREE.Vector2(0.02, 0.002)} // color offset
      /> */}
      {/* <ToneMapping
        blendFunction={BlendFunction.NORMAL} // blend mode
        adaptive={true} // toggle adaptive luminance map usage
        resolution={256} // texture resolution of the luminance map
        middleGrey={0.6} // middle grey factor
        maxLuminance={16.0} // maximum luminance
        averageLuminance={1.0} // average luminance
        adaptationRate={1.0} // luminance adaptation rate
      /> */}
    </EffectComposer>
  )
}
