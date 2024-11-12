import React from 'react'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'

import Parallax from '@/components/parallax'
import MainSkillsCanvas from '@/components/three/canvas/main_skills_canvas/MainSkillsCanvas'

import './index.scss'
import { gilroyBoldFont, gilroyHeavyFont, gilroyRegularFont } from '@/assets/fonts/ttf'

export default function MainSkillsSlice() {
  useGSAP(() => {
    gsap.from('#what_are_my_skills', {
      // transform: 'perspective(0) rotateX(0deg) rotateY(0deg)',
      opacity: 0,
      translateX: 200,
      transform: 'rotateX(-45deg) skew(45deg)',
      // opacity: 0,
      // duration: 0.5,
      scrollTrigger: {
        trigger: '#main_skills_slice',
        scroller: 'body',
        start: 'top 50%',
        end: 'bottom 50vh',
        // toggleActions: 'restart pause reverse pause'
        scrub: true,
        markers: true,
      },
    })
    gsap.from('#main_framework_text', {
      translateY: 100,
      opacity: 0,
      delay: 1.5,
      duration: 0.5,
      scrollTrigger: {
        trigger: '#main_skills_slice',
        scroller: 'body',
        start: 'top 20%',
        // end: 'bottom -50%',
        // toggleActions: 'restart pause reverse pause'
        // scrub: true,
      },
    })
  })

  return (
    <Parallax
      id='main_skills_slice_parallax'
      speed={0}
      style={{
        alignSelf: 'flex-start',
      }}
    >
      <section
        id='main_skills_slice'
        className='fullscreen'
      >
        <div id='main_skills_content'>
          <h1
            id='what_are_my_skills'
            className={`${gilroyHeavyFont.className}`}
          >
            <span id='what'>What</span>
            <br />
            are my
            <br />
            skills?
          </h1>
          {/* <div id='main_frameworks'>
            <MainSkillsCanvas />
            <p id='main_framework_text'>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
              has been the industry's standard dummy text ever since the 1500s, when an unknown
              printer took a galley of type and scrambled it to make a type specimen book. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
              has been the industry's standard dummy text ever since the 1500s, when an unknown
              printer took a galley of type and scrambled it to make a type specimen book.
            </p>
          </div>
          <div id='main_frameworks'>
            <MainSkillsCanvas />
            <p id='main_framework_text'>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
              has been the industry's standard dummy text ever since the 1500s, when an unknown
              printer took a galley of type and scrambled it to make a type specimen book. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
              has been the industry's standard dummy text ever since the 1500s, when an unknown
              printer took a galley of type and scrambled it to make a type specimen book.
            </p>
          </div> */}
        </div>
      </section>
    </Parallax>
  )
}
