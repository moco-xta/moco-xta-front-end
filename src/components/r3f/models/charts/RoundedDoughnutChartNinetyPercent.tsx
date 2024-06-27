import * as THREE from 'three'
import React, { forwardRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

import { default as GltfConstants } from '@/constants/gltfConstants.json'
import { ForwardRefGltfGroupInterface } from '@/interfaces/r3fInterfaces'

import vertexShader from '@/components/r3f/shaders/refraction_and_dispersion_shaders/vertexShader.glsl'
import fragmentShader from '@/components/r3f/shaders/refraction_and_dispersion_shaders/fragmentShader.glsl'

type GLTFResult = GLTF & {
  nodes: {
    RoundedDoughnutChartNinetyPercent: THREE.Mesh
  }
  materials: {}
}

const RoundedDoughnutChartNinetyPercent = forwardRef<ForwardRefGltfGroupInterface, JSX.IntrinsicElements['group']>(
  function RoundedDoughnutChartNinetyPercent({ position, rotation, scale }, ref) {
    const { nodes } = useGLTF(GltfConstants.ROUNDED_DOUGHNUT_CHART_NINETY_PERCENT) as GLTFResult

    return (
      <group
        ref={ref}
        dispose={null}
        position={position}
        rotation={rotation}
        scale={scale}
      >
        <mesh
          geometry={nodes.RoundedDoughnutChartNinetyPercent.geometry}
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
  },
)

useGLTF.preload(GltfConstants.ROUNDED_DOUGHNUT_CHART_NINETY_PERCENT)

export default RoundedDoughnutChartNinetyPercent
