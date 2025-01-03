import React from 'react'

import type { TTitle } from '@/types/layout'

import './index.scss'

export default function ParagraphTitle({ text }: TTitle) {
  return <h2 className='paragraph_title'>{text.toUpperCase()}</h2>
}
