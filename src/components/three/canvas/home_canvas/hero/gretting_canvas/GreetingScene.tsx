import React from 'react'

import HiImFederico from './hi_i_m_federico/HiImFederico'
import Federico from './federico/Federico'

interface GreetingSceneInterface {
  timeline: GSAPTimeline
}

export default function GreetingScene({ timeline }: GreetingSceneInterface) {
  return (
    <>
      <HiImFederico timeline={timeline} />
      {/* <Federico /> */}
    </>
  )
}
