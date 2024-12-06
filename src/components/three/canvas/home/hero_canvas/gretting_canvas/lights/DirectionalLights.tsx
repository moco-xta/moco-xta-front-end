import React, { useEffect, useRef } from 'react'
import * as THREE from 'three'
import { useHelper } from '@react-three/drei'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'

import { default as heroCanvasConstants } from '@/constants/canvas/home/heroCanvasConstants.json'

import { useFrame } from '@react-three/fiber'

interface DirectionalLightsInterface {
  timeline: GSAPTimeline
}

export default function DirectionalLights({ timeline }: DirectionalLightsInterface) {
  const directionalLightsGroupRef = useRef<THREE.Group>(null!)
  const directionalLightsColorRef = useRef<THREE.Color>(new THREE.Color())
  const directionalLightsIntensityRef = useRef<number>(0)

  useFrame(() => {
    directionalLightsGroupRef.current.children.map((directionalLight) => {
      // @ts-ignore
      directionalLight.intensity = directionalLightsIntensityRef.current
      // @ts-ignore
      directionalLight.color = directionalLightsColorRef.current
    })
  })

  useGSAP(
    () => {
      timeline.to(
        directionalLightsColorRef.current,
        {
          keyframes: {
            '0%': {
              r: 1,
              g: 0,
              b: 0,
            },
            '33%': {
              r: 0,
              g: 1,
              b: 0,
            },
            '66%': {
              r: 0,
              g: 0,
              b: 1,
            },
            '100%': {
              r: 1,
              g: 0,
              b: 1,
            },
            easeEach: 'none',
          },
          duration: 5,
        },
        0,
      )
      // INTENSITY
      timeline.to(
        directionalLightsIntensityRef,
        {
          keyframes: {
            '0%': {
              current: 0,
            },
            '60%': {
              current: 0,
            },
            '65%': {
              current: 10,
            },
            '70%': {
              current: 0,
            },
            '85%': {
              current: 10,
            },
            '90%': {
              current: 0,
            },
            '95%': {
              current: 10,
            },
            '100%': {
              current: 100,
            },
            easeEach: 'none',
          },
          duration: 5,
        },
        0,
      )
    },
    { scope: directionalLightsGroupRef },
  )

  return (
    <group ref={directionalLightsGroupRef}>
      {heroCanvasConstants.LIGHTS.DIRECTIONAL_LIGHTS.POSITIONS.map((position, index) => {
        return (
          <directionalLight
            key={`greeting_canvas_directional_light_${index}`}
            position={[position.X, position.Y, position.Z]}
            target={new THREE.Object3D()}
            intensity={heroCanvasConstants.LIGHTS.DIRECTIONAL_LIGHTS.INTENSITY}
            shadow-mapSize={heroCanvasConstants.LIGHTS.DIRECTIONAL_LIGHTS.MAP_SIZE}
            shadow-camera-far={heroCanvasConstants.LIGHTS.DIRECTIONAL_LIGHTS.SHADOW_CAMERA_FAR}
            shadow-camera-left={heroCanvasConstants.LIGHTS.DIRECTIONAL_LIGHTS.SHADOW_CAMERA_LEFT}
            shadow-camera-right={heroCanvasConstants.LIGHTS.DIRECTIONAL_LIGHTS.SHADOW_CAMERA_RIGHT}
            shadow-camera-top={heroCanvasConstants.LIGHTS.DIRECTIONAL_LIGHTS.SHADOW_CAMERA_TOP}
            shadow-camera-bottom={
              heroCanvasConstants.LIGHTS.DIRECTIONAL_LIGHTS.SHADOW_CAMERA_BOTTOM
            }
            shadow-radius={heroCanvasConstants.LIGHTS.DIRECTIONAL_LIGHTS.SHADOW_RADIUS}
            shadow-bias={heroCanvasConstants.LIGHTS.DIRECTIONAL_LIGHTS.SHADOW_BIAS}
            castShadow
          />
        )
      })}
    </group>
  )
}
