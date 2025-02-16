import React, { useEffect, useRef } from 'react'
import * as THREE from 'three'
import { Box } from '@react-three/drei'

import useHoverModelAnimation from '@/hooks/three/useHoverModelAnimation'

import LogoX from '@/components/three/models/logos/LogoX'

import { socialsLogosData } from '@/data/contact/three/socialsLogosData'

export default function LogoXComponent() {
  const logoXRef = useRef<THREE.Group>(null!)
  const boxRef = useRef<THREE.Mesh>(null!)

  const { handleOnPointerMove, handleOnPointerLeave } = useHoverModelAnimation({
    ref: logoXRef,
    animationData: socialsLogosData.hoverModelAnimationData,
    offset: new THREE.Vector3(3, 1.25, 0),
  })

  useEffect(() => {
    if (logoXRef.current && boxRef.current) {
      const boundingBox = new THREE.Box3().setFromObject(logoXRef.current)
      const size = boundingBox.getSize(new THREE.Vector3())
      boxRef.current.scale.set(size.x, size.y, size.z)
      boxRef.current.updateMatrix()
      boxRef.current.updateMatrixWorld()
    }
  }, [])

  function handleOnClick() {
    window.open('https://x.com/moko_xta', '_blank')
  }

  return (
    <group position={[0, 1.25, 0]}>
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
      <LogoX
        ref={logoXRef}
        scale={
          new THREE.Vector3(
            socialsLogosData.hoverModelAnimationData.scale.initial,
            socialsLogosData.hoverModelAnimationData.scale.initial,
            socialsLogosData.hoverModelAnimationData.scale.initial,
          )
        }
        onClick={handleOnClick}
      />
    </group>
  )
}
