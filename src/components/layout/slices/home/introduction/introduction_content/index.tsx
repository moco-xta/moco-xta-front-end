import React, { RefObject } from 'react'

import IntroductionTitle from './title'
import IntroductionParagraph from './paragraph'

import './index.scss'

export default function IntroductionContent({
  containerRef,
}: {
  containerRef: RefObject<HTMLElement>
}) {
  return (
    <div id='introduction_content'>
      <IntroductionTitle containerRef={containerRef} />
      <IntroductionParagraph containerRef={containerRef} />
    </div>
  )
}
