import React from 'react'
import { useTranslations } from 'next-intl'

import useSplitted3DText from '@/hooks/animation/useSplitted3DText'

import { Word3D } from '@/components/three/lib/word_3d/Word3D'

import { developerTextsDefaultValues } from '@/data/hero/three/developer/texts/developerTextsDefaultValues'
import { frontTextDefaultValues } from '@/data/hero/three/developer/texts/frontTextData'

export default function FrontText() {
  const t = useTranslations('HOME')
  const { textSplitted, textGroupRef, textLengthRef } = useSplitted3DText(t('HERO.A'))

  return (
    <Word3D
      ref={textGroupRef}
      {...frontTextDefaultValues}
      {...developerTextsDefaultValues.geometry}
      splittedWord={textSplitted}
      lengthRef={textLengthRef}
    >
      <meshStandardMaterial {...developerTextsDefaultValues.material} />
    </Word3D>
  )
}
