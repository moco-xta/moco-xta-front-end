import React from 'react'

import TextBlockSimple from '@/components/new/shared/text_blocks/text_block_simple'

export default function Introduction() {
  return (
    <TextBlockSimple
      title={'HOME.MAIN_SKILLS.INTRODUCTION.TITLE'}
      paragraph={'HOME.MAIN_SKILLS.INTRODUCTION.PARAGRAPH'}
      blockStyle={{ padding: '50px 35% 0 35%' }}
    />
  )
}
