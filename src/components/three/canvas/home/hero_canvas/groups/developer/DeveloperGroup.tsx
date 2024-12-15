import React, { useLayoutEffect, useRef } from 'react'
import { useGSAP } from '@gsap/react'

import { useGSAPTimelineContext } from '@/hooks/animations/useGSAPTimelineContext'

import DeveloperTextsGroup from './developer_texts/DeveloperTextsGroup'
import MacBookProGroup from './mac_book_pro/MacBookProGroup'

import { developerGroupAnimations } from 'animations'

export default function DeveloperGroup() {
  const { timeline } = useGSAPTimelineContext()

  const developerGroupRef = useRef<THREE.Group>(null!)

  useLayoutEffect(() => {
    if (developerGroupRef.current) developerGroupRef.current.visible = false
  }, [developerGroupRef])

  useGSAP(
    () => {
      const animation = developerGroupAnimations(developerGroupRef.current)
      // VISIBILITY
      timeline.to(
        developerGroupRef.current,
        {
          keyframes: animation.visibility.keyframes,
          duration: animation.visibility.duration,
        },
        animation.delay,
      )
    },
    { scope: developerGroupRef },
  )

  return (
    <group ref={developerGroupRef}>
      <DeveloperTextsGroup />
      <MacBookProGroup />
    </group>
  )
}
