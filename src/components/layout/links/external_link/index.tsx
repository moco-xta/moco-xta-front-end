import React from 'react'
import Link from 'next/link'
import { LuExternalLink } from 'react-icons/lu'
import { ES, FR, GB } from 'country-flag-icons/react/3x2'

import type { TExternalLink } from '@/types/layout'

import './index.scss'

export default function ExternalLink({ urlName, url, languages }: TExternalLink) {
  return (
    <Link
      id='external_link'
      href={url}
      target='_blank'
    >
      {urlName ? urlName : url}
      <LuExternalLink />
      {/* {languages!.includes('en') && (
        <GB
          className='...'
          style={{ width: '18px', height: '12px' }} // TODO: Create class + Map values
        />
      )}
      {languages!.includes('fr') && (
        <FR
          className='...'
          style={{ width: '18px', height: '12px' }}
        />
      )}
      {languages!.includes('es') && (
        <ES
          className='...'
          style={{ width: '18px', height: '12px' }}
        />
      )} */}
    </Link>
  )
}
