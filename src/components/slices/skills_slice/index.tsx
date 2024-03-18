import React from 'react'
import { useTranslations } from 'next-intl'

import GraphicsSkills from './graphics_skills'
import ThreeDSkills from './three_d_skills'
import FrontEndSkills from './front_end_skills'
import MobileSkills from './mobile_skills'
import BackEndSkills from './back_end_skills'
import DatabaseSkills from './database_skills'
import ToolsSkills from './tools_skills'

import './index.scss'

export default function SkillsSlice() {
  const t = useTranslations('SKILLS')

  return (
    <section id='skills_slice'>
      <div id='skills_content'>
        <h2>{t('SKILLS')}</h2>
        <GraphicsSkills />
        <ThreeDSkills />
        <FrontEndSkills />
        <MobileSkills />
        <BackEndSkills />
        <DatabaseSkills />
        <ToolsSkills />
      </div>
    </section>
  )
}
