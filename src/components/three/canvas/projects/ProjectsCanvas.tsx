import React from 'react'

export type TProjectCanvas = {
  currentProject: number
  currentCompany: number
  // currentLocation: number
}

export default function ProjectsCanvas({
  currentProject,
  currentCompany,
  // currentLocation,
}: TProjectCanvas) {
  return (
    <div>
      <p>Current Project: {currentProject}</p>
      <p>Current Company: {currentCompany}</p>
    </div>
  )
}
