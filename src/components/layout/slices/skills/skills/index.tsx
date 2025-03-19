import React from 'react'

import SideNavigationMenuLeft from './side_navigation_menu_left'
import SkillsDetails from './skills_details'
import SideNavigationMenuRight from './side_navigation_menu_right'

import { PageProvider } from '@/contexts/PageContext'

import { skillsData } from '@/data/skills/skillsData'

import './index.scss'

export default function SkillsSLice() {
  return (
    <PageProvider pageData={skillsData}>
      <section
        id='skills_slice'
        className='skills_section'
      >
        <SideNavigationMenuLeft pageData={skillsData} />
        <SkillsDetails />
        <SideNavigationMenuRight pageData={skillsData} />
      </section>
    </PageProvider>
  )
}
