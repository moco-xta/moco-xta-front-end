import React, { useEffect } from 'react'
import { useLenis } from 'lenis/react'
import { editable as e, useCurrentSheet } from '@theatre/r3f'
import { val } from '@theatre/core'

import { Building001Wall } from '@/components/three/models/home/buildings/Building001Wall'

export default function HomeScene() {
  const sheet = useCurrentSheet()

  useLenis(({ scroll }) => {
    const sequenceLength = val(sheet!.sequence.pointer.length)
    sheet!.sequence.position = (scroll / 1000) * sequenceLength
  })

  return (
    <>
      <Building001Wall />
      <e.mesh
        theatreKey='Cube'
        receiveShadow
        castShadow
      >
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color='orange' />
      </e.mesh>
    </>
  )
}
