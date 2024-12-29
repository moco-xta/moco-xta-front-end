import React, { useLayoutEffect, useRef } from 'react'
import { useGSAP } from '@gsap/react'

import { useGSAPTimelineContext } from '@/hooks/animations/useGSAPTimelineContext'

import MacBookProComponent from './MacBookProComponent'
import LogosForegroundGroup from './LogosForegroundGroup'
import LogosBackgroundGroup from './LogosBackgroundGroup'

import { default as macBookProGroupConstants } from '@/constants/animations/home/hero/canvas/groups/developer/macBookProGroupConstants.json'

import { macBookProGroupAnimations } from 'animations'

export default function MacBookProGroup() {
  const { timeline } = useGSAPTimelineContext()

  const macBookProComponentAndLogosForegroundGroupRef = useRef<THREE.Group>(null!)

  const macBookProGroupRef = useRef<THREE.Group>(null!)

  useLayoutEffect(() => {
    if (macBookProGroupRef.current)
      macBookProGroupRef.current.visible = macBookProGroupConstants.DEFAULT.VISIBLE
  }, [macBookProGroupRef])

  useGSAP(
    () => {
      const animations = macBookProGroupAnimations(macBookProGroupRef.current)
      // VISIBILITY
      timeline.to(
        macBookProGroupRef.current,
        {
          keyframes: animations.visibility.keyframes,
          duration: animations.visibility.duration,
        },
        animations.delay,
      )
    },
    { scope: macBookProGroupRef },
  )

  return (
    <group ref={macBookProGroupRef}>
      <group ref={macBookProComponentAndLogosForegroundGroupRef}>
        <MacBookProComponent />
        <LogosForegroundGroup />
      </group>
      <LogosBackgroundGroup />
    </group>
  )
}
