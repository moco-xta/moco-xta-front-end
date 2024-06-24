import React from 'react'

import { LogoGitHub } from '../../models/about/LogoGitHub'
import { LogoTwitter } from '../../models/about/LogoTwitter'

export default function Socials() {
  return (
    <>
      <LogoGitHub position={[7.329, 14.798, -13.842]} />
      <LogoTwitter position={[-2.609, 12.292, -10.3]} />
    </>
  )
}
