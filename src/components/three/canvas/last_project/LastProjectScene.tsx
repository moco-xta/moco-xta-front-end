import * as THREE from 'three'
import { useFrame, useThree } from '@react-three/fiber'
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js'
import gsap from 'gsap'

import vertexShader from '../../shaders/last_project/vertexShader.glsl'
import fragmentShader from '../../shaders/last_project/fragmentShader.glsl'

import { isOdd } from '@/helpers/mathHelpers'

import { default as glbConstants } from '@/constants/assets/glbConstants.json'
import { useEffect, useMemo } from 'react'

export default function LastProjectScene({
  index,
  textureUrl,
}: {
  index: number
  textureUrl: string
}) {
  const { scene } = useThree()

  const textureLoader = new THREE.TextureLoader()
  const texture = textureLoader.load(textureUrl)

  const material = useMemo(() => {
    return new THREE.ShaderMaterial({
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
  }, [texture])
  material.needsUpdate = true

  useMemo(() => {
    const loader = new GLTFLoader()
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
          model.rotation.set(0, 0, THREE.MathUtils.degToRad(isOdd(index) ? -1 : 1))
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
  }, [index, material, scene])

  /* useEffect(() => {
    return () => {
      const model = scene.getObjectByName(`last_project_mesh_${index}`);
      if (model) {
        scene.remove(model);
      }
    };
  }, [scene, index]); */

  useEffect(() => {
    const triggerElement = document.querySelector(`#last-project-canvas-container-${index}`)
    console.log('Trigger Element:', triggerElement)

    const checkModel = () => {
      const model = scene.getObjectByName(`last_project_mesh_${index}`)
      console.log('Model:', model)
      if (model) {
        gsap.to(model.rotation, {
          z: THREE.MathUtils.degToRad(10),
          scrollTrigger: {
            trigger: `#last-project-canvas-container-${index}`,
            start: 'top center',
            end: 'bottom center',
            scrub: 1,
            markers: true,
            onUpdate: () => {
              console.log('ScrollTrigger Update')
            },
          },
        })
      } else {
        setTimeout(checkModel, 100) // Retry after 100ms
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
