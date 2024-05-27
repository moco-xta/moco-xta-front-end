'use client'

import React from 'react'
import { useTranslations } from 'next-intl'

/* import PerformedWithCanvas from '@/components/r3f/canvas/performed_with_canvas' */

import './index.scss'

export default function PerformedWith() {
  const t = useTranslations('HOME')
  return (
    <div id='performed_with_slice'>
      <div id='performed_with_text_block'>
        <h2 id='performed_with_title'>{t('PERFORMED_WITH.TITLE')}</h2>
        <div id='performed_with_text'>{t('PERFORMED_WITH.TEXT')}</div>
      </div>
      <div id='perform_with_canvas_container'>
        {/* <PerformedWithCanvas /> */}
      </div>
    </div>
  )
}
