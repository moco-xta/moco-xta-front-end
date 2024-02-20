import React from 'react'
import { useTranslations } from 'next-intl'

import './index.scss'

export default function PerformedWith() {
  const t = useTranslations('HOME')
  return <div>{t('PERFORMED_WITH')}</div>
}
