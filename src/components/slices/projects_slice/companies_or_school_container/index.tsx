import React from 'react'

import { CompagniesAndSchoolContainerInterface } from '@/interfaces/componentsInterfaces'

import { CompanyOrSchoolCard } from '@/components/cards/company_or_school_card'

import './index.scss'

export default function CompanyOrSchoolCards({
  companiesAndSchollData,
  currentCompanyOrSchool,
}: CompagniesAndSchoolContainerInterface) {
  return (
    <>
      {companiesAndSchollData.map((company_or_school, index) => {
        return (
          <div
            key={`project_card_${index}`}
            className={`transition ${index === currentCompanyOrSchool ? 'intersecting_company_or_school' : 'not_intersecting_company_or_school'} companie_or_school_card`}
          >
            Company {index}
          </div>
        )
      })}
    </>
  )
}
