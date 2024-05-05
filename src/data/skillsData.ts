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
    categoryKey: 'GRAPHICS',
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
    categoryKey: 'FRONT_END',
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
    categoryKey: 'FRONT_END_LIBRAIRIES',
    titleFontSizes: {
      en: 12,
      es: 10,
      fr: 12,
    },
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
    categoryKey: 'BACK_END',
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
    categoryKey: 'DATABASE',
    titleFontSizes: {
      es: 13,
      fr: 12,
    },
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
    categoryKey: 'DEV_OPS',
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
    categoryKey: 'TOOLS',
    titleFontSizes: {
      es: 11,
    },
  },
}
