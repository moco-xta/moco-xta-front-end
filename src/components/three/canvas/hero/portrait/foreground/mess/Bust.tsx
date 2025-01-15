import { useEffect, useRef } from 'react'
import * as THREE from 'three'
import { ObjectMap, useThree } from '@react-three/fiber'
import { GLTF, MeshSurfaceSampler } from 'three/examples/jsm/Addons.js'

import useGlbLoader from '@/hooks/three/useGlbLoader'

import { default as glbConstants } from '@/constants/assets/glbConstants.json'

const COUNT = 200

export default function Bust() {
  const { scene } = useThree()

  const cubeMeshRef = useRef<THREE.InstancedMesh>(
    new THREE.InstancedMesh(
      new THREE.BoxGeometry(0.01, 0.01, 0.01),
      new THREE.MeshStandardMaterial(),
      COUNT,
    ),
  )

  const surfaceGlb = useGlbLoader(glbConstants.SKETCHFAB.BUST) as GLTF & ObjectMap
  const _surface = surfaceGlb.scene.children[0] as THREE.Mesh
  const surfaceGeometry = _surface.geometry.clone() as THREE.BufferGeometry
  const surfaceMaterial = new THREE.MeshStandardMaterial({
    transparent: true,
    opacity: 0,
  })
  const surface = new THREE.InstancedMesh(surfaceGeometry, surfaceMaterial, COUNT)

  let sampler: MeshSurfaceSampler
  const ages = new Float32Array(COUNT)
  const scales = new Float32Array(COUNT)
  const dummy = new THREE.Object3D()

  const _position = new THREE.Vector3()
  const _normal = new THREE.Vector3()

  useEffect(() => {
    cubeMeshRef.current.instanceMatrix.setUsage(THREE.DynamicDrawUsage)
    resample()
    scene.getObjectByName('mess_group')?.add(cubeMeshRef.current)
    scene.getObjectByName('mess_group')?.add(surface)
  }, [])

  function resample() {
    sampler = new MeshSurfaceSampler(surface).setWeightAttribute(null).build()

    for (let i = 0; i < COUNT; i++) {
      ages[i] = Math.random()
      scales[i] = 1
      resampleParticle(i)
    }

    cubeMeshRef.current.instanceMatrix.needsUpdate = true
  }

  function resampleParticle(i: number) {
    sampler.sample(_position, _normal)
    _normal.add(_position)

    dummy.position.copy(_position)
    dummy.scale.set(scales[i], scales[i], scales[i])
    dummy.lookAt(_normal)
    dummy.updateMatrix()

    cubeMeshRef.current.setMatrixAt(i, dummy.matrix)
  }

  return null
}
