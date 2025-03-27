import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { FaArrowRight } from 'react-icons/fa'
import { useTranslations } from 'next-intl'

import LastProjectCanvas from '@/components/three/canvas/last_project/LastProjectCanvas'

import { isOdd } from '@/helpers/mathHelpers'
import { splitTextToCharacters } from '@/helpers/textHelpers'

import { projectsData } from '@/data/projects/projectsData'

import './index.scss'

const getRandomChar = () => {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
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
            // markers: true,
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

        const tl2 = gsap.timeline({
          scrollTrigger: {
            trigger: container,
            start: 'top 80%',
            // end: 'bottom 70%',
            markers: true,
          },
        })

        tl2
          .to('.last-project-name-container .last-project-name', {
            translateY: '41%',
            duration: 1.5,
            // ease: 'power1.out',
          })
          .to(
            '.last-project-name-item',
            {
              translateY: '0%',
              duration: 1.5,
              ease: 'power1.out',
            },
            0,
          )
          .to(
            '.last-project-name-character',
            {
              translateY: '0%',
              opacity: 1,
              duration: 1.5,
              ease: 'sine.inOut',
              stagger: {
                each: 0.05,
                from: 'center',
                grid: 'auto',
                axis: 'x',
              },
              motionPath: {
                path: [
                  { x: 0, y: 0 },
                  { x: 0, y: -20 },
                  { x: 0, y: 0 },
                ],
                curviness: 2,
              },
            },
            0,
          )
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
                    <span>{rolesRef.current[index]}</span>
                  </p>
                  <p className='last-project-name-container'>
                    <FaArrowRight
                      className='last-project-arrow'
                      size={25}
                    />
                    <div className='last-project-name'>
                      {Array(5)
                        .fill(null)
                        .map((_, i) => (
                          <span
                            key={`last_project_name_${index}_${i}`}
                            className='last-project-name-item'
                          >
                            {splitTextToCharacters(project.name).map((letter, index) => (
                              <span
                                key={`last_project_name_character_${project.name}_${i}_${index}`}
                                className='last-project-name-character'
                              >
                                {letter !== ' ' ? letter : '\u00A0'}
                              </span>
                            ))}
                          </span>
                        ))}
                    </div>
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
