import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { AppDispatch, RootState } from '@/redux/store'
import { setLocation } from '@/redux/slice/aboutSlice'

export default function useLocation() {
  const dispatch = useDispatch<AppDispatch>()
  const { location } = useSelector((state: RootState) => state.about)

  /* useEffect(() => {
    console.log(`Latitude: ${location.latitude}, Longitude: ${location.longitude}`)
  }, [location.latitude, location.longitude]) */

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        dispatch(
          setLocation({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          }),
        )
      })
    } else {
      /* console.log('Geolocation is not supported by this browser.') */
    }
  }, [dispatch])
}
