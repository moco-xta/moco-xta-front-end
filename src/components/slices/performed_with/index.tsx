import React from 'react'
import { useTranslations } from 'next-intl'

import PerformedWithCanvas from '@/components/r3f/canvas/performed_with_canvas'

import './index.scss'

export default function PerformedWith() {
  const t = useTranslations('HOME')

  return (
    <>
      <div>{t('PERFORMED_WITH.PERFORMED_WITH')}</div>
      <div id='perform_with_scene_container'>
        <PerformedWithCanvas />
      </div>
    </>
  )
}
