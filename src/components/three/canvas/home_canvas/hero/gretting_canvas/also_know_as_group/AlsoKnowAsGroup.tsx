import React from 'react'

import LightningComponent from './LightningComponent'
import BuhoComponent from './BuhoComponent'

interface AlsoKnowAsGroupInterface {
  timeline: GSAPTimeline
}

export default function AlsoKnowAsGroup({ timeline }: AlsoKnowAsGroupInterface) {
  return (
    <>
      <LightningComponent timeline={timeline} />
      <BuhoComponent timeline={timeline} />
    </>
  )
}
