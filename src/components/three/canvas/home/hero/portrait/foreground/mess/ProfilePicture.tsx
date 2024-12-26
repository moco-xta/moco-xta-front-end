import React, { useEffect, useMemo, useRef } from 'react'
import * as THREE from 'three'
import { useFrame, useLoader, useThree } from '@react-three/fiber'
import { Plane } from '@react-three/drei'
import { useGSAP } from '@gsap/react'
import { TextureLoader } from 'three'

import { useGSAPTimelineContext } from '@/hooks/animations/useGSAPTimelineContext'

import vertexShader from '@/components/three/shaders/profil_picture/vertexShader.glsl'
import fragmentShader from '@/components/three/shaders/profil_picture/fragmentShader.glsl'

import vertexShaderBiabiany from '@/components/three/shaders/threejs_particles_from_mathis_biabiany_website/vertexShader.glsl'
import fragmentShaderBiabiany from '@/components/three/shaders/threejs_particles_from_mathis_biabiany_website/fragmentShader.glsl'

import { default as texturesConstants } from '@/constants/assets/texturesConstants.json'

// import { profilePictureAnimations } from 'animations'

export default function ProfilePicture() {
  const { timeline } = useGSAPTimelineContext()

  const portraitMap = new THREE.TextureLoader().load(texturesConstants.HOME.PROFILE_PICTURE)
  portraitMap.magFilter = THREE.NearestFilter

  const profileRef = useRef<THREE.Mesh>(null!)
  const shaderMaterialRef = useRef<THREE.ShaderMaterial>(null!)
  const mouseDataRef = useRef<{
    opacity: number
    speed: number
    targetSpeed: number
    mouseCoordinates: THREE.Vector2
    followMouseCoordinates: THREE.Vector2
    previousMouseCoordinates: THREE.Vector2
  }>({
    opacity: 1,
    speed: 0,
    targetSpeed: 0,
    mouseCoordinates: new THREE.Vector2(0, 0),
    followMouseCoordinates: new THREE.Vector2(0, 0),
    previousMouseCoordinates: new THREE.Vector2(0, 0),
  })

  const uniforms = useMemo(
    () => ({
      uAlpha: {
        value: 1.0,
      },
      uTexture: {
        type: 't',
        value: portraitMap,
      },
      uMouse: {
        value: new THREE.Vector2(0.0, 0.0),
      },
    }),
    [portraitMap],
  )

  const getMouseData = (mouseCoordinates: THREE.Vector2) => {
    mouseDataRef.current.speed = Math.sqrt(
      (mouseDataRef.current.previousMouseCoordinates.x - mouseCoordinates.x) ** 2 +
        (mouseDataRef.current.previousMouseCoordinates.y - mouseCoordinates.y) ** 2,
    )

    mouseDataRef.current.targetSpeed -=
      0.1 * (mouseDataRef.current.targetSpeed - mouseDataRef.current.speed)
    mouseDataRef.current.followMouseCoordinates.x -=
      0.1 * (mouseDataRef.current.followMouseCoordinates.x - mouseCoordinates.x / 2)
    mouseDataRef.current.followMouseCoordinates.y -=
      0.1 * (mouseDataRef.current.followMouseCoordinates.y - mouseCoordinates.y)

    mouseDataRef.current.previousMouseCoordinates.x = mouseCoordinates.x
    mouseDataRef.current.previousMouseCoordinates.y = mouseCoordinates.y
  }

  /* useGSAP(() => {
    // MATERIAL
    timeline.to(
      mouseDataRef.current,
      {
        keyframes: profilePictureAnimations.material.keyframes,
        duration: profilePictureAnimations.material.duration,
      },
      profilePictureAnimations.delay,
    )
  }) */

  const { scene, camera } = useThree()

  const moveRef = useRef<number>(0)
  const raycasterRef = useRef<THREE.Raycaster>(new THREE.Raycaster())
  const mouseRef = useRef<THREE.Vector2>(new THREE.Vector2())
  const pointRef = useRef<THREE.Vector2>(new THREE.Vector2())

  useGSAP(
    (_, contextSafe) => {
      if (!contextSafe) return

      const handleWheel = contextSafe((e: WheelEvent) => {
        console.log(e.deltaY)
        moveRef.current += e.deltaY
        console.log('moveRef.current', moveRef.current)
      })

      const handleMouseMove = contextSafe((e: MouseEvent) => {
        mouseRef.current.x = (e.clientX / window.innerWidth) * 2 - 1
        mouseRef.current.y = -(e.clientY / window.innerHeight) * 2 + 1
        raycasterRef.current.setFromCamera(mouseRef.current, camera)
        // let intersects = raycasterRef.current.intersectObjects([this.test])
        // pointRef.current.x = intersects[0].point.x
        // pointRef.current.y = intersects[0].point.y
      })

      window.addEventListener('wheel', handleWheel, false)
      window.addEventListener('mousemove', handleMouseMove, false)

      return () => {
        window.removeEventListener('wheel', handleWheel, false)
        window.removeEventListener('mousemove', handleMouseMove, false)
      }
    },
    /* { scope: cursorAnimation.scope }, */
  )

  const defautlMaterial = new THREE.MeshStandardMaterial({
    color: '#f00',
  })

  const texturesUrls = [
    texturesConstants.HOME.LOGO_ATHLETICO_NACIONAL,
    texturesConstants.HOME.PROFILE_PICTURE,
    texturesConstants.HOME.GRADIENT_CIRCLE_MASK,
  ]

  const textures: THREE.Texture[] = useLoader(TextureLoader, texturesUrls).flat() as THREE.Texture[]

  useMemo(() => textures.forEach((texture) => (texture.minFilter = THREE.LinearFilter)), [textures])

  useEffect(() => {
    console.log('textures', textures)
  }, [textures])

  const uniformsBiabiany = useMemo(
    () => ({
      time: {
        type: 'f',
        value: 0,
      },
      t1: {
        type: 't',
        value: textures[0],
      },
      t2: {
        type: 't',
        value: textures[1],
      },
      mask: {
        type: 't',
        value: textures[2],
      },
      mouse: {
        type: 'v2',
        value: new THREE.Vector2(0.0, 0.0),
      },
      mousePreseed: {
        type: 'f',
        value: 0,
      },
      move: {
        type: 'f',
        value: 0,
      },
    }),
    [portraitMap],
  )

  const materialBiabiany = new THREE.ShaderMaterial({
    side: THREE.DoubleSide,
    transparent: true,
    depthTest: false,
    depthWrite: false,
    uniforms: uniformsBiabiany,
    vertexShader: vertexShaderBiabiany,
    fragmentShader: fragmentShaderBiabiany,
  })

  useEffect(() => {
    /* const geometry = new THREE.PlaneGeometry(1, 1)
    const plane = new THREE.Mesh(geometry, defautlMaterial)
    scene.add(plane) */

    const number = 512 * 512
    const geometry = new THREE.BufferGeometry()

    const positions = new THREE.BufferAttribute(new Float32Array(number * 3), 3)
    const coordinates = new THREE.BufferAttribute(new Float32Array(number * 3), 3)
    const speeds = new THREE.BufferAttribute(new Float32Array(number), 1)
    const offset = new THREE.BufferAttribute(new Float32Array(number), 1)
    const direction = new THREE.BufferAttribute(new Float32Array(number), 1)
    const press = new THREE.BufferAttribute(new Float32Array(number), 1)

    function rand(a: number, b: number): number {
      return a + (b - a) * Math.random()
    }

    const FACTOR = 80

    let index = 0
    for (let i = 0; i < 512; i++) {
      const posX = (i - 256) / FACTOR
      for (let j = 0; j < 512; j++) {
        positions.setXYZ(index, posX * 2, ((j - 256) / FACTOR) * 2, 0)
        coordinates.setXYZ(index, i, j, 0)
        offset.setX(index, rand(-1000, 1000))
        speeds.setX(index, rand(0.4, 1))
        direction.setX(index, Math.random() > 0.5 ? 1 : -1)
        press.setX(index, rand(0.4, 1))
        index++
      }
    }

    geometry.setAttribute('position', positions)
    geometry.setAttribute('aCoordinates', coordinates)
    geometry.setAttribute('aSpeed', speeds)
    geometry.setAttribute('aOffset', offset)
    geometry.setAttribute('aDirection', direction)
    geometry.setAttribute('aPress', press)

    const points = new THREE.Points(geometry, materialBiabiany)
    scene.add(points)
  }, [scene])

  useFrame(({ clock, pointer, scene }, delta, xrFrame) => {
    getMouseData(pointer)
    shaderMaterialRef.current.uniforms.uMouse.value = mouseDataRef.current.followMouseCoordinates
    shaderMaterialRef.current.uniforms.uAlpha.value = mouseDataRef.current.opacity

    // MATHIS BIABIANY
    let time = clock.getElapsedTime()
    time += 0.03
    materialBiabiany.uniforms.time.value = clock.elapsedTime
    materialBiabiany.uniforms.move.value = moveRef.current
  })

  return (
    <Plane
      ref={profileRef}
      args={[7.5, 7.5]}
      receiveShadow
      castShadow
    >
      <shaderMaterial
        ref={shaderMaterialRef}
        uniforms={uniforms}
        fragmentShader={fragmentShader}
        vertexShader={vertexShader}
        transparent
      />
    </Plane>
  )
}
