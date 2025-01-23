import moment from 'moment'

import type { TCompanyData } from '@/types/data/components/layout/types'

export const companiesData: TCompanyData[] = [
  {
    dates: {
      to: moment(new Date()).format('YYYY-MM-DD'),
      from: '2024-01-01',
    },
  },
  {
    index: 1,
    name: 'ponthus',
    logo: {
      name: 'LogoPonthus',
    },
    url: 'https://ponthus.nl/',
    dates: {
      to: '2023-11-31',
      from: '2022-03-01',
    },
  },
  {
    index: 2,
    name: 'the_brink',
    logo: {
      name: 'LogoTheBrink',
    },
    url: 'https://www.thebrinkagency.com/',
    dates: {
      to: '2022-02-28',
      from: '2021-09-01',
    },
  },
  {
    dates: {
      to: '2021-05-17',
      from: '2019-09-01',
    },
  },
]
