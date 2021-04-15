/*
 * @Description:
 * @Author: zk-chen
 * @Date: 2021-04-13 15:47:37
 * @LastEditTime: 2021-04-15 17:05:46
 * @LastEditors: zk-chen
 * @FilePath: /bilibili-banner/src/components/extensions/particle/index.js
 */
/* eslint-disable */
import createParticles from './particle'
import UniversalCamera from './UniversalCamera'
import { vec3 } from 'gl-matrix'
// const flow1 = require('./shader/flow1.png')
// const flow2 = require('./shader/flow2.png')

export default async container => {
  const containerRect = container.getBoundingClientRect()
  const canvas = document.createElement('canvas')
  canvas.width = containerRect.width
  canvas.height = containerRect.height
  Object.assign(canvas.style, {
    position: 'absolute',
    top: '0px',
    left: '0px',
  })
  container.appendChild(canvas)
  const gl = canvas.getContext('webgl2', { premultipliedAlpha: true })
  if (!gl) {
    throw new Error('webgl2 not available')
  }
  gl.viewport(0, 0, canvas.width, canvas.height)

  const camera = new UniversalCamera(
    vec3.fromValues(0, 0, 5),
    vec3.fromValues(0, 0, -1),
    vec3.fromValues(0, 1, 0),
    Math.PI / 4
  )

  // gl.enable(gl.DEPTH_TEST)
  gl.enable(gl.CULL_FACE)
  gl.enable(gl.BLEND)
  gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA)
  gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, true)

  const flower1 = await createParticles(gl, {
    texture: 'https://i.postimg.cc/kg0kDDTz/flow1.png',
    // texture: flow1,
    scale: 1.18,
    numParticles: 100,
    particleBirthRate: 10,
    originA: [50, 6, -6],
    originB: [-50, 6, 2],
    angle: [0, -1, 0],
    angleRadius: Math.PI / 8,
    speedRange: [2, 2.5],
    gravity: [1.4, -0.1, 0],
    ageRange: [8, 10]
  })

  const flower2 = await createParticles(gl, {
    texture: 'https://i.postimg.cc/rp574cbm/flow2.png',
    // texture: flow2,
    scale: 1.18,
    numParticles: 100,
    particleBirthRate: 10,
    originA: [50, 6, -6],
    originB: [-50, 6, 2],
    angle: [0, -1, 0],
    angleRadius: Math.PI / 8,
    speedRange: [2, 3],
    gravity: [1.2, -0.1, 0],
    ageRange: [8, 10]
  })
  const projectionMatrix = camera.getProjectionMatrix(gl.canvas.width / gl.canvas.height, 0.01, 1000)

  let displace = 0
  let lastDisplace = displace
  let entered = false

  gl.clearColor(0, 0, 0, 0)
  const renderLoop = time => {
    gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT)

    if (lastDisplace !== displace) {
      camera.position[0] = 50 * displace
      camera.updateViewMatrix()
      lastDisplace = displace
    }

    flower1({ time, viewMatrix: camera.viewMatrix, projectionMatrix })
    flower2({ time, viewMatrix: camera.viewMatrix, projectionMatrix })
    requestAnimationFrame(renderLoop)
  }
  requestAnimationFrame(renderLoop)


  let lraf = null
  return {
    handleHoverChange: v => {
      if (v) {
        cancelAnimationFrame(lraf)
        entered = true
      } else {
        entered = false
        const timeout = 200
        const now = performance.now()
        const tempDisplace = displace
        const leaveAF = t => {
          if (t - now < timeout) {
            displace = tempDisplace * (1 - (t - now) / 200)
            lraf = requestAnimationFrame(leaveAF)
          } else {
            displace = 0
          }
        }
        requestAnimationFrame(leaveAF)
      }
    },
    handleMouseMove: data => {
      if (entered) {
        displace = data.displace
      }
    },
    handleResize: () => {
      const rect = container.getBoundingClientRect()
      canvas.width = rect.width
      canvas.height = rect.height
      gl.viewport(0, 0, canvas.width, canvas.height)
    },
    destory: () => {
      //
    },
  }
}
