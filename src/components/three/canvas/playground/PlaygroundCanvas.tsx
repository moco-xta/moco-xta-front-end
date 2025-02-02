import { useEffect, useRef } from 'react'
import * as THREE from 'three'
import { OrbitControls } from 'three/addons/controls/OrbitControls.js'

import vertexShader from '@/components/three/shaders/playground/default/vertexShader.glsl'
import fragmentShader from '@/components/three/shaders/playground/default/fragmentShader.glsl'

export function PlaygroundCanvas() {
  const containerRef = useRef<HTMLDivElement>(null)
  const timeRef = useRef<number>(0)

  const scene = new THREE.Scene()

  const uniforms = {
    time: { type: 'f', value: 0 },
  }

  const geometry = new THREE.PlaneGeometry(1, 1)
  const shaderMaterial = new THREE.ShaderMaterial({
    uniforms,
    vertexShader,
    fragmentShader,
    transparent: true,
    side: THREE.DoubleSide,
  })

  const plane = new THREE.Mesh(geometry, shaderMaterial)
  scene.add(plane)

  const ambientLight = new THREE.AmbientLight(0xFFFFFF, 1)
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
    camera.position.z = 5

    const renderer = new THREE.WebGLRenderer({ antialias: true })
    renderer.setSize(window.innerWidth, window.innerHeight)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    containerRef.current.appendChild(renderer.domElement)

    // const raycaster = new THREE.Raycaster();

    const controls = new OrbitControls(camera, renderer.domElement)
    controls.enableDamping = true
    controls.dampingFactor = 0.05

    // ANIMATE

    let frameId: number
    const animate = () => {
      frameId = requestAnimationFrame(animate)

      timeRef.current += 0.01
      uniforms.time.value = timeRef.current

      controls.update()

      renderer.render(scene, camera)
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
      renderer.dispose()
      cancelAnimationFrame(frameId)
    }
  }, [scene])

  return <div ref={containerRef} />
}
