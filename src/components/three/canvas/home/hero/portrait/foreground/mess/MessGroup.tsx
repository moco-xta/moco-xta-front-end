import React from 'react'

import ChristusComponent from './ChristusComponent'
import HeartComponent from './HeartComponent'
import ProfilePicture from './ProfilePicture'

import { getMessGroupDefaultValues } from '@/data/home/hero/three/portrait/foreground/mess/messGroupData'

export default function MessGroup() {
  return (
    <group {...getMessGroupDefaultValues}>
      <ChristusComponent />
      <HeartComponent />
      <ProfilePicture />
    </group>
  )
}
