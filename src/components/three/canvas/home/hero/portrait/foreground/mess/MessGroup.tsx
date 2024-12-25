import React from 'react'

import ProfilPicture from './ProfilPicture'

import { getMessGroupDefaultValues } from '@/data/home/hero/three/portrait/foreground/mess/messGroupData'

export default function MessGroup() {
  return (
    <group {...getMessGroupDefaultValues}>
      <ProfilPicture />
    </group>
  )
}
