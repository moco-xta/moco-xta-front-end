import React, { useLayoutEffect, useRef } from 'react'
import { useGSAP } from '@gsap/react'

import { useGSAPTimelineContext } from '@/hooks/animations/useGSAPTimelineContext'

import DeveloperTextsGroup from './developer_texts/DeveloperTextsGroup'
import MacBookProGroup from './mac_book_pro/MacBookProGroup'

export default function DeveloperGroup() {
  const { timeline } = useGSAPTimelineContext()

  const developerGroupRef = useRef<THREE.Group>(null!)

  return (
    <group ref={developerGroupRef}>
      <DeveloperTextsGroup />
      <MacBookProGroup />
    </group>
  )
}
