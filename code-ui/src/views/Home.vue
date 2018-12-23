<template>
  <div class="home">
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/>
    <GridComponent></GridComponent>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import HelloWorld from '../components/HelloWorld.vue';
import GridComponent from '../components/GridComponent.vue';

@Component({
  components: {
    HelloWorld,
    GridComponent,
  },
})
export default class Home extends Vue {}
</script>

<style scoped>
  .center-stage{
    margin: auto;
    width: 80%;
    padding: 10px;
  }
</style>
