import React, { useEffect } from 'react'
import { EffectComposer, Outline, SSAO } from '@react-three/postprocessing'
import { BlendFunction, KernelSize, Resizer } from 'postprocessing'

import { default as aboutConstants } from '@/constants/new/canvas/about/aboutConstants.json'
import { useThree } from '@react-three/fiber'

export default function PostProcessing() {
  const { scene } = useThree()

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
      {/* <Outline
        selection={[]}
        selectionLayer={10}
        blendFunction={BlendFunction.SCREEN}
        patternTexture={null}
        edgeStrength={2.5}
        pulseSpeed={0.0}
        visibleEdgeColor={0xffffff}
        hiddenEdgeColor={0x22090a}
        width={10}
        height={10}
        kernelSize={KernelSize.LARGE}
        blur={false}
        xRay={true}
      /> */}
    </EffectComposer>
  )
}
