<template>
  <div id="app">
    <animatedBanner
      v-if="animatedBannerEnabled"
      :config="position"
      @change="(v) => (animatedBannerShow = v)"
      :style="animatedBannerShow ? '' : `background-image: url(${bannerImg})`"
      :class="animatedBannerShow ? '' : 'staticImg'"
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
    }
  },
  methods: {
    async animatedBanner() {
      // 优先加载展示静态banner
      const staticBannerImg = document.createElement('img')
      staticBannerImg.src = this.bannerImg
      await new Promise((resolve) => (staticBannerImg.onload = resolve()))
      this.animatedBannerEnabled = true
      // 获取动画配置
      // try {
      //   this.animatedBannerConfig = this.position
      // this.animatedBannerEnabled = true
      // } catch (e) {
      //   console.error('animated_banner_config parse error')
      //   this.animatedBannerEnabled = false
      // }
    }
  },
  mounted() {
    this.animatedBanner()
    console.warn(
      [
        '                  _ooOoo_',
        '                  o8888888o',
        '                  88" . "88',
        '                  (| -_- |)',
        '                  O\\  =  /O',
        "               ____/`---'\\____",
        "             .'  \\\\|     |//  `.",
        '            /  \\\\|||  :  |||//  \\',
        '           /  _||||| -:- |||||-  \\',
        '           |   | \\\\\\  -  /// |   |',
        "           | \\_|  ''\\---/''  |   |",
        '           \\  .-\\__  `-`  ___/-. /',
        "         ___`. .'  /--.--\\  `. . __",
        '      ."" \'<  `.___\\_<|>_/___.\'  >\'"".',
        '     | | :  `- \\`.;`\\ _ /`;.`/ - ` : | |',
        '     \\  \\ `-.   \\_ __\\ /__ _/   .-` /  /',
        "======`-.____`-.___\\_____/___.-`____.-'======",
        "                   `=---='",
        '^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^',
        '         佛祖保佑       永无BUG'
      ].join('\n')
    )
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
.staticImg {
  height: 9.375vw;
  margin: 0 auto;
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
  min-width: 999px;
}
</style>
