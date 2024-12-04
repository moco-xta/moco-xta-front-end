import React from 'react'
import * as THREE from 'three'
import { MeshProps } from '@react-three/fiber'
import { Box } from '@react-three/drei'

export default function Group(props: any) {
  const boxGroupMaterial = new THREE.MeshStandardMaterial({
    color: 'red',
    transparent: true,
    wireframe: true,
  })

  return (
    <Box
      {...props}
      material={boxGroupMaterial}
    >
      {props.children}
    </Box>
  )
}
