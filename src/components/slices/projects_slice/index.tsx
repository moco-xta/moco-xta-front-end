'use client'

import React, {
  createRef,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from 'react'

import { projectsData } from '@/data/projectsData'

import useScroll from '@/hooks/useScroll'

import { getDifferenceBetweenTwoDatesInDays } from '@/helpers/dateHelpers'

/* import ProjectsContent from './projects_content' */
/* import ProjectCanvas from '@/components/r3f/canvas/projects_canvas' */
import Timeline from './timeline'
import { LastProjectsCard } from '@/components/cards/last_projects_card'

import './index.scss'

export default function ProjectsSlice() {
  const { y, offsetHeight, clientHeight, scrollFlow } = useScroll()

  const [currentProject, setCurrentProject] = useState<number>(0)
  const [currentDate, setCurrentDate] = useState<Date>(new Date())
  const [daysDifference] = useState<number>(
    getDifferenceBetweenTwoDatesInDays(
      new Date(),
      new Date(projectsData[projectsData.length - 1].dates.from),
    ),
  )
  const [deltaPerDay, setDeltaPerDay] = useState<number>(0)

  const projectsRefs = useMemo(
    () =>
      projectsData.map(() => ({
        ref: createRef<HTMLDivElement>(),
      })),
    [],
  )

  useEffect(() => {
    if (offsetHeight && clientHeight) {
      setCurrentDate(new Date())
      setDeltaPerDay((offsetHeight - clientHeight) / daysDifference)

      projectsRefs.forEach(({ ref }, index) => {
        if (ref.current) ref.current.style.top = `${(index + 1) * 400}px`
        console.log('ref', ref.current)
      })
    }
  }, [offsetHeight, clientHeight])

  useEffect(() => {
    const differenceBetweenTodayAndCurrentDate = Math.round(y / deltaPerDay)
    setCurrentDate(
      new Date(
        new Date().setDate(
          new Date().getDate() - differenceBetweenTodayAndCurrentDate,
        ),
      ),
    )
  }, [y])

  useEffect(() => {
    projectsData.forEach((project, index) => {
      if (
        currentDate.getTime() > new Date(project.dates.from).getTime() &&
        currentDate.getTime() < new Date(project.dates.to).getTime()
      )
        setCurrentProject(index)
    })
  }, [currentDate])

  useEffect(() => {
    console.log('currentProject', currentProject)

    projectsRefs.forEach(({ ref }) => {
      // @ts-ignore
      if (ref.current) {
        console.log('ref.current.style.top', parseInt(ref.current.style.top))
        ref.current.style.top = `${scrollFlow === 'up' ? parseInt(ref.current.style.top) - 400 : parseInt(ref.current.style.top) + 400}px`
      }
      console.log('ref', ref.current)
    })
  }, [currentProject])

  if (!daysDifference && !deltaPerDay) return null

  return (
    <>
      <div id='project_slice'>
        <div id='timeline_container'>
          <Timeline currentDate={currentDate} />
        </div>
        <div id='projects_container'>
          {projectsRefs.map(({ ref }, index) => (
            <LastProjectsCard
              ref={ref}
              key={`last_projects_card_${index}`}
              content={projectsData[index]}
            />
          ))}
        </div>
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
