import * as THREE from 'three'
import { OrbitControls } from 'three/addons/controls/OrbitControls.js'
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js'
import { GUI } from 'dat.gui'

import { default as gltfConstants } from '@/constants/assets/gltfConstants.json'

import vertexShader from '../../shaders/voxelized_shader/vertexShader.glsl'
import fragmentShader from '../../shaders/voxelized_shader/fragmentShader.glsl'

export default class HeroClass {
  constructor(props) {
    const { container } = props

    this.isPlaying = true
    this.time = 0

    this.container = container

    this.scene = new THREE.Scene()

    this.width = window.innerWidth
    this.height = window.innerHeight

    this.renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
    })
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    this.renderer.setSize(this.width, this.height)
    this.renderer.setClearColor(0x000000, 1)

    this.raycaster = new THREE.Raycaster()
    this.pointer = new THREE.Vector2()

    this.container.appendChild(this.renderer.domElement)

    this.camera = new THREE.PerspectiveCamera(70, this.width / this.height, 0.01, 1000)
    this.camera.position.set(0, 0, 4)

    this.controls = new OrbitControls(this.camera, this.renderer.domElement)

    this.sourceRenderTarget = new THREE.WebGLRenderTarget(this.width, this.height)
    this.renderTarget1 = new THREE.WebGLRenderTarget(this.width, this.height)
    this.renderTarget2 = new THREE.WebGLRenderTarget(this.width, this.height)

    this.setupResize()
    this.setUpSettings()

    this.addObjects()
    this.addLights()
    this.setUpPostProcessing()
    this.render()
  }

  addObjects() {
    /* const geometry = new THREE.PlaneGeometry(1, 1) */
    this.material = new THREE.ShaderMaterial({
      extensions: {
        derivates: 'extensions GL_OES_derivates: enable',
      },
      side: THREE.DoubleSide,
      transparent: true,
      uniforms: {
        time: { value: 0 },
        mosaic: { value: this.settings.mosaic },
        progress: { value: this.settings.progress },
        triScale: { value: this.settings.triScale },
        resolution: { value: new THREE.Vector4() },
      },

      vertexShader: vertexShader,
      fragmentShader: fragmentShader,
    })

    /* const plane = new THREE.Mesh(geometry, this.material)
    this.scene.add(plane) */

    const loader = new GLTFLoader()
    loader.load(gltfConstants.SKETCHFAB.FACE, (gltf) => {
      this.model = gltf.scene.getObjectByName('Face')
      // this.model.geometry.scale(0.5, 0.5, 0.5)
      this.model.geometry.center()
      this.model.geometry = this.model.geometry.toNonIndexed()
      let pos = this.model.geometry.attributes.position.array
      let centers = []
      for (let i = 0; i < pos.length; i += 9) {
        let centerX = (pos[i] + pos[i + 3] + pos[i + 6]) / 3
        let centerY = (pos[i + 1] + pos[i + 4] + pos[i + 7]) / 3
        let centerZ = (pos[i + 2] + pos[i + 5] + pos[i + 8]) / 3

        centers.push(centerX, centerY, centerZ)
        centers.push(centerX, centerY, centerZ)
        centers.push(centerX, centerY, centerZ)
      }
      this.model.geometry.setAttribute(
        'center',
        new THREE.BufferAttribute(new Float32Array(centers), 3),
      )
      console.log('this.model.geometry', this.model.geometry)
      this.scene.add(this.model)
      this.model.material = this.material
    })
  }

  addLights() {
    this.ambient = new THREE.AmbientLight(0xffffff, 0.15)
    this.directionnal = new THREE.DirectionalLight(0xffffff, 0.75)
    this.directionnal.position.set(0, 2, 2)
    this.scene.add(this.ambient)
    this.scene.add(this.directionnal)
  }

  setUpPostProcessing() {
    this.orthoCamera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1)
    this.orthoCamera.position.z = 1
    this.orthoScene = new THREE.Scene()
    this.postQuad = new THREE.Mesh(
      new THREE.PlaneGeometry(2, 2),
      new THREE.ShaderMaterial({
        uniforms: {
          current: { value: null },
          prev: { value: null },
          start: { value: 0 },
          time: { value: this.time },
          translate: { value: 0 },
        },
        side: THREE.DoubleSide,
        vertexShader: `
          varying vec2 vUv;
          void main() {
            vUv = uv;
            gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
          }
        `,
        fragmentShader: `
          uniform sampler2D current;
          uniform sampler2D prev;
          uniform float start;
          uniform float time;
          uniform float translate;
          varying vec2 vUv;
          void main() {
            float PI = 3.14159265359;
            vec2 uv = vUv;
            uv -= vec2(0.5);
            uv *= vec2(2.0, 1.0);
            uv /= 4.0;
            uv.y += translate;
            uv.x += sin(uv.y * PI * 4.0 + time * 0.3) * 0.15;
            uv.x += sin(uv.y * PI * 16.0 + time * 0.1) * 0.15;
            uv += vec2(0.5);
            uv = mix(vUv, uv, start);
            vec4 currentColor = texture2D(current, uv);
            vec4 prevColor = texture2D(prev, vUv);
            vec4 color = vec4(mix(prevColor.rgb, currentColor.rgb, 0.2), 1.0);
            gl_FragColor = color;
          }
        `,
      }),
    )
    this.orthoScene.add(this.postQuad)

    this.finalScene = new THREE.Scene()
    this.finalQuad = new THREE.Mesh(
      new THREE.PlaneGeometry(2, 2),
      new THREE.MeshBasicMaterial({
        color: 0xffffff,
        map: null,
      }),
    )
    this.finalScene.add(this.finalQuad)
  }

  render() {
    if (!this.isPlaying) return
    this.time += 0.05
    if (this.model) {
      /* this.model.position.x = 0.5 * Math.sin(this.time * 0.6) */
      this.postQuad.material.uniforms.time.value = this.time
    }
    this.material.uniforms.time.value = this.time
    requestAnimationFrame(this.render.bind(this))

    this.renderer.setRenderTarget(this.sourceRenderTarget)
    this.renderer.render(this.scene, this.camera)

    this.postQuad.material.uniforms.current.value = this.sourceRenderTarget.texture
    this.postQuad.material.uniforms.prev.value = this.renderTarget1.texture
    this.renderer.setRenderTarget(this.renderTarget2)
    this.renderer.render(this.orthoScene, this.orthoCamera)

    this.finalQuad.material.map = this.renderTarget1.texture
    this.renderer.setRenderTarget(null)
    this.renderer.render(this.finalScene, this.orthoCamera)

    let temp = this.renderTarget1
    this.renderTarget1 = this.renderTarget2
    this.renderTarget2 = temp

    /* this.renderer.render(this.scene, this.camera) */
    /* this.renderer.render(this.orthoScene, this.orthoCamera) */
  }

  setupResize() {
    window.addEventListener('resize', this.resize.bind(this))
  }

  resize() {
    this.width = window.innerWidth
    this.height = window.innerHeight
    this.renderer.setSize(this.width, this.height)
    this.camera.aspect = this.width / this.height
    this.camera.updateProjectionMatrix()
  }

  setUpSettings() {
    this.settings = {
      progress: 0,
      triScale: 1,
      start: 0,
      translate: 0,
      mosaic: 4,
    }
    this.gui = new GUI()
    this.gui.add(this.settings, 'progress', 0, 1, 0.01).onChange((value) => {
      this.material.uniforms.progress.value = value
    })
    this.gui.add(this.settings, 'triScale', 0, 1, 0.01).onChange((value) => {
      this.material.uniforms.triScale.value = value
    })
    this.gui.add(this.settings, 'start', 0, 1, 0.01).onChange((value) => {
      this.postQuad.material.uniforms.start.value = value
    })
    this.gui.add(this.settings, 'translate', 0, 1, 0.01).onChange((value) => {
      this.postQuad.material.uniforms.translate.value = value
    })
    this.gui.add(this.settings, 'mosaic', 0, 15, 0.01).onChange((value) => {
      this.material.uniforms.mosaic.value = value
    })
  }
}
