import React from 'react'
import { useTranslations } from 'next-intl'
import { FaPhoneAlt } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'

import { GSAPTimelineProvider } from '@/contexts/GsapTimelineContext'

import { ContactCanvas } from '@/components/three/canvas'
import SocialsCanvas from '@/components/three/canvas/socials_canvas/SocialsCanvas'

import { timelineDefaultValues } from '@/data/contact/timelineData'

import './index.scss'
import { SectionTitle } from '../../titles'

export default function Index() {
  const t = useTranslations('CONTACT')

  return (
    <div id='contact_page'>
      <div id='contact_container'>
        <section id='contact_section'>
          <SectionTitle title={t('CONTACT')} />
          <div id='contact_content'>
            <p>{t('INTRODUCTION')}</p>
            <SocialsCanvas className='contact_socials_canvas' />
            <div>
              <h3>Contact</h3>
              <div>
                <p id='email_address'>
                  <MdEmail />
                  moco.xta@gmail.com
                </p>
                <p id='phone_number'>
                  <FaPhoneAlt />
                  +33 6 77 77 77 77
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
      <GSAPTimelineProvider {...timelineDefaultValues}>
        <ContactCanvas />
      </GSAPTimelineProvider>
    </div>
  )
}
