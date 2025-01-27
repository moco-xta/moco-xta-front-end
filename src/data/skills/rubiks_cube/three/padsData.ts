import { lazy } from 'react'
import type { TLazyPadData } from '@/types/data/components/three/types'
import type { TLazyPad } from '@/types/components/three/types'

export const padsData = {
  defaultValues: {
    material: {
      attach: 'material',
      roughness: 0.75,
    },
  },
  padColors: [
    'rgb(255, 0, 0)',
    'rgb(0, 255, 0)',
    'rgb(0, 0, 255)',
    'rgb(255, 255, 0)',
    'rgb(0, 255, 255)',
    'rgb(255, 255, 255)',
  ],
  lazy: {
    pathToModel: 'rubiks_cube/',
    models: [
      {
        componentName: 'pad_blender',
        model: 'PadBlender',
      },
      {
        componentName: 'pad_chat_gpt',
        model: 'PadChatGpt',
      },
      {
        componentName: 'pad_css',
        model: 'PadCss',
      },
      {
        componentName: 'pad_docker',
        model: 'PadDocker',
      },
      {
        componentName: 'pad_figma',
        model: 'PadFigma',
      },
      {
        componentName: 'pad_formik',
        model: 'PadFormik',
      },
      {
        componentName: 'pad_github',
        model: 'PadGithub',
      },
      {
        componentName: 'pad_google_analytics',
        model: 'PadGoogleAnalytics',
      },
      {
        componentName: 'pad_gsap',
        model: 'PadGsap',
      },
      {
        componentName: 'pad_hostinger',
        model: 'PadHostinger',
      },
      {
        componentName: 'pad_html',
        model: 'PadHtml',
      },
      {
        componentName: 'pad_illustrator',
        model: 'PadIllustrator',
      },
      {
        componentName: 'pad_java',
        model: 'PadJava',
      },
      {
        componentName: 'pad_javascript',
        model: 'PadJavascript',
      },
      {
        componentName: 'pad_next',
        model: 'PadNext',
      },
      {
        componentName: 'pad_next_intl',
        model: 'PadNextIntl',
      },
      {
        componentName: 'pad_nginx',
        model: 'PadNginx',
      },
      {
        componentName: 'pad_npm',
        model: 'PadNpm',
      },
      {
        componentName: 'pad_photoshop',
        model: 'PadPhotoshop',
      },
      {
        componentName: 'pad_postgresql',
        model: 'PadPostgresql',
      },
      {
        componentName: 'pad_postman',
        model: 'PadPostman',
      },
      {
        componentName: 'pad_react_three_drei',
        model: 'PadReactThreeDrei',
      },
      {
        componentName: 'pad_redux',
        model: 'PadRedux',
      },
      {
        componentName: 'pad_sass',
        model: 'PadSass',
      },
      {
        componentName: 'pad_spring',
        model: 'PadSpring',
      },
      {
        componentName: 'pad_typescript',
        model: 'PadTypescript',
      },
      {
        componentName: 'pad_webgl',
        model: 'PadWebgl',
      },
    ],
  },
}

const loadComponent = (component: string): TLazyPad =>
  lazy(() =>
    import(`@/components/three/models/rubiks_cube/${component}`).then((result) =>
      result.default ? result : { default: result },
    ),
  )

// Map models to dynamically loaded components
const padsComponents: Record<string, TLazyPad> = padsData.lazy.models.reduce(
  (object, { model }) => {
    object[model] = loadComponent(model)
    return object
  },
  {} as Record<string, TLazyPad>,
)

// Generate lazy-loaded pads data
export const lazyPads: TLazyPadData[] = padsData.lazy.models.map(({ componentName, model }) => ({
  componentName,
  model: padsComponents[model],
}))
