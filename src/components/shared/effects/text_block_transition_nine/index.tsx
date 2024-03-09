import React, { useEffect } from 'react'
import gsap from 'gsap'

import { TextBlockTransitionNineInterface } from '@/interfaces/components/shared/effects/textBlockTransitionNineInterface'

import { splitTextInArrayOfWords } from '@/helpers/cssHelpers'

import './index.scss'

export default function TextBlockTransitionNine({ tag: Tag, id, className, text, activeText, index }: TextBlockTransitionNineInterface) {

  useEffect(() => {
    gsap.set(['.word_active', '.word'], { transformPerspective: 900 })
  }, [])

  return (
    <Tag
      id={id}
      className={className}
    >
      {splitTextInArrayOfWords(text).map(
        (word) => (
          <>
            <span
              className={`word${activeText === index ? '_active' : ''}`}
            >
              {word}&nbsp;
            </span>
          </>
        ),
      )}
    </Tag>
  )
}
