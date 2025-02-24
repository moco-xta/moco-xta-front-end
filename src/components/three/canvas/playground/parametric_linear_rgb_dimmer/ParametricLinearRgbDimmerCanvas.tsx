import { useEffect, useRef } from 'react'
import * as THREE from 'three'
import { OrbitControls } from 'three/addons/controls/OrbitControls.js'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'

import vertexShader from '@/components/three/shaders/playground/parametric_linear_rgb_dimmer/vertexShader.glsl'
import fragmentShader from '@/components/three/shaders/playground/parametric_linear_rgb_dimmer/fragmentShader.glsl'

import { default as glbConstants } from '@/constants/assets/glbConstants.json'
import { default as texturesConstants } from '@/constants/assets/texturesConstants.json'

type TGlb = {
  animations: THREE.AnimationClip[]
  scene: THREE.Group
  scenes: THREE.Group[]
  cameras: THREE.Camera[]
  asset: object
}

export function ParametricLinearRgbDimmerCanvas() {
  const containerRef = useRef<HTMLDivElement>(null!)
  const frameIdRef = useRef<number>(0)
  const timeRef = useRef<number>(0)

  // ###########
  // ## SCENE ##
  // ###########

  const scene = new THREE.Scene()

  // ############
  // ## CAMERA ##
  // ############

  const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 100)
  camera.position.set(0, 0, 3)

  // ##############
  // ## RENDERER ##
  // ##############

  const renderer = new THREE.WebGLRenderer({ antialias: true })
  renderer.setSize(window.innerWidth, window.innerHeight)
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

  // ############
  // ## LIGHTS ##
  // ############

  const ambientLight = new THREE.AmbientLight(0xffffff, 10)

  // ####################
  // ## TEXTURE LOADER ##
  // ####################

  const texture = new THREE.TextureLoader().load(texturesConstants.PLAYGROUND.ASI_ES_LA_FOKIN_LIFE)

  // #################
  // ## GLTF LOADER ##
  // #################

  const loader = new GLTFLoader()

  // ##############
  // ## GEOMETRY ##
  // ##############

  const geometry = new THREE.PlaneGeometry(1, 1, 1, 1)

  // ##############
  // ## MATERIAL ##
  // ##############

  /* const material = new THREE.MeshStandardMaterial({
    color: '#ffffff',
    transparent: true,
    opacity: 1,
    wireframe: false
  }) */

  // #####################
  // ## SHADER MATERIAL ##
  // #####################

  const uniforms = {
    time: { type: 'f', value: 0 },
    uTexture: { type: 't', value: texture },
  }

  const shaderMaterial = new THREE.ShaderMaterial({
    uniforms,
    vertexShader,
    fragmentShader,
    transparent: true,
    side: THREE.DoubleSide,
  })

  // ###########
  // ## PLANE ##
  // ###########

  const plane = new THREE.Mesh(geometry, shaderMaterial)

  useEffect(() => {
    // #########
    // ## DOM ##
    // #########

    if (!containerRef.current) return

    containerRef.current.appendChild(renderer.domElement)

    // ##############
    // ## CONTROLS ##
    // ##############

    const controls = new OrbitControls(camera, renderer.domElement)
    controls.enableDamping = true
    controls.dampingFactor = 0.05

    // ##################
    // ## ADD TO SCENE ##
    // ##################

    scene.add(plane)
    scene.add(ambientLight)

    // ##############
    // ## LOAD GLB ##
    // ##############

    loader.load(
      glbConstants.PLAYGROUND.SUZANNE,
      function (gltf: TGlb) {
        const suzanne = gltf.scene.children[0] as THREE.Mesh
        suzanne.material = shaderMaterial
        // scene.add(suzanne)

        gltf.animations
        gltf.scene
        gltf.scenes
        gltf.cameras
        gltf.asset
      },
      function (/* xhr */) {
        // console.log((xhr.loaded / xhr.total) * 100 + '% loaded')
      },
      function (error) {
        console.error(error)
      },
    )

    // #############
    // ## ANIMATE ##
    // #############

    const animate = () => {
      frameIdRef.current = requestAnimationFrame(animate)

      timeRef.current += 0.01
      uniforms.time.value = timeRef.current

      controls.update()

      renderer.render(scene, camera)
    }

    animate()

    // ############
    // ## RESIZE ##
    // ############

    function handleResize() {
      const width = window.innerWidth
      const height = window.innerHeight
      renderer.setSize(width, height)
      camera.aspect = width / height
      camera.updateProjectionMatrix()
    }

    window.addEventListener('resize', handleResize)

    const container = containerRef.current
    return () => {
      window.removeEventListener('resize', handleResize)
      container.removeChild(renderer.domElement)
      controls.dispose()
      renderer.dispose()
      cancelAnimationFrame(frameIdRef.current)
    }
  })

  return <div ref={containerRef} />
}
