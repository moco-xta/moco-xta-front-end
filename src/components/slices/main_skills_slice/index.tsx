import React from 'react'
import Image from 'next/image'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'

import Parallax from '@/components/parallax'

import { default as imgConstants } from '@/constants/assets/imgConstants.json'

import './index.scss'
import { gilroyHeavyFont } from '@/assets/fonts/ttf'

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
        trigger: '#what_are_my_skills',
        scroller: 'body',
        start: 'top 50%',
        end: 'bottom 50%',
        // toggleActions: 'restart pause reverse pause'
        scrub: true,
        markers: true,
      },
    })
    /* gsap.from('#main_framework_text', {
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
    }) */
    gsap.from('.main_skills_detail', {
      translateY: '40vh',
      ease: 'power2.out',
      scrollTrigger: {
        trigger: '#main_skills_details_wrapper',
        scroller: 'body',
        start: 'top 120%',
        end: 'bottom -20%',
        scrub: true,
      },
    })
    gsap.from('#logo_nextjs_container', {
      paddingTop: '80vh',
      ease: 'power2.out',
      scrollTrigger: {
        trigger: '#main_skills_details_wrapper',
        scroller: 'body',
        start: 'top 120%',
        end: 'bottom -20%',
        scrub: true,
      },
    })
    gsap.from('#logo_angular_container', {
      paddingTop: '40vh',
      ease: 'power2.out',
      scrollTrigger: {
        trigger: '#main_skills_details_wrapper',
        scroller: 'body',
        start: 'top 120%',
        end: 'bottom -20%',
        scrub: true,
      },
    })
  })

  return (
    <Parallax
      id='main_skills_slice_parallax'
      speed={-1}
      style={{
        alignSelf: 'flex-start',
        background: 'purple'
      }}
    >
      <section
        id='main_skills_slice'
        // className='fullscreen'
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
          <div
            id='main_skills_details_wrapper'
            style={{
              marginTop: '-15vh',
            }}
          >
            <div
              id='logo_nextjs_container'
              /* style={{
                paddingTop: '20vh',
              }} */
            >
              <Image
                id='logo_nextjs'
                className='main_skills_detail'
                src={imgConstants.HERO.MAIN_SKILLS.LOGO_NEXTJS}
                width={838}
                height={942}
                style={{
                  maxWidth: '25vw',
                  height: 'auto',
                }}
                alt='Logo Nextjs'
              />
            </div>
            <div
              id='logo_angular_container'
              /* style={{
                paddingTop: '10vh',
              }} */
            >
              <Image
                id='logo_angular'
                className='main_skills_detail'
                src={imgConstants.HERO.MAIN_SKILLS.LOGO_ANGULAR}
                width={781}
                height={952}
                style={{
                  maxWidth: '25vw',
                  height: 'auto',
                }}
                alt='Logo Angular'
              />
            </div>
            <div id='logo_spring_container'>
              <Image
                id='logo_spring'
                className='main_skills_detail'
                src={imgConstants.HERO.MAIN_SKILLS.LOGO_SPRING}
                width={855}
                height={942}
                style={{
                  maxWidth: '25vw',
                  height: 'auto',
                }}
                alt='Logo Spring'
              />
            </div>
          </div>
        </div>
      </section>
    </Parallax>
  )
}
