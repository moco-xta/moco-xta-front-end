import React from 'react'

import type { TTitle } from '@/types/layout'

import './index.scss'

export default function SectionTitle({ text }: TTitle) {
  return <h2 id='section_title'>{text.toUpperCase()}</h2>
}
