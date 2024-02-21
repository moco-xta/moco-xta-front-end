import React, { forwardRef, useLayoutEffect } from 'react'
import * as THREE from 'three'
import { useGLTF } from '@react-three/drei'

import { default as GltfConstants } from '@/constants/gltfConstants.json'

const IconChatGpt = forwardRef(function IconChatGpt(props, ref) {
  const gltf = useGLTF(GltfConstants.ICON_CHAT_GPT)
  
  useLayoutEffect(() => {
    const box = new THREE.Box3().setFromObject(gltf.scene)
    ref.current.width = box.getSize(new THREE.Vector3()).x
  }, [])

  return (
    <group
      name={'icon_chat_gpt'}
      ref={ref}
      dispose={null}
    >
      <mesh
        geometry={gltf.nodes.IconChatGpt.geometry}
        material={gltf.materials['icon_chat_gpt_#75ab9d']}
        receiveShadow
        castShadow
      />
    </group>
  )
})

useGLTF.preload(GltfConstants.ICON_CHAT_GPT)

export default IconChatGpt
