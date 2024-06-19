import React from 'react'

import { AboutSceneInterface } from '@/interfaces/new/threeInterfaces'

import { LaboratoireClayRender } from '../../models/about/LaboratoireClayRender'
import LaboratoireFinalRender from '../../models/about/LaboratoireFinalRender'
import Ground from './Ground'

export default function AboutScene({ isClayRender }: AboutSceneInterface) {
  return (
    <>
      {isClayRender ? (
        <LaboratoireClayRender />
      ) : (
        <LaboratoireFinalRender />
      )}
      <Ground />
    </>
  )
}
