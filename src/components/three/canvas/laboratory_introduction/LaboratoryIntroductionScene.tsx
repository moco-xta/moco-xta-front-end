import { useCallback, useEffect, useRef, useState } from 'react'
import { StaticImageData } from 'next/image'
import * as THREE from 'three'
import { useFrame, useThree } from '@react-three/fiber'
// import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js'
import { GPUComputationRenderer } from 'three/examples/jsm/misc/GPUComputationRenderer.js'
// import { load } from 'load-asset'
// import PoissonDiskSampling from 'poisson-disk-sampling'

type GPUComputationRendererVariable = ReturnType<typeof GPUComputationRenderer.prototype.addVariable>

// import vertexShader from '../../shaders/laboratory_introduction/vertexShader.glsl'
// import fragmentShader from '../../shaders/laboratory_introduction/fragmentShader.glsl'

import fragmentShaderVelocity from '../../shaders/laboratory_introduction/fragmentShaderVelocity.glsl'
import fragmentShaderPosition from '../../shaders/laboratory_introduction/fragmentShaderPosition.glsl'

import testVertexShader from '../../shaders/laboratory_introduction/testVertexShader.glsl'
import testFragmentShader from '../../shaders/laboratory_introduction/testFragmentShader.glsl'

import t1 from './1.jpg'
import t2 from './2.jpg'
import t3 from './3.jpg'


const COUNT = 64
const TEXTURE_WIDTH = COUNT ** 2

function generatePoints(minDistance: number, /* maxDistance: number, */ count: number): number[][] {
  const points: number[][] = []
  const gridSize = Math.ceil(1 / minDistance)
  const grid: boolean[][] = Array.from({ length: gridSize }, () => Array(gridSize).fill(false))

  for (let i = 0; i < count; i++) {
    let x: number, y: number
    let attempts = 0

    do {
      x = Math.random()
      y = Math.random()
      attempts++
    } while (
      attempts < 100 && 
      grid[Math.floor(x * gridSize)][Math.floor(y * gridSize)]
    )

    if (attempts < 100) {
      points.push([x, y])
      grid[Math.floor(x * gridSize)][Math.floor(y * gridSize)] = true
    }
  }

  return points
}

function getPoints(image: StaticImageData) {
  const loadedImage = new Image()
  loadedImage.src = image.src
  const canvas = document.createElement('canvas')
  const ctx = canvas.getContext('2d', { willReadFrequently: true })
  if (!ctx) {
    throw new Error('Failed to get 2D context')
  }
  canvas.width = COUNT
  canvas.height = COUNT
  // canvas.style.position = 'absolute'
  // canvas.style.zIndex = '9999'
  ctx.drawImage(loadedImage, 0, 0, COUNT, COUNT)
  const data = ctx.getImageData(0, 0, COUNT, COUNT).data
  /* const array = new Array(COUNT * COUNT * 2)
  for (let i = 0; i < COUNT; i++) {
    for (let j = 0; j < COUNT; j++) {
      const index = (i * COUNT + j) * 2
      array[index] = data[index]
      array[index + 1] = data[index + 1]
    }
  }
  console.log('points', array) */

  document.body.appendChild(canvas)

  // const array = new Array(COUNT).fill(null).map(() => new Array(COUNT).fill(0))
  const array = new Array(COUNT).fill(null).map(() => new Array(COUNT).fill(0))
  for (let i = 0; i < COUNT; i++) {
    for (let j = 0; j < COUNT; j++) {
      // const position = (i + j * COUNT) * 4
      const position = (i + j * COUNT) * 10
      const color = data[position] / 255
      array[i][j] = color
    }
  }

  console.log('array', array)

  /* const p = new PoissonDiskSampling({
    shape: [1, 1],
    minDistance: 4 / 400,
    maxDistance: 30 / 400,
    tries: 4,
    distanceFunction: function (p) {
      const indX = Math.floor(p[0] * COUNT)
      const indY = Math.floor(p[1] * COUNT)
      return array[indX][indY]
    },
    bias: 0
  })
  const pointsSampled = p.fill() */
  
  const pointsSampled = generatePoints(4 / 400, /* 30 / 400, */ TEXTURE_WIDTH)
  pointsSampled.sort(() => Math.random() - 0.5)
  console.log('pointsSampled', pointsSampled)
  const returnedPoints = pointsSampled.slice(0, TEXTURE_WIDTH)
  return returnedPoints
}

