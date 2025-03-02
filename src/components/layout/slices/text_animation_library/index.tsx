import React from 'react'

import TextBlockTransitionNine from '@/animation/texts/text_block_transition_nine'
import RevealTextByCharacters from '@/animation/texts/reveal_text_by_character'

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
      <RevealTextByCharacters
        tag={'p'}
        id={'reveal_letter_by_letter'}
        className={'text'}
        text={'Text test'}
      />
    </section>
  )
}
