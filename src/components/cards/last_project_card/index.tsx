'use client'

import React, { useEffect, useRef } from 'react'
import { useTranslations } from 'next-intl'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'

import { LastProjectsCardInterface } from '@/interfaces/projectsDataInterface'
import ExternalLink from '@/components/links/external_link'

import { getUvMousePositionOnDiv } from '@/helpers/cssHelpers'

import './index.scss'

export function LastProjectCard({ content }: LastProjectsCardInterface) {
  gsap.registerPlugin(useGSAP)

  const t = useTranslations('HOME')

  const cardRef = useRef<HTMLDivElement>(null)

  function handleMouseMove(event: MouseEvent): void {
    const { x, y } = getUvMousePositionOnDiv(event)
    gsap.to(cardRef.current, {
      duration: 0.2,
      ease: 'power3.out',
      scale: 1.2,
      rotationX: y * 4,
      rotationY: x * 2,
      transformPerspective: 1000
    })
  }

  function handleMouseLeave(event: MouseEvent): void {
    gsap.to(cardRef.current, {
      duration: 0.2,
      ease: 'power3.out',
      scale: 1,
      rotationX: 0,
      rotationY: 0,
      transformPerspective: 1000
    })
  }

  useEffect(() => {
    cardRef.current!.addEventListener('mousemove', handleMouseMove)
    cardRef.current!.addEventListener('mouseleave', handleMouseLeave)
    return () => {
      if (cardRef.current) {
        cardRef.current.removeEventListener('mousemove', handleMouseMove)
        cardRef.current.removeEventListener('mouseleave', handleMouseLeave)
      }
    }
  }, [])

  return (
    <div
      ref={cardRef}
      className='last_project_card card_background_gradient'
    >
      <div className='project_card_details'>
        <ExternalLink url={content.url} text={content.name} />
        <div className='project_tools'>
          {content.tools.map((Logo, index) => (
            <Logo
              key={`last_projects_tools_${content.key}_${index}`}
              className='tool_icon'
            />
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