function addModel(scene: THREE.Scene, materialRef: React.MutableRefObject<THREE.ShaderMaterial>) {
  // const loader = new GLTFLoader()

  /* const defaultMaterial = new THREE.ShaderMaterial({
    side: THREE.DoubleSide,
    transparent: true,
    opacity: 1,
    wireframe: true,
    depthTest: true,
    depthWrite: true,
    alphaTest: 0.5,
    uniforms: {
      time: { value: 0 },
      pointSize: { value: 100 },
    },
    vertexShader: testVertexShader,
    fragmentShader: testFragmentShader,
  })
  defaultMaterial.needsUpdate = true */

  // const plane = new THREE.PlaneGeometry(1, 1, 10, 10)
  // const planeMesh = new THREE.Mesh(plane, defaultMaterial)
  // scene.add(planeMesh)
 
  const geometry = new THREE.BufferGeometry()
  const count = TEXTURE_WIDTH
  const position = new Float32Array(count * 3)
  const reference = new Float32Array(count * 2)

  for (let i = 0; i < count; i++) {
    position[i * 3] = Math.random() * 5 - 1
    position[i * 3 + 1] = Math.random() * 5 - 1
    position[i * 3 + 2] = 0
    reference[i * 2] = (i % COUNT) / COUNT
    reference[i * 2 + 1] = ~ ~ (i / COUNT) / COUNT
  }
  geometry.setAttribute('position', new THREE.BufferAttribute(position, 3))
  geometry.setAttribute('reference', new THREE.BufferAttribute(reference, 2))
  const points = new THREE.Points(geometry, materialRef.current)
  scene.add(points)

  /* const material = new THREE.ShaderMaterial({
    side: THREE.DoubleSide,
    transparent: true,
    opacity: 1,
    wireframe: true,
    depthTest: true,
    depthWrite: true,
    alphaTest: 0.5,
    uniforms: {
      time: { value: 0 },
      pointSize: { value: 100 },
    },
    vertexShader: vertexShader,
    fragmentShader: fragmentShader,
  })
  material.needsUpdate = true */

  /* loader.load(glbConstants.LABORATORY_INTRODUCTION_DOTS, function (gltf) {
    gltf.scenes.forEach((group) => {
      group.traverse((child) => {
        if (child instanceof THREE.Mesh) {
          console.log('dots', child.geometry.attributes.position)

          const geometry = new THREE.BufferGeometry()
          // const number = child.geometry.attributes.position.array.length / 3
          const positions = child.geometry.attributes.position as THREE.BufferAttribute
          geometry.setAttribute('position', positions)
          const points = new THREE.Points(geometry, material)
          scene.add(points)
        }
      })
    })
  }) */

  /* loader.load(glbConstants.LABORATORY_INTRODUCTION, function (gltf) {
    gltf.scenes.forEach((group) => {
      group.traverse((child) => {
        if (child instanceof THREE.Mesh) {
          // console.log(child)
          child.material = material
        }
      })
      scene.add(group)
    })
  }) */
}

