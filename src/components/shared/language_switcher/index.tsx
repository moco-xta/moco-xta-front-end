import React from 'react'

import { default as LocalesConstants } from '@/constants/localesConstants.json'

import './index.scss'

export default function LangaugeSwitcher() {
  return (
    <div>
      <select>
        {LocalesConstants.LOCALES.map(locale => (
          <option value={locale}>{locale}</option>
        ))}
      </select>
    </div>
  )
}
