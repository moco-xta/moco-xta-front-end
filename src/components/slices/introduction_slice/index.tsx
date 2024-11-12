import React, { useRef, useState } from 'react'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'

import Parallax from '@/components/parallax'

import { default as videosConstants } from '@/constants/assets/videosConstants.json'

import './index.scss'

export default function IntroductionSlice() {
  const [splittedText] = useState<string[]>(
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry.</br>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.".split(
      '',
    ),
  )

  const wrapperRef = useRef<HTMLParagraphElement>(null!)

  const timeline = gsap.timeline({
    delay: 1,
  })

  useGSAP(() => {
    timeline.from('.introduction_text_word_spans', {
      opacity: 0.5,
      duration: 0.25,
      stagger: 1,
      scrollTrigger: {
        trigger: '#introduction_slice',
        start: '-=500px',
        end: '-=200px',
        scrub: 0.5,
      },
    })
  })

  return (
    <Parallax
      id='introduction_slice_parallax'
      speed={-4}
      style={{
        alignSelf: 'flex-start',
      }}
    >
      <section
        id='introduction_slice'
        className='fullscreen center_content blured_background'
      >
        <p
          ref={wrapperRef}
          id='introduction_text'
        >
          <span id='who_i_am'>WHO I AM - </span>
          {splittedText.map((word, wordIndex) => {
            return (
              <span
                key={`introduction_text_word_${wordIndex}`}
                className='introduction_text_word_spans'
              >
                {word}
              </span>
            )
          })}
        </p>
        <div id='more_about_me_button'>More about me</div>
      </section>
    </Parallax>
  )
}
