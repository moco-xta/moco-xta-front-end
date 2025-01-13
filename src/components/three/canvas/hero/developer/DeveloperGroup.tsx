import React, { useRef } from 'react'
import * as THREE from 'three'

import DeveloperTextsGroup from './developer_texts/DeveloperTextsGroup'
import MacBookProGroup from './mac_book_pro/MacBookProGroup'

export default function DeveloperGroup() {
  const developerGroupRef = useRef<THREE.Group>(null!)

  return (
    <group ref={developerGroupRef}>
      <DeveloperTextsGroup />
      <MacBookProGroup />
    </group>
  )
}
