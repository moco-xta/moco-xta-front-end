import React from 'react'

import TextBlockTransitionNine from '@/animation/texts/text_block_transition_nine'
import RevealTextByWords from '@/animation/texts/reveal_text_by_words'
import RevealTextByCharacters from '@/animation/texts/reveal_text_by_characters'

import './index.scss'

export default function TextAnimationLibrarySlice() {
  return (
    <section id='text_animation_library_slice'>
      <TextBlockTransitionNine
        tag={'p'}
        id={'text_block_animation_nine'}
        className={'text'}
        text={'We help brands create digital\nexperiences that connect with\ntheir audience'}
      />
      <RevealTextByWords
        tag={'p'}
        id={'reveal_letter_by_words_test'}
        className={'text reveal_letter_by_words'}
        text={'Text test'}
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
      <RevealTextByCharacters
        tag={'p'}
        id={'reveal_letter_by_characters'}
        className={'text'}
        text={'Text test'}
      />
    </section>
  )
}
