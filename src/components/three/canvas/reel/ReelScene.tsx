import { useEffect, useRef, useState } from 'react'
import * as THREE from 'three'
import { useThree } from '@react-three/fiber'
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js'

import { default as glbConstants } from '@/constants/assets/glbConstants.json'
import { default as videosConstants } from '@/constants/assets/videosConstants.json'

function addModel(scene: THREE.Scene) {
  const loader = new GLTFLoader()

  const video = document.createElement('video')
  video.src = videosConstants.TEST_2
  video.loop = true
  video.muted = true
  video.playsInline = true
  video.crossOrigin = 'anonymous'

  const videoTexture = new THREE.VideoTexture(video)
  videoTexture.minFilter = THREE.LinearFilter
  videoTexture.magFilter = THREE.LinearFilter
  videoTexture.format = THREE.RGBAFormat

  const material = new THREE.MeshBasicMaterial({
    map: videoTexture,
    side: THREE.DoubleSide,
    transparent: true,
    opacity: 1,
    depthTest: true,
    depthWrite: true,
    alphaTest: 0.5,
  })

  video.play()

  loader.load(glbConstants.INTRODUCTION.REEL_PLANE, function (gltf) {
    const model = gltf.scenes[0].children[0]
    if (model instanceof THREE.Mesh) {
      model.name = `reel_mesh`
      model.material = material

      scene.add(model)
    }
  })
}

export default function ReelScene() {
  const { scene } = useThree()

  const [isLoaded, setIsLoaded] = useState<boolean>(false)

  useEffect(() => {
    if (!isLoaded) {
      addModel(scene)
      setIsLoaded(true)
    }
  }, [scene, isLoaded])

  return null
}
