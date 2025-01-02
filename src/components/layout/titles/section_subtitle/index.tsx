import React from 'react'

import type { TTitle } from '@/types/layout'

import './index.scss'

export default function SectionSubtitle({ text }: TTitle) {
  return <h2 id='section_subtitle'>{text}</h2>
}
