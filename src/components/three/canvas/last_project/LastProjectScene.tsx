import { useEffect, useState } from 'react'
import * as THREE from 'three'
import { useFrame, useThree } from '@react-three/fiber'
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js'
import gsap from 'gsap'

import vertexShader from '../../shaders/last_project/vertexShader.glsl'
import fragmentShader from '../../shaders/last_project/fragmentShader.glsl'

import { isOdd } from '@/helpers/mathHelpers'

import { default as glbConstants } from '@/constants/assets/glbConstants.json'

function addModel(index: number, textureUrl: string, scene: THREE.Scene) {
  const loader = new GLTFLoader()

  const textureLoader = new THREE.TextureLoader()
  const texture = textureLoader.load(textureUrl)

  const material = new THREE.ShaderMaterial({
    side: THREE.DoubleSide,
    transparent: true,
    opacity: 1,
    uniforms: {
      time: { value: 0 },
      uTexture: { value: texture },
    },
    vertexShader: vertexShader,
    fragmentShader: fragmentShader,
  })
  material.needsUpdate = true

  loader.load(
    glbConstants.PROJECTS.ROUNDED_PLANE,
    function (gltf) {
      const model = gltf.scenes[0].children[0]
      if (model instanceof THREE.Mesh) {
        model.name = `last_project_mesh_${index}`
        model.material = material
        const scale = 0.8
        model.scale.set(scale, scale, scale)
        model.updateMatrix()
        model.position.set(isOdd(index) ? 0.2 : -0.2, 0, 0)
        model.rotation.set(0, 0, THREE.MathUtils.degToRad(isOdd(index) ? -10 : 10))
      }
      scene.add(model)
    },
    function (xhr) {
      console.log((xhr.loaded / xhr.total) * 100 + '% loaded')
    },
    function (error) {
      console.error('An error happened:', error)
    },
  )
}

export default function LastProjectScene({
  index,
  textureUrl,
}: {
  index: number
  textureUrl: string
}) {
  const { scene } = useThree()

  const [isLoaded, setIsLoaded] = useState<boolean>(false)

  useEffect(() => {
    if (!isLoaded) {
      addModel(index, textureUrl, scene)
      setIsLoaded(true)
    }
  }, [scene, index, textureUrl, isLoaded])

  useEffect(() => {
    const triggerElement = document.querySelector(`#last-project-canvas-container-${index}`)
    console.log('Trigger Element:', triggerElement)

    const checkModel = () => {
      const model = scene.getObjectByName(`last_project_mesh_${index}`)
      console.log('Model:', model)
      if (model) {
        const timeline = gsap.timeline({
          scrollTrigger: {
            trigger: `#last-project-canvas-container-${index}`,
            start: 'top 75%',
            end: 'bottom 70%',
            scrub: 1,
            markers: true,
          },
        })
        timeline
          .to(
            model.position,
            {
              x: isOdd(index) ? -0.1 : 0.1,
            },
            0,
          )
          .to(
            model.rotation,
            {
              z: THREE.MathUtils.degToRad(0),
            },
            0,
          )
          .to(
            model.scale,
            {
              x: 1.05,
              y: 1.05,
              z: 1.05,
            },
            0,
          )
      } else {
        setTimeout(checkModel, 100)
      }
    }

    checkModel()
  }, [scene, index])

  useFrame(({ clock }) => {
    const time = clock.getElapsedTime()

    scene.traverse((object) => {
      if (object instanceof THREE.Mesh && object.material instanceof THREE.ShaderMaterial) {
        object.material.uniforms.time.value = time
      }
    })
  })

  return null
}
