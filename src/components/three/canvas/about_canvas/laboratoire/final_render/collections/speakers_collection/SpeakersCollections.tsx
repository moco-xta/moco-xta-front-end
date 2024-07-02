import React from 'react'
import * as THREE from 'three'

import { SpeakerBox } from '@/components/three/models/about/laboratoire/final_render/speakers_collection/SpeakerBox'
import { WorldMap } from '@/components/three/models/about/laboratoire/final_render/speakers_collection/WorldMap'
import { WorldMapStand } from '@/components/three/models/about/laboratoire/final_render/speakers_collection/WorldMapStand'

import { default as laboratoireFinalRenderConstants } from '@/constants/new/canvas/about/laboratoire/laboratoireFinalRenderConstants.json'

export default function SpeakersCollections() {
  return (
    <>
      {laboratoireFinalRenderConstants.SPEAKERS_COLLECTION.SPEAKER_BOXES.map((speakerBox) => (
        <SpeakerBox
          key={speakerBox.NAME}
          name={speakerBox.NAME}
          position={
            new THREE.Vector3(speakerBox.POSITION.X, speakerBox.POSITION.Y, speakerBox.POSITION.Z)
          }
        />
      ))}
      <WorldMap
        position={
          new THREE.Vector3(
            laboratoireFinalRenderConstants.SPEAKERS_COLLECTION.WORLD_MAP.POSITION.X,
            laboratoireFinalRenderConstants.SPEAKERS_COLLECTION.WORLD_MAP.POSITION.Y,
            laboratoireFinalRenderConstants.SPEAKERS_COLLECTION.WORLD_MAP.POSITION.Z,
          )
        }
        rotation={
          new THREE.Euler(
            THREE.MathUtils.degToRad(
              laboratoireFinalRenderConstants.SPEAKERS_COLLECTION.WORLD_MAP.ROTATION.X,
            ),
            THREE.MathUtils.degToRad(
              laboratoireFinalRenderConstants.SPEAKERS_COLLECTION.WORLD_MAP.ROTATION.Y,
            ),
            THREE.MathUtils.degToRad(
              laboratoireFinalRenderConstants.SPEAKERS_COLLECTION.WORLD_MAP.ROTATION.Z,
            ),
          )
        }
      />
      <WorldMapStand
        position={
          new THREE.Vector3(
            laboratoireFinalRenderConstants.SPEAKERS_COLLECTION.WORLD_MAP_STAND.POSITION.X,
            laboratoireFinalRenderConstants.SPEAKERS_COLLECTION.WORLD_MAP_STAND.POSITION.Y,
            laboratoireFinalRenderConstants.SPEAKERS_COLLECTION.WORLD_MAP_STAND.POSITION.Z,
          )
        }
        rotation={
          new THREE.Euler(
            THREE.MathUtils.degToRad(
              laboratoireFinalRenderConstants.SPEAKERS_COLLECTION.WORLD_MAP_STAND.ROTATION.X,
            ),
            THREE.MathUtils.degToRad(
              laboratoireFinalRenderConstants.SPEAKERS_COLLECTION.WORLD_MAP_STAND.ROTATION.Y,
            ),
            THREE.MathUtils.degToRad(
              laboratoireFinalRenderConstants.SPEAKERS_COLLECTION.WORLD_MAP_STAND.ROTATION.Z,
            ),
          )
        }
      />
    </>
  )
}
