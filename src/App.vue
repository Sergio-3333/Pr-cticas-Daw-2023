<style>@import "estilos.css";</style>
<style>@import "tabulator-tables";</style>
<style>@import url("https://unpkg.com/boxicons@2.1.1/css/boxicons.min.css");</style>
<style>@import "vue2-datepicker/index.css";</style>

<template>
  <div id="app">

    <date-picker class="datepicker" v-model="rangoFechas"  placeholder="Selecciona el rango de fechas" range></date-picker> <!--Con esto selecciono un rango de fechas-->
    <date-picker class="datepicker" v-model="rangoFechas2"  placeholder="Selecciona el rango de fechas" range></date-picker> <!--Con esto selecciono un rango de fechas-->
    
    <button @click="addWidgetGrafica()">Añadir Grafica</button>
    <button @click="addWidgetTabla()">Añadir Tabla</button>
    <button @click="addWidgetMap()">Añadir Mapa</button>
    <GridStackLayout>
      <GridStackItem v-for=" widget in widgets" :key="widget.id" :gs-h="widget.h" :gs-w="widget.w" >
        <component :is="widget.typeWidget" :rangoFechas="rangoFechas" :rangoFechas2="rangoFechas2" ></component>
      </GridStackItem>
    </GridStackLayout>
  </div>
</template>
<script>

import MiGrafica from './components/MiGrafica.vue';
import MiTabla from './components/MiTabla.vue';
import MiMapa from './components/MiMapa.vue';
import GridStackItem from './components/GridStackItem.vue';
import GridStackLayout from './components/GridStackLayout.vue';
//import GridStack from "/node_modules/gridstack/dist/gridstack-h5.js";
import "gridstack/dist/gridstack.min.css";
import DatePicker from 'vue2-datepicker';
//import {parse} from 'date-fns';



export default {
  name: 'app',
  components:{
    MiGrafica,
    MiTabla,
    MiMapa,
    GridStackItem,
    GridStackLayout,
    DatePicker
  },

      data() {
      return {
        rangoFechas: [], //Defino el v-model vacio
        widgets: [],
    }
  }, 
    methods: {
       
      addWidgetGrafica(){
        const optionsGrafica = {h: 10, w:4, typeWidget:MiGrafica};

        //console.log(this.rangoFechas); // las fechas me las reconoce y las guarda correctamente

        this.widgets.push(optionsGrafica);
      },
      addWidgetTabla(){
        const optionsTabla = {h: 10, w:4, typeWidget:MiTabla};

        this.widgets.push(optionsTabla);
      },
      
      addWidgetMap(){
        const optionsTabla = {h: 10, w:4, typeWidget:MiMapa};

        this.widgets.push(optionsTabla);
      }

    }
}

</script>