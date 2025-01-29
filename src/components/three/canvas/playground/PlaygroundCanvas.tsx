import { useEffect, useRef } from 'react'
import * as THREE from 'three'
import { OrbitControls } from 'three/addons/controls/OrbitControls.js'
import { DRACOLoader, GLTFLoader } from 'three/examples/jsm/Addons.js'

import vertexShader from '@/components/three/shaders/playground/bust/vertexShader.glsl'
import fragmentShader from '@/components/three/shaders/playground/bust/fragmentShader.glsl'

import glbConstants from '@/constants/assets/glbConstants.json'

export function PlaygroundCanvas() {
  const containerRef = useRef<HTMLDivElement>(null)

  const timeRef = useRef<number>(0)

  useEffect(() => {
    if (!containerRef.current) return

    // SET UP

    const scene = new THREE.Scene()

    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000,
    )
    camera.position.z = 5

    const renderer = new THREE.WebGLRenderer({ antialias: true })
    renderer.setSize(window.innerWidth, window.innerHeight)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    containerRef.current.appendChild(renderer.domElement)

    const controls = new OrbitControls(camera, renderer.domElement)
    controls.enableDamping = true
    controls.dampingFactor = 0.05

    // OBJECT

    const uniforms = {
      progress: { type: 'f', value: 0.0 },
    }

    const shaderMaterial = new THREE.ShaderMaterial({
      uniforms,
      vertexShader,
      fragmentShader,
      transparent: true,
      side: THREE.DoubleSide,
    })

    const geometry = new THREE.BufferGeometry()

    // LOADER

    let mesh: THREE.Mesh

    const loader = new GLTFLoader()

    loader.load(
      glbConstants.SKETCHFAB.BUST,
      function (gltf) {
        mesh = gltf.scene.children[0] as THREE.Mesh
        // console.log(mesh.geometry.attributes)

        setBufferGeometry(mesh, geometry)
      },
      function (xhr) {
        console.log((xhr.loaded / xhr.total) * 100 + '% loaded')
      },
      function () {
        console.log('An error happened')
      },
    )

    // BUFFER GEOMETRY

    let positions: THREE.BufferAttribute

    function setBufferGeometry(mesh: THREE.Mesh, geometry: THREE.BufferGeometry) {
      positions = mesh.geometry.attributes.position as THREE.BufferAttribute
      // console.log(positions)

      geometry.setAttribute('position', positions)
      console.log(geometry)

      const points = new THREE.Points(geometry, shaderMaterial)
      scene.add(points)
    }

    // ANIMATE

    let frameId: number
    const animate = () => {
      frameId = requestAnimationFrame(animate)
      timeRef.current += 0.01

      // uniforms.time.value += 0.01

      controls.update()

      renderer.render(scene, camera)
    }

    animate()

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
      renderer.dispose()
      cancelAnimationFrame(frameId)
    }
  }, [])

  return <div ref={containerRef} />
}
