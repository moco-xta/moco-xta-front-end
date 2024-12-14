import * as THREE from 'three'

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
    this.imgWidth = 4
    this.imgHeight = 4

    this.renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
    })
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    this.renderer.setSize(this.width, this.height)
    this.renderer.setClearColor(0x000000, 0.5)

    this.container.appendChild(this.renderer.domElement)

    this.camera = new THREE.PerspectiveCamera(70, this.width / this.height, 0.01, 1000)
    this.camera.position.set(0, 0, 4)

    // this.controls = new THREE.OrbitControls(this.camera, this.renderer.domElement)

    this.addObjects()
    this.addLights()
    this.render()

    this.setupResize()
  }

  addObjects() {
    // GEOMETRY
    const geometry = new THREE.BoxGeometry(1, 1, 1)
    const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 })
    const cube = new THREE.Mesh(geometry, material)
    this.scene.add(cube)
  }

  addLights() {
    this.ambient = new THREE.AmbientLight(0xffffff, 0.15)
    this.directionnal = new THREE.DirectionalLight(0xffffff, 0.75)
    this.directionnal.position.set(0, 2, 2)
    this.scene.add(this.ambient)
    this.scene.add(this.directionnal)
  }

  render() {
    if (!this.isPlaying) return
    // requestAnimationFrame(this.render.bind(this))
    this.renderer.render(this.scene, this.camera)
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
}
