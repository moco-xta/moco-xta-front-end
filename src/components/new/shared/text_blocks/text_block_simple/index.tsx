import React from 'react'
import { useTranslations } from 'next-intl'

import { TextBlockSimpleInterface } from '@/interfaces/new/componentsInterfaces'

import './index.scss'

export default function TextBlockSimple({
  id,
  title,
  paragraph,
  blockStyle,
  titleStyle,
  paragraphStyle,
}: TextBlockSimpleInterface) {
  const t = useTranslations()

  return (
    <div
      id={id}
      className='text_block'
      style={blockStyle}
    >
      <h3 style={titleStyle}>{t(title)}</h3>
      <p style={paragraphStyle}>{t(paragraph)}</p>
    </div>
  )
}
