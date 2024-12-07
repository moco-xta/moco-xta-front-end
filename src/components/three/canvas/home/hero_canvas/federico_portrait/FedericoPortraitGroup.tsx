import React, { useState } from 'react'

import Foreground from './foreground/Foreground'
import GobelinoComponent from './background/GobelinoComponent'

interface FedericoPortraitGroupInterface {
  timeline: GSAPTimeline
}

export default function FedericoPortraitGroup({ timeline }: FedericoPortraitGroupInterface) {
  return (
    <>
      <Foreground timeline={timeline} />
      <GobelinoComponent timeline={timeline} />
    </>
  )
}
