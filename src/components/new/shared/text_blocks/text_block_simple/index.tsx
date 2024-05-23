import React from 'react'
import { useTranslations } from 'next-intl'

import { TextBlockSimpleInterface } from '@/interfaces/new/componentsInterfaces'

export default function TextBlockSimple({
  title,
  paragraph,
  blockStyle,
  titleStyle,
  paragraphStyle,
}: TextBlockSimpleInterface) {
  const t = useTranslations()

  return (
    <div
      className='text_block'
      style={blockStyle}
    >
      <h3 style={titleStyle}>{t(title)}</h3>
      <p style={paragraphStyle}>{t(paragraph)}</p>
    </div>
  )
}
