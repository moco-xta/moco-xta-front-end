import React from 'react'

import TextBlockSimple from '@/components/new/shared/text_blocks/text_block_simple'

import variables from '@/styles/new/variables.module.scss'

export default function PerformedWith() {
  return (
    <TextBlockSimple
      title={'HOME.PERFORMED_WITH.TITLE'}
      paragraph={'HOME.PERFORMED_WITH.PARAGRAPH'}
      blockStyle={{
        width: '30%',
        padding: `0 ${variables.left_right_margin} 0 0`,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-start',
      }}
    />
  )
}
