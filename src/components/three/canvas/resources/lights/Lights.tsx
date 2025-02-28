import React from 'react'

export default function Lights() {
  return (
    <>
      <ambientLight intensity={0.5} />
      <directionalLight
        position={[10, 10, 10]}
        intensity={1.25}
        castShadow
      />
      <directionalLight
        position={[-10, 10, 10]}
        intensity={1.25}
        castShadow
      />
      <directionalLight
        position={[0, 0, 10]}
        intensity={1.25}
        castShadow
      />
    </>
  )
}
