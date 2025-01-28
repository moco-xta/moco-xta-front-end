import { useEffect, useRef } from 'react'
import * as THREE from 'three'
import { OrbitControls } from 'three/addons/controls/OrbitControls.js'

import vertexShader from '@/components/three/shaders/playground/bust/vertexShader.glsl'
import fragmentShader from '@/components/three/shaders/playground/bust/fragmentShader.glsl'

export function PlaygroundCanvas() {
  const mountRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!mountRef.current) return

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
    mountRef.current.appendChild(renderer.domElement)

    const controls = new OrbitControls(camera, renderer.domElement)
    controls.enableDamping = true
    controls.dampingFactor = 0.05

    const geometry = new THREE.PlaneGeometry(5, 5)

    const uniforms = {
      time: { value: 0.0 },
    }

    const shaderMaterial = new THREE.ShaderMaterial({
      uniforms,
      vertexShader,
      fragmentShader,
      transparent: true,
      side: THREE.DoubleSide,
    })

    const plane = new THREE.Mesh(geometry, shaderMaterial)
    scene.add(plane)

    let frameId: number
    const animate = () => {
      frameId = requestAnimationFrame(animate)

      uniforms.time.value += 0.01

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
      mountRef.current?.removeChild(renderer.domElement)
      controls.dispose()
      renderer.dispose()
      cancelAnimationFrame(frameId)
    }
  }, [])

  return <div ref={mountRef} />
}
