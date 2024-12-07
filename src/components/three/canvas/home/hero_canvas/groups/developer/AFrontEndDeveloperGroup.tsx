import React from 'react'

import AFrontEndDeveloper from './a_front_developer/AFrontEndDeveloper'
import MacBookPro from './mac_book_pro/MacBookPro'

interface AFrontEndDeveloperGroupInterface {
  timeline: GSAPTimeline
}

export default function AFrontEndDeveloperGroup({ timeline }: AFrontEndDeveloperGroupInterface) {
  return (
    <>
      <AFrontEndDeveloper timeline={timeline} />
      <MacBookPro timeline={timeline} />
    </>
  )
}
