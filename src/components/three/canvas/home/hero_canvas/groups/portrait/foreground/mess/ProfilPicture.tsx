import React, { useMemo, useRef } from 'react'
import * as THREE from 'three'
import { useFrame } from '@react-three/fiber'
import { Plane } from '@react-three/drei'
import { useGSAP } from '@gsap/react'

import { useGSAPTimelineContext } from '@/hooks/animations/useGSAPTimelineContext'

import vertexShader from '@/components/three/shaders/profil_picture/vertexShader.glsl'
import fragmentShader from '@/components/three/shaders/profil_picture/fragmentShader.glsl'

import { default as texturesConstants } from '@/constants/assets/texturesConstants.json'

import { profilePictureAnimations } from 'animations'

export default function ProfilPicture() {
  const { timeline } = useGSAPTimelineContext()

  const portraitMap = new THREE.TextureLoader().load(texturesConstants.HOME.PORTRAIT)
  portraitMap.magFilter = THREE.NearestFilter

  const portraitMeshRef = useRef<THREE.Mesh>(null!)
  const shaderMaterialRef = useRef<THREE.ShaderMaterial>(null!)
  const mouseDataRef = useRef<{
    opacity: number
    speed: number
    targetSpeed: number
    mouseCoordinates: THREE.Vector2
    followMouseCoordinates: THREE.Vector2
    previousMouseCoordinates: THREE.Vector2
  }>({
    opacity: 0,
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

  useGSAP(() => {
    // MATERIAL
    timeline.to(
      mouseDataRef.current,
      {
        keyframes: profilePictureAnimations.material.keyframes,
        duration: profilePictureAnimations.material.duration,
      },
      profilePictureAnimations.delay,
    )
  })

  useFrame(({ pointer }) => {
    getMouseData(pointer)
    shaderMaterialRef.current.uniforms.uMouse.value = mouseDataRef.current.followMouseCoordinates
    shaderMaterialRef.current.uniforms.uAlpha.value = mouseDataRef.current.opacity
  })

  return (
    <Plane
      ref={portraitMeshRef}
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
