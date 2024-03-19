'use client'

import React from 'react'

import LastProjectsText from './last_projects_text'
import LastProjectsCards from './last_projects_cards'

import './index.scss'
import SeeAllProjectsLink from './see_all_projects_link'

export default function LastProjectsSlice() {
  return (
    <section id='last_projects_slice'>
      <div id='last_projects_content'>
        <LastProjectsText />
        <LastProjectsCards />
        <SeeAllProjectsLink />
      </div>
    </section>
  )
}
