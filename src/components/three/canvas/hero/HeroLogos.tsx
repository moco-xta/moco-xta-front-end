import React from 'react'

import { HeroLogo } from './HeroLogo'

import { heroLogosData } from '@/data/canvas/hero/heroLogosData'

export function HeroLogos() {
  return (
    <>
      {Array(heroLogosData.lazy.modelsMultiplier)
        .fill(heroLogosData.lazy.models)
        .flat()
        .map((componentName, index) => {
          return (
            <HeroLogo
              key={index}
              pathToModel={heroLogosData.lazy.pathToModel}
              componentName={componentName}
            />
          )
        })}
    </>
  )
}
