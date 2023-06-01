<style>@import "estilos.css";</style>
<style>@import "tabulator-tables";</style>
<style>@import url("https://unpkg.com/boxicons@2.1.1/css/boxicons.min.css");</style>
<style>@import "vue2-datepicker/index.css";</style>

<template>
  <div id="app">

    <date-picker class="datepicker" v-model="rangoFechas"  placeholder="Selecciona el rango de fechas" range>     
      <template v-slot:header> <!--Utilizo un slot llamado header para personalizar/agregar elementos al header del calendario y despues creo los botones-->
          <button class="calendarioBoton" @click="irHoy">Hoy</button>
          <button class="calendarioBoton" @click="irAyer">Ayer</button>
          <button class="calendarioBoton" @click="irSemanaPasada">Semana Pasada</button>
          <button class="calendarioBoton" @click="irMesPasado">Mes Pasado</button>
          <button class="calendarioBoton" @click="irAnoPasado">Año Pasado</button>
      </template>
    </date-picker> 

    <date-picker class="datepicker" v-model="rangoFechas2"  placeholder="Selecciona el rango de fechas" range>     
      <template v-slot:header> 
          <button class="calendarioBoton" @click="irHoy">Hoy</button>
          <button class="calendarioBoton" @click="irAyer">Ayer</button>
          <button class="calendarioBoton" @click="irSemanaPasada">Semana Pasada</button>
          <button class="calendarioBoton" @click="irMesPasado">Mes Pasado</button>
          <button class="calendarioBoton" @click="irAñoPasado">Año Pasado</button>
      </template>
    </date-picker> 

    
    
    <button @click="addWidgetGrafica()">Añadir Grafica</button>
    <button @click="addWidgetTabla()">Añadir Tabla</button>
    <button @click="addWidgetMapa()">Añadir Mapa</button>
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
        rangoFechas: [], 
        rangoFechas2: [],
        widgets: []
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
      
      addWidgetMapa(){
        const optionsTabla = {h: 10, w:4, typeWidget:MiMapa};

        this.widgets.push(optionsTabla);
      },
      
      irHoy(){
        this.rangoFechas = [new Date(), new Date()];
        this.rangoFechas2 = [new Date(), new Date()];

      },
      
      irAyer(){
        const hoy = new Date();
        const ayer = new Date(hoy);
        ayer.setDate(hoy.getDate() - 1);
        this.rangoFechas = [new Date(ayer), new Date(ayer)];
        this.rangoFechas2 = [new Date(ayer),new Date(ayer)];

      },

      irSemanaPasada(){
        const hoy = new Date();
        const fechaInicial = new Date(hoy);
        const fechaFinal = new Date(hoy);
        fechaInicial.setDate(hoy.getDate() - 7);
        fechaFinal.setDate(hoy.getDate() - 1);
        this.rangoFechas = [new Date(fechaInicial), new Date(fechaFinal)];
        this.rangoFechas2 = [new Date(fechaInicial), new Date(fechaFinal)];


      },
      irMesPasado(){
        const hoy = new Date();
        const fechaInicial = new Date(hoy.getFullYear(), hoy.getMonth() - 1);
        const fechaFinal = new Date(hoy.getFullYear(), hoy.getMonth(), 0);
        this.rangoFechas = [fechaInicial, fechaFinal];
        this.rangoFechas2 = [new Date(fechaInicial), new Date(fechaFinal)];


      },

      irAnoPasado(){
        const hoy = new Date();
        const fechaInicial = new Date(hoy.getFullYear(), hoy.getMonth() - 12);
        const fechaFinal = new Date(hoy.getFullYear(), hoy.getMonth(), 0);
        this.rangoFechas = [fechaInicial, fechaFinal];
        this.rangoFechas2 = [new Date(fechaInicial), new Date(fechaFinal)];

      }

    }
}

</script>