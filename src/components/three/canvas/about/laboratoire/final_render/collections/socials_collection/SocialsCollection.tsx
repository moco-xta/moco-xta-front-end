import React from 'react'
import * as THREE from 'three'

import { LogoGitHub } from '@/components/three/models/about/laboratoire/final_render/socials_collection/LogoGitHub'
import { LogoTwitter } from '@/components/three/models/about/laboratoire/final_render/socials_collection/LogoTwitter'

import { default as laboratoireFinalRenderConstants } from '@/constants/three/about/laboratoire/laboratoireFinalRenderConstants.json'

export default function SocialsCollection() {
  return (
    <>
      <LogoGitHub
        position={
          new THREE.Vector3(
            laboratoireFinalRenderConstants.SOCIALS_COLLECTION.LOGO_GITHUB.POSITION.X,
            laboratoireFinalRenderConstants.SOCIALS_COLLECTION.LOGO_GITHUB.POSITION.Y,
            laboratoireFinalRenderConstants.SOCIALS_COLLECTION.LOGO_GITHUB.POSITION.Z,
          )
        }
      />
      <LogoTwitter
        position={
          new THREE.Vector3(
            laboratoireFinalRenderConstants.SOCIALS_COLLECTION.LOGO_TWITTER.POSITION.X,
            laboratoireFinalRenderConstants.SOCIALS_COLLECTION.LOGO_TWITTER.POSITION.Y,
            laboratoireFinalRenderConstants.SOCIALS_COLLECTION.LOGO_TWITTER.POSITION.Z,
          )
        }
      />
    </>
  )
}
