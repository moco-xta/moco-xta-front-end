import React from 'react'
import Image from 'next/image'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'

import { default as imgConstants } from '@/constants/assets/imgConstants.json'

import './index.scss'

export default function ThreeDSkills() {
  useGSAP(() => {
    gsap.from('.three_d_skill', {
      translateY: '40vh',
      ease: 'power2.out',
      scrollTrigger: {
        trigger: '#three_d_skills_wrapper',
        scroller: 'body',
        start: 'top 120%',
        end: 'bottom -20%',
        scrub: true,
      },
    })
    gsap.from('#logo_babylonjs_container', {
      paddingTop: '40vh',
      ease: 'power2.out',
      scrollTrigger: {
        trigger: '#three_d_skills_wrapper',
        scroller: 'body',
        start: 'top 120%',
        end: 'bottom -20%',
        scrub: true,
      },
    })
    gsap.from('#logo_webgl_container', {
      paddingTop: '80vh',
      ease: 'power2.out',
      scrollTrigger: {
        trigger: '#three_d_skills_wrapper',
        scroller: 'body',
        start: 'top 120%',
        end: 'bottom -20%',
        scrub: true,
      },
    })
  })

  return (
    <div id='three_d_skills_wrapper'>
      {/* <div id='logo_blender_container'>
        <Image
          id='logo_blender'
          className='three_d_skill'
          src={imgConstants.HERO.MAIN_SKILLS.THREE_D.LOGO_BLENDER}
          width={1088}
          height={1015}
          style={{
            maxWidth: '25vw',
            height: 'auto',
          }}
          alt='Logo Blender'
        />
      </div> */}
      <div id='logo_react_three_drei_container'>
        <Image
          id='logo_react_three_drei'
          className='three_d_skill'
          src={imgConstants.HERO.MAIN_SKILLS.THREE_D.LOGO_REACT_THREE_DREI}
          width={969}
          height={482}
          style={{
            maxWidth: '25vw',
            height: 'auto',
          }}
          alt='Logo React-Three-Drei'
        />
      </div>
      <div id='logo_babylonjs_container'>
        <Image
          id='logo_babylonjs'
          className='three_d_skill'
          src={imgConstants.HERO.MAIN_SKILLS.THREE_D.LOGO_BABYLONJS}
          width={682}
          height={711}
          style={{
            maxWidth: '25vw',
            height: 'auto',
          }}
          alt='Logo BabylonJS'
        />
      </div>
      <div id='logo_webgl_container'>
        <Image
          id='logo_webgl'
          className='three_d_skill'
          src={imgConstants.HERO.MAIN_SKILLS.THREE_D.LOGO_WEBGL}
          width={948}
          height={500}
          style={{
            maxWidth: '25vw',
            height: 'auto',
          }}
          alt='Logo WebGL'
        />
      </div>
    </div>
  )
}
