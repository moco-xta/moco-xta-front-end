import React from 'react'

import { CompagniesAndSchoolContainerInterface } from '@/interfaces/componentsInterfaces'

import { CompanyOrSchoolCard } from '@/components/cards/company_or_school_card'

import './index.scss'

export default function CompaniesOrSchoolContainer({
  companiesAndSchoolRefs,
  companiesAndSchollData,
  currentCompanyOrSchool,
}: CompagniesAndSchoolContainerInterface) {
  return (
    <div id='companies_and_school_container'>
      {companiesAndSchoolRefs.map(({ ref }, index) => (
        <CompanyOrSchoolCard
          ref={ref}
          key={`company_or_school_card_${index}`}
          content={companiesAndSchollData[index]}
          index={index}
          currentCompanyOrSchool={currentCompanyOrSchool}
        />
      ))}
    </div>
  )
}
