import React, { useEffect } from 'react'
import { useTranslations } from 'next-intl'

import { DeviceMotionPermissionInterface } from '@/interfaces/new/aboutInterfaces'

import './index.scss'

export default function DeviceMotionPermission({
  permissionGranted,
  setPermissionGranted,
}: DeviceMotionPermissionInterface) {
  const t = useTranslations('ABOUT')

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
          <h2>
            {t(
              'GRANT_PERMISSION.ALLOW_ACCESS_TO_DEVICE_MOTION_AND_ORIENTATION',
            )}
          </h2>
          <p id='this_app_requires_access'>
            {t('GRANT_PERMISSION.THIS_APP_REQUIRES_ACCESS')}
          </p>
          <button
            id='grant_permission_button'
            onClick={handlePermissionGranted}
          >
            {t('GRANT_PERMISSION.GRANT_PERMISSION')}
          </button>
        </div>
      )}
    </>
  )
}
