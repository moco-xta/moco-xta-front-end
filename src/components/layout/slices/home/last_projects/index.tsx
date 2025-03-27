import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { FaArrowRight } from 'react-icons/fa'
import { useTranslations } from 'next-intl'

import LastProjectCanvas from '@/components/three/canvas/last_project/LastProjectCanvas'

import { isOdd } from '@/helpers/mathHelpers'

import { projectsData } from '@/data/projects/projectsData'

import './index.scss'

const getRandomChar = () => {
  const chars =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
  return chars[Math.floor(Math.random() * chars.length)]
}

const RolesAnimation = ({ text }: { text: string }) => {
  return <span>{text}</span>
}

export default function LastProjects() {
  const t = useTranslations('HOME.LAST_PROJECTS')

  const rolesRef = useRef<string[]>([])

  projectsData.forEach((projects) => {
    let sentence = ''
    projects.roles.forEach((role, roleIndex) => {
      sentence += `${roleIndex > 0 ? '· ' : ''}${role}${roleIndex < projects.roles.length - 1 ? '\u00A0' : ''}`
    })
    rolesRef.current.push(sentence)
  })

  useEffect(() => {
    console.log(rolesRef.current)
  }, [rolesRef])

  useGSAP(
    () => {
      const rolesContainers = gsap.utils.toArray('.last-project-roles') as HTMLElement[]
      const intervals: NodeJS.Timeout[] = []

      rolesContainers.forEach((container: HTMLElement, index) => {
        const text = rolesRef.current[index] || ''
        const characters = Array.from(text)

        container.innerHTML = characters
          .map(
            (char) =>
              `<span class="char" data-original="${char === ' ' ? '\u00A0' : char}">${char === ' ' ? '&nbsp;' : ''}</span>`,
          )
          .join('')

        const charSpans = Array.from(container.querySelectorAll<HTMLElement>('.char'))

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: container,
            start: 'top 80%',
            end: 'bottom 70%',
            scrub: true,
            markers: true,
          },
        })

        charSpans.forEach((span, i) => {
          let count = 0

          tl.call(
            () => {
              const interval = setInterval(() => {
                if (count < 10) {
                  span.textContent = getRandomChar()
                  count++
                } else {
                  clearInterval(interval)
                  span.textContent =
                    span.dataset.original === ' ' ? '&nbsp;' : span.dataset.original || ''
                }
              }, 100)
              intervals.push(interval)
            },
            undefined,
            i * 0.05,
          )
        })
      })

      // Cleanup function
      return () => {
        intervals.forEach((interval) => clearInterval(interval))
      }
    },
    { scope: '#last-projects-section' },
  )

  return (
    <section id='last-projects-section'>
      <p className='section_title'>{t('SECTION_TITLE')}</p>
      <div id='projects-grid'>
        {projectsData.map((project, index) => {
          if (index < 6) {
            return (
              <div
                key={`last_project_${project.key}`}
                id={`last-project-container-${index}`}
                className='last-project'
              >
                <LastProjectCanvas
                  index={index}
                  textureUrl={project.imageUrl}
                />
                <div
                  className={`last-project-info ${isOdd(index) ? 'last-project-info-left' : 'last-project-info-right'}`}
                >
                  <p className='last-project-roles'>
                    <RolesAnimation
                      key={`last_project_${project.key}_roles`}
                      text={rolesRef.current[index]}
                    />
                  </p>
                  <p className='last-project-name'>
                    <FaArrowRight
                      className='last-project-arrow'
                      size={25}
                    />
                    {project.name}
                  </p>
                </div>
              </div>
            )
          }
          return null
        })}
      </div>
    </section>
  )
}
