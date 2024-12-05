import React from 'react'

import HiImFederico from './hi_i_m_federico/HiImFederico'
import FedericoPortrait from './federico_portrait/FedericoPortrait'
import AlsoKnowAsGroup from './also_know_as_group/AlsoKnowAsGroup'

interface GreetingSceneInterface {
  timeline: GSAPTimeline
}

export default function GreetingScene({ timeline }: GreetingSceneInterface) {
  return (
    <>
      <HiImFederico timeline={timeline} />
      <FedericoPortrait timeline={timeline} />
      {/* <AlsoKnowAsGroup timeline={timeline} /> */}
    </>
  )
}
