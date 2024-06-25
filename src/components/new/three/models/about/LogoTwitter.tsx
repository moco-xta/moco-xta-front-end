import React, { useEffect, useRef, useState } from 'react'
import * as THREE from 'three'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

import { default as gltfConstants } from '@/constants/new/assets/gltfConstants.json'
import { ThreeEvent, useThree } from '@react-three/fiber'
import { EffectComposer, Outline } from '@react-three/postprocessing'

type GLTFResult = GLTF & {
  nodes: {
    LogoTwitter: THREE.Mesh
  }
  materials: {}
}

export function LogoTwitter({ position }: JSX.IntrinsicElements['mesh']) {
  const { nodes } = useGLTF(gltfConstants.ABOUT.LOGO_TWITTER) as GLTFResult

  const [selected, setSelected] = useState(false)

  const outlineRef = useRef<any>(null!)

  const meshRef = useRef<THREE.Mesh>(null!)

  const { gl } = useThree()

  const [isHovered, setIsHovered] = useState<boolean>(false)

  const handleOnPointerMove = (e: ThreeEvent<MouseEvent>) => {
    e.stopPropagation()
    setIsHovered(true)
    setSelected(true)
  }

  const handleOnPointerOut = (e: ThreeEvent<MouseEvent>) => {
    e.stopPropagation()
    setIsHovered(false)
    setSelected(false)
  }

  useEffect(() => {
    console.log('USE EFFECT')
    if (meshRef.current && outlineRef.current) {
      const outlineSelection = outlineRef.current.selection

      const mesh = meshRef.current

      if (selected) {
        outlineRef.current.clearSelection()
        outlineRef.current.update(
          gl /* inputBuffer: WebGLRenderTarget, deltaTime: Number */,
        )
      } else {
        outlineSelection.set([mesh])
      }
    }
  }, [selected, gl])

  const logoTwitterMaterial = new THREE.MeshStandardMaterial({
    color: '#1D96E8',
  })

  return (
    <>
      <mesh
        name='LogoTwitter'
        ref={meshRef}
        geometry={nodes.LogoTwitter.geometry}
        position={position}
        receiveShadow
        castShadow
        onPointerMove={handleOnPointerMove}
        onPointerOut={handleOnPointerOut}
        /* onPointerOver={() => setSelected(!selected)} */
      >
        <meshStandardMaterial
          attach='material'
          color={isHovered ? 'red' : '#1D96E8'}
        />
      </mesh>
      <EffectComposer>
        <Outline
          xRay
          edgeStrength={100}
          pulseSpeed={0.0}
          visibleEdgeColor={0x00ff00}
          hiddenEdgeColor={0x000000}
          ref={outlineRef}
        />
      </EffectComposer>
    </>
  )
}

useGLTF.preload(gltfConstants.ABOUT.LOGO_TWITTER)
