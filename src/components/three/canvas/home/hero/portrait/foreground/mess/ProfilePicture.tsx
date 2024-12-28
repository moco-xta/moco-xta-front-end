import { useCallback, useEffect, useMemo, useRef } from 'react'
import * as THREE from 'three'
import { useFrame, useLoader, useThree } from '@react-three/fiber'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { TextureLoader } from 'three'

import type { TUniforms } from '@/types/animation/types'

import { useGSAPTimelineContext } from '@/hooks/animations/useGSAPTimelineContext'

import vertexShader from '@/components/three/shaders/profile_picture/vertexShader.glsl'
import fragmentShader from '@/components/three/shaders/profile_picture/fragmentShader.glsl'

import { default as texturesConstants } from '@/constants/assets/texturesConstants.json'
import { default as foregroundGroupConstants } from '@/constants/home/hero/three/portrait/foreground/foregroundGroupConstants.json'

import { animate } from 'animations'

// import { profilePictureAnimations } from 'animations'

export default function ProfilePicture() {
  const { scene, camera } = useThree()
  const { timeline } = useGSAPTimelineContext()

  const texturesUrls = [
    texturesConstants.HOME.LOGO_ATHLETICO_NACIONAL,
    texturesConstants.HOME.PROFILE_PICTURE,
    texturesConstants.HOME.GRADIENT_CIRCLE_MASK,
  ]
  const textures: THREE.Texture[] = useLoader(TextureLoader, texturesUrls).flat() as THREE.Texture[]
  useMemo(() => textures.forEach((texture) => (texture.minFilter = THREE.LinearFilter)), [textures])

  const opacityRef = useRef<any>({
    value: 0,
  })
  const moveRef = useRef<number>(0)
  const raycasterRef = useRef<THREE.Raycaster>(new THREE.Raycaster())
  const mouseRef = useRef<THREE.Vector2>(new THREE.Vector2())
  const pointRef = useRef<THREE.Vector2>(new THREE.Vector2())
  const uniforms = useRef<TUniforms>({
    time: {
      type: 'f',
      value: 0,
    },
    opacity: {
      type: 'f',
      value: opacityRef.current.value,
    },
    uTexture: {
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
  })

  const materialRef = useRef<THREE.ShaderMaterial>(
    new THREE.ShaderMaterial({
      uniforms: uniforms.current,
      vertexShader: vertexShader,
      fragmentShader: fragmentShader,
      transparent: true,
      side: THREE.DoubleSide,
      depthTest: false,
      depthWrite: false,
    }),
  )

  useGSAP(
    () => {
      timeline
        .to(
          materialRef.current.uniforms.mousePressed,
          {
            keyframes: {
              '0%': {
                value: 8,
              },
              '50%': {
                value: 0,
              },
              easeEach: 'power1.out',
            },
            duration: foregroundGroupConstants.duration,
          },
          foregroundGroupConstants.label,
        )
        .to(
          opacityRef.current,
          {
            keyframes: {
              '0%': {
                value: 0,
              },
              '50%': {
                value: 1,
              },
              easeEach: 'power1.out',
            },
            duration: foregroundGroupConstants.duration,
          },
          foregroundGroupConstants.label,
        )
    },
    { scope: materialRef },
  )

  const handleWheel = useCallback((e: WheelEvent) => {
    moveRef.current += e.deltaY
  }, [])

  const test = new THREE.Mesh(new THREE.PlaneGeometry(10, 10), new THREE.MeshStandardMaterial())

  const handleMouseMove = useCallback((e: MouseEvent) => {
    mouseRef.current.x = (e.clientX / window.innerWidth) * 2 - 1
    mouseRef.current.y = -(e.clientY / window.innerHeight) * 2 + 1
    raycasterRef.current.setFromCamera(mouseRef.current, camera)
    let intersects = raycasterRef.current.intersectObjects([test])
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

  useGSAP((_, contextSafe) => {
    if (!contextSafe) return

    const handleMouseDown = contextSafe(() => {
      gsap.to(materialRef.current.uniforms.mousePressed, {
        duration: 0.5,
        value: 0.25,
        ease: 'power1.out',
      })
      gsap.to(opacityRef.current, {
        duration: 0.5,
        value: 0.5,
        ease: 'power1.out',
      })
    })

    const handleMouseUp = contextSafe(() => {
      gsap.to(materialRef.current.uniforms.mousePressed, {
        duration: 0.5,
        value: 0.025,
        ease: 'power1.out',
      })
      gsap.to(opacityRef.current, {
        duration: 0.5,
        value: 1,
        ease: 'power1.out',
      })
    })

    window.addEventListener('mousedown', handleMouseDown, false)
    window.addEventListener('mouseup', handleMouseUp, false)

    return () => {
      window.removeEventListener('mousedown', handleMouseDown, false)
      window.removeEventListener('mouseup', handleMouseUp, false)
    }
  })

  useEffect(() => {
    const NUMBER = 512
    const NUMBER_SQUARED = Math.pow(NUMBER, 2)
    let INDEX = 0
    const FACTOR = 125

    const geometry = new THREE.BufferGeometry()

    const positions = new THREE.BufferAttribute(new Float32Array(NUMBER_SQUARED * 3), 3)
    const coordinates = new THREE.BufferAttribute(new Float32Array(NUMBER_SQUARED * 3), 3)
    const speeds = new THREE.BufferAttribute(new Float32Array(NUMBER_SQUARED), 1)
    const offset = new THREE.BufferAttribute(new Float32Array(NUMBER_SQUARED), 1)
    const direction = new THREE.BufferAttribute(new Float32Array(NUMBER_SQUARED), 1)
    const press = new THREE.BufferAttribute(new Float32Array(NUMBER_SQUARED), 1)

    function rand(a: number, b: number): number {
      return a + (b - a) * Math.random()
    }

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

    const points = new THREE.Points(geometry, materialRef.current)
    scene.getObjectByName('mess_group')?.add(points)
  }, [scene])

  useFrame(({ clock }) => {
    let time = clock.getElapsedTime()
    time += 0.03
    materialRef.current.uniforms.time.value = clock.elapsedTime
    materialRef.current.uniforms.opacity.value = opacityRef.current.value
    materialRef.current.uniforms.move.value = 0
    materialRef.current.uniforms.mouse.value = pointRef
  })

  return null
}
