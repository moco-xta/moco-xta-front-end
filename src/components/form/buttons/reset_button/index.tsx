import React from 'react'
import { useTranslations } from 'next-intl'

import { ResetButtonInterface } from '@/interfaces/buttonsInterfaces'

import './index.scss'

export default function ResetButton({ resetForm, resetButtonIsDisabled }: ResetButtonInterface) {
  const t = useTranslations()

  return (
    <button
      type='reset'
      className={`${resetButtonIsDisabled ? 'disabled' : ''}`}
      onClick={() => resetForm()}
    >
      {t('FORMS.RESET')}
    </button>
  )
}
