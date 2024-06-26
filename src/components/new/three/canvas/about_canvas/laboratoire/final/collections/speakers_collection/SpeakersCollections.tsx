import React from 'react'
import * as THREE from 'three'

import { SpeakerBox } from '@/components/new/three/models/about/laboratoire/final_render/speakers_collection/SpeakerBox'

import { default as laboratoireFinalRenderConstants } from '@/constants/new/canvas/laboratoire/laboratoireFinalRenderConstants.json'

export default function SpeakersCollections() {
  return (
    <>
      {laboratoireFinalRenderConstants.SPEAKERS_COLLECTION.SPEAKER_BOXES.map(
        (speakerBox) => (
          <SpeakerBox
            key={speakerBox.NAME}
            name={speakerBox.NAME}
            position={
              new THREE.Vector3(
                speakerBox.POSITION.X,
                speakerBox.POSITION.Y,
                speakerBox.POSITION.Z,
              )
            }
          />
        ),
      )}
    </>
  )
}
