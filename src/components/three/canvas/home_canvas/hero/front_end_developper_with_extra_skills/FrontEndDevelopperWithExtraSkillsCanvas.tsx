import React, { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'

import Camera from './Camera'
import Lights from './Lights'
import FrontEndDevelopperWithExtraSkillsScene from './FrontEndDevelopperWithExtraSkillsScene'

import { default as frontEndDevelopperWithExtraSkillsCanvasConstants } from '@/constants/canvas/home/frontEndDevelopperWithExtraSkillsCanvasConstants.json'

export default function FrontEndDevelopperWithExtraSkillsCanvas() {
  return (
    <section
      id='front_end_developper_with_extra_skills_canvas'
      className='fullscreen'
      style={{ zIndex: 2, position: 'fixed' }}
    >
      <Canvas
        dpr={frontEndDevelopperWithExtraSkillsCanvasConstants.CANVAS.DPR}
        legacy={frontEndDevelopperWithExtraSkillsCanvasConstants.CANVAS.LEGACY}
        shadows
        gl={{
          antialias: frontEndDevelopperWithExtraSkillsCanvasConstants.CANVAS.GL.ANTIALIAS,
          alpha: frontEndDevelopperWithExtraSkillsCanvasConstants.CANVAS.GL.ALPHA,
          powerPreference:
            frontEndDevelopperWithExtraSkillsCanvasConstants.CANVAS.GL.POWER_PREFERENCE,
        }}
      >
        <Camera />
        <OrbitControls />
        <Lights />
        <Suspense fallback={null}>
          <FrontEndDevelopperWithExtraSkillsScene />
        </Suspense>
      </Canvas>
    </section>
  )
}
