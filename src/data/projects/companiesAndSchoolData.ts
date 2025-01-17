import moment from 'moment'

// import { CompanyOrSchollDataInterface } from '@/interfaces/dataInterfaces'

export const companiesAndSchoolData /* : CompanyOrSchollDataInterface[] */ = [
  {
    name: 'moco',
    logo: {
      src: '/img/png/projects/scholl_or_companies/logo_moco_xta.png',
      width: 200,
      height: 128,
    },
    url: 'https://moco-xta.com/',
    as: 'AS.SELF_EMPLOYED',
    dates: {
      to: moment(new Date()).format('YYYY-MM-DD'),
      from: '2024-01-01',
    },
  },
  {
    name: 'ponthus',
    logo: {
      src: '/img/png/projects/scholl_or_companies/logo_ponthus.png',
      width: 200,
      height: 145,
    },
    url: 'https://ponthus.nl/',
    as: 'AS.EMPLOYEE',
    dates: {
      to: '2023-11-31',
      from: '2022-03-01',
    },
  },
  {
    name: 'the_brink',
    logo: {
      src: '/img/png/projects/scholl_or_companies/logo_the_brink.png',
      width: 400,
      height: 39,
    },
    url: 'https://www.thebrinkagency.com/',
    as: 'AS.EMPLOYEE',
    dates: {
      to: '2022-02-28',
      from: '2021-09-01',
    },
  },
  {
    name: 'the_brink',
    logo: {
      src: '/img/png/projects/scholl_or_companies/logo_the_brink.png',
      width: 400,
      height: 39,
    },
    url: 'https://www.thebrinkagency.com/',
    as: 'AS.INTERN',
    dates: {
      to: '2021-08-31',
      from: '2021-04-17',
    },
  },
  {
    name: 'openclassrooms',
    logo: {
      src: '/img/png/projects/scholl_or_companies/logo_openclassrooms.png',
      width: 400,
      height: 30,
    },
    url: 'https://openclassrooms.com/en/',
    as: 'AS.STUDENT',
    dates: {
      to: '2021-04-16',
      from: '2019-04-17',
    },
  },
]
