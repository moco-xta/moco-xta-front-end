import React from 'react'

import HiText from './hi_text'
import ImText from './im_text'
import FedericoText from './federico_text'

import './index.scss'
import { montserratBoldFont } from '@/app/fonts'

export default function IntroductionContent() {
  return (
    <div
      id='introduction_content'
      className={`${montserratBoldFont.className}`}
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
