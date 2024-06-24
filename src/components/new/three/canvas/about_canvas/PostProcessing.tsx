import React, { useEffect } from 'react'
import { EffectComposer, Outline, SSAO } from '@react-three/postprocessing'
import { BlendFunction, KernelSize, Resizer } from 'postprocessing'

import { default as aboutConstants } from '@/constants/new/canvas/aboutConstants.json'
import { useThree } from '@react-three/fiber'

export default function PostProcessing() {
  const { scene } = useThree()

  useEffect(() => {
    console.log('scene', scene.getObjectByName('LogoTwitter'))
  }, [scene])


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
      <Outline
        selection={[/* scene.getObjectByName('LogoTwitter') */]} // selection of objects that will be outlined
        selectionLayer={10} // selection layer
        blendFunction={BlendFunction.SCREEN} // set this to BlendFunction.ALPHA for dark outlines
        patternTexture={null} // a pattern texture
        edgeStrength={2.5} // the edge strength
        pulseSpeed={0.0} // a pulse speed. A value of zero disables the pulse effect
        visibleEdgeColor={0xffffff} // the color of visible edges
        hiddenEdgeColor={0x22090a} // the color of hidden edges
        width={10} // render width
        height={10} // render height
        kernelSize={KernelSize.LARGE} // blur kernel size
        blur={false} // whether the outline should be blurred
        xRay={true} // indicates whether X-Ray outlines are enabled
      />
    </EffectComposer>
  )
}
