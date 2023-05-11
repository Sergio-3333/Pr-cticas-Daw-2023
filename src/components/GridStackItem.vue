<template>
  <div :data-gs-id="id" :data-gs-x="x" :data-gs-y="y" :data-gs-width="width" :data-gs-height="height" class="grid-stack-item">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'GridStackItem',
  props: {
    id: Number,
    x: Number,
    y: Number,
    width: Number,
    height: Number,
  },
};
</script>

<style scoped>
div {
  border: 1px solid #ccc;
}
</style>

  
  <script>

  export default {
    name: 'MiGridStackItem',
    props: {
      maxWidth: {
        type: Number,
        default: 10
      },
      height: {
        type: Number,
        default: 10
      },
      width: {
        type: Number,
        default: 4
      },
      noResize: {
        type: Boolean,
        default: true
      }
    }
  }
  </script>
  
  <style>
  
  .grid-stack-item {
      background-color: mediumpurple;
  }
  .grid-stack-item-content {
    border: 1px solid #ccc;
    border-radius: 5px;
    background-color: #fff;
    cursor: move;
    overflow-y: hidden;
}


  </style>
  