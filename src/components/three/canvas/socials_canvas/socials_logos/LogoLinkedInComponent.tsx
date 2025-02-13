import React, { useEffect, useRef } from 'react'
import * as THREE from 'three'
import { Box } from '@react-three/drei'

import useHoverModelAnimation from '@/hooks/three/useHoverModelAnimation'

import LogoLinkedIn from '@/components/three/models/logos/LogoLinkedIn'

import { socialsLogosData } from '@/data/contact/three/socialsLogosData'

export default function LogoLinkedInComponent() {
  const logoLinkedInRef = useRef<THREE.Group>(null!)
  const boxRef = useRef<THREE.Mesh>(null!)

  const { handleOnPointerMove, handleOnPointerLeave } = useHoverModelAnimation({
    ref: logoLinkedInRef,
    animationData: socialsLogosData.hoverModelAnimationData,
    offset: new THREE.Vector3(2.75, 0, 0),
  })

  useEffect(() => {
    if (logoLinkedInRef.current && boxRef.current) {
      const boundingBox = new THREE.Box3().setFromObject(logoLinkedInRef.current)
      const size = boundingBox.getSize(new THREE.Vector3())
      boxRef.current.scale.set(size.x, size.y, size.z)
      boxRef.current.updateMatrix()
      boxRef.current.updateMatrixWorld()
    }
  }, [])

  return (
    <group position={[2.75, 0, 0]}>
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
      <LogoLinkedIn ref={logoLinkedInRef} />
    </group>
  )
}
