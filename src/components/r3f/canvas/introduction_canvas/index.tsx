import React, { Suspense, useRef, useState } from 'react'
import * as THREE from 'three'
import { Canvas, useFrame } from '@react-three/fiber'
import {
  Center,
  Environment,
  MeshTransmissionMaterial,
  OrbitControls,
  PerspectiveCamera,
  Text3D,
  shaderMaterial,
  useFBO,
} from '@react-three/drei'
import { FullScreenQuad } from 'three/examples/jsm/Addons.js'
import { useControls } from 'leva'

import normalVertexShader from '@/components/r3f/shaders/normal_shaders/vertexShader.glsl'
import normalFragmentShader from '@/components/r3f/shaders/normal_shaders/fragmentShader.glsl'

import causticsComputeVertexShader from '@/components/r3f/shaders/caustics_compute_shaders/vertexShader.glsl'
import causticsComputeFragmentShader from '@/components/r3f/shaders/caustics_compute_shaders/fragmentShader.glsl'

import causticsPlaneVertexShader from '@/components/r3f/shaders/refraction_and_chromatic_aberration_shaders/vertexShader.glsl'
import causticsPlaneFragmentShader from '@/components/r3f/shaders/refraction_and_chromatic_aberration_shaders/fragmentShader.glsl'

export const NormalMaterial = shaderMaterial(
  {},
  normalVertexShader,
  normalFragmentShader,
)

export const CausticsComputeMaterial = shaderMaterial(
  {
    uLight: new THREE.Vector2(0, 0),
    uTexture: null,
    uIntensity: 1.0,
  },
  causticsComputeVertexShader,
  causticsComputeFragmentShader,
)

const CausticsPlaneMaterial = shaderMaterial(
  {
    uLight: new THREE.Vector2(0, 0),
    uTexture: null,
    uAberration: 0.02,
  },
  causticsPlaneVertexShader,
  causticsPlaneFragmentShader,
)

