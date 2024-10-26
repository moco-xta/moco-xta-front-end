import React, { useEffect } from 'react'
import { useScroll } from '@react-three/drei'
import { editable as e, useCurrentSheet } from '@theatre/r3f'

import { Building001Wall } from '@/components/three/models/home/buildings/Building001Wall'
import { useFrame } from '@react-three/fiber'
import { val } from '@theatre/core'

export default function HomeScene() {
  const scroll = useScroll()
  const sheet = useCurrentSheet()

  useFrame(() => {
    const sequenceLength = val(sheet!.sequence.pointer.length)
    sheet!.sequence.position = scroll.offset * sequenceLength
  })

  useEffect(() => {
    console.log('sheet', sheet)
  }, [sheet])

  return (
    <>
      <Building001Wall />
      <e.mesh theatreKey='Cube'>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color='orange' />
      </e.mesh>
    </>
  )
}
