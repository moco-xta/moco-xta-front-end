import React from 'react'

import RevealTextByWords from '@/animation/texts/reveal_text_by_words'

import './index.scss'

export default function ImText() {
  return (
    <RevealTextByWords
      tag={'span'}
      id={'federico_text'}
      className={`introduction_title reveal_letter_by_words`}
      text={"I'm"}
      animation={{
        from: {
          xPercent: -100,
          opacity: 0,
        },
        to: {
          xPercent: 0,
          opacity: 1,
          duration: 0.5,
          ease: 'power1.out',
        },
      }}
    />
  )
}