function IntroductionScene() {
  const mesh = useRef<THREE.Mesh>(null!)
  const causticsPlane = useRef<THREE.Mesh>(null!)

  const light = new THREE.Vector3(-10, 13, -10)

  const { intensity, chromaticAberration } = useControls({
    intensity: {
      value: 1.5,
      step: 0.01,
      min: 0,
      max: 10.0,
    },
    chromaticAberration: {
      value: 0.19,
      step: 0.001,
      min: 0,
      max: 0.4,
    },
  })

  const normalRenderTarget = useFBO(2000, 2000, {})
  const [normalCamera] = useState(
    () => new THREE.PerspectiveCamera(65, 1, 0.1, 1000),
  )
  const [normalMaterial] = useState(() => new NormalMaterial())
  const causticsComputeRenderTarget = useFBO(2000, 2000, {})
  const [causticsQuad] = useState(() => new FullScreenQuad())
  const [causticsComputeMaterial] = useState(
    () => new CausticsComputeMaterial(),
  )

  const [causticsPlaneMaterial] = useState(() => new CausticsPlaneMaterial())
  causticsPlaneMaterial.transparent = true
  causticsPlaneMaterial.blending = THREE.CustomBlending
  causticsPlaneMaterial.blendSrc = THREE.OneFactor
  causticsPlaneMaterial.blendDst = THREE.SrcAlphaFactor

  const config = {
    backsideThickness: 0.3,
    thickness: 25,
    samples: 6,
    transmission: 0.9,
    clearcoat: 1,
    clearcoatRoughness: 0.5,
    chromaticAberration: 1.5,
    anisotropy: 0.2,
    roughness: 0,
    distortion: 0,
    distortionScale: 0.09,
    temporalDistortion: 0,
    ior: 1.5,
    color: '#777777',
    /* transparent: true,
    opacity: 0.8 */
  }

  useFrame((state) => {
    const { gl } = state

    const bounds = new THREE.Box3().setFromObject(mesh.current, true)

    let boundsVertices = []
    boundsVertices.push(
      new THREE.Vector3(bounds.min.x, bounds.min.y, bounds.min.z),
    )
    boundsVertices.push(
      new THREE.Vector3(bounds.min.x, bounds.min.y, bounds.max.z),
    )
    boundsVertices.push(
      new THREE.Vector3(bounds.min.x, bounds.max.y, bounds.min.z),
    )
    boundsVertices.push(
      new THREE.Vector3(bounds.min.x, bounds.max.y, bounds.max.z),
    )
    boundsVertices.push(
      new THREE.Vector3(bounds.max.x, bounds.min.y, bounds.min.z),
    )
    boundsVertices.push(
      new THREE.Vector3(bounds.max.x, bounds.min.y, bounds.max.z),
    )
    boundsVertices.push(
      new THREE.Vector3(bounds.max.x, bounds.max.y, bounds.min.z),
    )
    boundsVertices.push(
      new THREE.Vector3(bounds.max.x, bounds.max.y, bounds.max.z),
    )

    const lightDir = new THREE.Vector3(light.x, light.y, light.z).normalize()

    // Calculates the projected coordinates of the vertices onto the plane
    // perpendicular to the light direction
    const newVertices = boundsVertices.map((v) => {
      const newX = v.x + lightDir.x * (-v.y / lightDir.y)
      const newY = v.y + lightDir.y * (-v.y / lightDir.y)
      const newZ = v.z + lightDir.z * (-v.y / lightDir.y)

      return new THREE.Vector3(newX, newY, newZ)
    })

    const centerPos = newVertices
      .reduce((a, b) => a.add(b), new THREE.Vector3(0, 0, 0))
      .divideScalar(newVertices.length)

    causticsPlane.current.position.set(centerPos.x, centerPos.y, centerPos.z)

    const scale = newVertices
      .map((p) =>
        Math.sqrt(
          Math.pow(p.x - centerPos.x, 2),
          // @ts-ignore
          Math.pow(p.z - centerPos.z, 2),
        ),
      )
      .reduce((a, b) => Math.max(a, b), 0)

    // The scale of the plane is multiplied by this correction factor to
    // avoid the caustics pattern to be cut / overflow the bounds of the plane
    // my normal projection or my math must be a bit off, so I'm trying to be very conservative here
    const scaleCorrection = 1.75

    causticsPlane.current.scale.set(
      scale * scaleCorrection,
      scale * scaleCorrection,
      scale * scaleCorrection,
    )

    normalCamera.position.set(light.x, light.y, light.z)
    normalCamera.lookAt(
      bounds.getCenter(new THREE.Vector3(0, 0, 0)).x,
      bounds.getCenter(new THREE.Vector3(0, 0, 0)).y,
      bounds.getCenter(new THREE.Vector3(0, 0, 0)).z,
    )
    normalCamera.up = new THREE.Vector3(0, 1, 0)

    const originalMaterial = mesh.current.material

    mesh.current.material = normalMaterial
    mesh.current.material.side = THREE.BackSide

    gl.setRenderTarget(normalRenderTarget)
    gl.render(mesh.current, normalCamera)

    mesh.current.material = originalMaterial

    causticsQuad.material = causticsComputeMaterial
    // @ts-ignore
    causticsQuad.material.uniforms.uTexture.value = normalRenderTarget.texture
    // @ts-ignore
    causticsQuad.material.uniforms.uLight.value = light
    // @ts-ignore
    causticsQuad.material.uniforms.uIntensity.value = intensity

    gl.setRenderTarget(causticsComputeRenderTarget)
    causticsQuad.render(gl)

    causticsPlane.current.material = causticsPlaneMaterial

    // @ts-ignore
    causticsPlane.current.material.uniforms.uTexture.value =
      causticsComputeRenderTarget.texture
    // @ts-ignore
    causticsPlane.current.material.uniforms.uAberration.value =
      chromaticAberration

    gl.setRenderTarget(null)
  })

  return (
    <>
      {/* <Center top left> */}
        <Text3D
          ref={mesh}
          letterSpacing={-0.06}
          size={5}
          font='/fonts/json/Inter_Bold.json'
          /* scale={[5, 5, 5]} */
          position={[-17, 0, 0]}
          curveSegments={36}
          /* bevelEnabled={true}
          bevelThickness={0.5}
          bevelSize={0.3}
          bevelOffset={0}
          bevelSegments={10} */
        >
          Introduction
          <MeshTransmissionMaterial
            backside
            {...config}
          />
        </Text3D>
      {/* </Center> */}
      {/* <mesh
        ref={mesh}
        scale={0.02}
        position={[0, 6.5, 0]}
      >
        <torusKnotGeometry args={[200, 40, 600, 16]} />
        <MeshTransmissionMaterial
          backside
          {...config}
        />
      </mesh> */}
      <mesh
        ref={causticsPlane}
        /* rotation={[-Math.PI / 2, 0, 0]} */
        position={[0, 0, -10]}
      >
        <planeGeometry args={[3, 3, 10, 10]} />
        <meshBasicMaterial />
      </mesh>
    </>
  )
}

export default function IntroductionCanvas() {
  return (
    <Canvas
      dpr={1}
      shadows
      legacy
      gl={{
        antialias: true,
        alpha: true,
        preserveDrawingBuffer: true,
      }}
    >
      <PerspectiveCamera
        makeDefault
        position={[0, 0, 10]}
        fov={65}
      />
      <OrbitControls />
      <Suspense>
        <Environment
          files='/img/hdr/kloppenheim_02_puresky_1k.hdr'
          /* blur={10} */
          encoding={THREE.LinearEncoding}
        />
        {/* <Environment
          background={false}
          files='https://dl.polyhaven.org/file/ph-assets/HDRIs/hdr/1k/syferfontein_0d_clear_puresky_1k.hdr'
          ground={{ height: 45, radius: 100, scale: 300 }}
        /> */}
        <IntroductionScene />
      </Suspense>
    </Canvas>
  )
}
