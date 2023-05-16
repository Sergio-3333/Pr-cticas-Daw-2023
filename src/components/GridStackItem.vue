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
            removable: '#borrar',
            removeTimeout: 100,
            enableMove: true,
            enableResize:true,
          
        resizable: {
          handles: 'e, se, s, sw, w',
        }
      },
    }
  }, 

  methods:{

    iniciarGridStack(){

      this.grid = GridStack.init(this.options);
      this.grid.addWidget(this.$el); //Uso el this.$el para que gridStack agregue todos los widgets creados al div de gridstack-item y con todas sus opciones de grid
    }
    
  },

  mounted() {
    this.iniciarGridStack();
        
        },
};
</script>

  