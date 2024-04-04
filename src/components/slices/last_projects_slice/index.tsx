'use client'

import React from 'react'

import LastProjectsText from './last_projects_text'
import LastProjectsCards from './last_projects_cards'
import SeeAllProjectsLink from './see_all_projects_link'
import LastProjectsBackground from './last_projects_background'

import './index.scss'

export default function LastProjectsSlice() {
  return (
    <section id='last_projects_slice'>
      {/* <div id='last_projects_background_container'>
        <LastProjectsBackground />
      </div> */}
      <div id='last_projects_content'>
        <LastProjectsText />
        <LastProjectsCards />
        <SeeAllProjectsLink />
      </div>
    </section>
  )
}
