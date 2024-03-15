import React, { useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'

import { RevealTextLetterByLetterInterface } from '@/interfaces/components/shared/effects/revealTextLetterByLetterInterface'

import { splitTextInArrayOfLetters } from '@/helpers/textHelpers'

import './index.scss'

export default function RevealTextLetterByLetter({
  text,
}: RevealTextLetterByLetterInterface) {
  gsap.registerPlugin(useGSAP)
  const timeline = gsap.timeline()

  const container = useRef<HTMLDivElement>(null!)

  useGSAP(
    () => {
      gsap.fromTo(
        '.letter',
        {
          /* transformOrigin: '100% 100%',
          yPercent: 125,
          rotation: -3, */
          opacity: 0,
        },
        {
          duration: 20,
          ease: 'power3.out',
          /*  transformOrigin: '0% 0%',
          yPercent: 0,
          rotation: 0, */
          opacity: 1,
        },
      )
    },
    { scope: container },
  )

  return (
    <div ref={container}>
      {splitTextInArrayOfLetters(text).map((letter, index) => (
        <div
          key={`letter_${index}`}
          className='letter'
        >
          {letter}
        </div>
      ))}
    </div>
  )
}
