'use client'

import { useTranslations } from 'next-intl'

import './index.scss'

export default function Home() {
  const t = useTranslations()

  return <div id='page_container'>Home</div>
}
