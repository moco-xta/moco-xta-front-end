import * as THREE from 'three'
import React, { forwardRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

import { default as GltfConstants } from '@/constants/gltfConstants.json'
import { ForwardRefGltfGroupInterface } from '@/interfaces/r3fInterfaces'

type GLTFResult = GLTF & {
  nodes: {
    DoughnutChartNinetyPercent: THREE.Mesh
  }
  materials: {}
}

const DoughnutChartNinetyPercent = forwardRef<
  ForwardRefGltfGroupInterface,
  JSX.IntrinsicElements['group']
>(function DoughnutChartNinetyPercent({ position, rotation, scale }, ref) {
  const { nodes } = useGLTF(GltfConstants.DOUGHNUT_CHART_NINETY_PERCENT) as GLTFResult
  return (
    <group
      ref={ref}
      dispose={null}
      position={position}
      rotation={rotation}
      scale={scale}
    >
      <mesh
        geometry={nodes.DoughnutChartNinetyPercent.geometry}
        receiveShadow
        castShadow
      >
        <meshPhysicalMaterial
          color={'red'}
          specularColor={'red'}
          roughness={1}
          metalness={0}
          iridescence={1}
          clearcoat={0}
          reflectivity={0}
          emissive={'red'}
          emissiveIntensity={3.7}
        />
      </mesh>
    </group>
  )
})

useGLTF.preload(GltfConstants.DOUGHNUT_CHART_NINETY_PERCENT)

export default DoughnutChartNinetyPercent
