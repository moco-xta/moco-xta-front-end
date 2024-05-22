import React from 'react'

import { LogoAngular, LogoNextjs, LogoSpring } from '../../models/logos'

export default function MainSkillsScene() {
  return (
    <>
      <LogoNextjs position={[-2.5, 0, 0]} />
      <LogoAngular />
      <LogoSpring position={[2.5, 0, 0]} />
    </>
  )
}
