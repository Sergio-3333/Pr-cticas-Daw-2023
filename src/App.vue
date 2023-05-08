<style>@import "estilos.css";</style>
<style>@import "tabulator-tables";</style>
<style>@import url("https://unpkg.com/boxicons@2.1.1/css/boxicons.min.css");</style>

<template>
  <div id="app">
    <button @click="addWidget()">Añadir Widget</button>
       <!-- <div class="grid-stack">
          <div class="grid-stack-item" v-for="(widget, index) in widgets" :key="index" w="10" h="10" gs-w="4">
            <div class="grid-stack-item-content">
              <component :is="widget"></component>
            </div>
          </div>
        </div>-->
    </div>
</template>

<script>

import MiGrafica from './components/MiGrafica.vue';
import MiTabla from './components/MiTabla.vue';
//import Opinion from './components/Opinion.vue';
import GridStack from "/node_modules/gridstack/dist/gridstack-h5.js";
//import ResizeObserver from "resize-observer-polyfill";
import "gridstack/dist/gridstack.min.css";

export default {
  name: 'app',
  components:{MiGrafica, MiTabla},

      data() {
      return {
        grid: null,
          options: { 
            column:12,
            cellHeight: "50vh",
            float: true,
        resizable: {
          handles: 'e, se, s, sw, w',
        
        }
      },
      widgets: [ {MiGrafica, MiTabla}
           // { x: 2, y: 1, h: 2, typeWidget:'MiGrafica'},
            //{ x: 2, y: 4, w: 3, typeWidget:'MiTabla'},
            ],
      widgetIndex: 0 //Creo un indice
      
    }
  }, 
  
  mounted() {
        this.grid = GridStack.init(this.options);
        },

    methods: {

      addWidget(){
        if (this.widgetIndex < 2) { //Creo una condicion con el WidgetIndex creado antes para que no me cree mas de dos widget
          const component = this.widgetIndex === 0 ? MiGrafica : MiTabla; //Creo una constante nueva y dentro de ella, lo que hago es que si el widgetIndex es igual a 0, el primer widget.component sea MiGrafica
          this.widgets.push(component);
          this.widgetIndex++; //Aumento en indice para que el siguiente widget sea el de la tabla
          //this.grid.addWidget(this.grid.makeWidget('<div class="grid-stack-item gs-max-w="10" gs-h="10" gs-w="4""><div class="grid-stack-item-content">' + {component} + '</div></div>'));   //{ w: 2 }???   
          //creo un widget con las propiedades necesarias y le meto el componente
          }
        }, 

      }
}

</script>
