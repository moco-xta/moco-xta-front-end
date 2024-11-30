import React from 'react'

import GreetingCanvas from '@/components/three/canvas/home_canvas/hero/gretting_canvas/GreetingCanvas'
import FrontEndDevelopperWithExtraSkillsCanvas from '@/components/three/canvas/home_canvas/hero/front_end_developper_with_extra_skills_canvas/FrontEndDevelopperWithExtraSkillsCanvas'

export default function HeroSlice() {
  return (
    <>
      <section
        id='greeting_slice'
        className='fullscreen'
        style={{ zIndex: 1, position: 'fixed' }}
      >
        <GreetingCanvas />
      </section>
      <section
        id='front_end_developper_with_extra_skills_canvas'
        className='fullscreen'
        style={{ zIndex: 2, position: 'fixed' }}
      >
        <FrontEndDevelopperWithExtraSkillsCanvas />
      </section>
    </>
  )
}
