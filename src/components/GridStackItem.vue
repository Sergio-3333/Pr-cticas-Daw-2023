<template>
  <div class="grid-stack-item" gs-max-w="10" gs-h="10" gs-w="4" >
      <div class="grid-stack-item-content">
    <slot></slot>
  </div>
  </div>
</template>

<script>
export default {
  name: 'GridStackItem',

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
    overflow-y: scroll;
}


  </style>
  