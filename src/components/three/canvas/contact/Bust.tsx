import { useEffect, useMemo, useRef } from 'react'
import * as THREE from 'three'
import { ObjectMap, useFrame, useLoader, useThree } from '@react-three/fiber'
import { GLTF } from 'three/examples/jsm/Addons.js'

import type { TUniforms } from '@/types/shaders/types'

import useGlbLoader from '@/hooks/three/useGlbLoader'

import vertexShader from '@/components/three/shaders/bust/vertexShader.glsl'
import fragmentShader from '@/components/three/shaders/bust/fragmentShader.glsl'

import { getRandomInt } from '@/helpers/mathHelpers'

import glbConstants from '@/constants/assets/glbConstants.json'
import texturesConstants from '@/constants/assets/texturesConstants.json'

const NUMBER = 4096 * 7

const ATTRIBUTE_NAMES = {
  POSITION: 'position',
  COORDINATES: 'aCoordinates',
  UV: 'aUv',
  SPEED: 'aSpeed',
  OFFSET: 'aOffset',
  DIRECTION: 'aDirection',
  PRESS: 'aPress',
}

const createAttributes = (geometry: THREE.BufferGeometry) => {
  const positions = new THREE.BufferAttribute(new Float32Array(NUMBER * 3), 3)
  const coordinates = new THREE.BufferAttribute(new Float32Array(NUMBER * 3), 3)
  const uv = new THREE.BufferAttribute(new Float32Array(NUMBER * 2), 2)
  const speeds = new THREE.BufferAttribute(new Float32Array(NUMBER), 1)
  const offset = new THREE.BufferAttribute(new Float32Array(NUMBER), 1)
  const direction = new THREE.BufferAttribute(new Float32Array(NUMBER), 1)
  const press = new THREE.BufferAttribute(new Float32Array(NUMBER), 1)

  const sourcePositions = geometry.attributes.position.array
  const sourceUv = geometry.attributes.uv.array

  for (let i = 0; i < NUMBER * 3; i++) {
    const x = sourcePositions[i * 3]
    const y = sourcePositions[i * 3 + 1]
    const z = sourcePositions[i * 3 + 2]

    positions.setXYZ(i, x, y, z)
    coordinates.setXYZ(i, i * 2, i * 2 + 1, 0)
    uv.setXY(i, sourceUv[i * 2], sourceUv[i * 2 + 1])
    speeds.setX(i, getRandomInt({ min: 0.4, max: 1 }))
    offset.setX(i, getRandomInt({ min: -1000, max: 1000 }))
    // direction.setX(i, Math.random() > 0.5 ? 1 : -1)
    direction.setX(i, 1)
    press.setX(i, getRandomInt({ min: 0.4, max: 1 }))
  }

  const newGeometry = new THREE.BufferGeometry()
  newGeometry.setAttribute(ATTRIBUTE_NAMES.POSITION, positions)
  newGeometry.setAttribute(ATTRIBUTE_NAMES.COORDINATES, coordinates)
  newGeometry.setAttribute(ATTRIBUTE_NAMES.UV, uv)
  newGeometry.setAttribute(ATTRIBUTE_NAMES.SPEED, speeds)
  newGeometry.setAttribute(ATTRIBUTE_NAMES.OFFSET, offset)
  newGeometry.setAttribute(ATTRIBUTE_NAMES.DIRECTION, direction)
  newGeometry.setAttribute(ATTRIBUTE_NAMES.PRESS, press)

  return newGeometry
}

export default function Bust() {
  const { scene } = useThree()

  // Load textures
  const texturesUrls = [
    texturesConstants.SKETCHFAB.BUST,
    texturesConstants.SHADERS.GRADIENT_CIRCLE_MASK,
  ]
  const textures: THREE.Texture[] = useLoader(THREE.TextureLoader, texturesUrls).flat()
  useMemo(() => textures.forEach((texture) => (texture.minFilter = THREE.LinearFilter)), [textures])

  // Load GLTF model
  const bustGlb = useGlbLoader(glbConstants.SKETCHFAB.BUST) as GLTF & ObjectMap

  const opacityRef = useRef<{ value: number }>({
    value: 1,
  })
  const pointRef = useRef<THREE.Vector2>(new THREE.Vector2())
  const uniforms = useRef<TUniforms>({
    time: { type: 'f', value: opacityRef.current.value },
    opacity: { type: 'f', value: 1 },
    uTexture: { type: 't', value: textures[0] },
    mask: { type: 't', value: textures[1] },
    mouse: { type: 'v2', value: new THREE.Vector2(0.0, 0.0) },
    mousePressed: { type: 'f', value: 0 },
    move: { type: 'f', value: 0 },
  })

  const materialRef = useRef<THREE.ShaderMaterial>(
    new THREE.ShaderMaterial({
      uniforms: uniforms.current,
      vertexShader: vertexShader,
      fragmentShader: fragmentShader,
      transparent: true,
      side: THREE.DoubleSide,
      depthTest: false,
      depthWrite: false,
    }),
  )

  useEffect(() => {
    if (!bustGlb.scene.children[0]) {
      return
    }

    const bustMesh = bustGlb.scene.children[0] as THREE.Mesh

    const generatedGeometry = createAttributes(bustMesh.geometry)

    const points = new THREE.Points(generatedGeometry, materialRef.current)
    points.position.set(0, 1, 1.33)
    points.scale.set(2.2, 2.2, 2.2)
    // scene.add(points)
    bustMesh.position.set(0, 1, 1.33)
    bustMesh.scale.set(2.2, 2.2, 2.2)
    bustMesh.material = new THREE.MeshStandardMaterial()
    scene.add(bustMesh)
  }, [bustGlb, scene])

  useFrame(({ clock }) => {
    materialRef.current.uniforms.time.value = clock.elapsedTime
    materialRef.current.uniforms.opacity.value = opacityRef.current.value
    materialRef.current.uniforms.move.value = 0
    materialRef.current.uniforms.mouse.value = pointRef
  })

  return null
}
