import React, { useRef } from 'react'
import Image from 'next/image'

import { LastProjectsCardInterface } from '@/interfaces/componentsInterfaces'

import useCardHoverEffect from '@/hooks/useCardHoverEffect'

import ExternalLink from '@/components/links/external_link'

import { default as effectsConstants } from '@/constants/effectsConstants.json'

import './index.scss'

export function LastProjectCard({ content }: LastProjectsCardInterface) {
  const cardRef = useRef<HTMLDivElement>(null)

  useCardHoverEffect(cardRef, effectsConstants.CARD_HOVER_EFFECT.LAST_PROJECTS_CARDS)

  return (
    <div
      ref={cardRef}
      className='last_project_card card_background_gradient'
    >
      <div className='project_card_details'>
        <div className='external_link_and_logo_container'>
          <Image
            src={content.image}
            width={120}
            height={120}
            alt={`Logo ${content.name}`}
          />
          {/* <ExternalLink
            url={content.url}
            text={content.name}
          /> */}
        </div>
        <div className='project_tools'>
          {content.tools.map((Logo, index) => (
            <Logo key={`last_projects_tools_${content.key}_${index}`} />
          ))}
        </div>
        <div className='project_roles'>
          {content.roles.map((role, index) => (
            <p
              key={`role_${content.key}_${index}`}
              className='role'
            >
              {role}
            </p>
          ))}
        </div>
      </div>
    </div>
  )
}
