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
    <GridStackLayout>
      <GridStackItem v-for=" widget in widgets" :key="widget.id" :gs-h="widget.h" :gs-w="widget.w" >
        <button id="borrar" @click="borrarWidget(widget.id)">X</button>
        <component :is="widget.typeWidget" :rangoFechas="rangoFechas" :rangoFechas2="rangoFechas2" ></component>
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
import DatePicker from 'vue2-datepicker';
//import {parse} from 'date-fns';



export default {
  name: 'app',
  components:{
    MiGrafica,
    MiTabla,
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
      
      generarIdUnico1() { 
        return Math.random().toString(30).substring(2);  //genero un id diferente a cada widget para que asi reconozca a cada uno  
    },
      
      addWidgetGrafica(){
        const optionsGrafica = {id:this.generarIdUnico1(), h: 10, w:4, typeWidget:MiGrafica};

        //console.log(this.rangoFechas); // las fechas me las reconoce y las guarda correctamente

        this.widgets.push(optionsGrafica);
      },
      addWidgetTabla(){
        const optionsTabla = {id:this.generarIdUnico1(), h: 10, w:4, typeWidget:MiTabla};

        this.widgets.push(optionsTabla);
      },

      borrarWidget(id){
        const index = this.widgets.findIndex(widget => widget.id === id) //Creo un index y guardo el id creado dentr del widget)

        this.widgets.splice(index, 1) //Elimino el widget elegido
      }
      

    }
}

</script>