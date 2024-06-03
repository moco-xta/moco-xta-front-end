import React from 'react'
import { useTranslations } from 'next-intl'

import { CompanyOrSchoolCardInterface } from '@/interfaces/new/projectsInterfaces'

import { projectsData } from '@/data/projects/projectsData'

import './index.scss'

export default function CompanyOrSchoolCard({
  index,
  currentCompanyOrSchool,
  companyOrSchoolData,
  currentProject,
}: CompanyOrSchoolCardInterface) {
  const t = useTranslations('PROJECTS')

  function handleOnClick() {
    window.open(companyOrSchoolData.url, '_blank')
  }

  return (
    <div
      key={`company_or_school_card_${index}`}
      className={`company_or_school_card transition ${index === currentCompanyOrSchool ? 'intersecting_company_or_school' : 'not_intersecting_company_or_school'}`}
    >
      <img
        className='company_or_school_logo'
        src={companyOrSchoolData.logo.src}
        width={companyOrSchoolData.logo.width}
        height={companyOrSchoolData.logo.height}
        onClick={handleOnClick}
        alt={`logo_${companyOrSchoolData.name}_${companyOrSchoolData.as.toLowerCase()}`}
      />
      <p
        className='company_or_school_as'
        style={{
          color:
            projectsData[currentProject].backgroundColor.page !== '#ffffff'
              ? '#ffffff'
              : '#000000',
        }}
      >
        {t(companyOrSchoolData.as).toUpperCase()}
      </p>
    </div>
  )
}