export default function LaboratoryIntroductionScene() {
  const { scene, gl } = useThree()

  const [isLoaded, setIsLoaded] = useState<boolean>(false)

  const gpuComputeRef = useRef<GPUComputationRenderer>(null!)
  const positionUniformsRef = useRef<Record<string, THREE.IUniform>>(null!)
  const velocityUniformsRef = useRef<Record<string, THREE.IUniform>>(null!)
  const positionVariableRef = useRef<GPUComputationRendererVariable>(null!)
  const velocityVariableRef = useRef<GPUComputationRendererVariable>(null!)
  const points1Ref = useRef<number[][]>(getPoints(t1))
  const points2Ref = useRef<number[][]>(getPoints(t2))

  points1Ref.current = getPoints(t3)
  points2Ref.current = getPoints(t3)
  console.log('points1', points1Ref.current)
  console.log('points2', points2Ref.current)
  
  const target1Ref = useRef<THREE.DataTexture>(null!)
  const target2Ref = useRef<THREE.DataTexture>(null!)

  const materialRef = useRef<THREE.ShaderMaterial>(new THREE.ShaderMaterial({
    side: THREE.DoubleSide,
    transparent: true,
    opacity: 1,
    wireframe: true,
    depthTest: true,
    depthWrite: true,
    alphaTest: 0.5,
    uniforms: {
      time: { value: 0.0 },
      uPosition: { value: null },
      uVelocity: { value: null },
    },
    vertexShader: testVertexShader,
    fragmentShader: testFragmentShader,
  }))
  materialRef.current.needsUpdate = true

  function fillPositionTexture(texture: THREE.DataTexture) {
    const array = new Float32Array(texture.image.data.buffer)
  
    for (let k = 0, kl = TEXTURE_WIDTH; k < kl; k += 4) {
      array[k] = 2 * (Math.random() - 0.5)
      array[k + 1] = 2 * (Math.random() - 0.5)
      array[k + 2] = 0
      // array[k + 2] = 2 * (Math.random() - 0.5)
      array[k + 3] = 1
    }
  }
  
  function fillVelocityTexture(texture: THREE.DataTexture) {
    const array = new Float32Array(texture.image.data.buffer)
  
    for (let k = 0, kl = TEXTURE_WIDTH; k < kl; k += 4) {
      array[k] = 0.01 * (Math.random() - 0.5) /* * 0 */
      array[k + 1] = 0.01 * (Math.random() - 0.5) /* * 0 */
      array[k + 2] = 0
      // array[k + 2] = 0.01 * (Math.random() - 0.5)
      array[k + 3] = 1
    }
  }

  function fillPositionTextureFromPoints(texture: THREE.DataTexture, points: number[][]) {
    const array = new Float32Array(texture.image.data.buffer)
    for (let k = 0, kl = TEXTURE_WIDTH; k < kl; k += 4) {
      const i = k / 4
      array[k] = points[k][0]
      array[k + 1] = points[k][1]
      array[k + 2] = 0
      array[k + 3] = 1
    }
  }

  const initGPU = useCallback(() => {
    gpuComputeRef.current = new GPUComputationRenderer(COUNT, COUNT, gl)
    const dtPosition = gpuComputeRef.current.createTexture()
    const dtPosition1 = gpuComputeRef.current.createTexture()
    const dtPosition2 = gpuComputeRef.current.createTexture()
    const dtVelocity = gpuComputeRef.current.createTexture()
    fillPositionTexture(dtPosition)
    fillVelocityTexture(dtVelocity)
    fillPositionTextureFromPoints(dtPosition1, points1Ref.current)
    fillPositionTextureFromPoints(dtPosition2, points2Ref.current)

    target1Ref.current = gpuComputeRef.current.createTexture()
    target2Ref.current = gpuComputeRef.current.createTexture()
    fillPositionTextureFromPoints(target1Ref.current, points1Ref.current)
    fillPositionTextureFromPoints(target2Ref.current, points2Ref.current)

  
    velocityVariableRef.current = gpuComputeRef.current.addVariable('textureVelocity', fragmentShaderVelocity, dtVelocity)
    positionVariableRef.current = gpuComputeRef.current.addVariable('texturePosition', fragmentShaderPosition, dtPosition)
  
    gpuComputeRef.current.setVariableDependencies(velocityVariableRef.current, [positionVariableRef.current, velocityVariableRef.current])
    gpuComputeRef.current.setVariableDependencies(positionVariableRef.current, [positionVariableRef.current, velocityVariableRef.current])
  
    positionUniformsRef.current = positionVariableRef.current.material.uniforms
    velocityUniformsRef.current = velocityVariableRef.current.material.uniforms
  
    positionUniformsRef.current['time'] = { value: 0.0 }
    velocityUniformsRef.current['time'] = { value: 1.0 }
    velocityUniformsRef.current['uTarget'] = { value: target1Ref.current }
    velocityVariableRef.current.wrapS = THREE.RepeatWrapping
    velocityVariableRef.current.wrapT = THREE.RepeatWrapping
    positionVariableRef.current.wrapS = THREE.RepeatWrapping
    positionVariableRef.current.wrapT = THREE.RepeatWrapping
  
    gpuComputeRef.current.init()
  }, [gl])

  useEffect(() => {
    if (!isLoaded) {

      addModel(scene, materialRef)
      initGPU()
      setIsLoaded(true)
    }
  }, [scene, isLoaded, initGPU])

  useEffect(() => {
    if (typeof window === 'undefined') return

    const handleClick = () => {
      console.log('handleClick')
    }

    window.addEventListener('click', handleClick)
    return () => window.removeEventListener('click', handleClick)
  }, [])

  useFrame(({ clock }) => {
    const time = clock.getElapsedTime()

    if (materialRef.current && gpuComputeRef.current && positionVariableRef.current && velocityVariableRef.current && positionUniformsRef.current && velocityUniformsRef.current) {
      gpuComputeRef.current.compute()

      materialRef.current.uniforms[ 'uPosition' ].value = gpuComputeRef.current.getCurrentRenderTarget(positionVariableRef.current).texture
      materialRef.current.uniforms[ 'uVelocity' ].value = gpuComputeRef.current.getCurrentRenderTarget(velocityVariableRef.current).texture
      
      positionUniformsRef.current[ 'time' ].value = time
      velocityUniformsRef.current[ 'time' ].value = time
    }
  })

  return null
}
