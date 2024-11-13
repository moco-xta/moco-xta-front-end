import * as THREE from 'three'
import React, { useEffect, useRef } from 'react'
import { useFBO, useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'
import { Leva, useControls } from 'leva'

import vertexShader from '@/components/three/shaders/voxelized_shader/vertexShader.glsl'
import fragmentShader from '@/components/three/shaders/voxelized_shader/fragmentShader.glsl'

import { default as gltfConstants } from '@/constants/assets/gltfConstants.json'
import { useFrame } from '@react-three/fiber'

type GLTFResult = GLTF & {
  nodes: {
    Face: THREE.Mesh
  }
  materials: {}
}

export function Face(props: JSX.IntrinsicElements['mesh']) {
  const { nodes } = useGLTF(gltfConstants.SKETCHFAB.FACE) as GLTFResult

  const faceRef = useRef<THREE.Mesh>(null!)
  const mesh = useRef<THREE.Mesh>(null!)
  /* const renderTarget = useFBO();
  const secondRenderTarget = useFBO(); */
  const magicScene = new THREE.Scene()

  const renderTargetA = useFBO()
  const renderTargetB = useFBO()

  const voxelizedShaderConfig = useControls('Voxelized shader', {
    triScale: {
      value: 1,
      min: 0,
      max: 1,
      step: 0.1,
    },
  })

  useEffect(() => {
    nodes.Face.geometry.center()
    nodes.Face.geometry = nodes.Face.geometry.toNonIndexed()
    let pos = nodes.Face.geometry.attributes.position.array
    let centers = []
    for (let i = 0; i < pos.length; i += 9) {
      let centerX = (pos[i] + pos[i + 3] + pos[i + 6]) / 3
      let centerY = (pos[i + 1] + pos[i + 4] + pos[i + 7]) / 3
      let centerZ = (pos[i + 2] + pos[i + 5] + pos[i + 8]) / 3

      centers.push(centerX, centerY, centerZ)
      centers.push(centerX, centerY, centerZ)
      centers.push(centerX, centerY, centerZ)
    }
    nodes.Face.geometry.setAttribute(
      'center',
      new THREE.BufferAttribute(new Float32Array(centers), 3),
    )
    console.log('nodes.Face.geometry', nodes.Face.geometry)
  }, [nodes])

  useFrame((state, delta) => {
    const { gl, scene, camera, clock } = state
    /* const { gl, scene, camera } = state */

    /* time += delta */

    console.log('clock', clock)
    /* console.log('nodes.Face.position.x', nodes.Face.position.x) */

    faceRef.current.position.x = 0.5 * Math.sin(clock.elapsedTime * 0.6)

    gl.setRenderTarget(renderTargetA)
    gl.render(scene, camera)

    // @ts-ignore
    mesh.current.material.map = renderTargetA.texture

    /* gl.setRenderTarget(secondRenderTarget);
    gl.render(scene, camera);

    mesh.current.material.map = secondRenderTarget.texture; */

    gl.setRenderTarget(null)
  })

  const uniforms = {
    triScale: {
      type: 'f',
      value: voxelizedShaderConfig.triScale,
    },
  }

  const voxelizedShaderMaterial = new THREE.ShaderMaterial({
    uniforms: uniforms,
    vertexShader: vertexShader,
    fragmentShader: fragmentShader,
  })

  return (
    <>
      <mesh
        ref={faceRef}
        name='Face'
        geometry={nodes.Face.geometry}
        material={voxelizedShaderMaterial}
        /* position={[0, 0, -1]} */
        scale={0.5}
      />
      <mesh
        ref={mesh}
        scale={1}
      >
        <planeGeometry args={[2, 2]} />
        <meshBasicMaterial />
      </mesh>
    </>
  )
}

useGLTF.preload(gltfConstants.SKETCHFAB.FACE)
