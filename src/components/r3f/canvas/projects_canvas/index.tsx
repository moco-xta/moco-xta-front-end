'use client'

import React, { Suspense } from 'react'
import * as THREE from 'three'
import { Canvas } from '@react-three/fiber'
import { DepthOfField, EffectComposer } from '@react-three/postprocessing'
import {
  Bloom,
  ChromaticAberration,
  ColorAverage,
  DotScreen,
  Glitch,
  LensFlare,
  Noise,
  Scanline,
  SMAA,
  SSAO,
  Vignette,
} from '@react-three/postprocessing'
import {
  BlendFunction,
  BlurPass,
  GlitchMode,
  Resizer,
  KernelSize,
  Resolution,
} from 'postprocessing'
import { PerspectiveCamera } from '@react-three/drei'

import { ProjectsMap } from '@/components/r3f/models/projects/ProjectsMap'
import { degreesToRadians } from '@/helpers/r3fHelpers'

function ProjectsScene() {
  return (
    <>
      <PerspectiveCamera
        makeDefault
        position={[-1.8, 0.4, 2.2]}
        rotation={[degreesToRadians(-10), degreesToRadians(-5), 0]}
        fov={45}
        near={0.1}
        far={70}
      />
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <fog
        attach='fog'
        color='black'
        near={0.5}
        far={8}
      />
      <EffectComposer>
        <DepthOfField
          focusDistance={0.01}
          focalLength={0.02}
          bokehScale={3}
        />
        {/* <Bloom
          intensity={1.0} // The bloom intensity.
          blurPass={undefined} // A blur pass.
          kernelSize={KernelSize.LARGE} // blur kernel size
          luminanceThreshold={0.9} // luminance threshold. Raise this value to mask out darker elements in the scene.
          luminanceSmoothing={0.025} // smoothness of the luminance threshold. Range is [0, 1]
          mipmapBlur={false} // Enables or disables mipmap blur.
          resolutionX={Resolution.AUTO_SIZE} // The horizontal resolution.
          resolutionY={Resolution.AUTO_SIZE} // The vertical resolution.
        /> */}
        {/* <DotScreen
          blendFunction={BlendFunction.NORMAL} // blend mode
          angle={Math.PI * 0.5} // angle of the dot pattern
          scale={1.0} // scale of the dot pattern
        /> */}
        {/*  <Glitch
          delay={new THREE.Vector2(1.5, 3.5)} // min and max glitch delay
          duration={new THREE.Vector2(0.6, 1.0)} // min and max glitch duration
          strength={new THREE.Vector2(0.3, 1.0)} // min and max glitch strength
          mode={GlitchMode.SPORADIC} // glitch mode
          active // turn on/off the effect (switches between "mode" prop and GlitchMode.DISABLED)
          ratio={0.82} // Threshold for strong glitches, 0 - no weak glitches, 1 - no strong glitches.
        /> */}
        {/* <Noise
          premultiply // enables or disables noise premultiplication
          blendFunction={BlendFunction.ADD} // blend mode
        /> */}
        {/* <ChromaticAberration
          blendFunction={BlendFunction.NORMAL} // blend mode
          offset={new THREE.Vector2(0.002, 0.002)} // color offset
        /> */}
        {/* <ColorAverage
          blendFunction={BlendFunction.NORMAL} // blend mode
        /> */}
        {/* <LensFlare
          blendFunction={BlendFunction.SCREEN} // The blend function of this effect.
          enabled={true} // Boolean to enable/disable the effect.
          opacity={1.0} // The opacity for this effect. Default: 1.0
          starBurst={true} // Boolean to enable/disable the start burst effect. Can be disabled to improve performance.
          glareSize={0.96} // The glare size. Default: 0.2
          followMouse={false} // Set it to follow the mouse, ignoring the lens position. Default: false
          lensPosition={[0, 0.5, 0]} // The position of the lens flare in 3d space.
          starPoints={6} // The number of points for the star. Default: 6
          flareSize={0.01} // The flare side. Default 0.01
          flareSpeed={0.01} // The flare animation speed. Default 0.01
          flareShape={0.01} // Changes the appearance to anamorphic. Default 0.01
          animated={true} // Animated flare. Default: true
          anamorphic={false} //Set the appearance to full anamorphic. Default: false
          colorGain={new THREE.Color(70, 70, 70)} // Set the color gain for the lens flare. Must be a THREE.Color in RBG format.
          lensDirtTexture={'/lensDirtTexture.png'} // Texture to be used as color dirt for starburst effect.
          haloScale={0.5} // The halo scale. Default: 0.5
          secondaryGhosts={true} // Option to enable/disable secondary ghosts. Default: true.
          ghostScale={0.0} // Option to enable/disable secondary ghosts. Default: true.
          aditionalStreaks={true} // Option to enable/disable aditional streaks. Default: true.
          smoothTime={0.07} // The time that it takes to fade the occlusion. Default: 0.07
        /> */}
        {/* <Scanline
          blendFunction={BlendFunction.OVERLAY} // blend mode
          density={1.25} // scanline density
        /> */}
        {/* <SMAA /> */}
        {/* <SSAO
          blendFunction={BlendFunction.MULTIPLY} // blend mode
          samples={30} // amount of samples per pixel (shouldn't be a multiple of the ring count)
          rings={4} // amount of rings in the occlusion sampling pattern
          distanceThreshold={1.0} // global distance threshold at which the occlusion effect starts to fade out. min: 0, max: 1
          distanceFalloff={0.0} // distance falloff. min: 0, max: 1
          rangeThreshold={0.5} // local occlusion range threshold at which the occlusion starts to fade out. min: 0, max: 1
          rangeFalloff={0.1} // occlusion range falloff. min: 0, max: 1
          luminanceInfluence={0.9} // how much the luminance of the scene influences the ambient occlusion
          radius={20} // occlusion sampling radius
          scale={0.5} // scale of the ambient occlusion
          bias={0.5} // occlusion bias
        /> */}
        {/* <Vignette
          offset={0.5} // vignette offset
          darkness={0.5} // vignette darkness
          eskil={false} // Eskil's vignette technique
          blendFunction={BlendFunction.NORMAL} // blend mode
        /> */}
        {/* <Vignette
          eskil={false}
          offset={0.3}
          darkness={0.9}
        /> */}
      </EffectComposer>
      <ProjectsMap />
    </>
  )
}

export default function ProjectCanvas() {
  return (
    <Canvas gl={{ preserveDrawingBuffer: true }}>
      <Suspense fallback={null}>
        <ProjectsScene />
      </Suspense>
    </Canvas>
  )
}
