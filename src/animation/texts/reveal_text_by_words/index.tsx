import React, { useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'

import type { TTextAnimation } from '@/types/animation/text/types'

import './index.scss'
import { splitTextToWords } from '@/helpers/textHelpers'

export default function RevealTextByWords({
  tag: Tag,
  id,
  className,
  text,
  animation,
}: TTextAnimation) {
  const containerRef = useRef<HTMLElement>(null!)

  useGSAP(
    () => {
      const animationFn = gsap.fromTo('.word', { ...animation!.from }, { ...animation!.to })
      return () => animationFn.kill()
    },
    { scope: containerRef },
  )

  return (
    <Tag
      ref={containerRef}
      id={id}
      className={className}
    >
      {splitTextToWords(text).map((word, index) => (
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
