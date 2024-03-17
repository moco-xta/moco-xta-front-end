import { CompanyOrSchollDataInterface } from '@/interfaces/data/companyOrSchollDataInterface'

import { LogoPonthus } from '@/components/r3f/models/logos/LogoPonthus'
import { LogoTheBrink } from '@/components/r3f/models/logos/LogoTheBrink'
import { LogoOpenclassrooms } from '@/components/r3f/models/logos/LogoOpenclassrooms'

import { default as projectsConstants } from '@/constants/projectsConstants.json'

export const companiesAndSchollData: CompanyOrSchollDataInterface[] = [
  {
    name: 'ponthus',
    logo: {
      component: LogoPonthus,
      position: {
        x: projectsConstants.COMPANY_OR_SCHOOL_CARDS.LOGOS.PONTHUS.POSITION.X,
        y: projectsConstants.COMPANY_OR_SCHOOL_CARDS.LOGOS.PONTHUS.POSITION.Y,
        z: projectsConstants.COMPANY_OR_SCHOOL_CARDS.LOGOS.PONTHUS.POSITION.Z,
      },
      scale: {
        x: projectsConstants.COMPANY_OR_SCHOOL_CARDS.LOGOS.PONTHUS.SCALE.X,
        y: projectsConstants.COMPANY_OR_SCHOOL_CARDS.LOGOS.PONTHUS.SCALE.Y,
        z: projectsConstants.COMPANY_OR_SCHOOL_CARDS.LOGOS.PONTHUS.SCALE.Z,
      },
    },
    url: 'https://ponthus.nl/',
    as: {
      key: 'EMPLOYEE',
      position: {
        x: projectsConstants.COMPANY_OR_SCHOOL_CARDS.AS.POSTIONS.PONTHUS.X,
        y: projectsConstants.COMPANY_OR_SCHOOL_CARDS.AS.POSTIONS.PONTHUS.Y,
        z: projectsConstants.COMPANY_OR_SCHOOL_CARDS.AS.POSTIONS.PONTHUS.Z,
      },
    },
    dates: {
      to: '2023-11-31',
      from: '2022-03-01',
    },
  },
  {
    name: 'the_brink',
    logo: {
      component: LogoTheBrink,
      position: {
        x: projectsConstants.COMPANY_OR_SCHOOL_CARDS.LOGOS.THE_BRINK.POSITION.X,
        y: projectsConstants.COMPANY_OR_SCHOOL_CARDS.LOGOS.THE_BRINK.POSITION.Y,
        z: projectsConstants.COMPANY_OR_SCHOOL_CARDS.LOGOS.THE_BRINK.POSITION.Z,
      },
      scale: {
        x: projectsConstants.COMPANY_OR_SCHOOL_CARDS.LOGOS.THE_BRINK.SCALE.X,
        y: projectsConstants.COMPANY_OR_SCHOOL_CARDS.LOGOS.THE_BRINK.SCALE.Y,
        z: projectsConstants.COMPANY_OR_SCHOOL_CARDS.LOGOS.THE_BRINK.SCALE.Z,
      },
    },
    url: 'https://www.thebrinkagency.com/',
    as: {
      key: 'EMPLOYEE',
      position: {
        x: projectsConstants.COMPANY_OR_SCHOOL_CARDS.AS.POSTIONS.THE_BRINK.X,
        y: projectsConstants.COMPANY_OR_SCHOOL_CARDS.AS.POSTIONS.THE_BRINK.Y,
        z: projectsConstants.COMPANY_OR_SCHOOL_CARDS.AS.POSTIONS.THE_BRINK.Z,
      },
    },
    dates: {
      to: '2022-02-28',
      from: '2021-09-01',
    },
  },
  {
    name: 'the_brink',
    logo: {
      component: LogoTheBrink,
      position: {
        x: projectsConstants.COMPANY_OR_SCHOOL_CARDS.LOGOS.THE_BRINK.POSITION.X,
        y: projectsConstants.COMPANY_OR_SCHOOL_CARDS.LOGOS.THE_BRINK.POSITION.Y,
        z: projectsConstants.COMPANY_OR_SCHOOL_CARDS.LOGOS.THE_BRINK.POSITION.Z,
      },
      scale: {
        x: projectsConstants.COMPANY_OR_SCHOOL_CARDS.LOGOS.THE_BRINK.SCALE.X,
        y: projectsConstants.COMPANY_OR_SCHOOL_CARDS.LOGOS.THE_BRINK.SCALE.Y,
        z: projectsConstants.COMPANY_OR_SCHOOL_CARDS.LOGOS.THE_BRINK.SCALE.Z,
      },
    },
    url: 'https://www.thebrinkagency.com/',
    as: {
      key: 'INTERN',
      position: {
        x: projectsConstants.COMPANY_OR_SCHOOL_CARDS.AS.POSTIONS.THE_BRINK.X,
        y: projectsConstants.COMPANY_OR_SCHOOL_CARDS.AS.POSTIONS.THE_BRINK.Y,
        z: projectsConstants.COMPANY_OR_SCHOOL_CARDS.AS.POSTIONS.THE_BRINK.Z,
      },
    },
    dates: {
      to: '2021-08-31',
      from: '2021-04-17',
    },
  },
  {
    name: 'openclassrooms',
    logo: {
      component: LogoOpenclassrooms,
      position: {
        x: projectsConstants.COMPANY_OR_SCHOOL_CARDS.LOGOS.OPENCLASSROOMS
          .POSITION.X,
        y: projectsConstants.COMPANY_OR_SCHOOL_CARDS.LOGOS.OPENCLASSROOMS
          .POSITION.Y,
        z: projectsConstants.COMPANY_OR_SCHOOL_CARDS.LOGOS.OPENCLASSROOMS
          .POSITION.Z,
      },
      scale: {
        x: projectsConstants.COMPANY_OR_SCHOOL_CARDS.LOGOS.OPENCLASSROOMS.SCALE
          .X,
        y: projectsConstants.COMPANY_OR_SCHOOL_CARDS.LOGOS.OPENCLASSROOMS.SCALE
          .Y,
        z: projectsConstants.COMPANY_OR_SCHOOL_CARDS.LOGOS.OPENCLASSROOMS.SCALE
          .Z,
      },
    },
    url: 'https://openclassrooms.com/en/',
    as: {
      key: 'STUDENT',
      position: {
        x: projectsConstants.COMPANY_OR_SCHOOL_CARDS.AS.POSTIONS.OPENCLASSROOMS
          .X,
        y: projectsConstants.COMPANY_OR_SCHOOL_CARDS.AS.POSTIONS.OPENCLASSROOMS
          .Y,
        z: projectsConstants.COMPANY_OR_SCHOOL_CARDS.AS.POSTIONS.OPENCLASSROOMS
          .Z,
      },
    },
    dates: {
      to: '2021-04-16',
      from: '2019-04-17',
    },
  },
]
