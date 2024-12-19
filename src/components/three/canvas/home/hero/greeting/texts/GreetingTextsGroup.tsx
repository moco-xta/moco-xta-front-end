import React, { useRef } from 'react'

import type { TGroup } from '@/types/animation/three/componentTypes'

import HiText from './HiText'

export default function GreetingTextsGroup() {
  const greetingTextsGroup = useRef<TGroup>(null!)

  return (
    <group ref={greetingTextsGroup}>
      <HiText />
    </group>
  )
}
