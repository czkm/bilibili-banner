/*
 * @Description:
 * @Author: zk-chen
 * @Date: 2021-04-13 15:51:25
 * @LastEditTime: 2021-04-13 15:51:25
 * @LastEditors: zk-chen
 * @FilePath: /bilibili-banner/src/components/extensions/particle/shader/displayFrag.js
 */
/* eslint-disable */
export default `#version 300 es
precision mediump float;

uniform sampler2D u_Sprite;

in float v_Life;
in float v_Age;
in vec2 v_Uv;
out vec4 o_FragColor;

void main() {
  // o_FragColor = vec4(v_Uv, 0., 1.);
  o_FragColor = texture(u_Sprite, v_Uv);
  o_FragColor.a = o_FragColor.a * (1. - pow(v_Age/v_Life, 6.));
}
`
