import React from 'react'
import Image from 'next/image'
import { useTranslations } from 'next-intl'

import { CompanyOrSchoolCardInterface } from '@/interfaces/componentsInterfaces'

import './index.scss'

export default function CompanyOrSchoolCard({
  index,
  currentCompanyOrSchool,
  companyOrSchoolData,
  projectsData,
  currentProject,
}: CompanyOrSchoolCardInterface) {
  const t = useTranslations('PROJECTS')

  function handleOnClick() {
    window.open(companyOrSchoolData.url, '_blank')
  }

  return (
    <div
      key={`project_card_${index}`}
      className={`transition ${index === currentCompanyOrSchool ? 'intersecting_company_or_school' : 'not_intersecting_company_or_school'} companie_or_school_card`}
    >
      <Image
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
