import { Suspense, useMemo, useRef } from 'react'
import * as THREE from 'three'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, useFBO, Float, Text3D, PerspectiveCamera } from '@react-three/drei'
import { Leva, folder, useControls } from 'leva'

import vertexShader from '@/components/r3f/shaders/refraction_and_dispersion_shaders/vertexShader.glsl'
import fragmentShader from '@/components/r3f/shaders/refraction_and_dispersion_shaders/fragmentShader.glsl'

const Geometries = () => {
  const mesh = useRef<THREE.Mesh>(null!)

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
      x: -1.0,
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
      max: 1,
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
    mesh.current.visible = false

    // @ts-ignore
    mesh.current.material.uniforms.uDiffuseness.value = diffuseness
    // @ts-ignore
    mesh.current.material.uniforms.uShininess.value = shininess
    // @ts-ignore
    mesh.current.material.uniforms.uLight.value = new THREE.Vector3(
      light.x,
      light.y,
      light.z,
    )
    // @ts-ignore
    mesh.current.material.uniforms.uFresnelPower.value = fresnelPower

    // @ts-ignore
    mesh.current.material.uniforms.uIorR.value = iorR
    // @ts-ignore
    mesh.current.material.uniforms.uIorY.value = iorY
    // @ts-ignore
    mesh.current.material.uniforms.uIorG.value = iorG
    // @ts-ignore
    mesh.current.material.uniforms.uIorC.value = iorC
    // @ts-ignore
    mesh.current.material.uniforms.uIorB.value = iorB
    // @ts-ignore
    mesh.current.material.uniforms.uIorP.value = iorP

    // @ts-ignore
    mesh.current.material.uniforms.uSaturation.value = saturation
    // @ts-ignore
    mesh.current.material.uniforms.uChromaticAberration.value =
      chromaticAberration
    // @ts-ignore
    mesh.current.material.uniforms.uRefractPower.value = refraction

    gl.setRenderTarget(backRenderTarget)
    gl.render(scene, camera)

    // @ts-ignore
    mesh.current.material.uniforms.uTexture.value = backRenderTarget.texture
    // @ts-ignore
    mesh.current.material.side = THREE.BackSide

    mesh.current.visible = true

    gl.setRenderTarget(mainRenderTarget)
    gl.render(scene, camera)

    // @ts-ignore
    mesh.current.material.uniforms.uTexture.value = mainRenderTarget.texture
    // @ts-ignore
    mesh.current.material.side = THREE.FrontSide

    gl.setRenderTarget(null)
  })

  return (
    <>
      <Text3D
        ref={mesh}
        letterSpacing={-0.06}
        size={0.2}
        font='/fonts/json/Inter_Bold.json'
        scale={[5, 5, 5]}
        position={[-2.5, 0, 0]}
        curveSegments={36}
        bevelEnabled={true}
        bevelThickness={0.002}
        bevelSize={0.002}
        bevelOffset={0}
        bevelSegments={10}
      >
        Introduction
        <shaderMaterial
          vertexShader={vertexShader}
          fragmentShader={fragmentShader}
          uniforms={uniforms}
        />
      </Text3D>
      {/* <mesh ref={mesh}>
        <torusGeometry args={[3, 1, 32, 100]} />
        <shaderMaterial
          vertexShader={vertexShader}
          fragmentShader={fragmentShader}
          uniforms={uniforms}
        />
      </mesh> */}
    </>
  )
}

const Scene = () => {
  return (
    <>
      <Leva collapsed />
      <Canvas
        dpr={[1, 2]}
      >
        <PerspectiveCamera
          makeDefault
          position={[0, 0.5, 5]}
          fov={30}
          near={0.1}
          far={55}
        />
        <ambientLight intensity={1.0} />
        <Suspense>
          <Geometries />
        </Suspense>
        <OrbitControls />
      </Canvas>
    </>
  )
}

export default Scene
