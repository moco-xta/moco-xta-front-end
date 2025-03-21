import React from 'react'

import SkillsSideNavigationMenuLeft from './skills_side_navigation_menu_left'
import SkillsDetails from './skills_details'
import SkillsSideNavigationMenuRight from './skills_side_navigation_menu_right'

import { SkillsPageProvider } from '@/contexts/SkillsPageContext'

import { skillsData } from '@/data/skills/skillsData'

import './index.scss'

export default function SkillsSLice() {
  return (
    <SkillsPageProvider skillsData={skillsData}>
      <section
        id='skills_slice'
        className='skills_section'
      >
        <div id='sdm_left' />
        <div id='content' />
        <div id='sdm_right' />
        {/* <SkillsSideNavigationMenuLeft skillsData={skillsData} /> */}
        {/* <SkillsDetails /> */}
        {/* <SkillsSideNavigationMenuRight skillsData={skillsData} /> */}
      </section>
    </SkillsPageProvider>
  )
}
