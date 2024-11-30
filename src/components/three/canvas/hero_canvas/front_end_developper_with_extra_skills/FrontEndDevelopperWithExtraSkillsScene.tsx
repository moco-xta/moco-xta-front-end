import React from 'react'
import * as THREE from 'three'

import MacBookPro from './MacBookPro'
import WithExtraSkills from './WithExtraSkills'

export default function FrontEndDevelopperWithExtraSkillsScene() {
  return (
    <group
      position={new THREE.Vector3(0, -5, 0)}
      scale={0.5}
    >
      <MacBookPro />
      <WithExtraSkills />
    </group>
  )
}
