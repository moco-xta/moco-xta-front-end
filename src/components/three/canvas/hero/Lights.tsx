import React from 'react'
import { Environment/* , Lightformer */ } from '@react-three/drei'

import { default as imgConstants } from '@/constants/assets/imgConstants.json'

export default function Lights() {
  return (
    <>
      <ambientLight intensity={1.5} />
      <Environment
        files={imgConstants.ENVIRONMENTS.EXR.STUDIO_03_4K}
        // backgroundIntensity={0.5}
        environmentIntensity={0.25}
      />
      {/* <Environment resolution={2048}>
        <Lightformer
          intensity={5}
          color={0xffffff}
          rotation-x={Math.PI / 2}
          position={[-6, 4, 6]}
          scale={[1, 10, 1]}
        />
        <Lightformer
          intensity={5}
          color={0xffffff}
          rotation-x={Math.PI / 2}
          position={[6, 4, 6]}
          scale={[1, 10, 1]}
        />
        <Lightformer
          intensity={2.5}
          color={0x000044}
          // rotation-x={Math.PI / 2}
          position={[0, 0, -6]}
          scale={[5, 5, 1]}
        />
        <Lightformer
          intensity={3}
          color={0x000088}
          // rotation-x={Math.PI / 2}
          position={[0, 10, 0]}
          scale={[10, 10, 1]}
        />
      </Environment> */}
    </>
  )
}
