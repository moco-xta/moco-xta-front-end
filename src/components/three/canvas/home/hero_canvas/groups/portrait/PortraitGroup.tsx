import React, { useState } from 'react'

import Foreground from './foreground/Foreground'
import GobelinoComponent from './background/GobelinoComponent'

interface PortraitGroupInterface {
  timeline: GSAPTimeline
}

export default function PortraitGroup({ timeline }: PortraitGroupInterface) {
  return (
    <>
      <Foreground timeline={timeline} />
      <GobelinoComponent timeline={timeline} />
    </>
  )
}
