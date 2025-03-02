import React, { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

import type { TTextAnimation } from '@/types/animation/text/types'

import { splitTextToCharacters } from '@/helpers/textHelpers'

import './index.scss'

export default function RevealTextByCharacter({
  tag: Tag,
  id,
  className,
  text,
}: TTextAnimation) {
  const containerRef = useRef<HTMLElement>(null!)

  useGSAP(
    () => {
      const animation = gsap.fromTo(
        '.letter',
        {
          yPercent: 100,
          opacity: 0,
        },
        {
          yPercent: 0,
          opacity: 1,
          duration: 0.5,
          ease: 'power1.out',
          stagger: {
            each: 0.1,
          },
        },
      )
      return () => animation.kill()
    },
    { scope: containerRef },
  )

  return (
    <Tag
      ref={containerRef}
      id={id}
      className={className}
    >
      {splitTextToCharacters(text).map((letter, index) => (
        <span
          key={`${id}_letter_${index}`}
          className='letter'
        >
          {letter !== ' ' ? letter : '\u00A0'}
        </span>
      ))}
    </Tag>
  )
}
