import React, { useEffect } from 'react'

import { DeviceMotionPermissionInterface } from '@/interfaces/new/aboutInterfaces'

import './index.scss'

export default function DeviceMotionPermission({
  permissionGranted,
  setPermissionGranted,
}: DeviceMotionPermissionInterface) {
  useEffect(() => {
    // @ts-ignore
    if (typeof DeviceMotionEvent.requestPermission === 'function') {
      // @ts-ignore
      DeviceMotionEvent.requestPermission()
        .then((permissionState: any) => {
          if (permissionState === 'granted') {
            setPermissionGranted(true)
          }
        })
        .catch(console.error)
    } else {
      setPermissionGranted(true)
    }
    return () => {}
  })

  function handlePermissionGranted() {
    // @ts-ignore
    DeviceMotionEvent.requestPermission()
      .then((permissionState: any) => {
        if (permissionState === 'granted') {
          setPermissionGranted(true)
          window.location.reload()
        }
      })
      .catch(console.error)
  }

  return (
    <>
      {!permissionGranted && (
        <div id='device_motion_permission_modal'>
          <h2>Allow access to device motion and orientation</h2>
          <p>
            This app requires access to device motion and orientation to
            function properly.
          </p>
          <button onClick={handlePermissionGranted}>Grant Permission</button>
        </div>
      )}
    </>
  )
}
