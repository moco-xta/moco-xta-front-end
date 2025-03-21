import React, { useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { useTranslations } from 'next-intl'

import { useSkillsPageContext } from '@/contexts/SkillsPageContext'

import SkillsLogosCanvas from '@/components/three/canvas/skills_logos/SkillsLogosCanvas'

import { splitTextToWords } from '@/helpers/textHelpers'

import './index.scss'

export default function SkillsDetails() {
  const t = useTranslations()

  const { currentSection, currentSkill } = useSkillsPageContext()

  const containerRef = useRef<HTMLParagraphElement>(null!)

  useGSAP(
    () => {
      const animation = gsap.fromTo(
        '.skill_description_word',
        {
          xPercent: () => gsap.utils.random(-50, 50),
          yPercent: () => gsap.utils.random(-10, 10),
          z: () => gsap.utils.random(400, 700),
          rotationX: () => gsap.utils.random(-90, 90),
          opacity: 0,
        },
        {
          xPercent: 0,
          yPercent: 0,
          z: 0,
          rotationX: 0,
          opacity: 1,
          duration: 0.2,
          ease: 'power1.out',
          stagger: {
            each: 0.01,
            from: 'random',
          },
        },
      )
      return () => animation.kill()
    },
    { scope: containerRef },
  )

  return (
    <div>
      <SkillsLogosCanvas />
      <p
        ref={containerRef}
        className='skill_description'
      >
        {splitTextToWords(
          t(
            `SKILLS.SECTIONS.${currentSection.translationKey}.SKILLS.${currentSkill.translationKey}.SKILL_DESCRIPTION`,
          ),
        ).map((word, index) => (
          <span
            key={`skill_description_word_${index}`}
            className='skill_description_word'
          >
            {word}&nbsp;
          </span>
        ))}
      </p>
    </div>
  )
}
