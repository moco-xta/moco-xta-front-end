import React from 'react'

import AnimatedPath from '@/components/three/lib/animated_path/AnimatedPath'

import { metroLinesData } from '@/data/introduction/metroLinesData'

import './index.scss'

export default function ParisMetroMap() {
  return (
    <>
      {metroLinesData.map((line) => (
        <div
          key={line.id}
          id='paris_metro_map'
        >
          <AnimatedPath
            id={line.id}
            path={line.d}
            stroke={line.color}
            strokeWidth={1}
            maxWidth={600}
          />
        </div>
      ))}
    </>
  )
}
