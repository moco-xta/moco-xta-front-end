import React, { useRef } from 'react'
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api'

import { ProjectsCanvas } from '@/components/three/canvas'
import Content from './content'
import CurrentDate from './current_date'

import useProjectsTimeline from '@/hooks/useProjectsTimeline'

import { isValidDate } from '@/helpers/dateHelpers'

import { projectsData } from '@/data/projects/projectsData'
import { companiesData } from '@/data/projects/companiesData'
// import { locationsData } from '@/data/projects/locationsData'

import './index.scss'

export default function ProjectsPage() {
  const { /* snapHeights, */ currentDate, currentProject, currentCompany /* , currentLocation */ } =
    useProjectsTimeline(projectsData, companiesData /* , locationsData */)

  const googleMapContainerRef = useRef<HTMLDivElement>(null!)

  const containerStyle = {
    width: '100%',
    height: '400px',
  }

  const center = {
    lat: 37.7749, // Latitude of the center
    lng: -122.4194, // Longitude of the center
  }

  return (
    <>
      <div id='projects_page'>
        <div id='projects_canvas'>
          <ProjectsCanvas
            currentProject={currentProject}
            currentCompany={currentCompany}
            // currentLocation={currentLocation}
          />
        </div>
        <Content
          // snapHeights={snapHeights}
          currentProject={currentProject}
          currentCompany={currentCompany}
        />
        {isValidDate(currentDate) && <CurrentDate currentDate={currentDate} />}
      </div>
      <div
        ref={googleMapContainerRef}
        id='google_map_container'
        style={{
          /* display: 'none',  */ width: containerStyle.width,
          height: containerStyle.height,
        }}
      >
        <LoadScript googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || ''}>
          <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={10}
          >
            {/* Add markers or other components here */}
            <Marker position={center} />
          </GoogleMap>
        </LoadScript>
      </div>
    </>
  )
}
