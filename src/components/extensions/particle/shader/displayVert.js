/*
 * @Description:
 * @Author: zk-chen
 * @Date: 2021-04-13 15:51:03
 * @LastEditTime: 2021-04-13 15:57:15
 * @LastEditors: zk-chen
 * @FilePath: /bilibili-banner/src/components/extensions/particle/shader/displayVert.js
 */
/* eslint-disable */
export default `#version 300 es
precision mediump float;

layout (location = 0) in vec3 i_Position;
layout (location = 1) in vec3 i_Velocity;
layout (location = 2) in float i_Life;
layout (location = 3) in float i_Age;
layout (location = 4) in vec2 i_Coord;

out float v_Life;
out float v_Age;
out vec2 v_Uv;

uniform vec2 u_Size;
uniform mat4 u_ViewMatrix;
uniform mat4 u_ProjectionMatrix;

void main() {
  vec3 cameraRight = vec3(u_ViewMatrix[0].x, u_ViewMatrix[1].x, u_ViewMatrix[2].x);
  vec3 cameraUp = vec3(u_ViewMatrix[0].y, u_ViewMatrix[1].y, u_ViewMatrix[2].y);
  vec3 position = i_Position + (cameraRight * i_Coord.x * u_Size.x + cameraUp * i_Coord.y * u_Size.y);

  v_Age = i_Age;
  v_Life = i_Life;
  v_Uv = (i_Coord + 1.)/2.;
  gl_Position = u_ProjectionMatrix * u_ViewMatrix * vec4(position, 1.0);
}
`