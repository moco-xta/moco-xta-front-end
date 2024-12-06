import React from 'react'
import { useTranslations } from 'next-intl'

import { TextBlockMainInterface } from '@/interfaces/componentsInterfaces'

import './index.scss'

export default function TextBlockMain({
  id,
  className,
  divStyle,
  title,
  paragraph,
}: TextBlockMainInterface) {
  const t = useTranslations()

  return (
    <div
      id={id}
      className={`text_block_main ${className}`}
      style={divStyle}
    >
      <h2>{t(title)}</h2>
      <p>{t(paragraph)}</p>
    </div>
  )
}
