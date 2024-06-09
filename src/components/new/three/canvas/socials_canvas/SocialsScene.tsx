import React from 'react'

import { LogoTwitter } from '../../models/logos/LogoTwitter'
import { LogoLinkedIn } from '../../models/logos/LogoLinkedIn'
import { LogoGitHub } from '../../models/logos/LogoGitHub'

export default function SocialsScene() {
  return (
    <>
      <LogoTwitter />
      <LogoLinkedIn position={[2.5, 0, 0]} />
      <LogoGitHub position={[-2.5, 0, 0]} />
    </>
  )
}
