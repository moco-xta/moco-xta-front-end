import React from 'react'
import * as THREE from 'three'

import { DeskChair } from '@/components/new/three/models/about/laboratoire/final_render/DeskChair'
import { DeskTray } from '@/components/new/three/models/about/laboratoire/final_render/DeskTray'
import { MacBookPro } from '@/components/new/three/models/about/laboratoire/final_render/MacBookPro'
import { Trestle } from '@/components/new/three/models/about/laboratoire/final_render/Trestle'

import { default as laboratoireFinalRenderConstants } from '@/constants/new/canvas/laboratoire/laboratoireFinalRenderConstants.json'

export default function DeskCollection() {
  return (
    <>
      <DeskChair
        position={
          new THREE.Vector3(
            laboratoireFinalRenderConstants.DESK_COLLECTION.DESK_CHAIR.POSITION.X,
            laboratoireFinalRenderConstants.DESK_COLLECTION.DESK_CHAIR.POSITION.Y,
            laboratoireFinalRenderConstants.DESK_COLLECTION.DESK_CHAIR.POSITION.Z,
          )
        }
        rotation={
          new THREE.Euler(
            THREE.MathUtils.degToRad(
              laboratoireFinalRenderConstants.DESK_COLLECTION.DESK_CHAIR
                .ROTATION.X,
            ),
            THREE.MathUtils.degToRad(
              laboratoireFinalRenderConstants.DESK_COLLECTION.DESK_CHAIR
                .ROTATION.Y,
            ),
            THREE.MathUtils.degToRad(
              laboratoireFinalRenderConstants.DESK_COLLECTION.DESK_CHAIR
                .ROTATION.Z,
            ),
          )
        }
      />
      <DeskTray
        position={
          new THREE.Vector3(
            laboratoireFinalRenderConstants.DESK_COLLECTION.DESK_TRAY.POSITION.X,
            laboratoireFinalRenderConstants.DESK_COLLECTION.DESK_TRAY.POSITION.Y,
            laboratoireFinalRenderConstants.DESK_COLLECTION.DESK_TRAY.POSITION.Z,
          )
        }
      />
      <MacBookPro
        position={
          new THREE.Vector3(
            laboratoireFinalRenderConstants.DESK_COLLECTION.MAC_BOOK_PRO.POSITION.X,
            laboratoireFinalRenderConstants.DESK_COLLECTION.MAC_BOOK_PRO.POSITION.Y,
            laboratoireFinalRenderConstants.DESK_COLLECTION.MAC_BOOK_PRO.POSITION.Z,
          )
        }
      />
      <Trestle
        position={
          new THREE.Vector3(
            laboratoireFinalRenderConstants.DESK_COLLECTION.TRESTLES.LEFT.POSITION.X,
            laboratoireFinalRenderConstants.DESK_COLLECTION.TRESTLES.LEFT.POSITION.Y,
            laboratoireFinalRenderConstants.DESK_COLLECTION.TRESTLES.LEFT.POSITION.Z,
          )
        }
      />
      <Trestle
        position={
          new THREE.Vector3(
            laboratoireFinalRenderConstants.DESK_COLLECTION.TRESTLES.RIGHT.POSITION.X,
            laboratoireFinalRenderConstants.DESK_COLLECTION.TRESTLES.RIGHT.POSITION.Y,
            laboratoireFinalRenderConstants.DESK_COLLECTION.TRESTLES.RIGHT.POSITION.Z,
          )
        }
      />
    </>
  )
}
