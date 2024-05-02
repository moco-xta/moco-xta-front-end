import React from 'react'

export default function Lights() {
  const INTENSITY = 40
  const MAP_SIZE = [2048, 2048]
  const SHADOW_CAMERA_FAR = 30
  const SHADOW_CAMERA_LEFT = -20
  const SHADOW_CAMERA_RIGHT = 20
  const SHADOW_CAMERA_TOP = 20
  const SHADOW_CAMERA_BOTTOM = -20
  const SHADOW_RADIUS = 10
  const SHADOW_BIAS = 0.005
  const DISTANCE = 0
  const DECAY = 1.5

  return (
    <>
      <ambientLight intensity={0.3} />
      <pointLight
        position={[10, 26, 10]}
        intensity={INTENSITY}
        castShadow
        shadow-mapSize={MAP_SIZE}
        shadow-camera-far={SHADOW_CAMERA_FAR}
        shadow-camera-left={SHADOW_CAMERA_LEFT}
        shadow-camera-right={SHADOW_CAMERA_RIGHT}
        shadow-camera-top={SHADOW_CAMERA_TOP}
        shadow-camera-bottom={SHADOW_CAMERA_BOTTOM}
        shadow-radius={SHADOW_RADIUS}
        shadow-bias={SHADOW_BIAS}
        distance={DISTANCE}
        decay={DECAY}
      />
      <pointLight
        position={[-10, 26, 10]}
        intensity={INTENSITY}
        castShadow
        shadow-mapSize={MAP_SIZE}
        shadow-camera-far={SHADOW_CAMERA_FAR}
        shadow-camera-left={SHADOW_CAMERA_LEFT}
        shadow-camera-right={SHADOW_CAMERA_RIGHT}
        shadow-camera-top={SHADOW_CAMERA_TOP}
        shadow-camera-bottom={SHADOW_CAMERA_BOTTOM}
        shadow-radius={SHADOW_RADIUS}
        shadow-bias={SHADOW_BIAS}
        distance={DISTANCE}
        decay={DECAY}
      />
      <pointLight
        position={[10, 26, -10]}
        intensity={INTENSITY}
        castShadow
        shadow-mapSize={MAP_SIZE}
        shadow-camera-far={SHADOW_CAMERA_FAR}
        shadow-camera-left={SHADOW_CAMERA_LEFT}
        shadow-camera-right={SHADOW_CAMERA_RIGHT}
        shadow-camera-top={SHADOW_CAMERA_TOP}
        shadow-camera-bottom={SHADOW_CAMERA_BOTTOM}
        shadow-radius={SHADOW_RADIUS}
        shadow-bias={SHADOW_BIAS}
        distance={DISTANCE}
        decay={DECAY}
      />
      <pointLight
        position={[-10, 26, -10]}
        intensity={INTENSITY}
        castShadow
        shadow-mapSize={MAP_SIZE}
        shadow-camera-far={SHADOW_CAMERA_FAR}
        shadow-camera-left={SHADOW_CAMERA_LEFT}
        shadow-camera-right={SHADOW_CAMERA_RIGHT}
        shadow-camera-top={SHADOW_CAMERA_TOP}
        shadow-camera-bottom={SHADOW_CAMERA_BOTTOM}
        shadow-radius={SHADOW_RADIUS}
        shadow-bias={SHADOW_BIAS}
        distance={DISTANCE}
        decay={DECAY}
      />
    </>
  )
}
