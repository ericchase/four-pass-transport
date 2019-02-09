<template lang="pug">
  div(class="home")
    grid-component(class="center-stage")
</template>

<script lang="ts">
  import {Vue} from 'vue-property-decorator';
  import GridComponent from '../components/GridComponent.vue';

  export default Vue.component('Home', {
    components: {
      GridComponent,
    },
  });
</script>

<style scoped>
  .center-stage {
    margin: auto;
    width: 80%;
    padding: 10px;
  }
</style>
