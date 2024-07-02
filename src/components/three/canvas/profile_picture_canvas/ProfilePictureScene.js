import * as THREE from 'three'
import { OrbitControls } from 'three/addons/controls/OrbitControls.js'
import { GUI } from 'dat.gui'
import { EffectComposer } from 'three/addons/postprocessing/EffectComposer.js'
import { RenderPass } from 'three/addons/postprocessing/RenderPass.js'
import { ShaderPass } from 'three/addons/postprocessing/ShaderPass.js'

import { CustomPass } from './CustomPass'

import vertexShader from '../../shaders/contact/profile_picture/material_shaders/vertexShader.glsl'
import fragmentShader from '../../shaders/contact/profile_picture/material_shaders/fragmentShader.glsl'

import { default as texturesConstants } from '@/constants/assets/texturesConstants.json'

export default class ProfilePictureScene {
  constructor(props) {
    const { container } = props

    this.isPlaying = true
    this.time = 0
    this.speed = 0
    this.targetSpeed = 0
    this.mouse = new THREE.Vector2()
    this.followMouse = new THREE.Vector2()
    this.prevMouse = new THREE.Vector2()

    this.container = container

    this.scene = new THREE.Scene()
    this.composer
    this.effect1

    this.width = window.innerWidth
    this.height = window.innerHeight
    this.imgWidth = 3
    this.imgHeight = 4

    this.renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
    })
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    this.renderer.setSize(this.width, this.height)
    this.renderer.setClearColor(0x000000, 0.5)

    this.raycaster = new THREE.Raycaster()
    this.pointer = new THREE.Vector2()

    this.container.appendChild(this.renderer.domElement)

    this.camera = new THREE.PerspectiveCamera(70, this.width / this.height, 0.01, 1000)
    this.camera.position.set(0, 0, 4)

    this.controls = new OrbitControls(this.camera, this.renderer.domElement)

    this.addObjects()
    this.addLights()
    this.mouseMove()
    this.initPost()
    this.render()

    this.setupResize()
    /* this.setUpSettings() */
  }

  addObjects() {
    // GEOMETRY
    const geometry = new THREE.PlaneGeometry(
      this.imgWidth,
      this.imgHeight,
      this.imgWidth * 20,
      this.imgHeight * 20,
    )

    const uTexture1 = new THREE.TextureLoader().load(texturesConstants.CONTACT.PROFIL_PICTURE)
    uTexture1.minFilter = THREE.LinearFilter
    uTexture1.needsUpdate = true

    this.material = new THREE.ShaderMaterial({
      extensions: {
        derivates: 'extensions GL_OES_derivates: enable',
      },
      side: THREE.DoubleSide,
      transparent: true,
      uniforms: {
        time: {
          value: 0,
        },
        uTexture1: {
          type: 't',
          value: uTexture1,
        },
        uResolution: {
          type: 'v4',
          value: new THREE.Vector4(300, 400, 1, 1),
        },
      },
      vertexShader: vertexShader,
      fragmentShader: fragmentShader,
    })

    const plane = new THREE.Mesh(geometry, this.material)
    this.scene.add(plane)
  }

  addLights() {
    this.ambient = new THREE.AmbientLight(0xffffff, 0.15)
    this.directionnal = new THREE.DirectionalLight(0xffffff, 0.75)
    this.directionnal.position.set(0, 2, 2)
    this.scene.add(this.ambient)
    this.scene.add(this.directionnal)
  }

  mouseMove() {
    window.addEventListener('mousemove', (event) => {
      this.mouse.x = event.clientX / window.innerWidth
      this.mouse.y = 1 - event.clientY / window.innerHeight
    })
  }

  initPost() {
    this.composer = new EffectComposer(this.renderer)
    this.composer.addPass(new RenderPass(this.scene, this.camera))

    this.effect1 = new ShaderPass(CustomPass)
    /* effect1.uniforms['scale'].value = 4 */
    this.composer.addPass(this.effect1)
  }

  getSpeed() {
    this.speed = Math.sqrt(
      (this.prevMouse.x - this.mouse.x) ** 2 + (this.prevMouse.y - this.mouse.y) ** 2,
    )

    this.targetSpeed -= 0.1 * (this.targetSpeed - this.speed)
    this.followMouse.x -= 0.1 * (this.followMouse.x - this.mouse.x)
    this.followMouse.y -= 0.1 * (this.followMouse.y - this.mouse.y)

    this.prevMouse.x = this.mouse.x
    this.prevMouse.y = this.mouse.y
  }

  render() {
    if (!this.isPlaying) return
    this.getSpeed()
    this.time += 0.05
    this.material.uniforms.time.value = this.time
    this.effect1.uniforms.uMouse.value = this.followMouse
    this.effect1.uniforms.uVelocity.value = Math.min(this.targetSpeed, 0.05)
    this.targetSpeed *= 0.999
    requestAnimationFrame(this.render.bind(this))
    /* this.renderer.render(this.scene, this.camera) */
    if (this.composer) this.composer.render()
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
    }
    this.gui = new GUI()
    this.gui.add(this.settings, 'progress', 0, 1, 0.01).onChange((value) => {
      this.material.uniforms.progress.value = value
    })
  }
}
