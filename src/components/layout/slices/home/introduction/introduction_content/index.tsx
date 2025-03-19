import React, { RefObject } from 'react'

import HiText from './hi_text'
import ImText from './im_text'
import FedericoText from './federico_text'

import './index.scss'
import { montserratBoldFont } from '@/app/fonts'

export type TIntroductionContent = {
  introductionSectionRef: RefObject<HTMLElement>
}

export default function IntroductionContent({ introductionSectionRef }: TIntroductionContent) {
  return (
    <div
      id='introduction_content'
      className={`${montserratBoldFont.className}`}
    >
      <div>
        <HiText introductionSectionRef={introductionSectionRef} />
        &nbsp;
        <ImText introductionSectionRef={introductionSectionRef} />
        &nbsp;
        <FedericoText />
        <br />
        <span>Front-end</span>
        &nbsp;
        <span>Developer</span>
      </div>
    </div>
  )
}
