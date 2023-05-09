<style>@import "estilos.css";</style>
<style>@import "tabulator-tables";</style>
<style>@import url("https://unpkg.com/boxicons@2.1.1/css/boxicons.min.css");</style>

<template>
  <div id="app">
    <button @click="addWidget()">Añadir Widget</button>
    <GridStackLayout>
      <GridStackItem v-for="(widget, index) in widgets" :key="index" >
        <component :is="widget.component"></component>
      </GridStackItem>
    </GridStackLayout>
  </div>
</template>

<script>

import MiGrafica from './components/MiGrafica.vue';
import MiTabla from './components/MiTabla.vue';
import GridStackItem from './components/GridStackItem.vue';
import GridStackLayout from './components/GridStackLayout.vue';
import GridStack from "/node_modules/gridstack/dist/gridstack-h5.js";
import "gridstack/dist/gridstack.min.css";

export default {
  name: 'app',
  components:{
    MiGrafica,
    MiTabla,
    GridStackItem,
    GridStackLayout
  },
      data() {
      return {
        grid: null,
          options: { 
            column:12,
            cellHeight: 50,
            float: true,
        resizable: {
          handles: 'e, se, s, sw, w',
        
        }
      },
      widgets: [{ component: MiGrafica },{ component: MiTabla }],
      widgetIndex: 0 //Creo un indice
      
    }
  }, 
  
  mounted() {
    
        this.grid = GridStack.init(this.options);
        
        },

    methods: {
      
      addWidget(){
        if (this.widgetIndex < 2) { 
          const component = this.widgetIndex === 0 ? MiGrafica : MiTabla; 
          const elemento = document.createElement('div');
            elemento.className = 'grid-stack-item widget';
            elemento.setAttribute('gs-max-w', '10');
            elemento.setAttribute('gs-h', '10');
            elemento.setAttribute('gs-w', '4');
            elemento.innerHTML = `<div class="grid-stack-item-content">`+{component}+`</div>`;
          this.grid.addWidget(elemento);
        }
      },
      }

}

</script>
