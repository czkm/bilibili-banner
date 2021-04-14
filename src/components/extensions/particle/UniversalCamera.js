/*
 * @Description:
 * @Author: zk-chen
 * @Date: 2021-04-13 15:48:40
 * @LastEditTime: 2021-04-13 15:56:58
 * @LastEditors: zk-chen
 * @FilePath: /bilibili-banner/src/components/extensions/particle/UniversalCamera.js
 */
/* eslint-disable */

import { vec3, mat4 } from 'gl-matrix'

export default class UniversalCamera {
  constructor(position, direction, up = vec3.fromValues(0, 1, 0), fovy = Math.PI / 4) {
    this.position = position
    this.direction = direction
    this.up = up
    this.fovy = fovy

    this.rotationMatrix = mat4.create()
    this._viewMaxtrix = mat4.create()
    this._tempMat4 = mat4.create()
    this._tempDir = vec3.create()

    this.updateViewMatrix()
    return new Proxy(this, {
      set: (t, key, value, receiver) => {
        const result = Reflect.set(t, key, value, receiver)
        const observable = ['position', 'direction', 'up']
        if (observable.includes(key)) {
          t._checkLimit()
          t.updateViewMatrix()
        }
        return result
      },
    })
  }

  get viewMatrix () {
    return this._viewMaxtrix
  }

  _checkLimit () {
    //
  }
  updateViewMatrix () {
    vec3.add(this._tempDir, this.position, this.direction)
    mat4.lookAt(this._viewMaxtrix, this.position, this._tempDir, this.up)
  }

  getProjectionMatrix (aspect, near, far) {
    return mat4.perspective(this._tempMat4, this.fovy, aspect, near, far)
  }
}
