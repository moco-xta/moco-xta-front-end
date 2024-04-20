import React, { forwardRef, useEffect, useState } from 'react'
import { FaPlus } from 'react-icons/fa'
import { useTranslations } from 'next-intl'

import { ProjectsCardInterface } from '@/interfaces/dataInterfaces'

import './index.scss'
import ProjectCardCanvas from '@/components/r3f/canvas/project_card_canvas'

export const ProjectCard = forwardRef<HTMLDivElement, ProjectsCardInterface>(
  function ProjectCard({ content, index, currentProject }, ref) {
    const t = useTranslations('PROJECTS')

    const [isActive, setIsActive] = useState<boolean>(false)
    const [displayPlus, setDisplayPlus] = useState<boolean>(true)
    const [displayDescription, setDisplayDescription] = useState<boolean>(false)

    useEffect(() => {
      currentProject === index ? setIsActive(true) : setIsActive(false)
    }, [currentProject, index])

    function handleMouseOver() {
      if (isActive) {
        setDisplayPlus(false)
        setDisplayDescription(true)
      }
    }

    function handleMouseLeave() {
      setDisplayDescription(false)
      setDisplayPlus(true)
    }

    return (
      <div
        ref={ref}
        className='project_card'
        style={{ opacity: isActive ? '1' : '0.5' }}
      >
        <ProjectCardCanvas
          key={`projects_card_${index}`}
          content={content}
        />
      </div>
    )
  },
)
