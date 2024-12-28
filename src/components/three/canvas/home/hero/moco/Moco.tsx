import { useEffect, useRef } from 'react'
import * as THREE from 'three'
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js'
import { MeshSurfaceSampler } from 'three/examples/jsm/math/MeshSurfaceSampler.js'
import { useFrame, useThree } from '@react-three/fiber'

import type { TUniforms } from '@/types/animation/types'

import vertexShader from '@/components/three/shaders/moco/vertexShader.glsl'
import fragmentShader from '@/components/three/shaders/moco/fragmentShader.glsl'

import { default as glbConstants } from '@/constants/assets/glbConstants.json'
import { default as texturesConstants } from '@/constants/assets/texturesConstants.json'

export default function Moco() {
  const { scene } = useThree()

  const uniforms = useRef<TUniforms>({
    pointTexture: {
      type: 't',
      value: new THREE.TextureLoader().load(texturesConstants.HOME.DOT_TEXTURE),
    },
  })

  const sparklesGeometry = new THREE.BufferGeometry()
  const sparklesMaterial = new THREE.ShaderMaterial({
    uniforms: uniforms.current,
    transparent: true,
    vertexShader: vertexShader,
    fragmentShader: fragmentShader,
    side: THREE.DoubleSide,
    depthTest: false,
    depthWrite: false,
    blending: THREE.AdditiveBlending,
  })
  const points = new THREE.Points(sparklesGeometry, sparklesMaterial)

  const sparkles: any[] = [] // TODO: Fix any

  const p1 = new THREE.Vector3()
  let sampler: any = null
  const lines: Line[] = []
  let linesColors = [
    new THREE.Color(0xfaad80).multiplyScalar(0.5),
    new THREE.Color(0xff6767).multiplyScalar(0.5),
    new THREE.Color(0xff3d68).multiplyScalar(0.5),
    new THREE.Color(0xa73489).multiplyScalar(0.5),
  ]

  function initLines() {
    sampler = new MeshSurfaceSampler(turtle).build()

    for (let i = 0; i < 6; i++) {
      sampler.sample(p1)
      const linesMesh = {
        colorIndex: i % 4,
        previous: p1.clone(),
      }
      lines.push(linesMesh)
    }
  }

  let turtle: THREE.Mesh = null!
  const loader = new GLTFLoader()
  loader.load(
    glbConstants.HOME.HERO.MOCO.HELIUM_BALLOON_M,
    function (gltf) {
      turtle = gltf.scene.children[0] as THREE.Mesh
      turtle.geometry.scale(5, 5, 5)
      // scene.add(turtle)
      initLines()

      gltf.animations
      gltf.scene
      console.log('M', gltf.scene.children[0])
      gltf.scenes
      gltf.cameras
      gltf.asset
    },
    function (xhr) {
      console.log((xhr.loaded / xhr.total) * 100 + '% loaded')
    },
    function (error) {
      console.log('An error happened')
    },
  )

  const tempSparklesArrayColors: any = []
  type Line = {
    colorIndex: number
    previous: THREE.Vector3
  }

  function findNextVector(line: Line) {
    let ok = false
    while (!ok) {
      sampler.sample(p1)

      if (p1.distanceTo(line.previous) < 2) {
        line.previous = p1.clone()

        const spark = new Sparkle()
        spark.setup(line.previous)
        sparkles.push(spark)

        tempSparklesArrayColors.push(
          linesColors[line.colorIndex].r,
          linesColors[line.colorIndex].g,
          linesColors[line.colorIndex].b,
        )
        sparklesGeometry.setAttribute(
          'color',
          new THREE.Float32BufferAttribute(tempSparklesArrayColors, 3),
        )

        ok = true
      }
    }
  }

  let dest
  let _size
  let size
  let scaleSpeed
  let stop

  class Sparkle extends THREE.Vector3 {
    setup(origin: THREE.Vector3) {
      this.add(origin).multiplyScalar(2)
      dest = origin
      _size = Math.random() * 5 + 0.5
      size = 1
      scaleSpeed = Math.random() * 0.03 + 0.03
      stop = false
    }
    update() {
      this.x += (dest.x - this.x) * 0.08
      this.y += (dest.y - this.y) * 0.08
      this.z += (dest.z - this.z) * 0.08
      if (size < _size) {
        size += scaleSpeed
      } else {
        // if (this.distanceTo(this.dest) < 0.1) {
        //   this.stop = true;
        // }
      }
    }
  }

  let tempSparklesArray: number[] = []
  let tempSparklesArraySizes: number[] = []

  useEffect(() => {
    window.sparkles = sparkles
    console.log('window', window)

    scene.getObjectByName('moco_group')?.add(points)
  }, [scene])

  useFrame(({ clock }) => {
    let time = clock.getElapsedTime()
    time += 0.03

    if (sparkles.length < 40000) {
      lines.forEach((l) => {
        findNextVector(l)
        findNextVector(l)
        findNextVector(l)
      })
    }

    sparkles.forEach((s, i) => {
      if (!s.stop) {
        s.update()
      }
      tempSparklesArray[i * 3] = s.x
      tempSparklesArray[i * 3 + 1] = s.y
      tempSparklesArray[i * 3 + 2] = s.z
      tempSparklesArraySizes[i] = s.size
    })
    sparklesGeometry.setAttribute(
      'position',
      new THREE.Float32BufferAttribute(tempSparklesArray, 3),
    )
    sparklesGeometry.setAttribute(
      'size',
      new THREE.Float32BufferAttribute(tempSparklesArraySizes, 1),
    )
  })

  return null
}
