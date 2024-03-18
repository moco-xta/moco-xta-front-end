import React from 'react'
import { useTranslations } from 'next-intl'

import { ResetButtonInterface } from '@/interfaces/resetButtonInterface'

import './index.scss'

export default function ResetButton({ resetForm }: ResetButtonInterface) {
  const t = useTranslations()

  return (
    <button
      type='reset'
      onClick={() => resetForm()}
    >
      {t('FORMS.RESET')}
    </button>
  )
}
