import React, { useEffect } from 'react'
import gsap from 'gsap'

import { TextBlockTransitionNineInterface } from '@/interfaces/effectsInterfaces'

import { splitTextInArrayOfWords } from '@/helpers/textHelpers'

import './index.scss'

export default function TextBlockTransitionNine({
  tag: Tag,
  id,
  className,
  text,
  blockIndex,
  activeBlock,
}: TextBlockTransitionNineInterface) {
  useEffect(() => {
    gsap.set(['.word_active', '.word'], { transformPerspective: 900 })
  }, [])

  return (
    <Tag
      id={id}
      className={className}
    >
      {splitTextInArrayOfWords(text).map((word, word_index) => (
        <span
          key={`word_${id}_${word_index}`}
          className={`word${activeBlock === blockIndex ? '_active' : ''}`}
        >
          {word}&nbsp;
        </span>
      ))}
    </Tag>
  )
}
