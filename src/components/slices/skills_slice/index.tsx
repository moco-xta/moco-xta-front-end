'use client'

import React, {
  ReactNode,
  forwardRef,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react'

import './index.scss'

const sections = [
  { backgroundColor: '#f72585' },
  { backgroundColor: '#7209b7' },
  { backgroundColor: '#480ca8' },
  { backgroundColor: '#3f37c9' },
  { backgroundColor: '#4895ef' },
]
 
interface SectionInterface {
  index: number
  backgroundColor: string
}

function Section({ index, backgroundColor }: SectionInterface) {
  return (
    <section
      style={{ backgroundColor: backgroundColor }}
    >
      Section {index}
    </section>
  )
}

export default function SkillsSlice() {

  return (
    <div id='skills_slice'>
      {sections.map((section, index) => {
        return (
          <Section
            key={`skills_section_${index}`}
            index={index}
            backgroundColor={section.backgroundColor}
          />
        )
      })}
    </div>
  )
}
