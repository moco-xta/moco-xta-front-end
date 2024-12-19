import React, { useRef } from 'react'
import { useGSAP } from '@gsap/react'

import type { TGroup } from '@/types/animation/componentTypes'

import { useGSAPTimelineContext } from '@/hooks/animations/useGSAPTimelineContext'

import HiText from './HiText'
import ImText from './ImText'
import FedericoText from './FedericoText'

import { greetingTextsGroupData } from '@/data/hero/three/canvas/hero/greeting_group/greeting_texts_group/greetingTextsGroupData'

import { animateGroup } from '@/animations/shared/helpers/animation/animation'

export default function GreetingTextsGroup() {
  const { timeline } = useGSAPTimelineContext()

  const greetingTextGroupRef = useRef<TGroup>(null!)

  useGSAP(
    () => {
      animateGroup({
        timeline: timeline,
        ref: greetingTextGroupRef.current,
        animations: greetingTextsGroupData.animations,
        duration: greetingTextsGroupData.duration,
        label: greetingTextsGroupData.label!,
      })
    },
    { scope: greetingTextGroupRef },
  )

  return (
    <group
      ref={greetingTextGroupRef}
      position={greetingTextsGroupData.defaultValues!.position}
      rotation={greetingTextsGroupData.defaultValues!.rotation}
    >
      <HiText />
      <ImText />
      <FedericoText />
    </group>
  )
}
