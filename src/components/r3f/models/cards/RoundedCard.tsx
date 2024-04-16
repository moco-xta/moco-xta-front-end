import * as THREE from 'three'
import React, { useMemo, useRef } from 'react'
import { useFBO, useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

import { default as GltfConstants } from '@/constants/gltfConstants.json'

import vertexShader from '@/components/r3f/shaders/refraction_and_dispersion_shaders/vertexShader.glsl'
import fragmentShader from '@/components/r3f/shaders/refraction_and_dispersion_shaders/fragmentShader.glsl'
import { useFrame } from '@react-three/fiber'

import { flakesTexture } from '../../textures/flakesTexture'
import { folder, useControls } from 'leva'

type GLTFResult = GLTF & {
  nodes: {
    RoundedCard: THREE.Mesh
  }
  materials: {
    Material: THREE.MeshStandardMaterial
  }
}

export function RoundedCard({
  onPointerMove,
  onPointerOut,
}: JSX.IntrinsicElements['mesh']) {
  const { nodes, materials } = useGLTF(GltfConstants.ROUNDED_CARD) as GLTFResult

  const meshRef = useRef<THREE.Mesh>(null!)

  const mainRenderTarget = useFBO()
  const backRenderTarget = useFBO()

  const {
    light,
    shininess,
    diffuseness,
    fresnelPower,
    iorR,
    iorY,
    iorG,
    iorC,
    iorB,
    iorP,
    saturation,
    chromaticAberration,
    refraction,
  } = useControls({
    light: {
      x: 0.0,
      y: 1,
      z: 1,
    },
    diffuseness: {
      value: 0.2,
    },
    shininess: {
      value: 15.0,
    },
    fresnelPower: {
      value: 8.0,
    },
    ior: folder({
      iorR: { min: 1.0, max: 2.333, step: 0.001, value: 1.15 },
      iorY: { min: 1.0, max: 2.333, step: 0.001, value: 1.16 },
      iorG: { min: 1.0, max: 2.333, step: 0.001, value: 1.18 },
      iorC: { min: 1.0, max: 2.333, step: 0.001, value: 1.22 },
      iorB: { min: 1.0, max: 2.333, step: 0.001, value: 1.22 },
      iorP: { min: 1.0, max: 2.333, step: 0.001, value: 1.22 },
    }),
    saturation: { value: 1.14, min: 1, max: 1.25, step: 0.01 },
    chromaticAberration: {
      value: 0.5,
      min: 0,
      max: 1.5,
      step: 0.01,
    },
    refraction: {
      value: 0.25,
      min: 0,
      max: 10,
      step: 0.01,
    },
  })

  const uniforms = useMemo(
    () => ({
      uTexture: {
        value: null,
      },
      uIorR: { value: 1.0 },
      uIorY: { value: 1.0 },
      uIorG: { value: 1.0 },
      uIorC: { value: 1.0 },
      uIorB: { value: 1.0 },
      uIorP: { value: 1.0 },
      uRefractPower: {
        value: 0.2,
      },
      uChromaticAberration: {
        value: 1.0,
      },
      uSaturation: { value: 0.0 },
      uShininess: { value: 40.0 },
      uDiffuseness: { value: 0.2 },
      uFresnelPower: { value: 8.0 },
      uLight: {
        value: new THREE.Vector3(-1.0, 1.0, 1.0),
      },
      winResolution: {
        value: new THREE.Vector2(
          window.innerWidth,
          window.innerHeight,
        ).multiplyScalar(Math.min(window.devicePixelRatio, 2)),
      },
    }),
    [],
  )

  useFrame((state) => {
    const { gl, scene, camera } = state
    meshRef.current.visible = false

    // @ts-ignore
    meshRef.current.material.uniforms.uDiffuseness.value = diffuseness
    // @ts-ignore
    meshRef.current.material.uniforms.uShininess.value = shininess
    // @ts-ignore
    meshRef.current.material.uniforms.uLight.value = new THREE.Vector3(
      light.x,
      light.y,
      light.z,
    )
    // @ts-ignore
    meshRef.current.material.uniforms.uFresnelPower.value = fresnelPower

    // @ts-ignore
    meshRef.current.material.uniforms.uIorR.value = iorR
    // @ts-ignore
    meshRef.current.material.uniforms.uIorY.value = iorY
    // @ts-ignore
    meshRef.current.material.uniforms.uIorG.value = iorG
    // @ts-ignore
    meshRef.current.material.uniforms.uIorC.value = iorC
    // @ts-ignore
    meshRef.current.material.uniforms.uIorB.value = iorB
    // @ts-ignore
    meshRef.current.material.uniforms.uIorP.value = iorP

    // @ts-ignore
    meshRef.current.material.uniforms.uSaturation.value = saturation
    // @ts-ignore
    meshRef.current.material.uniforms.uChromaticAberration.value =
      chromaticAberration
    // @ts-ignore
    meshRef.current.material.uniforms.uRefractPower.value = refraction

    gl.setRenderTarget(backRenderTarget)
    gl.render(scene, camera)

    // @ts-ignore
    meshRef.current.material.uniforms.uTexture.value = backRenderTarget.texture
    // @ts-ignore
    meshRef.current.material.side = THREE.BackSide

    meshRef.current.visible = true

    gl.setRenderTarget(mainRenderTarget)
    gl.render(scene, camera)

    // @ts-ignore
    meshRef.current.material.uniforms.uTexture.value = mainRenderTarget.texture
    // @ts-ignore
    meshRef.current.material.side = THREE.FrontSide

    gl.setRenderTarget(null)
  })

  return (
    <mesh
      ref={meshRef}
      geometry={nodes.RoundedCard.geometry}
      onPointerMove={onPointerMove}
      onPointerOut={onPointerOut}
    >
      <shaderMaterial
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        uniforms={uniforms}
      />
    </mesh>
  )
}

useGLTF.preload(GltfConstants.ROUNDED_CARD)

{
  /* <meshPhysicalMaterial
  map={flakesTexture()}
  clearcoat={1}
  clearcoatRoughness={0.1}
  metalness={0.9}
  roughness={0.5}
  color={0x8418ca}
  normalMap={flakesTexture()}
  normalScale={new THREE.Vector2(0.15, 0.15)}
/> */
}
