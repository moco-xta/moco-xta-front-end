import React from 'react'

import LastProjectsText from './last_projects_text'
import LastProjectsCards from './last_projects_cards'

import './index.scss'

export default function LastProjectsSlice() {
  return (
    <div id='last_projects_slice'>
      <div id='last_projects_content'>
        <LastProjectsText />
        <LastProjectsCards />
      </div>
    </div>
  )
}
