import { useEffect, useMemo, useRef } from 'react'
import * as THREE from 'three'
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js'
import { MeshSurfaceSampler } from 'three/examples/jsm/math/MeshSurfaceSampler.js'
import { useFrame, useThree } from '@react-three/fiber'

import type { TUniforms } from '@/types/animation/types'

import vertexShader from '@/components/three/shaders/moco/vertexShader.glsl'
import fragmentShader from '@/components/three/shaders/moco/fragmentShader.glsl'

import { default as glbConstants } from '@/constants/assets/glbConstants.json'
import { default as texturesConstants } from '@/constants/assets/texturesConstants.json'

type Line = {
  colorIndex: number
  previous: THREE.Vector3
}

class Sparkle extends THREE.Vector3 {
  x: number = 0
  y: number = 0
  z: number = 0
  _size: number = 0
  size: number = 0
  dest: THREE.Vector3 = new THREE.Vector3()
  scaleSpeed: number = 0
  stop: boolean = false
  setup(origin: THREE.Vector3) {
    this.add(origin).multiplyScalar(2)
    this.dest = origin
    this._size = Math.random() * 0.5 + 0.5
    this.size = 3
    this.scaleSpeed = Math.random() * 0.3 + 0.3
    this.stop = false
  }
  update() {
    this.x += (this.dest.x - this.x) * 0.08
    this.y += (this.dest.y - this.y) * 0.08
    this.z += (this.dest.z - this.z) * 0.08
    if (this.size < this._size) {
      this.size += this.scaleSpeed
    } else {
      if (this.distanceTo(this.dest) < 0.1) {
        this.stop = true
      }
    }
  }
}

export default function Moco() {
  const { scene } = useThree()

  let samplerRef = useRef<MeshSurfaceSampler>(null!)
  const loader = useRef<GLTFLoader>(new GLTFLoader())
  const sparklesGeometryRef = useRef<THREE.BufferGeometry>(new THREE.BufferGeometry())
  const uniformsRef = useRef<TUniforms>({
    pointTexture: {
      type: 't',
      value: new THREE.TextureLoader().load(texturesConstants.HOME.DOT_TEXTURE),
    },
  })
  const sparklesMaterial = useRef<THREE.ShaderMaterial>(
    new THREE.ShaderMaterial({
      uniforms: uniformsRef.current,
      transparent: true,
      vertexShader: vertexShader,
      fragmentShader: fragmentShader,
      side: THREE.DoubleSide,
      depthTest: false,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
    }),
  )
  const pointsRef = useRef<THREE.Points>(
    new THREE.Points(sparklesGeometryRef.current, sparklesMaterial.current),
  )

  const sparkles = useRef<Sparkle[]>([])
  const point = useRef<THREE.Vector3>(new THREE.Vector3())
  const linesRef = useRef<Line[]>([])
  const tempSparklesArrayColorsRef: number[] = []

  const modelsUrls = useMemo(
    () => [
      glbConstants.HOME.HERO.MOCO.HELIUM_BALLOON_M,
      glbConstants.HOME.HERO.MOCO.HELIUM_BALLOON_C,
      glbConstants.HOME.HERO.MOCO.HELIUM_BALLOON_O,
    ],
    [],
  )
  const linesColors = useMemo(
    () => [
      new THREE.Color(0xfaad80).multiplyScalar(0.5),
      new THREE.Color(0xff6767).multiplyScalar(0.5),
      new THREE.Color(0xff3d68).multiplyScalar(0.5),
      new THREE.Color(0xa73489).multiplyScalar(0.5),
    ],
    [],
  )

  function initLines(letter: THREE.Mesh) {
    samplerRef.current = new MeshSurfaceSampler(letter).build()

    for (let i = 0; i < 6; i++) {
      samplerRef.current.sample(point.current)
      const linesMesh = {
        colorIndex: i % 4,
        previous: point.current.clone(),
      }
      linesRef.current.push(linesMesh)
    }
  }

  function findNextVector(line: Line) {
    let ok = false
    while (!ok) {
      samplerRef.current.sample(point.current)
      if (point.current.distanceTo(line.previous) < 2) {
        line.previous = point.current.clone()
        const spark = new Sparkle()
        spark.setup(line.previous)
        sparkles.current.push(spark)
        tempSparklesArrayColorsRef.push(
          linesColors[line.colorIndex].r,
          linesColors[line.colorIndex].g,
          linesColors[line.colorIndex].b,
        )
        sparklesGeometryRef.current.setAttribute(
          'color',
          new THREE.Float32BufferAttribute(tempSparklesArrayColorsRef, 3),
        )
        ok = true
      }
    }
  }

  let tempSparklesArray: number[] = []
  let tempSparklesArraySizes: number[] = []

  useEffect(() => {
    window.sparkles = sparkles.current
    // console.log('window', window)
    // pointsRef.current.position.set(-2, 0, 0)


    modelsUrls.forEach((url, index) => {
      loader.current.load(url, function (gltf) {
        const letter = gltf.scene.children[0] as THREE.Mesh
        letter.geometry.scale(5, 5, 5)
        letter.updateMatrix()
        // scene.getObjectByName('moco_group')?.add(letter)
        initLines(letter)
      })
    })


    scene.getObjectByName('moco_group')?.add(pointsRef.current)
  }, [scene])

  useFrame(() => {
    if (sparkles.current.length < 100000) {
      linesRef.current.forEach((l) => {
        findNextVector(l)
        findNextVector(l)
        findNextVector(l)
      })
    }

    sparkles.current.forEach((s, i) => {
      if (!s.stop) {
        s.update()
      }
      tempSparklesArray[i * 3] = s.x
      tempSparklesArray[i * 3 + 1] = s.y
      tempSparklesArray[i * 3 + 2] = s.z
      tempSparklesArraySizes[i] = s.size
    })
    sparklesGeometryRef.current.setAttribute(
      'position',
      new THREE.Float32BufferAttribute(tempSparklesArray, 3),
    )
    sparklesGeometryRef.current.setAttribute(
      'size',
      new THREE.Float32BufferAttribute(tempSparklesArraySizes, 1),
    )
  })

  return null
}
