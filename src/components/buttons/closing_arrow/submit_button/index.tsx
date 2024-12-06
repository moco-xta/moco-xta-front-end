import React from 'react'
import { useTranslations } from 'next-intl'

import { SubmitButtonInterface } from '@/interfaces/buttons/buttonsInterfaces'

import './index.scss'

export default function SubmitButton({ submitButtonIsDisabled }: SubmitButtonInterface) {
  const t = useTranslations()

  return (
    <button
      className={`${submitButtonIsDisabled ? 'disabled' : ''}`}
      type='submit'
      disabled={submitButtonIsDisabled}
    >
      {t(`${!submitButtonIsDisabled ? 'FORMS.SUBMIT' : 'FORMS.SUBMITTING'}`)}
    </button>
  )
}
