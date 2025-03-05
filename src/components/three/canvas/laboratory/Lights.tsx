import React, { useRef } from 'react'
import * as THREE from 'three'
import { Environment, Lightformer, SoftShadows, useHelper } from '@react-three/drei'

import type { TSpotLightsDefaultValues } from "@/types/data/three/types"

import { spotLightsDefaultValues } from '@/data/laboratory/three/lightsData'

export type TCustomSpotLight = {
  defaultValues: TSpotLightsDefaultValues,
  index: number,
}

function CustomSpotLight({ defaultValues, index }: TCustomSpotLight) {
  const spotLightRef = useRef<THREE.SpotLight>(null!)

  // useHelper(spotLightRef, THREE.SpotLightHelper, 'cyan')

  const { orientations, position, targetPosition, ...rest } = defaultValues as TSpotLightsDefaultValues

  return (
    <spotLight
      ref={spotLightRef}
      position={
        new THREE.Vector3(
          (orientations[index][0] as unknown as number) * position!.x,
          (orientations[index][1] as unknown as number) * position.y,
          (orientations[index][2] as unknown as number) * position.z,
        )
      }
      target-position={
        new THREE.Vector3(
          (orientations[index][0] as unknown as number) * targetPosition.x,
          (orientations[index][1] as unknown as number) * targetPosition.y,
          (orientations[index][2] as unknown as number) * targetPosition.z,
        )
      }
      {...rest}
    />
  )
}

export default function Lights() {
  return (
    <>
      <ambientLight intensity={0.045} />
      {spotLightsDefaultValues.orientations.map((_, index) => {
        return <CustomSpotLight key={`custom_spot_light_${index}`} defaultValues={spotLightsDefaultValues} index={index} />
      })}
      {/* <Environment>
        <Lightformer
          form="rect"
          intensity={0.5}
          color="white"
          position={new THREE.Vector3(0, 26.5, 0)}
          scale={[10, 10, 10]}
          target={[0, 0, 0]}
        />
      </Environment> */}
      <SoftShadows
        size={10}
        focus={2}
        samples={10}
      />
    </>
  )
}