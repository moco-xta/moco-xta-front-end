'use client'

import React, { useCallback, useEffect, useState } from 'react'
import moment from 'moment'

import { projectsData } from '@/data/projectsData'

import useScroll from '@/hooks/useScroll'

import { getDifferenceBetweenTwoDatesInDays } from '@/helpers/dateHelpers'

/* import ProjectsContent from './projects_content' */
/* import ProjectCanvas from '@/components/r3f/canvas/projects_canvas' */
import Timeline from './timeline'

import './index.scss'

export default function ProjectsSlice() {
  const { y, offsetHeight, clientHeight } = useScroll()

  const [currentDate, setCurrentDate] = useState<Date>()
  const [daysDifference] = useState<number>(getDifferenceBetweenTwoDatesInDays(new Date(), new Date(projectsData[projectsData.length - 1].dates.from)))
  const [deltaPerDay, setDeltaPerDay] = useState<number>(0)

  useEffect(() => {
    if(offsetHeight && clientHeight) {
      setCurrentDate(new Date())
      setDeltaPerDay((offsetHeight - clientHeight) / daysDifference)
    }
  }, [offsetHeight, clientHeight])

  useEffect(() => {
    const differenceBetweenTodayAndCurrentDate = Math.round(y / deltaPerDay)
    setCurrentDate(new Date(new Date().setDate(new Date().getDate() - differenceBetweenTodayAndCurrentDate)))
  }, [y])

  if(!daysDifference && !deltaPerDay) return null
  
  return (
    <>
      <div id='project_slice'>
        {moment(currentDate).format('dd-DD-MM-YYYY')}
        <Timeline />
      </div>
      {/* <div id='projects_content'>
        <ProjectsContent />
      </div>
      <div id='projects_canvas'>
        <ProjectCanvas />
      </div> */}
    </>
  )
}