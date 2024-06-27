import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useTranslations } from 'next-intl'

import { AppDispatch, RootState } from '@/redux/store'
import { setAccessToDeviceMotionAndOrientationGranted } from '@/redux/slice/aboutSlice'

import './index.scss'

export default function DeviceMotionPermission() {
  const t = useTranslations('ABOUT')

  const dispatch = useDispatch<AppDispatch>()
  const { accessToDeviceMotionAndOrientationGranted } = useSelector((state: RootState) => state.about)

  useEffect(() => {
    // @ts-ignore
    if (typeof DeviceMotionEvent.requestPermission === 'function') {
      // @ts-ignore
      DeviceMotionEvent.requestPermission()
        .then((permissionState: any) => {
          if (permissionState === 'granted') {
            dispatch(setAccessToDeviceMotionAndOrientationGranted(true))
          }
        })
        .catch(console.error)
    } else {
      dispatch(setAccessToDeviceMotionAndOrientationGranted(true))
    }
    return () => {}
  })

  function handlePermissionGranted() {
    // @ts-ignore
    DeviceMotionEvent.requestPermission()
      .then((permissionState: any) => {
        if (permissionState === 'granted') {
          dispatch(setAccessToDeviceMotionAndOrientationGranted(true))
          window.location.reload()
        }
      })
      .catch(console.error)
  }

  return (
    <>
      {!accessToDeviceMotionAndOrientationGranted && (
        <div id='device_motion_permission_modal'>
          <h2>{t('GRANT_PERMISSION.ALLOW_ACCESS_TO_DEVICE_MOTION_AND_ORIENTATION')}</h2>
          <p id='this_app_requires_access'>{t('GRANT_PERMISSION.THIS_APP_REQUIRES_ACCESS')}</p>
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
