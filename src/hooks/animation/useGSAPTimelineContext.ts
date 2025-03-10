import { useContext } from 'react'

import { GSAPTimelineContext } from '../../contexts/GsapTimelineContext'

export const useGSAPTimelineContext = () => {
  const gsapTimelineContext = useContext(GSAPTimelineContext)

  if (!gsapTimelineContext) {
    throw new Error('useGSAPTimelineContext must be used within an GSAPTimelineprovider :)')
  }

  return gsapTimelineContext
}
