import { useEffect, useRef } from 'react'
// import * as THREE from 'three'
import * as THREE from 'three/webgpu'
import { OrbitControls } from 'three/addons/controls/OrbitControls.js'
import {
  Fn,
  texture,
  attribute,
  uniform,
  color,
  pow,
  vec4,
  mix,
  step,
  ShaderNodeObject,
  vec2,
  uv,
  floor,
} from 'three/tsl'

import { default as texturesConstants } from '@/constants/assets/texturesConstants.json'

const ROWS = 50
const COLUMNS = 50
const INSTANCES = ROWS * COLUMNS
const SIZE = 0.1
const PALETTE = ['#8C3AE9', '#ED39EA', '#F9276C', '#F78B37', '#F9CD49']

function getMaterial({ asciiTexture, length }: { asciiTexture: THREE.Texture; length: number }) {
  const uTexture = new THREE.TextureLoader().load(texturesConstants.PLAYGROUND.MOQUITO)

  const material = new THREE.MeshPhysicalNodeMaterial({
    // wireframe: true
  })

  const uColor1 = uniform(color(PALETTE[0]))
  const uColor2 = uniform(color(PALETTE[1]))
  const uColor3 = uniform(color(PALETTE[2]))
  const uColor4 = uniform(color(PALETTE[3]))
  const uColor5 = uniform(color(PALETTE[4]))

  const asciiCode = Fn(() => {
    const textureColor = texture(uTexture, attribute('aPixelUv'))
    const brightness = pow(textureColor.r, 1).add(attribute('aRandom').mul(0.02))

    const asciiUv = vec2(
      uv()
        .x.div(length)
        .add(floor(brightness.mul(length)).div(length)),
      uv().y,
    )
    const asciiCode = texture(asciiTexture, asciiUv)

    let finalColor = uColor1
    finalColor = mix(finalColor, uColor2, step(0.2, brightness)) as unknown as ShaderNodeObject<
      THREE.UniformNode<ShaderNodeObject<THREE.Node>>
    >
    finalColor = mix(finalColor, uColor3, step(0.4, brightness)) as unknown as ShaderNodeObject<
      THREE.UniformNode<ShaderNodeObject<THREE.Node>>
    >
    finalColor = mix(finalColor, uColor4, step(0.6, brightness)) as unknown as ShaderNodeObject<
      THREE.UniformNode<ShaderNodeObject<THREE.Node>>
    >
    finalColor = mix(finalColor, uColor5, step(0.8, brightness)) as unknown as ShaderNodeObject<
      THREE.UniformNode<ShaderNodeObject<THREE.Node>>
    >

    return asciiCode.mul(finalColor)
    // return textureColor
    // return vec4(uv().x, uv().y, 0, 1)
    // return vec4(attribute('aPixelUv').x, attribute('aPixelUv').y, 0, 1)
  })

  material.colorNode = asciiCode()

  return material
}

function createAsciiTexture() {
  // prettier-ignore
  const dictionnary = "`.-':_,^=;><+!rc*/z?sLTv)J7(|Fi{C}fI31tlu[neoZ5Yxjya]2ESwqkP6h9d4VpOGbUAKXHm8RD#$Bg0MNWQ%&@"
  const length = dictionnary.length
  const canvas = document.createElement('canvas')
  const ctx = canvas.getContext('2d')!
  // document.body.appendChild(canvas)
  canvas.width = length * 64
  canvas.height = 64

  ctx.fillStyle = '#000000'
  ctx.fillRect(0, 0, canvas.width, canvas.height)
  ctx.fillStyle = '#ffffff'
  ctx.font = 'bold 40px Menlo'
  ctx.textAlign = 'center'

  for (let i = 0; i < length; i++) {
    if (i > 50) {
      for (let j = 0; j < 6; j++) {
        ctx.filter = `blur(${j}px)`
        ctx.fillText(dictionnary[i], 32 + i * 64, 46)
      }
    }
    ctx.filter = 'none'
    ctx.fillText(dictionnary[i], 32 + i * 64, 46)
  }

  const asciiTexture = new THREE.Texture(canvas)
  asciiTexture.needsUpdate = true

  return {
    asciiTexture: asciiTexture,
    length: length,
  }
}

export function PlaygroundCanvas() {
  const containerRef = useRef<HTMLDivElement>(null)
  const timeRef = useRef<number>(0)

  const scene = new THREE.Scene()

  const geometry = new THREE.PlaneGeometry(SIZE, SIZE, 1, 1)

  const positions = new Float32Array(INSTANCES * 3)
  const uv = new Float32Array(INSTANCES * 2)
  const random = new Float32Array(INSTANCES)

  const instancedMeshes = new THREE.InstancedMesh(
    geometry,
    getMaterial(createAsciiTexture()),
    INSTANCES,
  )

  let counter = 0
  for (let i = 0; i < ROWS; i++) {
    for (let j = 0; j < COLUMNS; j++) {
      let index = i * COLUMNS + j
      positions[index * 3] = i * SIZE - ((ROWS - 1) / 2) * SIZE
      positions[index * 3 + 1] = j * SIZE - ((COLUMNS - 1) / 2) * SIZE
      positions[index * 3 + 2] = 0
      uv[index * 2] = i / (ROWS - 1)
      uv[index * 2 + 1] = j / (COLUMNS - 1)
      random[index] = Math.pow(Math.random(), 4)
      let m = new THREE.Matrix4()
      m.setPosition(positions[index * 3], positions[index * 3 + 1], positions[index * 3 + 2])
      instancedMeshes.setMatrixAt(index, m)
      counter++
    }
  }

  instancedMeshes.instanceMatrix.needsUpdate = true
  geometry.setAttribute('aPixelUv', new THREE.InstancedBufferAttribute(uv, 2))
  geometry.setAttribute('aRandom', new THREE.InstancedBufferAttribute(random, 1))

  scene.add(instancedMeshes)

  const ambientLight = new THREE.AmbientLight(0xffffff, 1)
  scene.add(ambientLight)

  useEffect(() => {
    if (!containerRef.current) return

    // SET UP

    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000,
    )
    camera.position.z = 3.8

    const renderer = new THREE.WebGPURenderer()
    renderer.setSize(window.innerWidth, window.innerHeight)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    containerRef.current.appendChild(renderer.domElement)

    const controls = new OrbitControls(camera, renderer.domElement)
    controls.enableDamping = true
    controls.dampingFactor = 0.05

    // ANIMATE

    let frameId: number
    const animate = () => {
      frameId = requestAnimationFrame(animate)

      timeRef.current += 0.01

      controls.update()

      renderer.renderAsync(scene, camera)
    }

    animate()

    // RESIZE

    const handleResize = () => {
      const width = window.innerWidth
      const height = window.innerHeight
      renderer.setSize(width, height)
      camera.aspect = width / height
      camera.updateProjectionMatrix()
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
      containerRef.current?.removeChild(renderer.domElement)
      controls.dispose()
      cancelAnimationFrame(frameId)
    }
  }, [scene])

  return <div ref={containerRef} />
}
