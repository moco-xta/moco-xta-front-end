import * as THREE from 'three'

import { SkillsLogoInterface } from '@/interfaces/dataInterfaces'

import {
  LogoAngular,
  LogoAws,
  LogoBabylonjs,
  LogoBlender,
  LogoChatGpt,
  LogoCss,
  LogoDjango,
  LogoDocker,
  LogoFigma,
  LogoFormik,
  LogoGithub,
  LogoGoogleAnalytics,
  LogoGoogleMaps,
  LogoGraphql,
  LogoGsap,
  LogoHostinger,
  LogoHtml,
  LogoIllustrator,
  LogoIonic,
  LogoJava,
  LogoJavascript,
  LogoMui,
  LogoMysql,
  LogoNextIntl,
  LogoNextjs,
  LogoNginx,
  LogoNpm,
  LogoPhotoshop,
  LogoPostgresql,
  LogoPostman,
  LogoPython,
  LogoReact,
  LogoReactNative,
  LogoReactThreeDrei,
  LogoRedux,
  LogoSass,
  LogoSpring,
  LogoThreejs,
  LogoTypescript,
  LogoWebgl,
} from '@/components/r3f/models/logos'

import { default as skillsConstants } from '@/constants/skillsConstants.json'

export const skillsData: SkillsLogoInterface[] = [
  {
    name: 'logo_photoshop',
    category: skillsConstants.CATEGORIES.GRAPHICS,
    logo: {
      component: LogoPhotoshop,
      scale: new THREE.Vector3(1, 1, 1),
    },
  },
  {
    name: 'logo_illustrator',
    category: skillsConstants.CATEGORIES.GRAPHICS,
    logo: {
      component: LogoIllustrator,
      scale: new THREE.Vector3(1, 1, 1),
    },
  },
  {
    name: 'logo_blender',
    category: skillsConstants.CATEGORIES.THREE_D,
    logo: {
      component: LogoBlender,
      scale: new THREE.Vector3(1, 1, 1),
    },
  },
  {
    name: 'logo_threejs',
    category: skillsConstants.CATEGORIES.THREE_D,
    logo: {
      component: LogoThreejs,
      scale: new THREE.Vector3(1, 1, 1),
    },
  },
  {
    name: 'logo_react_three_drei',
    category: skillsConstants.CATEGORIES.THREE_D,
    logo: {
      component: LogoReactThreeDrei,
      scale: new THREE.Vector3(1, 1, 1),
    },
  },
  {
    name: 'logo_babylonjs',
    category: skillsConstants.CATEGORIES.THREE_D,
    logo: {
      component: LogoBabylonjs,
      scale: new THREE.Vector3(1, 1, 1),
    },
  },
  {
    name: 'logo_webgl',
    category: skillsConstants.CATEGORIES.THREE_D,
    logo: {
      component: LogoWebgl,
      scale: new THREE.Vector3(1, 1, 1),
    },
  },
  {
    name: 'logo_npm',
    category: skillsConstants.CATEGORIES.FRONT_END,
    logo: {
      component: LogoNpm,
      scale: new THREE.Vector3(1, 1, 1),
    },
  },
  {
    name: 'logo_react',
    category: skillsConstants.CATEGORIES.FRONT_END,
    logo: {
      component: LogoReact,
      scale: new THREE.Vector3(1, 1, 1),
    },
  },
  {
    name: 'logo_nextjs',
    category: skillsConstants.CATEGORIES.FRONT_END,
    logo: {
      component: LogoNextjs,
      scale: new THREE.Vector3(1, 1, 1),
    },
  },
  {
    name: 'logo_angular',
    category: skillsConstants.CATEGORIES.FRONT_END,
    logo: {
      component: LogoAngular,
      scale: new THREE.Vector3(1, 1, 1),
    },
  },
  {
    name: 'logo_ionic',
    category: skillsConstants.CATEGORIES.FRONT_END,
    logo: {
      component: LogoIonic,
      scale: new THREE.Vector3(1, 1, 1),
    },
  },
  {
    name: 'logo_react_native',
    category: skillsConstants.CATEGORIES.FRONT_END,
    logo: {
      component: LogoReactNative,
      scale: new THREE.Vector3(1, 1, 1),
    },
  },
  {
    name: 'logo_sass',
    category: skillsConstants.CATEGORIES.FRONT_END,
    logo: {
      component: LogoSass,
      scale: new THREE.Vector3(1, 1, 1),
    },
  },
  {
    name: 'logo_gsap',
    category: skillsConstants.CATEGORIES.FRONT_END,
    logo: {
      component: LogoGsap,
      scale: new THREE.Vector3(1, 1, 1),
    },
  },
  {
    name: 'logo_redux',
    category: skillsConstants.CATEGORIES.FRONT_END,
    logo: {
      component: LogoRedux,
      scale: new THREE.Vector3(1, 1, 1),
    },
  },
  {
    name: 'logo_spring',
    category: skillsConstants.CATEGORIES.FRONT_END,
    logo: {
      component: LogoSpring,
      scale: new THREE.Vector3(1, 1, 1),
    },
  },
  {
    name: 'logo_django',
    category: skillsConstants.CATEGORIES.FRONT_END,
    logo: {
      component: LogoDjango,
      scale: new THREE.Vector3(1, 1, 1),
    },
  },
  {
    name: 'logo_postgresql',
    category: skillsConstants.CATEGORIES.FRONT_END,
    logo: {
      component: LogoPostgresql,
      scale: new THREE.Vector3(1, 1, 1),
    },
  },
  {
    name: 'logo_mysql',
    category: skillsConstants.CATEGORIES.FRONT_END,
    logo: {
      component: LogoMysql,
      scale: new THREE.Vector3(1, 1, 1),
    },
  },
  {
    name: 'logo_html',
    category: skillsConstants.CATEGORIES.LANGUAGE,
    logo: {
      component: LogoHtml,
      scale: new THREE.Vector3(1, 1, 1),
    },
  },
  {
    name: 'logo_css',
    category: skillsConstants.CATEGORIES.LANGUAGE,
    logo: {
      component: LogoCss,
      scale: new THREE.Vector3(1, 1, 1),
    },
  },
  {
    name: 'logo_javascript',
    category: skillsConstants.CATEGORIES.LANGUAGE,
    logo: {
      component: LogoJavascript,
      scale: new THREE.Vector3(1, 1, 1),
    },
  },
  {
    name: 'logo_typescript',
    category: skillsConstants.CATEGORIES.LANGUAGE,
    logo: {
      component: LogoTypescript,
      scale: new THREE.Vector3(1, 1, 1),
    },
  },
  {
    name: 'logo_python',
    category: skillsConstants.CATEGORIES.LANGUAGE,
    logo: {
      component: LogoPython,
      scale: new THREE.Vector3(1, 1, 1),
    },
  },
  {
    name: 'logo_java',
    category: skillsConstants.CATEGORIES.LANGUAGE,
    logo: {
      component: LogoJava,
      scale: new THREE.Vector3(1, 1, 1),
    },
  },
  {
    name: 'logo_formik',
    category: skillsConstants.CATEGORIES.LANGUAGE,
    logo: {
      component: LogoFormik,
      scale: new THREE.Vector3(1, 1, 1),
    },
  },
  {
    name: 'logo_mui',
    category: skillsConstants.CATEGORIES.LANGUAGE,
    logo: {
      component: LogoMui,
      scale: new THREE.Vector3(1, 1, 1),
    },
  },
  {
    name: 'logo_graphql',
    category: skillsConstants.CATEGORIES.LANGUAGE,
    logo: {
      component: LogoGraphql,
      scale: new THREE.Vector3(1, 1, 1),
    },
  },
  {
    name: 'logo_next_intl',
    category: skillsConstants.CATEGORIES.LANGUAGE,
    logo: {
      component: LogoNextIntl,
      scale: new THREE.Vector3(1, 1, 1),
    },
  },
  {
    name: 'logo_github',
    category: skillsConstants.CATEGORIES.TOOL,
    logo: {
      component: LogoGithub,
      scale: new THREE.Vector3(1, 1, 1),
    },
  },
  {
    name: 'logo_figma',
    category: skillsConstants.CATEGORIES.TOOL,
    logo: {
      component: LogoFigma,
      scale: new THREE.Vector3(1, 1, 1),
    },
  },
  {
    name: 'logo_docker',
    category: skillsConstants.CATEGORIES.TOOL,
    logo: {
      component: LogoDocker,
      scale: new THREE.Vector3(1, 1, 1),
    },
  },
  {
    name: 'logo_nginx',
    category: skillsConstants.CATEGORIES.TOOL,
    logo: {
      component: LogoNginx,
      scale: new THREE.Vector3(1, 1, 1),
    },
  },
  {
    name: 'logo_chat_gpt',
    category: skillsConstants.CATEGORIES.TOOL,
    logo: {
      component: LogoChatGpt,
      scale: new THREE.Vector3(1, 1, 1),
    },
  },
  {
    name: 'logo_postman',
    category: skillsConstants.CATEGORIES.TOOL,
    logo: {
      component: LogoPostman,
      scale: new THREE.Vector3(1, 1, 1),
    },
  },
  {
    name: 'logo_google_analytics',
    category: skillsConstants.CATEGORIES.TOOL,
    logo: {
      component: LogoGoogleAnalytics,
      scale: new THREE.Vector3(1, 1, 1),
    },
  },
  {
    name: 'logo_google_maps',
    category: skillsConstants.CATEGORIES.TOOL,
    logo: {
      component: LogoGoogleMaps,
      scale: new THREE.Vector3(1, 1, 1),
    },
  },
  {
    name: 'logo_hostinger',
    category: skillsConstants.CATEGORIES.TOOL,
    logo: {
      component: LogoHostinger,
      scale: new THREE.Vector3(1, 1, 1),
    },
  },
  {
    name: 'logo_aws',
    category: skillsConstants.CATEGORIES.TOOL,
    logo: {
      component: LogoAws,
      scale: new THREE.Vector3(1, 1, 1),
    },
  },
]
