<template>
  <div class="container">
    <div class="item" v-slide-in></div>
    <div class="item" v-slide-in></div>
    <div class="item" v-slide-in></div>
    <div class="item" v-slide-in></div>
    <div class="item" v-slide-in></div>
    <div class="item" v-slide-in></div>
    <div class="item" v-slide-in></div>
    <div class="item" v-slide-in></div>
  </div>
</template>

<script setup>
import vSlideIn from "@/VSlideIn.js"

</script>
<style lang="scss" scoped>
.item {
  width: 300px;
  height: 200px;
  background-color: yellowgreen;
  margin-bottom: 10px;
}
</style>