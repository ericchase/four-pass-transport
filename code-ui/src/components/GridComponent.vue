<template>
  <div>
    <div class="grid-container" v-for="i in 10">
      <div class="grid-item" v-for="j in 10"> {{i - 1}}{{j - 1}} </div>
    </div>
  </div>
</template>

<script>
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class GridComponent extends Vue {
}
</script>

<style scoped>
  .grid-container {
    display: grid;
    grid-template-columns: auto auto auto auto auto auto auto auto auto auto;
    background-color: grey
  }

  .grid-item {
    background-color: rgba(255, 255, 255, 0.8);
    border: 5px solid gray;
    font-size: 10px;
    text-align: center;
    height: 100px;
    width: 100px;
  }
</style>