import React from 'react'
import { useGLTF } from '@react-three/drei'

import { default as GltfConstants } from '@/constants/gltfConstants.json'

export function IconChatGpt(props) {
  const { nodes, materials } = useGLTF(GltfConstants.ICON_CHAT_GPT)
  return (
    <group
      {...props}
      dispose={null}
      position={[0, 0, 0]}
    >
      <mesh
        geometry={nodes.IconChatGpt.geometry}
        material={materials['icon_chat_gpt_#75ab9d']}
        receiveShadow
        castShadow
      />
    </group>
  )
}

useGLTF.preload(GltfConstants.ICON_CHAT_GPT)
