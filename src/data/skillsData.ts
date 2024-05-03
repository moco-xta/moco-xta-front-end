import { SkillsDataInterface } from '@/interfaces/dataInterfaces'

import { default as imgConstants } from '@/constants/imgConstants.json'

export const skillsData: SkillsDataInterface = {
  graphics: {
    pictures: [
      [
        {
          src: imgConstants.SKILLS.LOGO_PHOTOSHOP,
          alt: 'logo_photoshop',
        },
        {
          src: imgConstants.SKILLS.LOGO_ILLUSTRATOR,
          alt: 'logo_illustrator',
        },
        {
          src: imgConstants.SKILLS.LOGO_BLENDER,
          alt: 'logo_blender',
        },
      ],
      [
        {
          src: imgConstants.SKILLS.LOGO_CSS,
          alt: 'logo_css',
        },
        {
          src: imgConstants.SKILLS.LOGO_SASS,
          alt: 'logo_sass',
        },
        {
          src: imgConstants.SKILLS.LOGO_TAILWIND,
          alt: 'logo_tailwind',
        },
      ],
      [
        {
          src: imgConstants.SKILLS.LOGO_GSAP,
          alt: 'logo_gsap',
        },
      ],
      [
        {
          src: imgConstants.SKILLS.LOGO_THREEJS,
          alt: 'logo_threejs',
        },
        {
          src: imgConstants.SKILLS.LOGO_REACT_THREE_DREI,
          alt: 'logo_react_three_drei',
        },
        {
          src: imgConstants.SKILLS.LOGO_BABYLONJS,
          alt: 'logo_babylonjs',
        },
      ],
    ],
    titleKey: 'GRAPHICS.TITLE',
    descriptionKey: 'GRAPHICS.DESCRIPTION',
    backgroundColor: '#d9ed92',
  },
  frontEnd: {
    pictures: [
      [
        {
          src: imgConstants.SKILLS.LOGO_REACT,
          alt: 'logo_react',
        },
        {
          src: imgConstants.SKILLS.LOGO_NEXTJS,
          alt: 'logo_nextjs',
        },
        {
          src: imgConstants.SKILLS.LOGO_ANGULAR,
          alt: 'logo_angular',
        },
      ],
      [
        {
          src: imgConstants.SKILLS.LOGO_REACT_NATIVE,
          alt: 'logo_react_native',
        },
        {
          src: imgConstants.SKILLS.LOGO_IONIC,
          alt: 'logo_ionic',
        },
      ],
      [
        {
          src: imgConstants.SKILLS.LOGO_NPM,
          alt: 'logo_npm',
        },
        {
          src: imgConstants.SKILLS.LOGO_YARN,
          alt: 'logo_yarn',
        },
      ],
      [
        {
          src: imgConstants.SKILLS.LOGO_HTML,
          alt: 'logo_html',
        },
        {
          src: imgConstants.SKILLS.LOGO_JAVASCRIPT,
          alt: 'logo_javascript',
        },
        {
          src: imgConstants.SKILLS.LOGO_TYPESCRIPT,
          alt: 'logo_typescript',
        },
      ],
    ],
    titleKey: 'FRONT_END.TITLE',
    descriptionKey: 'FRONT_END.DESCRIPTION',
    backgroundColor: '#b5e48c',
  },
  frontEndLibrairies: {
    pictures: [
      [
        {
          src: imgConstants.SKILLS.LOGO_FORMIK,
          alt: 'logo_formik',
        },
        {
          src: imgConstants.SKILLS.LOGO_GOOGLE_MAPS,
          alt: 'logo_google_maps',
        },
        {
          src: imgConstants.SKILLS.LOGO_GRAPHQL,
          alt: 'logo_graphql',
        },
        {
          src: imgConstants.SKILLS.LOGO_MUI,
          alt: 'logo_mui',
        },
        {
          src: imgConstants.SKILLS.LOGO_NEXT_INTL,
          alt: 'logo_next_intl',
        },
        {
          src: imgConstants.SKILLS.LOGO_REDUX,
          alt: 'logo_redux',
        },
      ],
    ],
    titleKey: 'FRONT_END_LIBRAIRIES.TITLE',
    descriptionKey: 'FRONT_END_LIBRAIRIES.DESCRIPTION',
    backgroundColor: '#99d98c',
  },
  backEnd: {
    pictures: [
      [
        {
          src: imgConstants.SKILLS.LOGO_SPRING,
          alt: 'logo_spring',
        },
        {
          src: imgConstants.SKILLS.LOGO_DJANGO,
          alt: 'logo_django',
        },
      ],
      [
        {
          src: imgConstants.SKILLS.LOGO_JAVA,
          alt: 'logo_java',
        },
        {
          src: imgConstants.SKILLS.LOGO_PYTHON,
          alt: 'logo_python',
        },
      ],
    ],
    titleKey: 'BACK_END.TITLE',
    descriptionKey: 'BACK_END.DESCRIPTION',
    backgroundColor: '#76c893',
  },
  database: {
    pictures: [
      [
        {
          src: imgConstants.SKILLS.LOGO_POSTGRESQL,
          alt: 'logo_postgresql',
        },
        {
          src: imgConstants.SKILLS.LOGO_MYSQL,
          alt: 'logo_mysql',
        },
      ],
    ],
    titleKey: 'DATABASE.TITLE',
    descriptionKey: 'DATABASE.DESCRIPTION',
    backgroundColor: '#52b69a',
  },
  devOps: {
    pictures: [
      [
        {
          src: imgConstants.SKILLS.LOGO_AWS,
          alt: 'logo_aws',
        },
        {
          src: imgConstants.SKILLS.LOGO_HOSTINGER,
          alt: 'logo_hostinger',
        },
      ],
      [
        {
          src: imgConstants.SKILLS.LOGO_DOCKER,
          alt: 'logo_docker',
        },
      ],
      [
        {
          src: imgConstants.SKILLS.LOGO_NGINX,
          alt: 'logo_nginx',
        },
      ],
    ],
    titleKey: 'DEV_OPS.TITLE',
    descriptionKey: 'DEV_OPS.DESCRIPTION',
    backgroundColor: '#34a0a4',
  },
  tools: {
    pictures: [
      [
        {
          src: imgConstants.SKILLS.LOGO_POSTMAN,
          alt: 'logo_postman',
        },
        {
          src: imgConstants.SKILLS.LOGO_GITHUB,
          alt: 'logo_github',
        },
        {
          src: imgConstants.SKILLS.LOGO_FIGMA,
          alt: 'logo_figma',
        },
        {
          src: imgConstants.SKILLS.LOGO_GOOGLE_ANALYTICS,
          alt: 'logo_google_analytics',
        },
        {
          src: imgConstants.SKILLS.LOGO_CHAT_GPT,
          alt: 'logo_chat_gpt',
        },
      ],
    ],
    titleKey: 'TOOLS.TITLE',
    descriptionKey: 'TOOLS.DESCRIPTION',
    backgroundColor: '#168aad',
  },
}



/* const sections = [
  { backgroundColor: '#f72585' },
  { backgroundColor: '#7209b7' },
  { backgroundColor: '#480ca8' },
  { backgroundColor: '#3f37c9' },
  { backgroundColor: '#4895ef' },
] */
