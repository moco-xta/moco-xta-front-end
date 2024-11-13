import React from 'react'
import Image from 'next/image'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'

import { default as imgConstants } from '@/constants/assets/imgConstants.json'

import './index.scss'

export default function Frameworks() {
  useGSAP(() => {
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
    <div
      id='main_skills_details_wrapper'
      style={{
        marginTop: '-15vh',
      }}
    >
      <div id='logo_nextjs_container'>
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
      <div id='logo_angular_container'>
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
  )
}
