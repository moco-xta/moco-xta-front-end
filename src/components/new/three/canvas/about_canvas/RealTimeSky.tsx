import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import * as THREE from 'three'
import { Sky } from '@react-three/drei'
import { GetSunPositionResult, GetTimesResult } from 'suncalc'

import { AppDispatch, RootState } from '@/redux/store'
import { setLocation } from '@/redux/slice/aboutSlice'

const SunCalc = require('suncalc')

export default function RealTimeSky() {
  const dispatch = useDispatch<AppDispatch>()
  const { location } = useSelector((state: RootState) => state.about)

  const [time, setTime] = useState<GetTimesResult>(null!)
  const [sunriseStr, setSunriseStr] = useState<string>('')
  const [sunrisePos, setSunrisePos] = useState<GetSunPositionResult>({
    altitude: 0,
    azimuth: 0,
  })
  const [sunriseAzimuth, setSunriseAzimuth] = useState<number>(0)

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        dispatch(
          setLocation({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          }),
        )
        /* console.log(`Latitude: ${location.latitude}, Longitude: ${location.longitude}`) */
      })
    } else {
      /* console.log('Geolocation is not supported by this browser.') */
    }
  }, [dispatch])

  useEffect(() => {
    /* console.log('GET TIME') */
    /* console.log('location', location) */
    setTime(SunCalc.getTimes(new Date(), location.latitude, location.longitude))
  }, [location.latitude, location.longitude])

  useEffect(() => {
    if (time) {
      /* console.log('time', time) */
      setSunriseStr(time.sunrise.getHours() + ':' + time.sunrise.getMinutes())
      setSunrisePos(SunCalc.getPosition(time.sunrise, location.latitude, location.longitude))
    }
  }, [time, location.latitude, location.longitude])

  /* useEffect(() => {
    console.log('sunriseStr', sunriseStr)
    console.log('sunrisePos', sunrisePos)
  }, [sunriseStr]) */

  useEffect(() => {
    if (sunrisePos) setSunriseAzimuth((sunrisePos.azimuth * 180) / Math.PI)
  }, [sunrisePos])

  /* useEffect(() => {
    console.log('sunriseAzimuth', sunriseAzimuth)
  }, [sunriseAzimuth]) */

  return (
    <Sky
      /* sunPosition={[1, 0, 0]} */
      /* turbidity={8}
      rayleigh={6}
      mieCoefficient={0.005}
      mieDirectionalG={0.8} */
      inclination={THREE.MathUtils.radToDeg(sunrisePos.altitude)}
      azimuth={sunriseAzimuth}
      /* distance={null} */
    />
  )
}
