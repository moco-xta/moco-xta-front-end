import React from 'react'

import { AboutSceneInterface } from '@/interfaces/new/threeInterfaces'

import LaboratoireClayRenderLights from './LaboratoireClayRenderLights'
import { LaboratoireClayRender } from '../../models/about/LaboratoireClayRender'
import LaboratoireFinalRenderLights from './LaboratoireFinalRenderLights'
import LaboratoireFinalRender from './LaboratoireFinalRender'
import Ground from './Ground'

export default function AboutScene({ isClayRender }: AboutSceneInterface) {
  return (
    <>
      {isClayRender ? (
        <>
          <LaboratoireClayRenderLights />
          <LaboratoireClayRender />
        </>
      ) : (
        <>
          <LaboratoireFinalRenderLights />
          <LaboratoireFinalRender />
        </>
      )}
      <Ground />
    </>
  )
}
