import React from 'react'

import { skillsLogosData } from '@/data/skills/three/skills_logo/skillsLogosData'
import SkillLogo from './SkillLogo'

export default function SkillsLogosScene() {
  return (
    <>
      {Array(skillsLogosData.lazy.modelsMultiplier)
        .fill(skillsLogosData.lazy.models)
        .flat()
        .map((componentName, index) => {
          return (
            <SkillLogo
              key={index}
              pathToModel={skillsLogosData.lazy.pathToModel}
              componentName={componentName}
            />
          )
        })}
    </>
  )
}
