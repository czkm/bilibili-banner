/*
 * @Description:
 * @Author: zk-chen
 * @Date: 2021-04-13 15:49:16
 * @LastEditTime: 2021-04-13 15:49:17
 * @LastEditors: zk-chen
 * @FilePath: /bilibili-banner/src/components/extensions/particle/shader.js
 */
/* eslint-disable */
const loadShader = (gl, type, source) => {
  const shader = gl.createShader(type)
  if (!shader) {
    throw new Error('can not create shader')
  }
  gl.shaderSource(shader, source)
  gl.compileShader(shader)
  if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
    const errMsg = `An error occurred compiling the shaders: ${gl.getShaderInfoLog(shader)}`
    gl.deleteShader(shader)
    throw new Error(errMsg)
  }
  return shader
}


export default class Shader {
  constructor({
    gl,
    vs,
    fs,
    transformFeedbackVaryings
  }) {
    const vertexShader = loadShader(gl, gl.VERTEX_SHADER, vs)
    const fragmentShader = loadShader(gl, gl.FRAGMENT_SHADER, fs)
    const shaderProgram = gl.createProgram()
    if (!shaderProgram) {
      throw new Error('can not create shader program')
    }
    gl.attachShader(shaderProgram, vertexShader)
    gl.attachShader(shaderProgram, fragmentShader)

    if (transformFeedbackVaryings) {
      gl.transformFeedbackVaryings(shaderProgram, transformFeedbackVaryings, gl.INTERLEAVED_ATTRIBS)
    }
    gl.linkProgram(shaderProgram)
    gl.deleteShader(vertexShader)
    gl.deleteShader(fragmentShader)
    if (!gl.getProgramParameter(shaderProgram, gl.LINK_STATUS)) {
      throw new Error(
        `Unable to initialize the shader program: ${gl.getProgramInfoLog(shaderProgram)}`
      )
    }
    this.gl = gl
    this.program = shaderProgram
    this.locations = new Map()
    this.unifromBuffers = {}
  }

  use () {
    this.gl.useProgram(this.program)
  }
  setUniform (name, type, value) {
    let location = this.locations.get(name)
    if (!location) {
      location = this.gl.getUniformLocation(this.program, name)
      this.locations.set(name, location)
    }

    switch (type) {
      case 'BOOLEAN':
        return this.gl.uniform1i(location, Number(value))
      case 'INT':
        return this.gl.uniform1i(location, Math.round(value))
      case 'FLOAT':
        return this.gl.uniform1f(location, value)
      case 'VEC2':
        return this.gl.uniform2fv(location, value)
      case 'VEC3':
        return this.gl.uniform3fv(location, value)
      case 'VEC4':
        return this.gl.uniform4fv(location, value)
      case 'MAT2':
        return this.gl.uniformMatrix2fv(location, false, value)
      case 'MAT3':
        return this.gl.uniformMatrix3fv(location, false, value)
      case 'MAT4':
        return this.gl.uniformMatrix4fv(location, false, value)
      default:
        return
    }
  }
  setUniformBuffer (name, data) {
    const gl = this.gl
    let buffer = this.unifromBuffers[name]
    if (!buffer) {
      buffer = gl.createBuffer()
      gl.bindBuffer(gl.UNIFORM_BUFFER, buffer)
      gl.uniformBlockBinding(this.program, 0, 0)
      gl.bindBufferBase(gl.UNIFORM_BUFFER, 0, buffer)
      this.unifromBuffers[name] = buffer
    }

    gl.bindBuffer(gl.UNIFORM_BUFFER, buffer)
    gl.bufferData(gl.UNIFORM_BUFFER, data, gl.DYNAMIC_DRAW)
  }
}
