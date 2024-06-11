import React from 'react'
import { Box } from '@react-three/drei'

import Ground from './Ground'
import { Laboratoire } from '../../models/about/Laboratoire'

export default function AboutScene() {
  return (
    <>
      <Laboratoire />
      <Ground />
    </>
  )
}
