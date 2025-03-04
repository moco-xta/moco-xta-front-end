import React from 'react'

import HiText from './hi_text'
import ImText from './im_text'
import FedericoText from './federico_text'

import './index.scss'
import { helveticaMediumFont } from '@/app/fonts'

export default function IntroductionContent() {
  return (
    <div
      id='introduction_content'
      className={`${helveticaMediumFont.className}`}
    >
      <p>
        <HiText />
        &nbsp;
        <ImText />
        &nbsp;
        <FedericoText />
        <br />
        <span>Front-end</span>
        &nbsp;
        <span>Developer</span>
      </p>
    </div>
  )
}
