import React, { Ref, createRef, useRef } from 'react'
import { useSelector } from 'react-redux'
import * as THREE from 'three'
import { useHelper } from '@react-three/drei'
import { Leva, useControls } from 'leva'
import { isMobile } from 'react-device-detect'

import { RootState } from '@/redux/store'

import { default as laboratoireFinalRenderConstants } from '@/constants/three/about/laboratoire/laboratoireFinalRenderConstants.json'

export default function Lights() {
  const { debug } = useSelector((state: RootState) => state.about)

  const ref = useRef<Ref<THREE.SpotLight>[]>(
    laboratoireFinalRenderConstants.LIGHTS.CEILING_SPOT_LIGHTS.ORIENTATION.map(
      (orientation, index) => createRef<THREE.SpotLight>(),
    ),
  )

  const ambientLigthsConfig = useControls('AMBIENT LIGHTS: Config', {
    color: laboratoireFinalRenderConstants.LIGHTS.AMBIENT_LIGHT.COLOR,
    intensity: {
      value: laboratoireFinalRenderConstants.LIGHTS.AMBIENT_LIGHT.INTENSITY,
      min: 0,
      max: 10,
      step: 0.01,
    },
  })

  const spotLightCeilingNWtRef = useRef<THREE.SpotLight>(null!)
  const spotLightCeilingNEtRef = useRef<THREE.SpotLight>(null!)
  const spotLightCeilingSWtRef = useRef<THREE.SpotLight>(null!)
  const spotLightCeilingSEtRef = useRef<THREE.SpotLight>(null!)
  /* useHelper(ref.current[0], THREE.SpotLightHelper, 'orange') */
  useHelper(spotLightCeilingNEtRef, THREE.SpotLightHelper, 'red')
  useHelper(spotLightCeilingSWtRef, THREE.SpotLightHelper, 'blue')
  useHelper(spotLightCeilingSEtRef, THREE.SpotLightHelper, 'hotpink')

  const spotLigthsPosition = useControls('SPOT LIGHTS: Position', {
    'position-x': {
      value: laboratoireFinalRenderConstants.LIGHTS.CEILING_SPOT_LIGHTS.POSITION.X,
      min: 0,
      max: 40,
      step: 0.1,
    },
    'position-y': {
      value: laboratoireFinalRenderConstants.LIGHTS.CEILING_SPOT_LIGHTS.POSITION.Y,
      min: 0,
      max: 40,
      step: 0.1,
    },
    'position-z': {
      value: laboratoireFinalRenderConstants.LIGHTS.CEILING_SPOT_LIGHTS.POSITION.Z,
      min: 0,
      max: 40,
      step: 0.1,
    },
    'target-position-x': {
      value: laboratoireFinalRenderConstants.LIGHTS.CEILING_SPOT_LIGHTS.TARGET_POSITION.X,
      min: 0,
      max: 40,
      step: 0.1,
    },
    'target-position-y': {
      value: laboratoireFinalRenderConstants.LIGHTS.CEILING_SPOT_LIGHTS.TARGET_POSITION.Y,
      min: 0,
      max: 40,
      step: 0.1,
    },
    'target-position-z': {
      value: laboratoireFinalRenderConstants.LIGHTS.CEILING_SPOT_LIGHTS.TARGET_POSITION.Z,
      min: 0,
      max: 40,
      step: 0.1,
    },
  })

  const spotLigthsConfig = useControls('SPOT LIGHTS: Config', {
    color: laboratoireFinalRenderConstants.LIGHTS.CEILING_SPOT_LIGHTS.COLOR,
    intensity: {
      value: laboratoireFinalRenderConstants.LIGHTS.CEILING_SPOT_LIGHTS.INTENSITY,
      min: 0,
      max: 200,
      step: 0.01,
    },
    distance: {
      value: laboratoireFinalRenderConstants.LIGHTS.CEILING_SPOT_LIGHTS.DISTANCE,
      min: 0,
      max: 100,
      step: 1,
    },
    angle: {
      value: laboratoireFinalRenderConstants.LIGHTS.CEILING_SPOT_LIGHTS.ANGLE,
      min: 0,
      max: 2,
      step: 0.01,
    },
    penumbra: {
      value: laboratoireFinalRenderConstants.LIGHTS.CEILING_SPOT_LIGHTS.PENUMBRA,
      min: 0,
      max: 2,
      step: 0.01,
    },
    decay: {
      value: laboratoireFinalRenderConstants.LIGHTS.CEILING_SPOT_LIGHTS.DECAY,
      min: 0,
      max: 10,
      step: 0.1,
    },
  })

  return (
    <>
      <Leva hidden />
      <ambientLight {...ambientLigthsConfig} />
      {laboratoireFinalRenderConstants.LIGHTS.CEILING_SPOT_LIGHTS.ORIENTATION.map(
        (orientation, index) => (
          <spotLight
            key={`spotLightCeiling${index}`}
            ref={(spotLight) => {
              // @ts-ignore
              if (spotLight) ref.current[index] = spotLight
              // @ts-ignore
              else delete ref.current[index]
            }}
            /* ref={!debug.lights ? null : spotLightCeilingNWtRef} */
            /* ref={ref.current[index]} */
            position={
              !debug.lights
                ? [
                    orientation[0] *
                      laboratoireFinalRenderConstants.LIGHTS.CEILING_SPOT_LIGHTS.POSITION.X,
                    orientation[1] *
                      laboratoireFinalRenderConstants.LIGHTS.CEILING_SPOT_LIGHTS.POSITION.Y,
                    orientation[2] *
                      laboratoireFinalRenderConstants.LIGHTS.CEILING_SPOT_LIGHTS.POSITION.Z,
                  ]
                : [
                    orientation[0] * spotLigthsPosition['position-x'],
                    orientation[1] * spotLigthsPosition['position-y'],
                    orientation[2] * spotLigthsPosition['position-z'],
                  ]
            }
            target-position={
              !debug.lights
                ? new THREE.Vector3(
                    orientation[0] *
                      laboratoireFinalRenderConstants.LIGHTS.CEILING_SPOT_LIGHTS.TARGET_POSITION.X,
                    orientation[1] *
                      laboratoireFinalRenderConstants.LIGHTS.CEILING_SPOT_LIGHTS.TARGET_POSITION.Y,
                    orientation[2] *
                      laboratoireFinalRenderConstants.LIGHTS.CEILING_SPOT_LIGHTS.TARGET_POSITION.Z,
                  )
                : new THREE.Vector3(
                    orientation[0] * spotLigthsPosition['target-position-x'],
                    orientation[1] * spotLigthsPosition['target-position-y'],
                    orientation[2] * spotLigthsPosition['target-position-z'],
                  )
            }
            castShadow
            shadow-mapSize={
              !isMobile
                ? [
                    laboratoireFinalRenderConstants.LIGHTS.CEILING_SPOT_LIGHTS.SHADOW_MAP_SIZE *
                      laboratoireFinalRenderConstants.LIGHTS.CEILING_SPOT_LIGHTS.K.IS_DESKTOP,
                    laboratoireFinalRenderConstants.LIGHTS.CEILING_SPOT_LIGHTS.SHADOW_MAP_SIZE *
                      laboratoireFinalRenderConstants.LIGHTS.CEILING_SPOT_LIGHTS.K.IS_DESKTOP,
                  ]
                : [
                    laboratoireFinalRenderConstants.LIGHTS.CEILING_SPOT_LIGHTS.SHADOW_MAP_SIZE *
                      laboratoireFinalRenderConstants.LIGHTS.CEILING_SPOT_LIGHTS.K.IS_MOBILE,
                    laboratoireFinalRenderConstants.LIGHTS.CEILING_SPOT_LIGHTS.SHADOW_MAP_SIZE *
                      laboratoireFinalRenderConstants.LIGHTS.CEILING_SPOT_LIGHTS.K.IS_MOBILE,
                  ]
            }
            shadow-camera-far={
              laboratoireFinalRenderConstants.LIGHTS.CEILING_SPOT_LIGHTS.SHADOW_CAMERA_FAR
            }
            shadow-camera-left={
              laboratoireFinalRenderConstants.LIGHTS.CEILING_SPOT_LIGHTS.SHADOW_CAMERA_LEFT
            }
            shadow-camera-right={
              laboratoireFinalRenderConstants.LIGHTS.CEILING_SPOT_LIGHTS.SHADOW_CAMERA_RIGHT
            }
            shadow-camera-top={
              laboratoireFinalRenderConstants.LIGHTS.CEILING_SPOT_LIGHTS.SHADOW_CAMERA_TOP
            }
            shadow-camera-bottom={
              laboratoireFinalRenderConstants.LIGHTS.CEILING_SPOT_LIGHTS.SHADOW_CAMERA_BOTTOM
            }
            shadow-radius={laboratoireFinalRenderConstants.LIGHTS.CEILING_SPOT_LIGHTS.SHADOW_RADIUS}
            shadow-bias={laboratoireFinalRenderConstants.LIGHTS.CEILING_SPOT_LIGHTS.SHADOW_BIAS}
            {...spotLigthsConfig}
          />
        ),
      )}
    </>
  )
}
