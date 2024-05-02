import React, { Suspense, useState } from 'react'
import { Canvas } from '@react-three/fiber'
import { DeviceOrientationControls, PerspectiveCamera } from '@react-three/drei'
import { Physics } from '@react-three/rapier'

import AboutScene from './AboutScene'
import DeviceMotionPermission from './DeviceMotionPermission'

import { default as aboutConstants } from '@/constants/canvas/aboutConstants.json'

export default function AboutMobileCanvas() {
  const [permissionGranted, setPermissionGranted] = useState(false)

  return (
    <>
      {permissionGranted ? (
        <Canvas
          dpr={aboutConstants.CANVAS.DPR}
          shadows
          gl={{
            antialias: aboutConstants.CANVAS.GL.ANTIALIAS,
            alpha: aboutConstants.CANVAS.GL.ALPHA,
            powerPreference: aboutConstants.CANVAS.GL.POWER_PREFERENCE,
          }}
        >
          <PerspectiveCamera
            makeDefault
            aspect={1200 / 600}
            fov={55}
            position={[0, 13, 0]}
            rotation={[0, 0, 0]}
          />
          <DeviceOrientationControls />
          <ambientLight intensity={0.5} />
          <pointLight
            position={[10, 10, 10]}
            intensity={20}
            castShadow
          />
          <Suspense fallback={null}>
            <Physics debug>
              <AboutScene />
            </Physics>
          </Suspense>
        </Canvas>
      ) : (
        <DeviceMotionPermission
          permissionGranted={permissionGranted}
          setPermissionGranted={setPermissionGranted}
        />
      )}
    </>
  )
}
