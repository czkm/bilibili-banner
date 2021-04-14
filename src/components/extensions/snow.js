/*
 * @Description:
 * @Author: zk-chen
 * @Date: 2021-04-13 15:37:18
 * @LastEditTime: 2021-04-13 15:38:17
 * @LastEditors: zk-chen
 * @FilePath: /bilibili-banner/src/components/extensions/snow.js
 */
/* eslint-disable */
import { clamp, loadImage, inverseMat, transformMat } from './utils'
import snowflake from './snowflake.png'

// 提取参数配置? (el, config?) => undefined
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
  const context = canvas.getContext('2d')

  const flakeCount = Math.floor(500 / (window.devicePixelRatio || 1))
  const sf = await loadImage(snowflake)
  const snowflakes = new Array(flakeCount).fill(0).map(() => {
    const z = (Math.random() * 9 + 1) * Math.exp(-0.1)

    return {
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      z,
      size: 1 / z,
      speed: 2 / z,
    }
  })

  let entered = false
  let mouseX = 0
  let displace = 0
  let lastX = 0
  let lastT = 0
  let speedX = 0 // 横向速度
  let raf = null
  let lraf = null

  const af = t => {
    if (entered) {
      const deltaMouseX = mouseX !== 0 && lastX !== 0 ? (mouseX - lastX) / (t - lastT) : 0
      speedX = (speedX - clamp(deltaMouseX / 2, -1, 1)) / 2
    }
    lastX = mouseX
    lastT = t

    context.setTransform(1, 0, 0, 1, 0, 0)
    context.globalAlpha = 1
    context.clearRect(0, 0, canvas.width, canvas.height)
    const m = [
      1.0, speedX * 0.5, 0,
      speedX * 0.5, 1.0, 0,
    ]
    const invertM = inverseMat(m)
    context.setTransform(m[0], m[3], m[1], m[4], m[2], m[5])

    const percent = Math.pow((displace / 2 + 0.5), 4) //透明个数比例

    for (let i = 0; i < snowflakes.length; i++) {
      if (i / snowflakes.length > percent) {
        context.globalAlpha = 1 - clamp(((i / snowflakes.length) - percent) * 5, 0, 1)
      }
      const v = snowflakes[i]
      v.y += v.speed
      v.x += speedX * v.speed * 10
      if (v.y > canvas.height) {
        v.x = (Math.random() - speedX) * canvas.width
        v.y = -25
      }

      const pos = transformMat(invertM, [v.x, v.y, 1])

      context.drawImage(
        sf,
        pos[0],
        pos[1],
        25 * Math.pow(1.18, -v.z),
        25 * Math.pow(1.18, -v.z)
      )
    }
    raf = requestAnimationFrame(af)
  }
  raf = requestAnimationFrame(af)
  const handleFocus = () => {
    cancelAnimationFrame(raf)
    raf = requestAnimationFrame(af)
  }
  const handleBlur = () => {
    cancelAnimationFrame(raf)
  }
  window.addEventListener('focus', handleFocus)
  window.addEventListener('blur', handleBlur)

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
            speedX = Math.sin((t - now) / 200 * Math.PI)
            if (tempDisplace < 0) {
              speedX *= -1
            }
            lraf = requestAnimationFrame(leaveAF)
          } else {
            displace = 0
            speedX = 0
          }
        }
        requestAnimationFrame(leaveAF)
      }
    },
    handleMouseMove: data => {
      mouseX = data.e.clientX
      displace = data.displace
    },
    handleResize: () => {
      const rect = container.getBoundingClientRect()
      canvas.width = rect.width
      canvas.height = rect.height
    },
    destory: () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('focus', handleFocus)
      window.removeEventListener('blur', handleBlur)
    },
  }
}