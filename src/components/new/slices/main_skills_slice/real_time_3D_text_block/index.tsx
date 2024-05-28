import React from 'react'

import TextBlockSimple from '@/components/new/shared/text_blocks/text_block_simple'

import variables from '@/styles/new/variables.module.scss'

export default function RealTime3DTextBlock() {
  return (
    <TextBlockSimple
      title={'HOME.MAIN_SKILLS.REAL_TIME_3D.TITLE'}
      paragraph={'HOME.MAIN_SKILLS.REAL_TIME_3D.PARAGRAPH'}
      blockStyle={{ padding: `${variables.top_bottom_margin_medium} 35% 0 35%` }}
    />
  )
}
