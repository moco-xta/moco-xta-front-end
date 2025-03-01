import React from 'react'

export default function Lights() {
  return (
    <>
      <ambientLight intensity={1} />
      <spotLight
        position={[4, 4, 4]}
        intensity={0.85}
        angle={0.3}
        penumbra={1}
        decay={0}
        castShadow
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
        shadow-camera-near={0.1}
        shadow-camera-far={8}
        shadow-camera-left={-5}
        shadow-camera-right={5}
        shadow-camera-top={5}
        shadow-camera-bottom={-5}
        shadow-radius={1}
        shadow-bias={0.1}
      />
      <spotLight
        position={[-4, 4, 4]}
        intensity={0.85}
        angle={0.3}
        penumbra={1}
        decay={0}
        castShadow
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
        shadow-camera-near={0.1}
        shadow-camera-far={8}
        shadow-camera-left={-5}
        shadow-camera-right={5}
        shadow-camera-top={5}
        shadow-camera-bottom={-5}
        shadow-radius={1}
        shadow-bias={0.1}
      />
      <spotLight
        position={[0, 0, 10]}
        intensity={0.85}
        angle={0.3}
        penumbra={1}
        decay={0}
        castShadow
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
        shadow-camera-near={0.1}
        shadow-camera-far={8}
        shadow-camera-left={-5}
        shadow-camera-right={5}
        shadow-camera-top={5}
        shadow-camera-bottom={-5}
        shadow-radius={1}
        shadow-bias={0.1}
      />
    </>
  )
}
