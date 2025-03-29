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
      const reversedArray = Array.from(characters).reverse()

      const card = document.querySelector(`#last-projects-card-${index}`)

      if (!card || !characters) return

      const tl2 = gsap.timeline({ paused: true })

      characters.forEach((character, index) => {
        tl2.to(
          character,
          {
            x: '30px',
            duration: 0.1,
            ease: 'power1.out',
          },
          index * 0.025 // Add delay based on index
        )
      })
  
      // Add project name animation to the timeline
      tl2.to(
        projectName,
        {
          x: '30px',
          duration: 0.1,
          ease: 'power1.out',
        },
        0 // Start at the same time as the first character animation
      )
  
      card.addEventListener('mouseenter', () => {
        tl2.play()
      })
  
      /* card.addEventListener('mouseleave', () => {
        tl2.reverse()
      }) */
    
      card.addEventListener('mouseenter', () => {
        /* reversedArray.forEach((character, index) => {
          gsap.to(character, {
            x: '30px',
            duration: 0.1,
            delay: index * 0.025, // Add delay based on index
            ease: 'power1.out',
          })
        }) */
        
        gsap.to(projectName, {
          x: 0,
          duration: 0.1,
          ease: 'power1.out',
        })
      })
  
      card.addEventListener('mouseleave', () => {
        gsap.to(characters, {
          x: '0px',
          duration: 0.1,
          stagger: {
            each: 0.025,
            from: 'start',
          },
          ease: 'power1.out',
        })
  
        gsap.to(projectName, {
          x: '-35px',
          duration: 0.1,
          ease: 'power1.out',
        })
      })
    },
    { scope: containerRef },
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
          id={`last-project-arrow-${index}`}
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
