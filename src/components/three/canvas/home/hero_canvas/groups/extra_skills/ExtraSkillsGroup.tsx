import React, { useRef } from 'react'

import ExtraSkillsTextsGroup from './extra_skills_texts/ExtraSkillsTextsGroup'

export default function ExtraSkillsGroup() {
  const extraSkillsGroupRef = useRef<THREE.Group>(null!)

  return (
    <group ref={extraSkillsGroupRef}>
      <ExtraSkillsTextsGroup />
    </group>
  )
}
