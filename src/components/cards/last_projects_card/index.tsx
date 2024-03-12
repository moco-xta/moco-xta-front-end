import React from 'react'

import { LastProjectsCardInterface } from '@/interfaces/data/lastProjectsDataInterface'

import './index.scss'

export default function LastProjectsCard({ content }: LastProjectsCardInterface) {
  return (
    <div className='last_projects_card'>
      <h3>{content.name}</h3>
      <img
        className='last_projects_img'
        src={content.picture.deskstop}
        alt=''
      />
      <p>{content.descriptionKey}</p>
      <div>
        <p>{content.dates.from}</p>
        <p>{content.dates.to}</p>
      </div>
      <div>
        {content.tools.map((Logo, index) => (
          <Logo key={`last_projects_tools_${content.key}_${index}`} />
        ))}
      </div>
    </div>
  )
}
