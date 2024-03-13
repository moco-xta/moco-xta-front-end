import React, { forwardRef } from 'react'

import { CompanyOrSchoolCardInterface } from '@/interfaces/data/companyOrSchollDataInterface'

import './index.scss'

export const CompanyOrSchoolCard = forwardRef<
  HTMLDivElement,
  CompanyOrSchoolCardInterface
>(({ content }, ref) => {
  return (
    <div
      ref={ref}
      className='company_or_school_card'
    >
      <h3>{content.name}</h3>
      <p>{content.as}</p>
    </div>
  )
})
