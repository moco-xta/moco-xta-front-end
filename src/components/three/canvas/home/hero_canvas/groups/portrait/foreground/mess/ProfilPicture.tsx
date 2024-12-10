import React, { useEffect, useMemo, useRef, useState } from 'react'
import * as THREE from 'three'
import { useFrame } from '@react-three/fiber'
import { Plane } from '@react-three/drei'
import { useGSAP } from '@gsap/react'

import vertexShader from '@/components/three/shaders/profil_picture/vertexShader.glsl'
import fragmentShader from '@/components/three/shaders/profil_picture/fragmentShader.glsl'

import { default as heroAnimationsConstants } from '@/constants/animations/home/hero/heroAnimationsConstants.json'
import { default as texturesConstants } from '@/constants/assets/texturesConstants.json'
import { default as profilPictureAnimationsConstants } from '@/constants/animations/home/hero/portrait/profilPictureAnimationsConstants.json'

interface ProfilPictureInterface {
  timeline: GSAPTimeline
}

export default function ProfilPicture({ timeline }: ProfilPictureInterface) {
  const [duration] = useState<number>(
    profilPictureAnimationsConstants.DURATION / heroAnimationsConstants.SPEED,
  )
  const [delay] = useState<number>(
    profilPictureAnimationsConstants.KEYFRAME_START / heroAnimationsConstants.SPEED,
  )

  const portraitMap = new THREE.TextureLoader().load(texturesConstants.HOME.PORTRAIT)
  portraitMap.magFilter = THREE.NearestFilter

  const portraitMeshRef = useRef<THREE.Mesh>(null!)
  const shaderMaterialRef = useRef<THREE.ShaderMaterial>(null!)
  const mouseDataRef = useRef<{
    speed: number
    targetSpeed: number
    mouseCoordinates: THREE.Vector2
    followMouseCoordinates: THREE.Vector2
    previousMouseCoordinates: THREE.Vector2
  }>({
    speed: 0,
    targetSpeed: 0,
    mouseCoordinates: new THREE.Vector2(0, 0),
    followMouseCoordinates: new THREE.Vector2(0, 0),
    previousMouseCoordinates: new THREE.Vector2(0, 0),
  })

  const uniforms = useMemo(
    () => ({
      uTexture: {
        type: 't',
        value: portraitMap,
      },
      uVelocity: {
        value: 0.0,
      },
      uType: {
        value: 0,
      },
      uMouse: {
        value: new THREE.Vector2(0.0, 0.0),
      },
      uResolution: {
        type: 'v4',
        value: new THREE.Vector4(400.0, 400.0, 1.0, 1.0),
      },
      uOffset: {
        value: new THREE.Vector2(0.0, 0.0),
      },
      uAlpha: {
        value: 1.0,
      },
    }),
    [portraitMap],
  )

  useEffect(() => {
    if (shaderMaterialRef.current) console.log('shaderMaterialRef', shaderMaterialRef)
  }, [shaderMaterialRef])

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

  useFrame(({ gl, scene, camera, mouse }, delta, xrFrame) => {
    // console.log('delta', delta)
    // console.log('uniformsRef.current.time', uniformsRef.current.time)
    // console.log('timeline.time()', timeline.time())
    // console.log('mouse', mouse)
    getMouseData(mouse)
    shaderMaterialRef.current.uniforms.uMouse.value = mouseDataRef.current.followMouseCoordinates
    // shaderMaterialRef.current.uniforms.uMouse.value = new THREE.Vector2(2, 2)
    shaderMaterialRef.current.uniforms.uVelocity.value = mouseDataRef.current.targetSpeed
    // shaderMaterialRef.current.uniforms.uVelocity.value = 1000
  })

  useGSAP(() => {
    if (profilPictureAnimationsConstants.ANIMATE) {
      // MATERIAL
      timeline.to(
        portraitMeshRef.current.material,
        {
          keyframes: {
            '0%': {
              opacity: profilPictureAnimationsConstants.ANIMATION['0_PERCENT'].MATERIAL.OPACITY,
            },
            '25%': {
              opacity: profilPictureAnimationsConstants.ANIMATION['25_PERCENT'].MATERIAL.OPACITY,
            },
            easeEach: profilPictureAnimationsConstants.ANIMATION.EACH_EASE.MATERIAL,
          },
          duration: duration,
        },
        delay,
      )
    }
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
