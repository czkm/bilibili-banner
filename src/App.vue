<template>
  <div id="app">
    <animatedBanner
      @change="(v) => (animatedBannerShow = v)"
      v-if="animatedBannerEnabled"
      :config="position"
      :style="animatedBannerShow ? '' : `background-image: url(${bannerImg})`"
    />
  </div>
</template>

<script>
import animatedBanner from './components/animatedBanner.vue'
import position from '../src/components/position.js'

export default {
  name: 'App',
  data() {
    return {
      position,
      animatedBannerShow: false,
      animatedBannerEnabled: false
    }
  },
  components: {
    animatedBanner
  },
  computed: {
    bannerImg() {
      return require('./static/static.png')
      // return './static/static.png'
    }
  },
  methods: {
    async animatedBanner() {
      // 优先加载展示静态banner
      const staticBannerImg = document.createElement('img')
      console.log(staticBannerImg)
      staticBannerImg.src = this.bannerImg
      await new Promise((r) => (staticBannerImg.onload = r))

      // 获取动画配置
      // try {
      //   this.animatedBannerConfig = this.position
      this.animatedBannerEnabled = true
      // } catch (e) {
      //   console.error('animated_banner_config parse error')
      //   this.animatedBannerEnabled = false
      // }
    }
  },

  mounted() {
    this.animatedBanner()
  }
}
</script>

<style>
#app {
  margin: 0 auto;
  position: relative;
  z-index: 0;
  min-height: 155px;
  height: 9.375vw;
  min-width: 999px;
  background-color: #f9f9f9;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-pack: center;
  justify-content: center;
  background-repeat: no-repeat;
  background-position: center 0;
  background-size: cover;
}
</style>
