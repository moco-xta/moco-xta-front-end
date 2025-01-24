import { useEffect } from 'react'
import * as THREE from 'three'
import { useThree } from '@react-three/fiber'

import vertexShader from '../../shaders/project_image/vertexShader.glsl'
import fragmentShader from '../../shaders/project_image/fragmentShader.glsl'

function addObjects(scene: THREE.Scene, position: THREE.Vector3, imageUrl: string) {
  const { x, y, z } = position

  const geometry = new THREE.PlaneGeometry(6 * 1, 4 * 1, 6, 4)

  const uTexture1 = new THREE.TextureLoader().load(imageUrl)
  uTexture1.minFilter = THREE.LinearFilter
  uTexture1.needsUpdate = true

  const material = new THREE.ShaderMaterial({
    side: THREE.DoubleSide,
    transparent: true,
    uniforms: {
      time: {
        value: 0,
      },
      uTexture1: {
        value: uTexture1,
      },
      uResolution: {
        value: new THREE.Vector4(300, 400, 1, 1),
      },
    },
    vertexShader: vertexShader,
    fragmentShader: fragmentShader,
  })

  const plane = new THREE.Mesh(geometry, material)
  plane.position.set(x, y, z)
  plane.rotation.set(0, THREE.MathUtils.degToRad(20), 0)
  scene.getObjectByName('projects_images_group')?.add(plane)
}

export type TProjectImage = {
  position: THREE.Vector3
  imageUrl: string
}

export default function ProjectImage({ position, imageUrl }: TProjectImage) {
  const { scene } = useThree()

  useEffect(() => {
    addObjects(scene, position, imageUrl)
  }, [scene, position, imageUrl])

  // useFrame((state, delta, xrFrame) => {})

  return null
}
