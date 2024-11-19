import React from 'react'

import SkillsCanvas from '@/components/three/canvas/skills_canvas/SkillsCanvas'

import { skillsData } from '@/data/skills/skillsData'

import './index.scss'

export default function SkillsSlice() {
  return (
    <div
      id='skills_scroller'
      style={{ height: `${Math.round(skillsData.length * 0.2)}00vh` }}
    >
      <section
        id='skills_slice'
        className='fullscreen'
      >
        <SkillsCanvas />
      </section>
    </div>
  )
}
