import React from 'react'
import { Sky } from '@react-three/drei'

export default function RealTimeSky() {
  return (
    <Sky
      sunPosition={[1, 0, 0]}
      turbidity={8}
      rayleigh={6}
      mieCoefficient={0.005}
      mieDirectionalG={0.8}
      inclination={0}
      azimuth={0}
      /* distance={null} */
    />
  )
}
