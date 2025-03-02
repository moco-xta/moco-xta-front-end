import React, { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

import type { TTextBlockTransitionNine } from '@/types/animation/text/types'

import { splitTextInArrayOfWords } from '@/helpers/textHelpers'

import './index.scss'

export default function TextBlockTransitionNine({
  tag: Tag,
  id,
  className,
  text,
}: TTextBlockTransitionNine) {
  const containerRef = useRef<HTMLElement>(null!)

  useGSAP(
    () => {
      const animation = gsap.fromTo(
        '.word',
        {
          xPercent: () => gsap.utils.random(-50, 50),
          yPercent: () => gsap.utils.random(-10, 10),
          z: () => gsap.utils.random(400, 700),
          rotationX: () => gsap.utils.random(-90, 90),
          opacity: 0,
        },
        {
          duration: 1,
          ease: 'power1.out',
          xPercent: 0,
          yPercent: 0,
          rotationX: 0,
          z: 0,
          opacity: 1,
          stagger: {
            each: 0.06,
            from: 'random',
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
      {splitTextInArrayOfWords(text).map((word, index) => (
        <span
          key={`${id}_word_${index}`}
          className='word'
        >
          {word}&nbsp;
        </span>
      ))}
    </Tag>
  )
}
