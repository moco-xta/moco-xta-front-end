import React from 'react'
import { useTranslations } from 'next-intl'

import { usePageContext } from '@/contexts/PageContext'

import SkillsLogosCanvas from '@/components/three/canvas/skills_logos/SkillsLogosCanvas'

import './index.scss'

export default function SkillsDetails() {
  const t = useTranslations()

  const { currentSection, currentParagraph } = usePageContext()

  return (
    <div>
      <SkillsLogosCanvas />
      <p>
        {t(
          `SKILLS.SECTIONS.${currentSection.translationKey}.PARAGRAPHS.${currentParagraph.translationKey}.PARAGRAPH_DESCRIPTION`,
        )}
      </p>
    </div>
  )
}
