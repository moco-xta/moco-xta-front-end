import { useMemo, useRef } from 'react'
import * as THREE from 'three'
import { useFrame } from '@react-three/fiber'
import { useFBO, Text3D } from '@react-three/drei'

import vertexShader from '@/components/r3f/shaders/refraction_and_dispersion_shaders/vertexShader.glsl'
import fragmentShader from '@/components/r3f/shaders/refraction_and_dispersion_shaders/fragmentShader.glsl'
import { degreesToRadians } from '@/helpers/r3fHelpers'

const position = { x: 30, y: 0, z: 1 }

export default function GraphicsText() {
  const mesh = useRef<THREE.Mesh>(null!)

  const mainRenderTarget = useFBO()
  const backRenderTarget = useFBO()

  const light = { x: position.x, y: position.y, z: position.z }
  const diffuseness = 0.2
  const shininess = 15.0
  const fresnelPower = 8.0
  const ior = {
    iorR: 1.15,
    iorY: 1.16,
    iorG: 1.18,
    iorC: 1.22,
    iorB: 1.22,
    iorP: 1.22,
  }
  const saturation = 1.14
  const chromaticAberration = 0.5
  const refraction = 0.25

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
    mesh.current.material.uniforms.uIorR.value = ior.iorR
    // @ts-ignore
    mesh.current.material.uniforms.uIorY.value = ior.iorY
    // @ts-ignore
    mesh.current.material.uniforms.uIorG.value = ior.iorG
    // @ts-ignore
    mesh.current.material.uniforms.uIorC.value = ior.iorC
    // @ts-ignore
    mesh.current.material.uniforms.uIorB.value = ior.iorB
    // @ts-ignore
    mesh.current.material.uniforms.uIorP.value = ior.iorP

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
    <Text3D
      ref={mesh}
      /* rotation={[0, degreesToRadians(90), 0]} */
      letterSpacing={-0.06}
      size={0.5}
      font='/fonts/json/Inter_Bold.json'
      scale={[5, 5, 5]}
      curveSegments={36}
      /* bevelEnabled={true}
        bevelThickness={0.5}
        bevelSize={0.3}
        bevelOffset={0}
        bevelSegments={10} */
    >
      Graphics
      <shaderMaterial
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        uniforms={uniforms}
      />
    </Text3D>
  )
}
