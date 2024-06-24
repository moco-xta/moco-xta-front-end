import React, { useEffect, useRef, useState } from 'react'
import * as THREE from 'three'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

import { default as gltfConstants } from '@/constants/new/assets/gltfConstants.json'
import { useThree } from '@react-three/fiber'
import { EffectComposer, Outline } from '@react-three/postprocessing'

type GLTFResult = GLTF & {
  nodes: {
    LogoTwitter: THREE.Mesh
  }
  materials: {}
}

export function LogoTwitter({ position }: JSX.IntrinsicElements['mesh']) {
  const { nodes } = useGLTF(gltfConstants.ABOUT.LOGO_TWITTER) as GLTFResult

  const [selected, select] = useState(false);

  const outlineRef = useRef<any>(null!);

  const meshRef = useRef<THREE.Mesh>(null!);

  const { gl } = useThree();

  useEffect(() => {
    if (meshRef.current && outlineRef.current) {
      const outlineSelection = outlineRef.current.selection;

      const mesh = meshRef.current;

      if (selected) {
        outlineRef.current.clearSelection();
        outlineRef.current.update(
          gl /* inputBuffer: WebGLRenderTarget, deltaTime: Number */
        );
      } else {
        outlineSelection.set([mesh]);
      }
    }
  }, [selected, gl]);

  const logoTwitterMaterial = new THREE.MeshStandardMaterial({
    color: '#1D96E8',
  })

  return (
    <>
      <mesh
        name='LogoTwitter'
        ref={meshRef}
        geometry={nodes.LogoTwitter.geometry}
        material={logoTwitterMaterial}
        position={position}
        receiveShadow
        castShadow
        onPointerOver={() => select(!selected)}
      />
      <EffectComposer>
        <Outline
          xRay
          edgeStrength={2.5}
          pulseSpeed={0.0}
          visibleEdgeColor={0xffffff}
          hiddenEdgeColor={0x22090a}
          ref={outlineRef}
        />
      </EffectComposer>
    </>
  )
}

useGLTF.preload(gltfConstants.ABOUT.LOGO_TWITTER)
