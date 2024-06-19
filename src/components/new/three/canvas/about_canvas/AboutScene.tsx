import React from 'react'

import { AboutSceneInterface } from '@/interfaces/new/threeInterfaces'

import { LaboratoireClayRender } from '../../models/about/LaboratoireClayRender'
import LaboratoireFinalRenderLights from './LaboratoireFinalRenderLights'
import LaboratoireFinalRender from '../../models/about/LaboratoireFinalRender'
import Ground from './Ground'

export default function AboutScene({ isClayRender }: AboutSceneInterface) {
  return (
    <>
      {isClayRender ? <LaboratoireClayRender /> : (
        <>
          <LaboratoireFinalRenderLights />
          <LaboratoireFinalRender />
        </>
      )}
      <Ground />
    </>
  )
}
