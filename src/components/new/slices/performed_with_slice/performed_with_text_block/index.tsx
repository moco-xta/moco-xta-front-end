import React from 'react'

import useResize from '@/hooks/new/useResize'

import TextBlockSimple from '@/components/new/shared/text_blocks/text_block_simple'

import variables from '@/styles/new/variables.module.scss'

export default function PerformedWithTextBlock() {
  const { isDesktop } = useResize()

  return (
    <TextBlockSimple
      title={'HOME.PERFORMED_WITH.TITLE'}
      paragraph={'HOME.PERFORMED_WITH.PARAGRAPH'}
      blockStyle={
        isDesktop
          ? {
              width: '30%',
              padding: `0 ${variables.left_right_margin_medium} 0 0`,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'flex-start',
            }
          : {
              width: '100%',
              padding: `0 ${variables.left_right_margin_medium} 0  ${variables.left_right_margin_medium}`,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'flex-start',
            }
      }
    />
  )
}
