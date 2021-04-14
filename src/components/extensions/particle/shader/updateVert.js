/*
 * @Description:
 * @Author: zk-chen
 * @Date: 2021-04-13 15:50:10
 * @LastEditTime: 2021-04-13 15:50:27
 * @LastEditors: zk-chen
 * @FilePath: /bilibili-banner/src/components/extensions/particle/shader/updateVert.js
 */
/* eslint-disable */
export default props => `#version 300 es
precision mediump float;

${props.define}

const float PI = 3.1415926;
uniform vec3 u_Gravity;
uniform vec3 u_OriginA;
uniform vec3 u_OriginB;
uniform vec3 u_Angle;
uniform float u_AngleRadius;
uniform vec2 u_Speed;

layout (location = 0) in vec3 i_Position;
layout (location = 1) in vec3 i_Velocity;
layout (location = 2) in float i_Life;
layout (location = 3) in float i_Age;

out vec3 v_Position;
out vec3 v_Velocity;
out float v_Life;
out float v_Age;

uint wang_hash(uint seed) {
  seed = (seed ^ uint(61) ) ^ (seed >> uint(16));
  seed *= uint(9);
  seed = seed ^ (seed >> uint(4));
  seed *= uint(0x27d4eb2d);
  seed = seed ^ (seed >> uint(15));
  return seed;
}
float randFloat(uint seed) {
  return float(seed) * (1.0 / 4294967296.0);
}
vec2 randVec2U(uint seed) {
  return vec2(
    randFloat(seed),
    randFloat(wang_hash(seed + uint(1)))
  );
}
vec3 randVec3U(uint seed) {
  return vec3(
    randFloat(seed),
    randFloat(wang_hash(seed + uint(1))),
    randFloat(wang_hash(seed + uint(2)))
  );
}
vec2 randVec2(uint seed) {
  float r = randFloat(seed) * 2.0 * PI;
  return vec2(cos(r), sin(r));
}
vec3 randVec3(uint seed) {
  float r = randFloat(seed) * 2.0 * PI;
  float z = randFloat(seed + uint(1)) * 0.57735;
  float zScale = sqrt(1.0-z*z);
  return vec3(cos(r)*zScale, sin(r)*zScale, z);
}

// https://en.wikipedia.org/wiki/Rodrigues%27_rotation_formula
vec3 rotate(in vec3 vv, in vec3 center, in vec3 axis, in float angle) {
  vec3 v = vv - center;
  float cosa = cos(angle);
  float sina = sin(angle);
  vec3 res = v * cosa + cross(axis, v) * sina + axis * dot(axis, v) * (1. - cosa);
  return res + center;
}

void main() {
  uint seed = wang_hash(uint(gl_VertexID + SEED));

  if (i_Age >= i_Life) {
    v_Position = u_OriginA + (u_OriginB - u_OriginA) * randVec3U(seed);
    seed = wang_hash(seed);
    v_Age = 0.0;
    v_Life = i_Life;

    float randSpeed = u_Speed.x + randFloat(seed) * (u_Speed.y - u_Speed.x);
    seed = wang_hash(seed);

    float y = cos(u_AngleRadius) +  (1. - cos(u_AngleRadius)) * randFloat(seed); // y [cos(theta) ~ 1]
    seed = wang_hash(seed);
    float phi = randFloat(seed) * 2. * PI;
    seed = wang_hash(seed);

    vec3 randDirection = vec3(
      sqrt(1. - y*y) * cos(phi),
      y,
      sqrt(1. - y*y) * sin(phi)
    );
    vec3 up = vec3(0., 1., 0.);
    randDirection = rotate(randDirection, vec3(0.), cross(u_Angle, up), acos(dot(u_Angle, up)));
    v_Velocity = randDirection * randSpeed;
  } else {
    v_Position = i_Position + i_Velocity * 16./1000.;
    v_Age = i_Age + 16./1000.;
    v_Life = i_Life;
    v_Velocity = i_Velocity + u_Gravity * 16./1000.;
  }
}

`
