'use client'

import React, { forwardRef, useState } from 'react'
import { FaPlus } from "react-icons/fa";
import { useTranslations } from 'next-intl'

import { ProjectsCardInterface } from '@/interfaces/data/projectsDataInterface'

import './index.scss'

export const LastProjectCard = forwardRef<
  HTMLDivElement,
  ProjectsCardInterface
>(({ content }, ref) => {
  const t = useTranslations('PROJECTS')

  const [displayPlus, setDisplayPlus] = useState<boolean>(true)
  const [displayDescription, setDisplayDescription] = useState<boolean>(false)

  function handleMouseOver() {
    setDisplayPlus(false)
    setDisplayDescription(true)
  }

  function handleMouseLeave() {
    setDisplayDescription(false)
    setDisplayPlus(true)
  }

  return (
    <div
      ref={ref}
      className='last_project_card card_background_gradient'
    >
      <div className='project_card_details'>
        <a href={content.url} target="_blank">
          <h3 className='project_title'>{content.name}</h3>
        </a>
        <div className='project_tools'>
          {content.tools.map((Logo, index) => (
            <Logo key={`last_projects_tools_${content.key}_${index}`} className='tool_icon' />
          ))}
        </div>
        {/* <div>
          <p>{content.dates.from}</p>
          <p>{content.dates.to}</p>
        </div> */}
        <div className='project_roles'>
          {content.roles.map((role, index) => (
            <p key={`role_${content.key}_${index}`} className='role'>{role}</p>
          ))}
        </div>
      </div>
      <div className='project_card_description'>
        <div className='project_description_container' onMouseOver={handleMouseOver} onMouseLeave={handleMouseLeave}>
          {displayPlus && <FaPlus className='plus_icon' />}
          {displayDescription && <p className='project_description scrollbar'>{t(content.descriptionsKey.lastProject)}</p>}
        </div>
      </div>
    </div>
  )
})
