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
            duration: 1,
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

        const projectName = document.querySelector(`#last-projects-name-${index}`)
        const characters = container.querySelectorAll('.last-project-name-character')
        const charactersArray = Array.from(characters).reverse()
        
        const card = document.querySelector(`#last-projects-card-${index}`)
    
        if (!card || !characters) return

        const tl2 = gsap.timeline({ paused: true }) // Timeline paused by default
    
        charactersArray.forEach((character, index) => {
          tl2.to(character, {
            letterSpacing: '0.1em',
            duration: 0.1,
            ease: 'power1.out',
          }, '+=index * 0.05')
          .to(character, {
            letterSpacing: '0em',
            duration: 0.1,
            ease: 'power1.out',
          }, 0.5)
          .to(projectName, {
            x: '0px',
            duration: 0.05 * charactersArray.length / 2,
            ease: 'power1.out',
          }, 0)
        })
    
        card.addEventListener('mouseenter', () => {
          tl2.play() // Play the timeline on hover
        })
    
        card.addEventListener('mouseleave', () => {
          tl2.reverse() // Reverse the timeline on mouse leave
        })
      },
    
    { scope: `#last-projects-name-${index}` },
  )

  return (
    <div
      ref={containerRef}
      className='last-projects-name-wrapper'
    >
      <p
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
                    className={`last-project-name-character last-project-name-character-${index}`}
                  >
                    {letter !== ' ' ? letter : '\u00A0'}
                  </span>
                ))}
              </span>
            ))}
        </div>
      </p>
    </div>
  )
}
