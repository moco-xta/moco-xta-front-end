import React, { useEffect, useRef } from 'react'
import * as THREE from 'three'
import gsap from 'gsap'

import { useSkillsPageContext } from '@/contexts/SkillsPageContext'

import SkillLogo from './SkillLogo'

import { skillsLogosData } from '@/data/skills/three/skills_logo/skillsLogosData'

export default function SkillsLogosScene() {
  const { currentSkill } = useSkillsPageContext()

  const groupRef = useRef<THREE.Group>(null!)

  useEffect(() => {
    const logos: HTMLDivElement[] = gsap.utils.toArray(groupRef.current.children)
    console.log('logos', logos)
    console.log('currentParagraph', currentSkill)
  }, [currentSkill])

  return (
    <group ref={groupRef}>
      {Array(skillsLogosData.lazy.modelsMultiplier)
        .fill(skillsLogosData.lazy.models)
        .flat()
        .map((componentName, index) => {
          return (
            <SkillLogo
              key={index}
              pathToModel={skillsLogosData.lazy.pathToModel}
              componentName={componentName}
              currentLogoName={currentSkill.logo.name}
            />
          )
        })}
    </group>
  )
}
