<style>@import "estilos.css";</style>
<style>@import "tabulator-tables";</style>
<template>
  <div id="app">
        <div class="grid-stack" >
            <div class="grid-stack-item"  gs-max-w="10" gs-h="10" gs-w="4" >
              <div class="grid-stack-item-content">
                <!--    <div class="container-table">
                    <MiTabla></MiTabla>
                        </div-->
                <MiGrafica></MiGrafica>
              </div>
            </div>
        </div>
    </div>
</template>

<script>

import MiGrafica from './components/MiGrafica.vue';
//import MiTabla from './components/MiTabla.vue';
import GridStack from "/node_modules/gridstack/dist/gridstack-h5.js";
import "gridstack/dist/gridstack.min.css";

export default {
  name: 'app',
  components: { 
    MiGrafica,
    //MiTabla
  
},
      data() {
      return {
        grid: null,
          options: { 
            column:12,
            cellHeight: 50,
            verticalMargin: 10,
            float: true,
        resizable: {
          handles: 'e, se, s, sw, w',
        
        },
      }
      
    }
  },
     mounted() {

        this.grid = GridStack.init(this.options);

        }
}

</script>