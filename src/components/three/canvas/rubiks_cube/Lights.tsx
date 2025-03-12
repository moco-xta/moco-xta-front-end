import React from 'react'
import { Environment, Lightformer } from '@react-three/drei'

import { lightsData } from '@/data/skills/three/rubiks_cube/lightsData'

export default function Lights() {
  return (
    <>
      <ambientLight intensity={0.85} />
      <Environment>
      <Lightformer
        intensity={lightsData.lightformer.intensity}
        position={[0, 8, 0]}
        rotation-y={Math.PI / 2}
        scale={5}
        castShadow
      />
      <Lightformer
        intensity={lightsData.lightformer.intensity}
        position={[0, -8, 0]}
        rotation-y={-Math.PI / 2}
        scale={5}
        castShadow
      />
      {/* <Lightformer
        intensity={lightsData.lightformer.intensity}
        position={[-8, 0, 0]}
        // rotation-y={Math.PI / 2}
        scale={5}
        castShadow
      /> */}
      <Lightformer
        intensity={lightsData.lightformer.intensity}
        position={[8, 0, 0]}
        rotation-z={Math.PI}
        scale={5}
        castShadow
      />
      {/* <Lightformer
        intensity={lightsData.lightformer.intensity}
        position={[0, 0, 8]}
        rotation-y={-Math.PI / 2}
        scale={5}
        castShadow
      /> */}
      <Lightformer
        intensity={lightsData.lightformer.intensity}
        position={[0, 0, -8]}
        rotation-y={Math.PI / 2}
        scale={5}
        castShadow
      />
      </Environment>
    </>
  )
}
