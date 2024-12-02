import React from 'react'

import GreetingCanvas from '@/components/three/canvas/home_canvas/hero/gretting_canvas/GreetingCanvas'
import MocoCanvas from '@/components/three/canvas/home_canvas/hero/moco_canvas/MocoCanvas'
import FrontEndDevelopperWithExtraSkillsCanvas from '@/components/three/canvas/home_canvas/hero/front_end_developper_with_extra_skills_canvas/FrontEndDevelopperWithExtraSkillsCanvas'

import { default as heroAnimationsConstants } from '@/constants/animations/home/heroAnimationsConstants.json'

export default function HeroSlice() {
  return (
    <>
      <section
        id='greeting_slice'
        className='fullscreen'
        style={{ zIndex: heroAnimationsConstants.Z_INDEXES.GREETING_SLICE, position: 'fixed' }}
      >
        <GreetingCanvas />
      </section>
      <section
        id='moco_slice'
        className='fullscreen'
        style={{ zIndex: heroAnimationsConstants.Z_INDEXES.MOCO_SLICE, position: 'fixed' }}
      >
        <MocoCanvas />
      </section>
      {/* <section
        id='front_end_developper_with_extra_skills_canvas'
        className='fullscreen'
        style={{ zIndex: heroAnimationsConstants.Z_INDEXES.FRONT_END_DEVELOPPER_WITH_EXTRA_SLICE, position: 'fixed' }}
      >
        <FrontEndDevelopperWithExtraSkillsCanvas />
      </section> */}
    </>
  )
}
