<!--
 * @Author: gmx
 * @Date: 2023-05-21 15:38:01
 * @LastEditors: gmx
 * @LastEditTime: 2023-05-23 21:22:56
 * @Description: 还是有点臃肿，没有发挥出组件化的优势
 * @Version: 1.0
-->
<template>
  <div class="container" v-on:animationiteration="pauseAnimation">
    <FlipCard :now="this.nowHour" :next="this.nextHour" :isPaused="this.hourPaused" />
    <div class="split">:</div>
    <FlipCard :now="this.nowMinute" :next="this.nextMinute" :isPaused="this.minutePaused" />
    <div class="split">:</div>
    <FlipCard :now="this.nowSecond" :next="this.nextSecond" :isPaused="this.secondPaused" :isSecond="true" />
  </div>
</template>

<script>
import FlipCard from './FlipCard.vue';
export default {

  props: {},
  setup() { },
  data() {
    return {
      nowSecond: 0,
      nextSecond: 1,
      nowMinute: 0,
      nextMinute: 1,
      nowHour: 0,
      nextHour: 1,
      secondPaused: true,
      minutePaused: true,
      hourPaused: true,
      init: true
    };
  },
  watch: {},
  computed: {
  },
  methods: {
    zeroFormat(num) {
      return num >= 10 ? num : '0' + num;
    },
    startAnimation() {
      var now = new Date();
      var next = new Date(now.getTime() + 1000);
      this.nowSecond = this.zeroFormat(now.getSeconds());
      this.nextSecond = this.zeroFormat(next.getSeconds());
      if (next.getMinutes() !== now.getMinutes()) {
        this.minutePaused = false
      }
      if (next.getHours() !== now.getHours()) {
        this.hourPaused = false
      }
      if(this.init) {
        this.nowMinute = this.zeroFormat(now.getMinutes());
        this.nextMinute = this.zeroFormat(next.getMinutes());
        this.nowHour = this.zeroFormat(now.getHours());
        this.nextHour = this.zeroFormat(next.getHours());
        this.init= false
      }
    },
    pauseAnimation(e) {
      if (e.target.classList.contains('second')) {
        this.startAnimation()
      } else {
        var now = new Date()
        this.nowMinute = this.zeroFormat(now.getMinutes());
        this.nextMinute = this.zeroFormat(this.nowMinute === 59 ? '00' : Number(this.nowMinute) + 1);
        this.nowHour = this.zeroFormat(now.getHours());
        this.nextHour = this.zeroFormat(this.nowHour === 23 ? '00' : Number(this.nowHour) + 1);
        this.minutePaused = true;
        this.hourPaused = true;
      }
    }
  },
  mounted() {

    this.startAnimation()
  },
  components: { FlipCard }
};
</script>
<style scoped>
.container {
  width: 708px;
  height: 200px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.split {
  font-size: 5em;
}
</style>