import React from 'react'

export default function Lightning() {
  return (
    <>
      <ambientLight intensity={0.25} />
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
