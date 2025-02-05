import React from 'react'
import { useTranslations } from 'next-intl'

// import { useGSAPTimelineContext } from '@/hooks/animation/useGSAPTimelineContext'
import useSplitted3DText from '@/hooks/animation/useSplitted3DText'

import { Word3D } from '@/components/three/lib/word_3d/Word3D'

import { contactMeTextsDefaultValues } from '@/data/contact/three/texts/contactMeTextsData'
import { contactTextDefaultValues } from '@/data/contact/three/texts/contactTextData'

export default function ContactText() {
  const t = useTranslations('CONTACT')
  // const { timeline } = useGSAPTimelineContext()
  const { textSplitted, textGroupRef, textLengthRef } = useSplitted3DText(t('CONTACT_ME.CONTACT'))

  return (
    <Word3D
      ref={textGroupRef}
      {...contactTextDefaultValues}
      {...contactMeTextsDefaultValues.geometry}
      splittedWord={textSplitted}
      lengthRef={textLengthRef}
    >
      <meshStandardMaterial {...contactMeTextsDefaultValues.material} />
    </Word3D>
  )
}
