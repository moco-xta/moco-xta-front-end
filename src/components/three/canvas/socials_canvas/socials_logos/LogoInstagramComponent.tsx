import React, { useEffect, useRef } from 'react'
import * as THREE from 'three'
import { Box } from '@react-three/drei'

import useHoverModelAnimation from '@/hooks/three/useHoverModelAnimation'

import { socialsLogosData } from '@/data/contact/three/socialsLogosData'
import LogoInstagram from '@/components/three/models/logos/LogoInstagram'

export default function LogoInstagramComponent() {
  const logoInstagramRef = useRef<THREE.Group>(null!)
  const boxRef = useRef<THREE.Mesh>(null!)

  const { handleOnPointerMove, handleOnPointerLeave } = useHoverModelAnimation({
    ref: logoInstagramRef,
    animationData: socialsLogosData.hoverModelAnimationData,
    offset: new THREE.Vector3(-5.5, 0, 0),
  })

  useEffect(() => {
    if (logoInstagramRef.current && boxRef.current) {
      const boundingBox = new THREE.Box3().setFromObject(logoInstagramRef.current)
      const size = boundingBox.getSize(new THREE.Vector3())
      boxRef.current.scale.set(size.x, size.y, size.z)
      boxRef.current.updateMatrix()
      boxRef.current.updateMatrixWorld()
    }
  }, [])

  return (
    <group position={[-5.5, 0, 0]}>
      <group>
        <Box
          ref={boxRef}
          args={[2, 2, 0]}
          onPointerMove={handleOnPointerMove}
          onPointerOut={handleOnPointerLeave}
        >
          <meshStandardMaterial
            transparent
            opacity={0}
            side={THREE.DoubleSide}
          />
        </Box>
      </group>
      <LogoInstagram ref={logoInstagramRef} />
    </group>
  )
}
