import * as THREE from 'three'

import { PerformedWithLogoInterface } from '@/interfaces/dataInterfaces'

import {
  LogoBlender,
  LogoChatGpt,
  LogoCss,
  LogoDocker,
  LogoFigma,
  LogoFormik,
  LogoGithub,
  LogoGoogleAnalytics,
  LogoGsap,
  LogoHostinger,
  LogoHtml,
  LogoIllustrator,
  LogoNextIntl,
  LogoNextjs,
  LogoNginx,
  LogoNpm,
  LogoPhotoshop,
  LogoPostgresql,
  LogoPostman,
  LogoReactThreeDrei,
  LogoRedux,
  LogoSass,
  LogoSpring,
  LogoTailwind,
  LogoThreejs,
  LogoTypescript,
  LogoWebgl,
} from '@/components/r3f/models/logos'

import { default as performedWithConstants } from '@/constants/performedWithConstants.json'

import { degreesToRadians } from '@/helpers/r3fHelpers'

export const performedWithData: PerformedWithLogoInterface[] = [
  {
    name: performedWithConstants.LOGO_PHOTOSHOP.NAME,
    logo: {
      component: LogoPhotoshop,
      rotation: new THREE.Euler(
        performedWithConstants.LOGO_PHOTOSHOP.ROTATION.X,
        degreesToRadians(performedWithConstants.LOGO_PHOTOSHOP.ROTATION.Z),
        performedWithConstants.LOGO_PHOTOSHOP.ROTATION.Y,
      ),
      scale: new THREE.Vector3(
        performedWithConstants.LOGO_PHOTOSHOP.SCALE.X,
        performedWithConstants.LOGO_PHOTOSHOP.SCALE.Z,
        performedWithConstants.LOGO_PHOTOSHOP.SCALE.Y,
      ),
    },
  },
  {
    name: performedWithConstants.LOGO_ILLUSTRATOR.NAME,
    logo: {
      component: LogoIllustrator,
      rotation: new THREE.Euler(
        performedWithConstants.LOGO_ILLUSTRATOR.ROTATION.X,
        degreesToRadians(performedWithConstants.LOGO_ILLUSTRATOR.ROTATION.Z),
        performedWithConstants.LOGO_ILLUSTRATOR.ROTATION.Y,
      ),
      scale: new THREE.Vector3(
        performedWithConstants.LOGO_ILLUSTRATOR.SCALE.X,
        performedWithConstants.LOGO_ILLUSTRATOR.SCALE.Z,
        performedWithConstants.LOGO_ILLUSTRATOR.SCALE.Y,
      ),
    },
  },
  {
    name: performedWithConstants.LOGO_BLENDER.NAME,
    logo: {
      component: LogoBlender,
      rotation: new THREE.Euler(
        performedWithConstants.LOGO_BLENDER.ROTATION.X,
        degreesToRadians(performedWithConstants.LOGO_BLENDER.ROTATION.Z),
        performedWithConstants.LOGO_BLENDER.ROTATION.Y,
      ),
      scale: new THREE.Vector3(
        performedWithConstants.LOGO_BLENDER.SCALE.X,
        performedWithConstants.LOGO_BLENDER.SCALE.Z,
        performedWithConstants.LOGO_BLENDER.SCALE.Y,
      ),
    },
  },
  {
    name: performedWithConstants.LOGO_REACT_THREE_DREI.NAME,
    logo: {
      component: LogoReactThreeDrei,
      rotation: new THREE.Euler(
        performedWithConstants.LOGO_REACT_THREE_DREI.ROTATION.X,
        degreesToRadians(performedWithConstants.LOGO_REACT_THREE_DREI.ROTATION.Z),
        performedWithConstants.LOGO_REACT_THREE_DREI.ROTATION.Y,
      ),
      scale: new THREE.Vector3(
        performedWithConstants.LOGO_REACT_THREE_DREI.SCALE.X,
        performedWithConstants.LOGO_REACT_THREE_DREI.SCALE.Z,
        performedWithConstants.LOGO_REACT_THREE_DREI.SCALE.Y,
      ),
    },
  },
  {
    name: performedWithConstants.LOGO_WEBGL.NAME,
    logo: {
      component: LogoWebgl,
      rotation: new THREE.Euler(
        performedWithConstants.LOGO_WEBGL.ROTATION.X,
        degreesToRadians(performedWithConstants.LOGO_WEBGL.ROTATION.Z),
        performedWithConstants.LOGO_WEBGL.ROTATION.Y,
      ),
      scale: new THREE.Vector3(
        performedWithConstants.LOGO_WEBGL.SCALE.X,
        performedWithConstants.LOGO_WEBGL.SCALE.Z,
        performedWithConstants.LOGO_WEBGL.SCALE.Y,
      ),
    },
  },
  {
    name: performedWithConstants.LOGO_NPM.NAME,
    logo: {
      component: LogoNpm,
      rotation: new THREE.Euler(
        performedWithConstants.LOGO_NPM.ROTATION.X,
        degreesToRadians(performedWithConstants.LOGO_NPM.ROTATION.Z),
        performedWithConstants.LOGO_NPM.ROTATION.Y,
      ),
      scale: new THREE.Vector3(
        performedWithConstants.LOGO_NPM.SCALE.X,
        performedWithConstants.LOGO_NPM.SCALE.Z,
        performedWithConstants.LOGO_NPM.SCALE.Y,
      ),
    },
  },
  {
    name: performedWithConstants.LOGO_NEXTJS.NAME,
    logo: {
      component: LogoNextjs,
      rotation: new THREE.Euler(
        performedWithConstants.LOGO_NEXTJS.ROTATION.X,
        degreesToRadians(performedWithConstants.LOGO_NEXTJS.ROTATION.Z),
        performedWithConstants.LOGO_NEXTJS.ROTATION.Y,
      ),
      scale: new THREE.Vector3(
        performedWithConstants.LOGO_NEXTJS.SCALE.X,
        performedWithConstants.LOGO_NEXTJS.SCALE.Z,
        performedWithConstants.LOGO_NEXTJS.SCALE.Y,
      ),
    },
  },
  {
    name: performedWithConstants.LOGO_SASS.NAME,
    logo: {
      component: LogoSass,
      rotation: new THREE.Euler(
        performedWithConstants.LOGO_SASS.ROTATION.X,
        degreesToRadians(performedWithConstants.LOGO_SASS.ROTATION.Z),
        performedWithConstants.LOGO_SASS.ROTATION.Y,
      ),
      scale: new THREE.Vector3(
        performedWithConstants.LOGO_SASS.SCALE.X,
        performedWithConstants.LOGO_SASS.SCALE.Z,
        performedWithConstants.LOGO_SASS.SCALE.Y,
      ),
    },
  },
  {
    name: performedWithConstants.LOGO_GSAP.NAME,
    logo: {
      component: LogoGsap,
      rotation: new THREE.Euler(
        performedWithConstants.LOGO_GSAP.ROTATION.X,
        degreesToRadians(performedWithConstants.LOGO_GSAP.ROTATION.Z),
        performedWithConstants.LOGO_GSAP.ROTATION.Y,
      ),
      scale: new THREE.Vector3(
        performedWithConstants.LOGO_GSAP.SCALE.X,
        performedWithConstants.LOGO_GSAP.SCALE.Z,
        performedWithConstants.LOGO_GSAP.SCALE.Y,
      ),
    },
  },
  {
    name: performedWithConstants.LOGO_REDUX.NAME,
    logo: {
      component: LogoRedux,
      rotation: new THREE.Euler(
        performedWithConstants.LOGO_REDUX.ROTATION.X,
        degreesToRadians(performedWithConstants.LOGO_REDUX.ROTATION.Z),
        performedWithConstants.LOGO_REDUX.ROTATION.Y,
      ),
      scale: new THREE.Vector3(
        performedWithConstants.LOGO_REDUX.SCALE.X,
        performedWithConstants.LOGO_REDUX.SCALE.Z,
        performedWithConstants.LOGO_REDUX.SCALE.Y,
      ),
    },
  },
  {
    name: performedWithConstants.LOGO_SPRING.NAME,
    logo: {
      component: LogoSpring,
      rotation: new THREE.Euler(
        performedWithConstants.LOGO_SPRING.ROTATION.X,
        degreesToRadians(performedWithConstants.LOGO_SPRING.ROTATION.Z),
        performedWithConstants.LOGO_SPRING.ROTATION.Y,
      ),
      scale: new THREE.Vector3(
        performedWithConstants.LOGO_SPRING.SCALE.X,
        performedWithConstants.LOGO_SPRING.SCALE.Z,
        performedWithConstants.LOGO_SPRING.SCALE.Y,
      ),
    },
  },
  {
    name: performedWithConstants.LOGO_POSTGRESQL.NAME,
    logo: {
      component: LogoPostgresql,
      rotation: new THREE.Euler(
        performedWithConstants.LOGO_POSTGRESQL.ROTATION.X,
        degreesToRadians(performedWithConstants.LOGO_POSTGRESQL.ROTATION.Z),
        performedWithConstants.LOGO_POSTGRESQL.ROTATION.Y,
      ),
      scale: new THREE.Vector3(
        performedWithConstants.LOGO_POSTGRESQL.SCALE.X,
        performedWithConstants.LOGO_POSTGRESQL.SCALE.Z,
        performedWithConstants.LOGO_POSTGRESQL.SCALE.Y,
      ),
    },
  },
  {
    name: performedWithConstants.LOGO_HTML.NAME,
    logo: {
      component: LogoHtml,
      rotation: new THREE.Euler(
        performedWithConstants.LOGO_HTML.ROTATION.X,
        degreesToRadians(performedWithConstants.LOGO_HTML.ROTATION.Z),
        performedWithConstants.LOGO_HTML.ROTATION.Y,
      ),
      scale: new THREE.Vector3(
        performedWithConstants.LOGO_HTML.SCALE.X,
        performedWithConstants.LOGO_HTML.SCALE.Z,
        performedWithConstants.LOGO_HTML.SCALE.Y,
      ),
    },
  },
  {
    name: performedWithConstants.LOGO_CSS.NAME,
    logo: {
      component: LogoCss,
      rotation: new THREE.Euler(
        performedWithConstants.LOGO_CSS.ROTATION.X,
        degreesToRadians(performedWithConstants.LOGO_CSS.ROTATION.Z),
        performedWithConstants.LOGO_CSS.ROTATION.Y,
      ),
      scale: new THREE.Vector3(
        performedWithConstants.LOGO_CSS.SCALE.X,
        performedWithConstants.LOGO_CSS.SCALE.Z,
        performedWithConstants.LOGO_CSS.SCALE.Y,
      ),
    },
  },
  {
    name: performedWithConstants.LOGO_TYPESCRIPT.NAME,
    logo: {
      component: LogoTypescript,
      rotation: new THREE.Euler(
        performedWithConstants.LOGO_TYPESCRIPT.ROTATION.X,
        degreesToRadians(performedWithConstants.LOGO_TYPESCRIPT.ROTATION.Z),
        performedWithConstants.LOGO_TYPESCRIPT.ROTATION.Y,
      ),
      scale: new THREE.Vector3(
        performedWithConstants.LOGO_TYPESCRIPT.SCALE.X,
        performedWithConstants.LOGO_TYPESCRIPT.SCALE.Z,
        performedWithConstants.LOGO_TYPESCRIPT.SCALE.Y,
      ),
    },
  },
  {
    name: performedWithConstants.LOGO_FORMIK.NAME,
    logo: {
      component: LogoFormik,
      rotation: new THREE.Euler(
        performedWithConstants.LOGO_FORMIK.ROTATION.X,
        degreesToRadians(performedWithConstants.LOGO_FORMIK.ROTATION.Z),
        performedWithConstants.LOGO_FORMIK.ROTATION.Y,
      ),
      scale: new THREE.Vector3(
        performedWithConstants.LOGO_FORMIK.SCALE.X,
        performedWithConstants.LOGO_FORMIK.SCALE.Z,
        performedWithConstants.LOGO_FORMIK.SCALE.Y,
      ),
    },
  },
  {
    name: performedWithConstants.LOGO_NEXT_INTL.NAME,
    logo: {
      component: LogoNextIntl,
      rotation: new THREE.Euler(
        performedWithConstants.LOGO_NEXT_INTL.ROTATION.X,
        degreesToRadians(performedWithConstants.LOGO_NEXT_INTL.ROTATION.Z),
        performedWithConstants.LOGO_NEXT_INTL.ROTATION.Y,
      ),
      scale: new THREE.Vector3(
        performedWithConstants.LOGO_NEXT_INTL.SCALE.X,
        performedWithConstants.LOGO_NEXT_INTL.SCALE.Z,
        performedWithConstants.LOGO_NEXT_INTL.SCALE.Y,
      ),
    },
  },
  {
    name: performedWithConstants.LOGO_GITHUB.NAME,
    logo: {
      component: LogoGithub,
      rotation: new THREE.Euler(
        performedWithConstants.LOGO_GITHUB.ROTATION.X,
        degreesToRadians(performedWithConstants.LOGO_GITHUB.ROTATION.Z),
        performedWithConstants.LOGO_GITHUB.ROTATION.Y,
      ),
      scale: new THREE.Vector3(
        performedWithConstants.LOGO_GITHUB.SCALE.X,
        performedWithConstants.LOGO_GITHUB.SCALE.Z,
        performedWithConstants.LOGO_GITHUB.SCALE.Y,
      ),
    },
  },
  {
    name: performedWithConstants.LOGO_FIGMA.NAME,
    logo: {
      component: LogoFigma,
      rotation: new THREE.Euler(
        performedWithConstants.LOGO_FIGMA.ROTATION.X,
        degreesToRadians(performedWithConstants.LOGO_FIGMA.ROTATION.Z),
        performedWithConstants.LOGO_FIGMA.ROTATION.Y,
      ),
      scale: new THREE.Vector3(
        performedWithConstants.LOGO_FIGMA.SCALE.X,
        performedWithConstants.LOGO_FIGMA.SCALE.Z,
        performedWithConstants.LOGO_FIGMA.SCALE.Y,
      ),
    },
  },
  {
    name: performedWithConstants.LOGO_DOCKER.NAME,
    logo: {
      component: LogoDocker,
      rotation: new THREE.Euler(
        performedWithConstants.LOGO_DOCKER.ROTATION.X,
        degreesToRadians(performedWithConstants.LOGO_DOCKER.ROTATION.Z),
        performedWithConstants.LOGO_DOCKER.ROTATION.Y,
      ),
      scale: new THREE.Vector3(
        performedWithConstants.LOGO_DOCKER.SCALE.X,
        performedWithConstants.LOGO_DOCKER.SCALE.Z,
        performedWithConstants.LOGO_DOCKER.SCALE.Y,
      ),
    },
  },
  {
    name: performedWithConstants.LOGO_NGINX.NAME,
    logo: {
      component: LogoNginx,
      rotation: new THREE.Euler(
        performedWithConstants.LOGO_NGINX.ROTATION.X,
        degreesToRadians(performedWithConstants.LOGO_NGINX.ROTATION.Z),
        performedWithConstants.LOGO_NGINX.ROTATION.Y,
      ),
      scale: new THREE.Vector3(
        performedWithConstants.LOGO_NGINX.SCALE.X,
        performedWithConstants.LOGO_NGINX.SCALE.Z,
        performedWithConstants.LOGO_NGINX.SCALE.Y,
      ),
    },
  },
  {
    name: performedWithConstants.LOGO_CHAT_GPT.NAME,
    logo: {
      component: LogoChatGpt,
      rotation: new THREE.Euler(
        performedWithConstants.LOGO_CHAT_GPT.ROTATION.X,
        degreesToRadians(performedWithConstants.LOGO_CHAT_GPT.ROTATION.Z),
        performedWithConstants.LOGO_CHAT_GPT.ROTATION.Y,
      ),
      scale: new THREE.Vector3(
        performedWithConstants.LOGO_CHAT_GPT.SCALE.X,
        performedWithConstants.LOGO_CHAT_GPT.SCALE.Z,
        performedWithConstants.LOGO_CHAT_GPT.SCALE.Y,
      ),
    },
  },
  {
    name: performedWithConstants.LOGO_POSTMAN.NAME,
    logo: {
      component: LogoPostman,
      rotation: new THREE.Euler(
        performedWithConstants.LOGO_POSTMAN.ROTATION.X,
        degreesToRadians(performedWithConstants.LOGO_POSTMAN.ROTATION.Z),
        performedWithConstants.LOGO_POSTMAN.ROTATION.Y,
      ),
      scale: new THREE.Vector3(
        performedWithConstants.LOGO_POSTMAN.SCALE.X,
        performedWithConstants.LOGO_POSTMAN.SCALE.Z,
        performedWithConstants.LOGO_POSTMAN.SCALE.Y,
      ),
    },
  },
  {
    name: performedWithConstants.LOGO_GOOGLE_ANALYTICS.NAME,
    logo: {
      component: LogoGoogleAnalytics,
      rotation: new THREE.Euler(
        performedWithConstants.LOGO_GOOGLE_ANALYTICS.ROTATION.X,
        degreesToRadians(performedWithConstants.LOGO_GOOGLE_ANALYTICS.ROTATION.Z),
        performedWithConstants.LOGO_GOOGLE_ANALYTICS.ROTATION.Y,
      ),
      scale: new THREE.Vector3(
        performedWithConstants.LOGO_GOOGLE_ANALYTICS.SCALE.X,
        performedWithConstants.LOGO_GOOGLE_ANALYTICS.SCALE.Z,
        performedWithConstants.LOGO_GOOGLE_ANALYTICS.SCALE.Y,
      ),
    },
  },
  {
    name: performedWithConstants.LOGO_HOSTINGER.NAME,
    logo: {
      component: LogoHostinger,
      rotation: new THREE.Euler(
        performedWithConstants.LOGO_HOSTINGER.ROTATION.X,
        degreesToRadians(performedWithConstants.LOGO_HOSTINGER.ROTATION.Z),
        performedWithConstants.LOGO_HOSTINGER.ROTATION.Y,
      ),
      scale: new THREE.Vector3(
        performedWithConstants.LOGO_HOSTINGER.SCALE.X,
        performedWithConstants.LOGO_HOSTINGER.SCALE.Z,
        performedWithConstants.LOGO_HOSTINGER.SCALE.Y,
      ),
    },
  },
  {
    name: performedWithConstants.LOGO_TAILWIND.NAME,
    logo: {
      component: LogoTailwind,
      rotation: new THREE.Euler(
        performedWithConstants.LOGO_TAILWIND.ROTATION.X,
        degreesToRadians(performedWithConstants.LOGO_TAILWIND.ROTATION.Z),
        performedWithConstants.LOGO_TAILWIND.ROTATION.Y,
      ),
      scale: new THREE.Vector3(
        performedWithConstants.LOGO_TAILWIND.SCALE.X,
        performedWithConstants.LOGO_TAILWIND.SCALE.Z,
        performedWithConstants.LOGO_TAILWIND.SCALE.Y,
      ),
    },
  },
]
