<style>@import "estilos.css";</style>
<style>@import "tabulator-tables";</style>
<template>
  <div id="app">
    <button @click="addWidget()">Añadir Widget</button>
        <div class="grid-stack"></div>
    </div>
</template>

<script>

import MiGrafica from './components/MiGrafica.vue';
import MiTabla from './components/MiTabla.vue';
import GridStack from "/node_modules/gridstack/dist/gridstack-h5.js";
import "gridstack/dist/gridstack.min.css";

export default {
  name: 'app',
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
        
        }
      },
      widgets: [{MiGrafica, MiTabla}], //Meto los widgets en un objeto
      widgetIndex: 0 //Creo un indice
      
    }
  }, 
  
  mounted() {
        this.grid = GridStack.init(this.options);
        },

    methods: {

      addWidget(){
        if (this.widgetIndex < 2) { //Creo una condicion con el WidgetIndex creado antes para que no me cree mas de dos widget
        const widget = {
          component: this.widgetIndex === 0 ? 'MiGrafica' : 'MiTabla', //Creo una constante nueva y dentro de ella, lo que hago es que si el widgetIndex es igual a 0, el primer widget.component sea MiGrafica
        };
        this.widgets.push(widget); //Subo el widget
        this.widgetIndex++; //Aumento en indice para que el siguiente widget sea el de la tabla
        this.grid.addWidget('<div class="grid-stack-item widget-' + this.widgetIndex + 'gs-max-w="10" gs-h="10" gs-w="4""><div class="grid-stack-item-content">'+ widget.component + '</div></div>'); //creo un widget con las propiedades necesarias
          }
        }, 

      }
}

</script>