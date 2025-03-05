import React from 'react'

export default function Lights() {
  return (
    <>
      <ambientLight intensity={1} />
      <directionalLight
        intensity={3}
        position={[-25, 60, -60]}
      />
    </>
  )
}
