import React from 'react'
import * as THREE from 'three'
import {
  Bloom,
  BrightnessContrast,
  EffectComposer,
  LensFlare,
  Vignette,
} from '@react-three/postprocessing'
import { folder, useControls } from 'leva'

export default function PostProcessing() {
  const lensFlareProps = useControls({
    LensFlare: folder(
      {
        enabled: { value: true, label: 'enabled?' },
        opacity: { value: 1.0, min: 0.0, max: 1.0, label: 'opacity' },
        position: {
          value: new THREE.Vector3(-25, 6, -60),
          label: 'position',
          options: [],
        },
        glareSize: {
          value: 0.35,
          // step : 10,
          min: 0.01,
          max: 1.0,
          label: 'glareSize',
        },
        starPoints: {
          value: 6.0,
          step: 1.0,
          min: 0,
          max: 32.0,
          label: 'starPoints',
        },
        animated: {
          value: true,
          label: 'animated?',
        },
        followMouse: {
          value: false,
          label: 'followMouse?',
        },
        anamorphic: {
          value: false,
          label: 'anamorphic?',
        },
        colorGain: {
          value: new THREE.Color(56, 22, 11),
          label: 'colorGain',
          options: [],
        },
        Flare: folder({
          flareSpeed: {
            value: 0.4,
            step: 0.001,
            min: 0.0,
            max: 1.0,
            label: 'flareSpeed',
          },
          flareShape: {
            value: 0.1,
            step: 0.001,
            min: 0.0,
            max: 1.0,
            label: 'flareShape',
          },
          flareSize: {
            value: 0.005,
            step: 0.001,
            min: 0.0,
            max: 0.01,
            label: 'flareSize',
          },
        }),

        SecondaryGhosts: folder({
          secondaryGhosts: {
            value: true,
            label: 'secondaryGhosts?',
          },
          ghostScale: {
            value: 0.1,
            // step : 10,
            min: 0.01,
            max: 1.0,
            label: 'ghostScale',
          },
          aditionalStreaks: {
            value: true,
            label: 'aditionalStreaks?',
          },
        }),
        StartBurst: folder({
          starBurst: {
            value: true,
            label: 'starBurst?',
          },
          haloScale: {
            value: 0.5,
            step: 0.01,
            min: 0.3,
            max: 1.0,
          },
        }),
      },
      {
        collapsed: true,
      },
    ),
  })

  return (
    <EffectComposer multisampling={0}>
      <Vignette />
      <Bloom
        mipmapBlur
        radius={0.9}
        luminanceThreshold={0.966}
        intensity={2}
        levels={4}
      />
      <LensFlare />
      <BrightnessContrast contrast={0.2} />
    </EffectComposer>
  )
}
