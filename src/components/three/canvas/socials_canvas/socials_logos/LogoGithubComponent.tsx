import React, { useEffect, useRef } from 'react'
import * as THREE from 'three'
import { Box } from '@react-three/drei'

import useHoverModelAnimation from '@/hooks/three/useHoverModelAnimation'

import LogoGithub from '@/components/three/models/logos/LogoGithub'

import { socialsLogosData } from '@/data/contact/three/socialsLogosData'

export default function LogoGithubComponent() {
  const logoGithubRef = useRef<THREE.Group>(null!)
  const boxRef = useRef<THREE.Mesh>(null!)

  const { handleOnPointerMove, handleOnPointerLeave } = useHoverModelAnimation({
    ref: logoGithubRef,
    animationData: socialsLogosData.hoverModelAnimationData,
  })

  useEffect(() => {
    if (logoGithubRef.current && boxRef.current) {
      const boundingBox = new THREE.Box3().setFromObject(logoGithubRef.current)
      const size = boundingBox.getSize(new THREE.Vector3())
      boxRef.current.scale.set(size.x, size.y, size.z)
      boxRef.current.updateMatrix()
      boxRef.current.updateMatrixWorld()
    }
  }, [])

  return (
    <>
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
      <LogoGithub ref={logoGithubRef} />
    </>
  )
}
