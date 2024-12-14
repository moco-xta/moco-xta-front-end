import vertexShaderSource from '@/components/three/shaders/hero_background/vertexShader.glsl'
import fragmentShaderSource from '@/components/three/shaders/hero_background/fragmentShader.glsl'

export default class ProfilePictureScene {
  constructor(props) {
    const { container } = props
    // console.log('props', props)

    this.container = container
    this.canvas
    this.gl

    this.main()
  }

  createShader(gl, type, source) {
    const shader = gl.createShader(type)
    gl.shaderSource(shader, source)
    gl.compileShader(shader)
    const success = gl.getShaderParameter(shader, gl.COMPILE_STATUS)
    if (success) {
      return shader
    }
    console.log(gl.getShaderInfoLog(shader))
    gl.deleteShader(shader)
  }

  createProgram(gl, vertexShader, fragmentShader) {
    const program = gl.createProgram()
    gl.attachShader(program, vertexShader)
    gl.attachShader(program, fragmentShader)
    gl.linkProgram(program)
    const success = gl.getProgramParameter(program, gl.LINK_STATUS)
    if (success) {
      return program
    }

    console.log(gl.getProgramInfoLog(program))
    gl.deleteProgram(program)
  }

  main() {
    this.canvas = this.container
    // this.canvas = document.querySelector("#hero_background_canvas");
    this.gl = this.canvas.getContext('webgl')
    if (!this.gl) {
      return
    }

    const vertexShader = this.createShader(this.gl, this.gl.VERTEX_SHADER, vertexShaderSource)
    const fragmentShader = this.createShader(this.gl, this.gl.FRAGMENT_SHADER, fragmentShaderSource)

    const program = this.createProgram(this.gl, vertexShader, fragmentShader)

    const positionAttributeLocation = this.gl.getAttribLocation(program, 'a_position')

    const positionBuffer = this.gl.createBuffer()

    this.gl.bindBuffer(this.gl.ARRAY_BUFFER, positionBuffer)

    const positions = [0, 0, 0, 0.5, 0.7, 0]
    this.gl.bufferData(this.gl.ARRAY_BUFFER, new Float32Array(positions), this.gl.STATIC_DRAW)

    // webglUtils.resizeCanvasToDisplaySize(gl.canvas)

    this.gl.viewport(0, 0, this.gl.canvas.width, this.gl.canvas.height)

    this.gl.clearColor(0, 0, 0, 0)
    this.gl.clear(this.gl.COLOR_BUFFER_BIT)

    this.gl.useProgram(program)

    this.gl.enableVertexAttribArray(positionAttributeLocation)

    this.gl.bindBuffer(this.gl.ARRAY_BUFFER, positionBuffer)

    const size = 2
    const type = this.gl.FLOAT
    const normalize = false
    const stride = 0
    const offset = 0
    this.gl.vertexAttribPointer(positionAttributeLocation, size, type, normalize, stride, offset)

    const primitiveType = this.gl.TRIANGLES
    // const offset = 0
    const count = 3
    this.gl.drawArrays(primitiveType, offset, count)
  }
}
