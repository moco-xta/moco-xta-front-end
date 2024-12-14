import vertexShader from '@/components/three/shaders/hero_background/vertexShader.glsl'
import fragmentShader from '@/components/three/shaders/hero_background/fragmentShader.glsl'

export default class ProfilePictureScene {
  constructor(props) {
    const { container } = props
    // console.log('props', props)

    this.container = container

    this.canvas
    this.gl

    this.vertexBuffer
    this.vertexCount

    this.startup()
  }

  initwebGL() {
    this.canvas = this.container
    this.gl = this.canvas.getContext("webgl");
}

  compileShader(code, type) {
    let shader = this.gl.createShader(type)

    this.gl.shaderSource(shader, code)
    this.gl.compileShader(shader)

    if (!this.gl.getShaderParameter(shader, this.gl.COMPILE_STATUS)) {
      console.log(
        `Error compiling ${type === this.gl.VERTEX_SHADER ? 'vertex' : 'fragment'} shader:`,
      )
      console.log(this.gl.getShaderInfoLog(shader))
    }
    return shader
  }

  buildShaderProgram(shaderInfo, uniforms, attributes) {
    let program = this.gl.createProgram()

    shaderInfo.forEach(function (desc) {
      let shader = this.compileShader(desc.code, desc.type)

      if (shader) {
        this.gl.attachShader(program, shader)
      }
    })

    this.gl.linkProgram(program)

    if (!this.gl.getProgramParameter(program, this.gl.LINK_STATUS)) {
      console.log('Error linking shader program:')
      console.log(this.gl.getProgramInfoLog(program))
    }

    var unifrorms_dict = {}
    uniforms.forEach(function (name) {
      uniform_id = this.gl.getUniformLocation(program, name)
      unifrorms_dict[name] = uniform_id
    })

    var attributes_dict = {}
    attributes.forEach(function (name) {
      attrib_id = this.gl.getAttribLocation(program, name)
      attributes_dict[name] = attrib_id
    })

    return {
      program: program,
      uniforms: unifrorms_dict,
      attributes: attributes_dict,
    }
  }
  resize(canvas) {
    var displayWidth = canvas.clientWidth
    var displayHeight = canvas.clientHeight

    if (canvas.width !== displayWidth || canvas.height !== displayHeight) {
      canvas.width = displayWidth
      canvas.height = displayHeight
    }
  }

  animateScene() {
    this.resize(this.canvas)

    this.gl.viewport(0, 0, this.canvas.width, this.canvas.height)
    this.gl.clearColor(0.0, 0.0, 0.0, 1.0)
    this.gl.clear(this.gl.COLOR_BUFFER_BIT)

    this.gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffer)

    this.gl.enableVertexAttribArray(shaderProgram.attributes['aVertexPosition'])
    this.gl.vertexAttribPointer(
      shaderProgram.attributes['aVertexPosition'],
      2,
      gl.FLOAT,
      false,
      4 * 4,
      0,
    )
    this.gl.enableVertexAttribArray(shaderProgram.attributes['aTexturePosition'])
    this.gl.vertexAttribPointer(
      shaderProgram.attributes['aTexturePosition'],
      2,
      gl.FLOAT,
      false,
      4 * 4,
      2 * 4,
    )

    this.gl.useProgram(shaderProgram.program)

    this.gl.drawArrays(this.gl.TRIANGLE_STRIP, 0, vertexCount)

    window.requestAnimationFrame(function (currentTime) {
      previousTime = currentTime
      animateScene()
    })
  }

  // window.addEventListener("load", startup, false);

  startup() {
    this.initwebGL()

    const shaderSet = [
      {
        type: this.gl.VERTEX_SHADER,
        code: vertexShader,
      },
      {
        type: this.gl.FRAGMENT_SHADER,
        code: fragmentShader,
      },
    ]
    const shaderUniforms = []
    const shaderAttributes = ['aVertexPosition', 'aTexturePosition']
    console.log('TEST')
    shaderProgram = this.buildShaderProgram(shaderSet, shaderUniforms, shaderAttributes)
    console.log(shaderProgram)

    let vertices = new Float32Array([-1, 1, 0, 0, 1, 1, 1, 0, -1, -1, 0, 1, 1, -1, 1, 1])

    vertexBuffer = this.gl.createBuffer()
    this.gl.bindBuffer(this.gl.ARRAY_BUFFER, vertexBuffer)
    this.gl.bufferData(this.gl.ARRAY_BUFFER, vertices, this.gl.STATIC_DRAW)

    vertexCount = vertices.length / 4

    animateScene()
  }
}
