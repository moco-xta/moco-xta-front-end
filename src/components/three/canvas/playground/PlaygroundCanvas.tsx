import { useEffect, useRef } from 'react'
import * as THREE from 'three'
import { OrbitControls } from 'three/addons/controls/OrbitControls.js'
import { GLTFLoader } from 'three/examples/jsm/Addons.js'

import vertexShader from '@/components/three/shaders/playground/bust/vertexShader.glsl'
import fragmentShader from '@/components/three/shaders/playground/bust/fragmentShader.glsl'

import glbConstants from '@/constants/assets/glbConstants.json'
import texturesConstants from '@/constants/assets/texturesConstants.json'

function rand(a: number, b: number): number {
  return a + (b - a) * Math.random()
}

export function PlaygroundCanvas() {
  const containerRef = useRef<HTMLDivElement>(null)

  const timeRef = useRef<number>(0)
  const moveRef = useRef<number>(0)
  const pointerRef = useRef<THREE.Vector2>(new THREE.Vector2())

  const raycastedPlane = new THREE.Mesh(
    new THREE.PlaneGeometry(3, 3),
    new THREE.MeshBasicMaterial({
      transparent: true,
      opacity: 0
    })
  )

  useEffect(() => {
    const handlePointerMove = (event: PointerEvent) => {
      pointerRef.current.x = ( event.clientX / window.innerWidth ) * 2 - 1;
      pointerRef.current.y = - ( event.clientY / window.innerHeight ) * 2 + 1;
      // console.log('Pointer move:', event)
    }

    window.addEventListener('pointermove', handlePointerMove)

    return () => {
      window.removeEventListener('pointermove', handlePointerMove)
    }
  }, [])

  useEffect(() => {
    const handleWheel = (event: WheelEvent) => {
      moveRef.current += event.deltaY * 0.001
      // console.log('Mouse Wheel Delta:', event.deltaY)
    }

    window.addEventListener('wheel', handleWheel)

    return () => {
      window.removeEventListener('wheel', handleWheel)
    }
  }, [])

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
    
    const raycaster = new THREE.Raycaster();

    /* const controls = new OrbitControls(camera, renderer.domElement)
    controls.enableDamping = true
    controls.dampingFactor = 0.05 */

    // TEXTURES

    const textures = [
      new THREE.TextureLoader().load(texturesConstants.SKETCHFAB.BUST),
      new THREE.TextureLoader().load(texturesConstants.SHADERS.GRADIENT_CIRCLE_MASK),
    ]
    // console.log(textures)

    // OBJECT

    const uniforms = {
      time: { type: 'f', value: 0 },
      progress: { type: 'f', value: 0.0 },
      uTexture: { type: 't', value: textures[0] },
      mask: { type: 't', value: textures[1] },
      move: { type: 'f', value: 0 },
      mouse: { type: 'v2', value: pointerRef.current },
    }

    const shaderMaterial = new THREE.ShaderMaterial({
      uniforms,
      vertexShader,
      fragmentShader,
      transparent: true,
      side: THREE.DoubleSide,
      depthTest: false,
      depthWrite: false,
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

    function setBufferGeometry(mesh: THREE.Mesh, geometry: THREE.BufferGeometry) {
      const number = mesh.geometry.attributes.position.array.length / 3
      // console.log('number', number)
      const positions = mesh.geometry.attributes.position as THREE.BufferAttribute // Points position
      const coordinates = mesh.geometry.attributes.uv as THREE.BufferAttribute // UV coordinates
      const speed = new THREE.BufferAttribute(new Float32Array(number), 1)
      const offset = new THREE.BufferAttribute(new Float32Array(number), 1)
      const direction = new THREE.BufferAttribute(new Float32Array(number), 1)
      const press = new THREE.BufferAttribute(new Float32Array(number), 1)

      for (let i = 0; i < number; i++) {
        speed.setX(i, rand(0.4, 1))
        offset.setX(i, rand(-100, 100))
        direction.setX(i, Math.random() > 0.5 ? 1 : -1)
        press.setX(i, rand(0.4, 1))
      }

      geometry.setAttribute('position', positions)
      // console.log(geometry)
      geometry.setAttribute('aCoordinates', coordinates)
      // console.log(coordinates)
      geometry.setAttribute('aSpeed', speed)
      // console.log(speed)
      geometry.setAttribute('aOffset', offset)
      // console.log(offset)
      geometry.setAttribute('aDirection', direction)
      // console.log(direction)
      geometry.setAttribute('aPress', press)
      // console.log(press)

      const points = new THREE.Points(geometry, shaderMaterial)
      scene.add(points)
      scene.add(raycastedPlane)
    }

    // ANIMATE

    let frameId: number
    const animate = () => {
      frameId = requestAnimationFrame(animate)

      raycaster.setFromCamera( pointerRef.current, camera );
      const intersects = raycaster.intersectObjects( [raycastedPlane] );
      console.log('intersects', intersects[0] ? intersects[0].point : null)
    
      for ( let i = 0; i < intersects.length; i ++ ) {
      }

      timeRef.current += 0.01

      uniforms.time.value = timeRef.current
      uniforms.move.value = moveRef.current
      uniforms.mouse.value = pointerRef.current

      // controls.update()

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
      // controls.dispose()
      renderer.dispose()
      cancelAnimationFrame(frameId)
    }
  }, [])

  return <div ref={containerRef} />
}
