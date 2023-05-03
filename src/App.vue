<style>@import "estilos.css";</style>
<style>@import "tabulator-tables";</style>
<template>
  <div id="app">
        <div class="grid-stack" >
            <div class="grid-stack-item" >
                <div class="grid-stack-item-content" data-gs-x="1" data-gs-y="1" data-gs-width="4" data-gs-height="4" data-gs-no-resize="true">
                  <h1>Gráfica</h1>  
                  <MiGrafica></MiGrafica>
                </div>
            </div>
        </div>
    </div>

</template>

<script>

import MiGrafica from './components/MiGrafica.vue';
import { GridStack } from 'gridstack';


export default {
  name: 'app',
  components: {
    MiGrafica
  },
  

    mounted() {
    var options = {
      cellHeight: 1500,
      verticalMargin: 10,
      handle: '.grid-stack-item-content',
      draggable: true,
      resizable: {
        handles: 'e,se,s,sw,w'
      }

    };

    const grid = GridStack.init(options, '.grid-stack');
    grid.enableMove(true, true);
  

      }
      
    }

</script>