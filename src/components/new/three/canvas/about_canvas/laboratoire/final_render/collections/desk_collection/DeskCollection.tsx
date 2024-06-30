import React from 'react'
import * as THREE from 'three'

import { DeskChair } from '@/components/new/three/models/about/laboratoire/final_render/desk_collection/DeskChair'
import { DeskTray } from '@/components/new/three/models/about/laboratoire/final_render/desk_collection/DeskTray'
import { MacBookPro } from '@/components/new/three/models/about/laboratoire/final_render/desk_collection/MacBookPro'
import { Screen } from '@/components/new/three/models/about/laboratoire/final_render/desk_collection/Screen'
import { TransfertBox } from '@/components/new/three/models/about/laboratoire/final_render/desk_collection/TransfertBox'
import { Trestle } from '@/components/new/three/models/about/laboratoire/final_render/desk_collection/Trestle'
import VinylDiscs from './VinylDiscs'

import { default as laboratoireFinalRenderConstants } from '@/constants/new/canvas/about/laboratoire/laboratoireFinalRenderConstants.json'

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
              laboratoireFinalRenderConstants.DESK_COLLECTION.DESK_CHAIR.ROTATION.X,
            ),
            THREE.MathUtils.degToRad(
              laboratoireFinalRenderConstants.DESK_COLLECTION.DESK_CHAIR.ROTATION.Y,
            ),
            THREE.MathUtils.degToRad(
              laboratoireFinalRenderConstants.DESK_COLLECTION.DESK_CHAIR.ROTATION.Z,
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
      <Screen
        position={
          new THREE.Vector3(
            laboratoireFinalRenderConstants.DESK_COLLECTION.SCREEN.POSITION.X,
            laboratoireFinalRenderConstants.DESK_COLLECTION.SCREEN.POSITION.Y,
            laboratoireFinalRenderConstants.DESK_COLLECTION.SCREEN.POSITION.Z,
          )
        }
      />
      {laboratoireFinalRenderConstants.DESK_COLLECTION.TRANSFERT_BOXES.map((transfertBox) => (
        <TransfertBox
          key={transfertBox.NAME}
          name={transfertBox.NAME}
          position={
            new THREE.Vector3(
              transfertBox.POSITION.X,
              transfertBox.POSITION.Y,
              transfertBox.POSITION.Z,
            )
          }
          rotation={
            new THREE.Euler(
              THREE.MathUtils.degToRad(transfertBox.ROTATION.X),
              THREE.MathUtils.degToRad(transfertBox.ROTATION.Y),
              THREE.MathUtils.degToRad(transfertBox.ROTATION.Z),
            )
          }
        />
      ))}
      {laboratoireFinalRenderConstants.DESK_COLLECTION.TRESTLES.map((trestle) => (
        <Trestle
          key={trestle.NAME}
          name={trestle.NAME}
          position={new THREE.Vector3(trestle.POSITION.X, trestle.POSITION.Y, trestle.POSITION.Z)}
        />
      ))}
      <VinylDiscs />
    </>
  )
}
