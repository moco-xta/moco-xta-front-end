import React from 'react'

export default function Lights() {
  return (
    <>
      <ambientLight intensity={2} />
      <spotLight
        position={[5, 5, 5]}
        intensity={2}
        angle={0.3}
        penumbra={1}
        decay={0}
        castShadow
      />
      <spotLight
        position={[-5, 5, 5]}
        intensity={2}
        angle={0.3}
        penumbra={1}
        decay={0}
        castShadow
      />
      <spotLight
        position={[0, 0, 10]}
        intensity={2}
        angle={0.3}
        penumbra={1}
        decay={0}
        castShadow
      />
    </>
  )
}
