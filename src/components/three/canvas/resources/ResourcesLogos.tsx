import React from 'react'

import { resourcesLogosData } from '@/data/resources/three/resourcesLogosData'
import { ResourcesLogo } from './ResourcesLogo'

export function ResourcesLogos() {
  return (
    <>
      {Array(resourcesLogosData.lazy.modelsMultiplier)
        .fill(resourcesLogosData.lazy.models)
        .flat()
        .map((componentName, index) => {
          return (
            <ResourcesLogo
              key={index}
              pathToModel={resourcesLogosData.lazy.pathToModel}
              componentName={componentName}
            />
          )
        })}
    </>
  )
}
