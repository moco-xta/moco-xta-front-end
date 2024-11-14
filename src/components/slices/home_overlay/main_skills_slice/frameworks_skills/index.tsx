import React from 'react'
import Image from 'next/image'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'

import { default as imgConstants } from '@/constants/assets/imgConstants.json'

import './index.scss'

import {
  frameworkSkillsAnimation,
  logoAngularAnimation,
  logoSpringAnimation,
} from 'animations/gsap/main_skills'

export default function FrameworksSkills() {
  useGSAP(() => {
    gsap.from(frameworkSkillsAnimation.selector, frameworkSkillsAnimation.params)
    gsap.from(logoAngularAnimation.selector, logoAngularAnimation.params)
    gsap.from(logoSpringAnimation.selector, logoSpringAnimation.params)
  })

  return (
    <div id='framework_skills_wrapper'>
      <div id='logo_spring_container'>
        <Image
          id='logo_spring'
          className='framework_skill'
          src={imgConstants.HERO.MAIN_SKILLS.FRAMEWORKS.LOGO_SPRING}
          width={855}
          height={942}
          alt='Logo Spring'
        />
      </div>
      <div id='logo_angular_container'>
        <Image
          id='logo_angular'
          className='framework_skill'
          src={imgConstants.HERO.MAIN_SKILLS.FRAMEWORKS.LOGO_ANGULAR}
          width={781}
          height={952}
          alt='Logo Angular'
        />
      </div>
      <div id='logo_nextjs_container'>
        <Image
          id='logo_nextjs'
          className='framework_skill'
          src={imgConstants.HERO.MAIN_SKILLS.FRAMEWORKS.LOGO_NEXTJS}
          width={838}
          height={942}
          alt='Logo Nextjs'
        />
      </div>
    </div>
  )
}
