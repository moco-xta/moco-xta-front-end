import React, { useEffect, useState } from 'react'
import { isMobile } from 'react-device-detect'

export default function useIsMobile() {
  const [dimensionsType, setDimensionsType] = useState<
    'IS_NOT_MOBILE' | 'IS_MOBILE' | null
  >(null)

  useEffect(() => {
    !isMobile
      ? setDimensionsType('IS_NOT_MOBILE')
      : setDimensionsType('IS_NOT_MOBILE')
  }, [isMobile])

  return { dimensionsType }
}
