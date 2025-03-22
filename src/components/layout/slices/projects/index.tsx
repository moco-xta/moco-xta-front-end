import React from 'react'

import CurrentDate from './current_date'

import { projectsData } from '@/data/projects/projectsData'

import { isValidDate } from '@/helpers/dateHelpers'

import './index.scss'

export type TProjectsSlice = {
  currentDate: Date
  currentProject: number
  currentCompany: number
}

export default function ProjectsSlice({
  currentDate,
  currentProject,
  currentCompany,
}: TProjectsSlice) {
  return (
    <>
      {isValidDate(currentDate) && (
        <CurrentDate
          currentProject={currentProject}
          projectsNumber={projectsData.length}
          currentDate={currentDate}
        />
      )}
    </>
  )
}
