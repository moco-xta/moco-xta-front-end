import React from 'react'
import * as THREE from 'three'

import LogoReact from '@/components/three/models/logos/LogoReact'
import LogoReactThreeDrei from '@/components/three/models/logos/LogoReactThreeDrei'
import LogoRedux from '@/components/three/models/logos/LogoRedux'
import LogoSass from '@/components/three/models/logos/LogoSass'

export default function LogosBackgroundGroup() {
  return (
    <>
      <LogoReact position={new THREE.Vector3(-6, 5, -5)} />
      <LogoReactThreeDrei position={new THREE.Vector3(-9, -1, -4)} />
      <LogoRedux position={new THREE.Vector3(-7, 2, -2)} />
      <LogoSass position={new THREE.Vector3(-9, 5, 0)} />
    </>
  )
}
