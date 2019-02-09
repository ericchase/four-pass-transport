<template lang="pug">
  div
    div(v-for="i in 10" :i="i")
      div(class="square" v-for="j in 10")
        div(class="content")
          div(class="table")
            div(class="table-cell") {{i - 1}}{{j - 1}}
</template>

<script lang="ts">
  import Vue from 'vue';
  import RowComponent from './RowComponent.vue';

  export default Vue.extend({
    components: {
      RowComponent,
    },
  });
</script>

<style scoped>
  .square {
    float: left;
    position: relative;
    width: 9%;
    padding-bottom: 9%; /* = width for a 1:1 aspect ratio */
    margin: .5%;
    overflow: hidden;
  }

  .content {
    background-color: grey;
    position: absolute;
    height: 99%; /* = 100% - 2*10% padding */
    width: 99%; /* = 100% - 2*5% padding */
    padding: 1% 1%;
  }

  .table {
    display: table;
    height: 100%;
    width: 100%;
  }

  .table-cell {
    display: table-cell;
    vertical-align: middle;
    height: 100%;
    width: 100%;
  }
</style>