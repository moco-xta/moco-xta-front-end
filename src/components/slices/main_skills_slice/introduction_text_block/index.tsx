import React from 'react'

import TextBlockSimple from '@/components/shared/text_blocks/text_block_simple'

export default function IntroductionTextBlock() {
  return (
    <TextBlockSimple
      className={'centered_text_block'}
      /* className={'centered_text_block responsive_background'} */
      title={'HOME.MAIN_SKILLS.INTRODUCTION.TITLE'}
      paragraph={'HOME.MAIN_SKILLS.INTRODUCTION.PARAGRAPH'}
    />
  )
}
