import { forwardRef } from 'react'
import * as THREE from 'three'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

import { ForwardRefGltfGroupInterface } from '@/interfaces/r3fInterfaces'

import { default as GltfConstants } from '@/constants/gltfConstants.json'

type GLTFResult = GLTF & {
  nodes: {
    DoughnutChartSeventyFivePercent: THREE.Mesh
  }
  materials: {}
}

const DoughnutChartSeventyFivePercent = forwardRef<ForwardRefGltfGroupInterface, JSX.IntrinsicElements['group']>(
  function DoughnutChartSeventyFivePercent({ position, rotation, scale }, ref) {
    const { nodes } = useGLTF(GltfConstants.DOUGHNUT_CHART_SEVENTY_FIVE_PERCENT) as GLTFResult
    return (
      <group
        ref={ref}
        dispose={null}
        position={position}
        rotation={rotation}
        scale={scale}
      >
        <mesh
          geometry={nodes.DoughnutChartSeventyFivePercent.geometry}
          receiveShadow
          castShadow
        >
          <meshPhysicalMaterial
            color={new THREE.Color('rgb(256, 120, 80)')}
            specularColor={new THREE.Color('rgb(256, 120, 80)')}
            roughness={1}
            metalness={0}
            iridescence={1}
            clearcoat={0}
            reflectivity={0}
            emissive={new THREE.Color('rgb(221, 0, 45)')}
            emissiveIntensity={3.7}
          />
        </mesh>
      </group>
    )
  },
)

useGLTF.preload(GltfConstants.DOUGHNUT_CHART_SEVENTY_FIVE_PERCENT)

export default DoughnutChartSeventyFivePercent
