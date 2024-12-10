import React, { useRef } from 'react'
import WithExtraSkillsTextGroup from './with_extra_skills_text/WithExtraSkillsTextGroup'

interface WithExtraSkillsGroupInterface {
  timeline: GSAPTimeline
}

export default function WithExtraSkillsGroup({ timeline }: WithExtraSkillsGroupInterface) {
  const withExtraSkillsGroupRef = useRef<THREE.Group>(null!)

  return (
    <group ref={withExtraSkillsGroupRef}>
      <WithExtraSkillsTextGroup />
    </group>
  )
}
