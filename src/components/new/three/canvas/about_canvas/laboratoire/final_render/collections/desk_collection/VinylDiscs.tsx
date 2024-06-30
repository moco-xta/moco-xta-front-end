import React from 'react'
import * as THREE from 'three'

import { VinylDisc } from '@/components/new/three/models/about/laboratoire/final_render/desk_collection/VinylDisc'

import { default as laboratoireFinalRenderConstants } from '@/constants/new/canvas/about/laboratoire/laboratoireFinalRenderConstants.json'

export default function VinylDiscs() {
  return (
    <>
      {laboratoireFinalRenderConstants.DESK_COLLECTION.VINYL_DISCS.map((vinylDisc) => (
        <VinylDisc
          key={vinylDisc.NAME}
          position={
            new THREE.Vector3(vinylDisc.POSITION.X, vinylDisc.POSITION.Y, vinylDisc.POSITION.Z)
          }
          rotation={
            new THREE.Euler(
              THREE.MathUtils.degToRad(vinylDisc.ROTATION.X),
              THREE.MathUtils.degToRad(vinylDisc.ROTATION.Y),
              THREE.MathUtils.degToRad(vinylDisc.ROTATION.Z),
            )
          }
          texture={vinylDisc.TEXTURE}
        />
      ))}
    </>
  )
}
