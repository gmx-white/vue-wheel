<template>
  <div class="card-container">
    <div class="card-item card1">{{ this.next }}</div>
    <div class="card-item card2" :class="classObject">{{ this.next }}</div>
    <div class="card-item card3" :class="classObject">{{ this.now }}</div>
    <div class="card-item card4">{{ this.now }}</div>
  </div>
</template>

<script>
let doms;
export default {
  setup() { },
  props: {
    now: Number,
    next: Number,
    isPaused: Boolean,
    isSecond: Boolean
  },
  data() {
    return {

    };
  },
  watch: {},
  computed: {
    classObject(){
      return {
        'play-state': this.isPaused,
        'second': this.isSecond
      }

    }
  },
  methods: {
  },
  mounted() {
    doms = {
      card1: document.querySelector('.card1'),
      card2: document.querySelector('.card2'),
      card3: document.querySelector('.card3'),
      card4: document.querySelector('.card4'),
    }
  },

};
</script>
<style scoped>
.card-container {
  width: 200px;
  height: 200px;
  position: relative;
  perspective: 1200px;
}

.card-item {
  width: 100%;
  height: 50%;
  background-color: #000;
  box-shadow: 1px 1px 5px #666;
  position: absolute;
  color: #fff;
  text-align: center;
  font-size: 10em;
  line-height: 200px;
  overflow: hidden;
}

.card2,
.card4 {
  top: 50%;
  line-height: 0;
}

.card2,
.card3 {
  z-index: 2;
}
.card2 {
  backface-visibility: hidden;
  transform-origin: center top;
  transform: rotateX(180deg);
  animation: flip1 1s backwards infinite;
}

.card3 {
  transform-origin: center bottom;
  backface-visibility: hidden;
  animation: flip2 1s backwards infinite;
}
.play-state{
  animation-play-state: paused;
}
.card-container .second {
  animation-play-state: running;
}
@keyframes flip1 {
  to {
    transform: rotateX(0deg);
  }
}
@keyframes flip2 {
  to {
    transform: rotateX(-180deg);
  }
}
</style>