import React, { useRef } from 'react'

import type { TGroup } from '@/types/animation/three/componentTypes'

import GreetingTextsGroup from './texts/GreetingTextsGroup'

export default function GreetingGroup() {
  const greetingTextsGroup = useRef<TGroup>(null!)

  return (
    <group ref={greetingTextsGroup}>
      <GreetingTextsGroup />
    </group>
  )
}
