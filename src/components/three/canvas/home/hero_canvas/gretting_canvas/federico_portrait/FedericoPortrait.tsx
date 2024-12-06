import React from 'react'

import Foreground from './foreground/Foreground'
import GobelinoComponent from './background/GobelinoComponent'

interface FedericoPortraitInterface {
  timeline: GSAPTimeline
}

export default function FedericoPortrait({ timeline }: FedericoPortraitInterface) {
  return (
    <>
      <Foreground timeline={timeline} />
      <GobelinoComponent timeline={timeline} />
    </>
  )
}
