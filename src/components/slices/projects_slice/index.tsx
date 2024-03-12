'use client'

import React, { useCallback, useEffect, useState } from 'react'
import moment from 'moment'

/* import ProjectsContent from './projects_content' */
/* import ProjectCanvas from '@/components/r3f/canvas/projects_canvas' */
import Timeline from './timeline'

import './index.scss'

export default function ProjectsSlice() {
  const [y, setY] = useState<number>(0)
  const [currentDate, setCurrentDate] = useState<Date>(new Date())

  useEffect(() => {
    console.log('y', y)
  }, [y])

  const handleScroll = useCallback(
    (e: any) => {
      const window = e.currentTarget;
      if (y > window.scrollY) {
        console.log("scrolling up");
        setCurrentDate(new Date(currentDate.setDate(currentDate.getDate() + 1)))
      } else if (y < window.scrollY) {
        console.log("scrolling down");
        setCurrentDate(new Date(currentDate.setDate(currentDate.getDate() - 1)))
      }
      setY(window.scrollY);
    }, [y]
  );

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [handleScroll])

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