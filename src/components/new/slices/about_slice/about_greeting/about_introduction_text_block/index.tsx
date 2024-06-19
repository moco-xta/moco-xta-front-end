import React from 'react'
import { isMobile } from 'react-device-detect'

import TextBlockMain from '@/components/new/shared/text_blocks/text_block_main'

export default function AboutIntroductionTextBlock() {
  return (
    <TextBlockMain
      id={`${!isMobile ? 'desktop_about_introduction_text_block' : 'mobile_about_introduction_text_block'}`}
      className={'start_text_block'}
      title={'ABOUT.INTRODUCTION_TEXT_BLOCK.TITLE'}
      paragraph={'ABOUT.INTRODUCTION_TEXT_BLOCK.PARAGRAPH'}
    />
  )
}
