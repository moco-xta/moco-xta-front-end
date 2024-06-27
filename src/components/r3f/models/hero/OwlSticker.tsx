import * as THREE from 'three'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

import { default as GltfConstants } from '@/constants/gltfConstants.json'
import { useLoader } from '@react-three/fiber'

import { flakesTexture } from '../../textures/flakesTexture'

type GLTFResult = GLTF & {
  nodes: {
    OwlSticker_1: THREE.Mesh
    OwlSticker_2: THREE.Mesh
    OwlSticker_3: THREE.Mesh
  }
  materials: {
    glitter_sticher_002: THREE.MeshStandardMaterial
    ['Material.001']: THREE.MeshStandardMaterial
    white: THREE.MeshStandardMaterial
  }
}

export function OwlSticker(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF(GltfConstants.OWL_STICKER) as GLTFResult

  const normalMap = useLoader(THREE.TextureLoader, '/img/jpg/textures/glitter_normal.jpg')
  /* normalMap.magFilter = THREE.NearestFilter
  normalMap.minFilter = THREE.LinearMipMapLinearFilter */
  normalMap.wrapS = THREE.RepeatWrapping
  normalMap.wrapT = THREE.RepeatWrapping
  normalMap.repeat.set(1, 1)

  return (
    <group
      {...props}
      dispose={null}
      receiveShadow
      castShadow
    >
      <mesh
        geometry={nodes.OwlSticker_1.geometry}
        receiveShadow
        castShadow
      >
        <meshPhysicalMaterial
          attach='material'
          map={flakesTexture()}
          color={'violet'}
          normalMap={normalMap}
          reflectivity={0.01}
          roughness={0.3}
          metalness={0.7}
          specularColor={0xff0000}
        />
      </mesh>
      <mesh
        geometry={nodes.OwlSticker_2.geometry}
        receiveShadow
        castShadow
      >
        <meshStandardMaterial
          attach='material'
          color={'black'}
          roughness={1}
        />
      </mesh>
      <mesh geometry={nodes.OwlSticker_3.geometry}>
        <meshStandardMaterial
          attach='material'
          color={'purple'}
          roughness={1}
        />
      </mesh>
    </group>
  )
}

useGLTF.preload(GltfConstants.OWL_STICKER)
