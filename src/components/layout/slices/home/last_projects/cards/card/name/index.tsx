import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { FaArrowRight } from 'react-icons/fa'

import { splitTextToCharacters } from '@/helpers/textHelpers'

import './index.scss'

export default function LastProjectsName({ index, name }: { index: number; name: string }) {
  const containerRef = useRef<HTMLDivElement>(null)
  const charactersRef = useRef<NodeListOf<Element> | null>(null)
  const cardRef = useRef<Element | null>(null)

  // Initialize values when the component mounts
  useEffect(() => {
    if (containerRef.current) {
      charactersRef.current = containerRef.current.querySelectorAll('.last-project-name-character')
      cardRef.current = document.querySelector(`#last-projects-card-${index}`)
    }
  }, [index])

  useGSAP(
    () => {
      if (!containerRef.current || !cardRef.current || !charactersRef.current) return

      const container = containerRef.current

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: container,
          start: 'top 80%',
          end: 'bottom 70%',
          // markers: true,
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

      /* cardRef.current.addEventListener('mouseenter', () => {
        // Animate characters with stagger
        gsap.to(charactersRef.current, {
          x: '30px',
          duration: 0.1,
          stagger: {
            each: 0.025,
            from: 'end',
          },
          ease: 'power1.out',
        });
      });

      cardRef.current.addEventListener('mouseleave', () => {
        // Reverse animations
        gsap.to(charactersRef.current, {
          x: '0px',
          duration: 0.1,
          stagger: {
            each: 0.025,
            from: 'start',
          },
          ease: 'power1.out',
        });
      }); */
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
                    className='last-project-name-character'
                  >
                    {letter}
                  </span>
                ))}
              </span>
            ))}
        </div>
      </p>
    </div>
  )
}
