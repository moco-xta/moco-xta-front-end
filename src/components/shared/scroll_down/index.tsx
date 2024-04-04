import React from 'react'
import { FaArrowDown } from 'react-icons/fa6'
import { useTranslations } from 'next-intl'

import { ScrollDownInterface } from '@/interfaces/componentsInterfaces'

import './index.scss'

export default function ScrollDown({ top, color }: ScrollDownInterface) {
  const t = useTranslations('PROJECTS')

  return (
    <div
      id='scroll_dwon_container'
      style={{ top: top, color: color }}
    >
      <p>{t('SCROLL_DOWN')}</p>
      {/* <div id='arrow_down_container'> */}
      <FaArrowDown id='arrow_down' />
      {/* </div> */}
    </div>
  )
}
