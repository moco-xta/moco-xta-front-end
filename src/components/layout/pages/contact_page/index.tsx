import React from 'react'
import { useTranslations } from 'next-intl'
import { FaPhoneAlt } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'
import { FaLocationDot } from 'react-icons/fa6'

import { GSAPTimelineProvider } from '@/contexts/GsapTimelineContext'

import { SectionTitle } from '../../titles'
import { ContactCanvas } from '@/components/three/canvas'

import { timelineDefaultValues } from '@/data/contact/timelineData'

import './index.scss'

export default function Index() {
  const t = useTranslations('CONTACT')

  return (
    <div id='contact_page'>
      <div id='contact_container'>
        <section id='contact_section'>
          <SectionTitle title={t('CONTACT')} />
          <div id='contact_content'>
            <h3 id='contact'>{t('GET_IN_TOUCH')}</h3>
            <div className='contact_page_introduction_text'>
              {t.rich('INTRODUCTION', {
                p: (chunk) => <p>{chunk}</p>,
              })}
            </div>
            <div>
              <h3 id='contact'>Contact</h3>
              <div>
                <p
                  id='phone_number'
                  className='contact_details'
                >
                  <FaPhoneAlt />
                  +33 6 15 90 82 75
                </p>
                <p
                  id='email_address'
                  className='contact_details'
                >
                  <MdEmail />
                  moco.xta@gmail.com
                </p>
                <p
                  id='location'
                  className='contact_details'
                >
                  <FaLocationDot />
                  Paris, France
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
