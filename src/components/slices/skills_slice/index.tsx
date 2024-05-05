'use client'

import React from 'react'

import { skillsData } from '@/data/skillsData'

import { SkillsSection } from './section'

import './index.scss'

export default function SkillsSlice() {
  return (
    <div id='skills_slice'>
      {Object.entries(skillsData).map(
        ([category_key, category_values], index) => {
          return (
            <SkillsSection
              key={`skills_section_${category_key}`}
              index={index}
              category={category_key}
              content={category_values}
            />
          )
        },
      )}
    </div>
  )
}
