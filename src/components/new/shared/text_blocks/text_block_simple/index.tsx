import React from 'react'
import { useTranslations } from 'next-intl'

import { TextBlockSimpleInterface } from '@/interfaces/new/componentsInterfaces'

import './index.scss'

export default function TextBlockSimple({
  id,
  className,
  title,
  paragraph,
}: TextBlockSimpleInterface) {
  const t = useTranslations()

  return (
    <div
      id={id}
      className={`text_block ${className}`}
    >
      <h3>{t(title)}</h3>
      <p>{t(paragraph)}</p>
    </div>
  )
}
