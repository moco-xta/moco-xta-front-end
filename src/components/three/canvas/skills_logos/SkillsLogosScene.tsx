import React, { useEffect, useRef } from 'react'
import * as THREE from 'three'
import gsap from 'gsap'

import { usePageContext } from '@/contexts/PageContext'

import SkillLogo from './SkillLogo'

import { skillsLogosData } from '@/data/skills/three/skills_logo/skillsLogosData'

export default function SkillsLogosScene() {
  const { currentParagraph } = usePageContext()

  const groupRef = useRef<THREE.Group>(null!)

  useEffect(() => {
    const logos: HTMLDivElement[] = gsap.utils.toArray(groupRef.current.children)
    console.log('logos', logos)
    console.log('currentParagraph', currentParagraph)
  }, [currentParagraph])

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
              currentLogoName={currentParagraph.logo.name}
            />
          )
        })}
    </group>
  )
}
