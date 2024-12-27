import React, { useCallback, useEffect, useMemo, useRef } from 'react'
import * as THREE from 'three'
import { useFrame, useLoader, useThree } from '@react-three/fiber'
import { Plane } from '@react-three/drei'
import gsap from 'gsap'
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

  const handleWheel = useCallback((e: WheelEvent) => {
    console.log(e.deltaY)
    moveRef.current += e.deltaY
    console.log('moveRef.current', moveRef.current)
  }, [])

  const test = new THREE.Mesh(new THREE.PlaneGeometry(10, 10), new THREE.MeshStandardMaterial())

  const handleMouseMove = useCallback((e: MouseEvent) => {
    mouseRef.current.x = (e.clientX / window.innerWidth) * 2 - 1
    mouseRef.current.y = -(e.clientY / window.innerHeight) * 2 + 1
    raycasterRef.current.setFromCamera(mouseRef.current, camera)
    let intersects = raycasterRef.current.intersectObjects([test])
    console.log(intersects[0])
    if (intersects.length > 0) {
      pointRef.current.x = intersects[0].point.x
      pointRef.current.y = intersects[0].point.y
    }
  }, [])

  useEffect(() => {
    window.addEventListener('wheel', handleWheel, false)
    window.addEventListener('mousemove', handleMouseMove, false)
    return () => {
      window.removeEventListener('wheel', handleWheel, false)
      window.removeEventListener('mousemove', handleMouseMove, false)
    }
  }, [handleWheel, handleMouseMove])

  useGSAP(
    (_, contextSafe) => {
      if (!contextSafe) return

      const handleMouseDown = contextSafe(() => {
        gsap.to(materialBiabiany.uniforms.mousePressed, {
          duration: 1,
          value: 1,
          ease: 'elastic.out(1, 0.3)',
        })
      })

      const handleMouseUp = contextSafe(() => {
        gsap.to(materialBiabiany.uniforms.mousePressed, {
          duration: 1,
          value: 0,
          ease: 'elastic.out(1, 0.3)',
        })
      })

      window.addEventListener('mousedown', handleMouseDown, false)
      window.addEventListener('mouseup', handleMouseUp, false)

      return () => {
        window.removeEventListener('mousedown', handleMouseDown, false)
        window.removeEventListener('mouseup', handleMouseUp, false)
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
      mousePressed: {
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
    uniforms: uniformsBiabiany,
    vertexShader: vertexShaderBiabiany,
    fragmentShader: fragmentShaderBiabiany,
    transparent: true,
    side: THREE.DoubleSide,
    depthTest: false,
    depthWrite: false,
  })

  useEffect(() => {
    const NUMBER = 512
    const NUMBER_SQUARED = Math.pow(NUMBER, 2)
    const FACTOR = 125

    const geometry = new THREE.BufferGeometry()
    // geometry.scale(0.002, 0.002, 0.002)

    const positions = new THREE.BufferAttribute(new Float32Array(NUMBER_SQUARED * 3), 3)
    const coordinates = new THREE.BufferAttribute(new Float32Array(NUMBER_SQUARED * 3), 3)
    const speeds = new THREE.BufferAttribute(new Float32Array(NUMBER_SQUARED), 1)
    const offset = new THREE.BufferAttribute(new Float32Array(NUMBER_SQUARED), 1)
    const direction = new THREE.BufferAttribute(new Float32Array(NUMBER_SQUARED), 1)
    const press = new THREE.BufferAttribute(new Float32Array(NUMBER_SQUARED), 1)

    function rand(a: number, b: number): number {
      return a + (b - a) * Math.random()
    }

    let INDEX = 0

    for (let i = 0; i < NUMBER; i++) {
      const posX = (i - NUMBER / 2) / FACTOR
      for (let j = 0; j < NUMBER; j++) {
        positions.setXYZ(INDEX, posX * 2, ((j - NUMBER / 2) / FACTOR) * 2, 0)
        coordinates.setXYZ(INDEX, i, j, 0)
        speeds.setX(INDEX, rand(0.4, 1))
        offset.setX(INDEX, rand(-1000 / FACTOR, 1000 / FACTOR))
        direction.setX(INDEX, Math.random() > 0.5 ? 1 : -1)
        press.setX(INDEX, rand(0.4, 1))
        INDEX++
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
    /* getMouseData(pointer)
    shaderMaterialRef.current.uniforms.uMouse.value = mouseDataRef.current.followMouseCoordinates
    shaderMaterialRef.current.uniforms.uAlpha.value = mouseDataRef.current.opacity */

    // MATHIS BIABIANY
    let time = clock.getElapsedTime()
    time += 0.03
    // console.log('time', time)
    materialBiabiany.uniforms.time.value = clock.elapsedTime
    materialBiabiany.uniforms.move.value = 0
    materialBiabiany.uniforms.mouse.value = pointRef
  })

  return null

  /* return (
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
  ) */
}
