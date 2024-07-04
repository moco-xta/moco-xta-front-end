import React from 'react'

import useIsLargeScreen from '@/hooks/useIsLargeScreen'

import TextBlockSimple from '@/components/shared/text_blocks/text_block_simple'

import './index.scss'

export default function PerformedWithTextBlock() {
  const { isLargeScreen } = useIsLargeScreen()

  return (
    <TextBlockSimple
      id='performed_with_text_block'
      className={`${isLargeScreen ? '' : 'centered_text_block'}`}
      title={'HOME.PERFORMED_WITH.TITLE'}
      paragraph={'HOME.PERFORMED_WITH.PARAGRAPH'}
      /* blockStyle={
        isLargeScreen
          ? {
              width: '30%',
              padding: `0 ${variables.left_right_margin_small} 0 0`,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'flex-start',
            }
          : {
              width: '100%',
              padding: `0 ${variables.left_right_margin_smaller} 0  ${variables.left_right_margin_smaller}`,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'flex-start',
            }
      } */
    />
  )
}
