<template>
  <div class="grid-stack-item" gs-max-w="10" gs-h="10" gs-w="4" >
    <div class="grid-stack-item-content">
    <slot></slot>
    </div>
  </div>
</template>

<script>
import GridStack from "/node_modules/gridstack/dist/gridstack-h5.js"
export default {
  name: 'GridStackItem',
  data() {
      return {
        grid: null,
        options: { 
            column:12,
            cellHeight: 50,
            float: true,
            enableMove: true,
            enableResize:true,
          
        resizable: {
          handles: 'e, se, s, sw, w',
        }
      },
    }
  }, 
  mounted() {
        this.grid = GridStack.init(this.options);
        },
};
</script>

  