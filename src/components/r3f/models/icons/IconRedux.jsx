import React, { forwardRef } from 'react'
import { useGLTF } from '@react-three/drei'

import { default as GltfConstants } from '@/constants/gltfConstants.json'

const IconRedux = forwardRef(function IconRedux(props, ref) {
  const { nodes, materials } = useGLTF(GltfConstants.ICON_REDUX)
  return (
    <group
    ref={ref}
      dispose={null}
      position={[15.5, 0, 0]}
    >
      <mesh
        geometry={nodes.IconRedux.geometry}
        material={materials['icon_redux_#764abc']}
        receiveShadow
        castShadow
      />
    </group>
  )
})

useGLTF.preload(GltfConstants.ICON_REDUX)

export default IconRedux