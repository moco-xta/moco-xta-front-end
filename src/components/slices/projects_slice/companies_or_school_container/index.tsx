import React from 'react'

import { CompagniesAndSchoolContainerInterface } from '@/interfaces/componentsInterfaces'

import CompanyOrSchoolCard from '@/components/cards/company_or_school_card'

import './index.scss'

export default function CompanyOrSchoolCards({
  companiesAndSchollData,
  currentCompanyOrSchool,
  projectsData,
  currentProject,
}: CompagniesAndSchoolContainerInterface) {
  return (
    <>
      {companiesAndSchollData.map((companyOrSchoolData, index) => {
        return (
          <CompanyOrSchoolCard
            key={`company_or_school_card_${index}`}
            index={index}
            currentCompanyOrSchool={currentCompanyOrSchool}
            companyOrSchoolData={companyOrSchoolData}
            projectsData={projectsData}
            currentProject={currentProject}
          />
        )
      })}
    </>
  )
}
