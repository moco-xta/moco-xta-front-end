import React from 'react'

import HiImFederico from './hi_i_m_federico/HiImFederico'
import FedericoPortrait from './federico_portrait/FedericoPortrait'

interface GreetingSceneInterface {
  timeline: GSAPTimeline
}

export default function GreetingScene({ timeline }: GreetingSceneInterface) {
  return (
    <>
      <HiImFederico timeline={timeline} />
      <FedericoPortrait timeline={timeline} />
    </>
  )
}
