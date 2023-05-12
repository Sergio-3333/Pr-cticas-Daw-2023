<style>@import "estilos.css";</style>
<style>@import "tabulator-tables";</style>
<style>@import url("https://unpkg.com/boxicons@2.1.1/css/boxicons.min.css");</style>

<template>
  <div id="app">
    <button @click="addWidgetGrafica()">Añadir Grafica</button>
    <button @click="addWidgetTabla()">Añadir Tabla</button>
    <GridStackLayout>
      <GridStackItem v-for="(widget, index) in widgets" :key="index" :gs-x="widget.x" :gs-y="widget.y" :gs-h="widget.h" :gs-w="widget.w" >
        <component :is="widget.typeWidget"></component>
      </GridStackItem>
    </GridStackLayout>
  </div>
</template>
<script>

import MiGrafica from './components/MiGrafica.vue';
import MiTabla from './components/MiTabla.vue';
import GridStackItem from './components/GridStackItem.vue';
import GridStackLayout from './components/GridStackLayout.vue';
//import GridStack from "/node_modules/gridstack/dist/gridstack-h5.js";
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
        widgets: []
    }
  }, 
    methods: {
      
      addWidgetGrafica(){
        const optionsGrafica = {x: 0, y: 0, w:4, typeWidget:MiGrafica};

        this.widgets.push(optionsGrafica);
      },
      addWidgetTabla(){
        const optionsTabla = {x: 4, y: 4, h: 2, w:4, typeWidget:MiTabla};

        this.widgets.push(optionsTabla);
      },

      }

}

</script>
