import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'
import { FaArrowRight } from 'react-icons/fa'
import { GoDotFill } from 'react-icons/go'

import type { TTextAnimation } from '@/types/animation/text/types'

import { splitTextToCharacters } from '@/helpers/textHelpers'

import './index.scss'
import styles from '@/styles/variables.module.scss'

export type TRevealCasinoByCharacter = {
  route: string
  isActive: boolean
}

export default function RevealCasinoByCharacter({ route, isActive }: TRevealCasinoByCharacter) {

  const timelineRef = useRef<GSAPTimeline>(gsap.timeline({ paused: true }))

  useEffect(() => {
    console.log('timelineRef.current.reversed()', timelineRef.current.reversed())
  }, [timelineRef.current])

  useGSAP(() => {
    timelineRef.current
      .to(`.${route}_reveal_casino_character_up`, {
        translateY: '-16px',
        duration: 0.25,
        ease: 'power1.out',
        stagger: {
          each: 0.05,
        },
      })
      .to(
        `.${route}_reveal_casino_character_down`,
        {
          translateY: '-16px',
          duration: 0.25,
          ease: 'power1.out',
          stagger: {
            each: 0.05,
          },
        },
        0,
      )
      .to(
        `.${route}_route_background`,
        {
          backgroundColor: styles.limeGreen,
          scale: 1,
          opacity: 1,
          duration: timelineRef.current.reversed() ? 0.1 : 0.5,
          ease: 'power1.out',
        },
        0,
      )
      .to(
        `.${route}_route_arrow`,
        {
          right: '15px',
          scale: 1,
          opacity: 1,
          duration: 0.1,
          ease: 'power1.out',
        },
        0.25,
      )
  })

  const handleMouseEnter = () => {
    if (!isActive) timelineRef.current.play()
  }
  const handleMouseLeave = () => {
    if (!isActive) timelineRef.current.reverse()
  }

  return (
    <div
      className='route_block'
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className='route_container'>
        {/* <div className='routes_text'> */}
        <p className='route'>
          {splitTextToCharacters(route).map((letter, index) => (
            <span
              key={`${route}_reveal_casino_character_${index}`}
              className={`reveal_casino_character ${route}_reveal_casino_character_up`}
            >
              {letter !== ' ' ? letter : '\u00A0'}
            </span>
          ))}
        </p>
        <p className='route'>
          {splitTextToCharacters(route).map((letter, index) => (
            <span
              key={`${route}_reveal_casino_character_${index}`}
              className={`reveal_casino_character ${route}_reveal_casino_character_down`}
            >
              {letter !== ' ' ? letter : '\u00A0'}
            </span>
          ))}
        </p>
      </div>
      {/* </div> */}
      <div className={`route_background ${route}_route_background`} />
      {isActive ? (
        <GoDotFill className='dot_icon' />
      ) : (
        <FaArrowRight className={`arrow_icon ${route}_route_arrow`} />
      )}
    </div>
  )
}
