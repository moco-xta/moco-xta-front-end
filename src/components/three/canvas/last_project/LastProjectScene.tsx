import { useEffect, useRef, useState } from 'react'
import * as THREE from 'three'
import { useFrame, useThree } from '@react-three/fiber'
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js'
import gsap from 'gsap'

import { useScrollSpeed } from '@/hooks/useScrollSpeed'

import vertexShader from '../../shaders/last_project/vertexShader.glsl'
import fragmentShader from '../../shaders/last_project/fragmentShader.glsl'

import { isOdd } from '@/helpers/mathHelpers'

import { default as glbConstants } from '@/constants/assets/glbConstants.json'

import styles from '@/styles/variables.module.scss'

function addModel(index: number, textureUrl: string, scene: THREE.Scene, isSmallScreen: boolean) {
  const loader = new GLTFLoader()

  const textureLoader = new THREE.TextureLoader()
  const texture = textureLoader.load(textureUrl)

  const material = new THREE.ShaderMaterial({
    side: THREE.DoubleSide,
    transparent: true,
    opacity: 1,
    depthTest: true,
    depthWrite: true,
    alphaTest: 0.5,
    uniforms: {
      time: { value: 0 },
      uIsOdd: { value: isOdd(index) ? 1.0 : -1.0 },
      uTexture: { value: texture },
      uZoom: { value: 1.0 },
      uScrollSpeed: { value: 0.0 },
      uScrollDirection: { value: 1 },
      uIsMobile: { value: isSmallScreen },
    },
    vertexShader: vertexShader,
    fragmentShader: fragmentShader,
  })
  material.needsUpdate = true

  loader.load(glbConstants.PROJECTS.ROUNDED_PLANE, function (gltf) {
    const model = gltf.scenes[0].children[0]
    if (model instanceof THREE.Mesh) {
      model.name = `last_project_mesh_${index}`
      model.raycast = THREE.Mesh.prototype.raycast
      model.material = material

      // Debug geometry
      console.log('Model geometry:', {
        vertices: model.geometry.attributes.position.count,
        faces: model.geometry.index?.count,
        boundingBox: model.geometry.boundingBox,
      })

      // Ensure geometry is ready for raycasting
      model.geometry.computeBoundingBox()
      model.geometry.computeBoundingSphere()

      model.updateMatrix()
      model.updateMatrixWorld(true)

      scene.add(model)
    }
  })
}

export default function LastProjectScene({
  index,
  textureUrl,
}: {
  index: number
  textureUrl: string
}) {
  const { scene, camera } = useThree()

  const speedRef = useScrollSpeed()

  const [isLoaded, setIsLoaded] = useState<boolean>(false)
  const [screenBreakpoint] = useState<number>(parseInt(styles.screenBreakpoint, 10))
  const [isSmallScreen, setIsSmallScreen] = useState<boolean>(window.innerWidth < screenBreakpoint)
  const [isHovered, setIsHovered] = useState<boolean>(false)

  useEffect(() => {
    console.log('isHovered', isHovered)
  }, [isHovered])

  const raycaster = useRef(new THREE.Raycaster())
  const pointer = useRef(new THREE.Vector2())

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < screenBreakpoint)
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [screenBreakpoint])

  useEffect(() => {
    const onPointerMove = (event: MouseEvent) => {
      const canvas = document.getElementById(`last-project-canvas-${index}`)
      if (canvas) {
        const rect = canvas.getBoundingClientRect()
        pointer.current.x = ((event.clientX - rect.left) / rect.width) * 2 - 1
        pointer.current.y = -((event.clientY - rect.top) / rect.height) * 2 + 1
      }
    }

    window.addEventListener('pointermove', onPointerMove)
    return () => window.removeEventListener('pointermove', onPointerMove)
  }, [index])

  useEffect(() => {
    if (!isLoaded) {
      addModel(index, textureUrl, scene, isSmallScreen)
      setIsLoaded(true)
    }
  }, [scene, isLoaded])

  /* useEffect(() => {
    const triggerElement = document.querySelector(`#last-projects-card-${index}`)

    const checkModel = () => {
      const model = scene.getObjectByName(`last_project_mesh_${index}`)
      if (model && model instanceof THREE.Mesh) {
        const timeline = gsap.timeline({
          scrollTrigger: {
            trigger: triggerElement,
            start: 'top 95%',
            end: 'bottom 60%',
            scrub: 1,
            markers: true,
          },
        })
        timeline
          .to(
            model.position,
            {
              x:
                window.innerWidth > Number(styles.screenBreakpoint)
                  ? isOdd(index)
                    ? -0.1
                    : 0.1
                  : 0,
            },
            0,
          )
          .to(
            model.rotation,
            {
              x: THREE.MathUtils.degToRad(0),
              y: THREE.MathUtils.degToRad(0),
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
          .to(model.material.uniforms.uZoom, {
            value: 1.1,
          }),
          -0.1
      } else {
        setTimeout(checkModel, 100)
      }
    }

    checkModel()
  }, [scene, index]) */

  useFrame(({ clock }) => {
    const time = clock.getElapsedTime()

    scene.traverse((object) => {
      if (object instanceof THREE.Mesh && object.material instanceof THREE.ShaderMaterial) {
        object.material.uniforms.time.value = time
        object.material.uniforms.uScrollSpeed.value = speedRef.current
        object.material.uniforms.uIsMobile.value = isSmallScreen
        // object.updateMatrix()
        // object.updateMatrixWorld(true)
      }
    })

    // Debug raycasting
    raycaster.current.setFromCamera(pointer.current, camera)
    const model = scene.getObjectByName(`last_project_mesh_${index}`)
    if (model) {
      // Use recursive flag to check all child objects
      const intersects = raycaster.current.intersectObject(model, true)

      // Log detailed information about the intersection
      if (intersects.length > 0) {
        console.log('Intersection details:', {
          modelName: intersects[0].object.name,
          point: intersects[0].point,
          distance: intersects[0].distance,
          uv: intersects[0].uv,
          face: intersects[0].face,
        })
        setIsHovered(true)
      } else {
        setIsHovered(false)
      }
    }
  })

  return null
}
