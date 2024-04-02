import * as THREE from 'three'
import React, { forwardRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

import { default as GltfConstants } from '@/constants/gltfConstants.json'

type GLTFResult = GLTF & {
  nodes: {
    LogoChatGpt: THREE.Mesh
  }
  materials: {
    ['logo_chat_gpt_#75ab9d']: THREE.MeshStandardMaterial
  }
}

export const LogoChatGpt = forwardRef<
  THREE.Group<THREE.Object3DEventMap>,
  JSX.IntrinsicElements['group']
>(function LogoChatGpt({}, ref) {
  const { nodes, materials } = useGLTF(
    GltfConstants.LOGO_CHAT_GPT,
  ) as GLTFResult
  return (
    <group
      ref={ref}
      dispose={null}
      position={[9, 15, 0]}
    >
      <mesh
        geometry={nodes.LogoChatGpt.geometry}
        material={materials['logo_chat_gpt_#75ab9d']}
        receiveShadow
        castShadow
      />
    </group>
  )
})

useGLTF.preload(GltfConstants.LOGO_CHAT_GPT)
