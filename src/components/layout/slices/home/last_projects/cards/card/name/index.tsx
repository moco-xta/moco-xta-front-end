import React from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { FaArrowRight } from 'react-icons/fa'

import { splitTextToCharacters } from '@/helpers/textHelpers'

import './index.scss'

export default function LastProjectsName({ index, name }: { index: number; name: string }) {
  const containerRef = React.useRef<HTMLDivElement>(null)

  useGSAP(
    () => {
      if (!containerRef.current) return

      const container = containerRef.current
      const characters = splitTextToCharacters(name)

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: container,
          start: 'top 80%',
          end: 'bottom 70%',
          markers: true,
        },
      })

      tl.to(container.querySelector('.last-project-name'), {
        translateY: '41%',
        duration: 1.5,
      })
        .to(
          container.querySelectorAll('.last-project-name-item'),
          {
            translateY: '0%',
            duration: 1.5,
            ease: 'power1.out',
          },
          0,
        )
        .to(
          container.querySelectorAll('.last-project-name-character'),
          {
            translateY: '0%',
            opacity: 1,
            duration: 1.5,
            ease: 'sine.inOut',
            stagger: {
              each: 0.045,
              from: 'center',
              grid: 'auto',
              axis: 'x',
            },
            motionPath: {
              path: [
                { x: 0, y: 0 },
                { x: 0, y: -5 },
                { x: 0, y: 0 },
              ],
              curviness: 0.5, // Reduced curviness for a less curvy animation
            },
          },
          0,
        )
    },
    { scope: `#last-projects-name-${index}` },
  )

  return (
    <p
      ref={containerRef}
      id={`last-projects-name-${index}`}
      className='last-project-name-container'
    >
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
              {splitTextToCharacters(name).map((letter, index) => (
                <span
                  key={`last_project_name_character_${name}_${i}_${index}`}
                  className='last-project-name-character'
                >
                  {letter !== ' ' ? letter : '\u00A0'}
                </span>
              ))}
            </span>
          ))}
      </div>
    </p>
  )
}
