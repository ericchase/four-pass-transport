<template>
  <div class="home">
    <GridComponent class="center-stage"></GridComponent>
  </div>
</template>

<script lang="ts">
  import {Component, Vue} from 'vue-property-decorator';
  import GridComponent from '../components/GridComponent.vue';

  @Component({
    components: {
      GridComponent,
    },
  })
  export default class Home extends Vue {
  }
</script>

<style scoped>
  .center-stage {
    margin: auto;
    width: 80%;
    padding: 10px;
  }
</style>
