import moment from 'moment'

import { TProjectData } from '@/types/data/components/layout/types'

import { default as texturesConstants } from '@/constants/assets/texturesConstants.json'

export const projectsData: TProjectData[] = [
  {
    key: 'moco_xta',
    name: 'Moco.xta',
    url: 'https://moco-xta.com/en',
    imageUrl: texturesConstants.PROJECTS.MOCO_XTA,
    descriptionsKey: 'DESCRIPTIONS.MOCO_XTA',
    dates: {
      to: moment(new Date()).format('YYYY-MM-DD'),
      from: '2024-01-01',
    },
    roles: ['Full-stack', 'Real-time 3D'],
    logos: {
      prefix: 'Logo',
      path: 'logos/',
      project: { name: 'Moco' },
      tools: [
        { name: 'Nextjs' },
        { name: 'Webgl' },
        { name: 'Threejs' },
        { name: 'ReactThreeDrei' },
        { name: 'Redux' },
        { name: 'Formik' },
        { name: 'NextIntl' },
        { name: 'Gsap' },
        { name: 'Spring' },
        { name: 'Postgresql' },
        { name: 'Docker' },
        { name: 'Hostinger' },
        { name: 'GoogleAnalytics' },
        { name: 'Blender' },
      ],
    },
  },
  {
    key: 'abwerkt',
    name: 'ABWerkt.nl',
    url: 'https://www.ab-werkt.nl/',
    imageUrl: texturesConstants.PROJECTS.ABWERKT,
    descriptionsKey: 'DESCRIPTIONS.ABWERKT',
    dates: {
      to: '2023-11-31',
      from: '2023-03-01',
    },
    roles: ['Front-end'],
    logos: {
      prefix: 'Logo',
      path: 'logos/',
      project: { name: 'Abwerkt' },
      tools: [
        { name: 'React' },
        { name: 'Angular' },
        { name: 'Redux' },
        { name: 'Formik' },
        { name: 'NextIntl' },
        { name: 'Django' },
        { name: 'Postgresql' },
        { name: 'Azure' },
        { name: 'Postman' },
        { name: 'Figma' },
        { name: 'Jira' },
      ],
    },
  },
  {
    key: 'lento',
    name: 'Lento.eu',
    url: 'https://lento.eu/en',
    imageUrl: texturesConstants.PROJECTS.LENTO,
    descriptionsKey: 'DESCRIPTIONS.LENTO',
    dates: {
      to: '2023-02-28',
      from: '2022-02-01',
    },
    roles: ['Front-end'],
    logos: {
      prefix: 'Logo',
      path: 'logos/',
      project: { name: 'Lento' },
      tools: [
        { name: 'React' },
        { name: 'Redux' },
        { name: 'GoogleMaps' },
        { name: 'Formik' },
        { name: 'Mui' },
        { name: 'NextIntl' },
        { name: 'Django' },
        { name: 'Auth0' },
        { name: 'Postgresql' },
        { name: 'Azure' },
        { name: 'Postman' },
        { name: 'Figma' },
        { name: 'Jira' },
      ],
    },
  },
  {
    key: 'hundred_hands',
    name: '100 Hands',
    url: 'https://www.100hands.nl/',
    imageUrl: texturesConstants.PROJECTS.HUNDREDS_HANDS,
    descriptionsKey: 'DESCRIPTIONS.HUNDRED_HANDS',
    dates: {
      to: '2022-01-30',
      from: '2021-09-01',
    },
    roles: ['Full-stack', 'Real-time 3D'],
    logos: {
      prefix: 'Logo',
      path: 'logos/',
      project: { name: 'HundredHands' },
      tools: [
        { name: 'React' },
        { name: 'ReactThreeDrei' },
        { name: 'Threejs' },
        { name: 'Webgl' },
        { name: 'SubstancePainter' },
        { name: 'Gitlab' },
        { name: 'Aws' },
        { name: 'Blender' },
      ],
    },
  },
  {
    key: 'wpme',
    name: 'WPME',
    url: 'https://wpme.group/',
    imageUrl: texturesConstants.PROJECTS.WPME,
    descriptionsKey: 'DESCRIPTIONS.WPME',
    dates: {
      to: '2021-08-30',
      from: '2021-03-17',
    },
    roles: ['Full-stack', 'Real-time 3D'],
    logos: {
      prefix: 'Logo',
      path: 'logos/',
      project: { name: 'Wpme' },
      tools: [
        { name: 'React' },
        { name: 'ReactThreeDrei' },
        { name: 'Threejs' },
        { name: 'Webgl' },
        { name: 'Aws' },
        { name: 'Gitlab' },
        { name: 'Photoshop' },
        { name: 'Illustrator' },
        { name: 'Blender' },
      ],
    },
  },
  {
    key: 'openclassrooms',
    name: 'Openclassrooms',
    url: 'https://openclassrooms.com/en/',
    imageUrl: texturesConstants.PROJECTS.OPENCLASSROOMS,
    descriptionsKey: 'DESCRIPTIONS.OPENCLASSROOMS',
    dates: {
      to: '2021-05-17',
      from: '2019-05-01',
    },
    roles: ['Full-stack', 'Real-time 3D'],
    logos: {
      prefix: 'Logo',
      path: 'logos/',
      project: { name: 'Openclassrooms' },
      tools: [
        { name: 'Angular' },
        { name: 'Webgl' },
        { name: 'Threejs' },
        { name: 'Babylonjs' },
        { name: 'Spring' },
        { name: 'Postgresql' },
        { name: 'Mysql' },
        { name: 'Github' },
      ],
    },
  },
]
