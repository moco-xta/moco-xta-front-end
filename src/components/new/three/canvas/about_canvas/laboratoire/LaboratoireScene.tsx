import React from 'react'
import { useSelector } from 'react-redux'

import { RootState } from '@/redux/store'

import LaboratoireFinalRender from './final/LaboratoireFinalRender'
import LaboratoireClayRender from './clay/LaboratoireClayRender'

export default function LaboratoireScene() {
  const { isFinalRender } = useSelector((state: RootState) => state.about)

  return (
    <>
      {isFinalRender ? <LaboratoireFinalRender /> : <LaboratoireClayRender />}
    </>
  )
}
