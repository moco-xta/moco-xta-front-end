import { useContext } from 'react'

import { GSAPTimelineContext } from 'contexts/GSAPTimelineContext'

export const useGSAPTimelineContext = () => {
  const gsapTimelineContext = useContext(GSAPTimelineContext)

  if (!gsapTimelineContext) {
    throw new Error('useAppContext must be used within an AppProvider')
  }

  return gsapTimelineContext
}
