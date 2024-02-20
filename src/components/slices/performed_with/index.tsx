import React from 'react'
import { useTranslations } from 'next-intl'

import PerformedWithScene from '@/components/r3f/scenes/performed_with_scene'

import './index.scss'

export default function PerformedWith() {
  const t = useTranslations('HOME')
  return (
    <>
      <div>{t('PERFORMED_WITH')}</div>
      <div id='perform_with_scene_container'>
        <PerformedWithScene />
      </div>
    </>
  )
}
