import React from 'react'

import { CompagnyOrSchoolCardsInterface } from '@/interfaces/projectsInterfaces'

import { companiesAndSchollData } from '@/data/projects/companiesAndSchollData'

import CompanyOrSchoolCard from './company_or_school_card'

import './index.scss'

export default function CompanyOrSchoolCards({
  currentCompanyOrSchool,
  currentProject,
}: CompagnyOrSchoolCardsInterface) {
  return (
    <div id='company_or_school_cards'>
      {companiesAndSchollData.map((companyOrSchoolData, index) => {
        return (
          <CompanyOrSchoolCard
            key={`company_or_school_card_${index}`}
            index={index}
            currentCompanyOrSchool={currentCompanyOrSchool}
            companyOrSchoolData={companyOrSchoolData}
            currentProject={currentProject}
          />
        )
      })}
    </div>
  )
}
