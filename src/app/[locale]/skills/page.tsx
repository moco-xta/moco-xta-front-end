'use client'

import React from 'react'

// import Introduction from '@/components/layout/slices/skills/introduction'
import SkillsSLice from '@/components/layout/slices/skills/skills'

import './index.scss'

export default function Skills() {
  return (
    <>
      <div id='skills_page'>
        {/* <Introduction /> */}
        <SkillsSLice />
      </div>
    </>
  )
}
