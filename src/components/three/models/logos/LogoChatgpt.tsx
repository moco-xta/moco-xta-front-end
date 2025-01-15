import React, { forwardRef, useLayoutEffect } from 'react'
import * as THREE from 'three'
import { useGLTF } from '@react-three/drei'

import type { GLTFResult } from '@/types/data/components/three/types'

import { default as glbConstants } from '@/constants/assets/glbConstants.json'

const LogoChatgpt = forwardRef<THREE.Group, JSX.IntrinsicElements['group']>((props, ref) => {
  const { nodes, materials } = useGLTF(glbConstants.LOGOS.LOGO_CHATGPT) as GLTFResult

  useLayoutEffect(() => {
    ;(Object.keys(materials) as Array<keyof typeof materials>).forEach((key) => {
      materials[key].side = THREE.DoubleSide
    })
  }, [materials])

  return (
    <group
      ref={ref}
      {...props}
      dispose={null}
    >
      <mesh
        geometry={nodes.LogoChatGpt.geometry}
        material={materials['logo_chat_gpt_#75ab9d']}
        castShadow
        receiveShadow
      />
    </group>
  )
})

LogoChatgpt.displayName = 'LogoChatgpt'

useGLTF.preload(glbConstants.LOGOS.LOGO_CHATGPT)

export default LogoChatgpt
