import React from 'react'

import type { TTitle } from '@/types/layout'

import './index.scss'

export default function PageTitle({ text }: TTitle) {
  return <h1 id='page_title'>{text.toUpperCase()}</h1>
}
