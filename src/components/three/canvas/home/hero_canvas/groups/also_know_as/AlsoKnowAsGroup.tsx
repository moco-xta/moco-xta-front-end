import React from 'react'

import LightningComponent from './LightningComponent'
import Buhos from './Buhos'

interface AlsoKnowAsGroupInterface {
  timeline: GSAPTimeline
}

export default function AlsoKnowAsGroup({ timeline }: AlsoKnowAsGroupInterface) {
  return (
    <>
      <LightningComponent timeline={timeline} />
      <Buhos timeline={timeline} />
    </>
  )
}
