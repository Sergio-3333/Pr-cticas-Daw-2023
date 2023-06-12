<style>@import "estilos.css";</style>
<style>@import "tabulator-tables";</style>
<style>@import url("https://unpkg.com/boxicons@2.1.1/css/boxicons.min.css");</style>
<style>@import "vue2-datepicker/index.css";</style>

<template>
  <div id="app">

    <date-picker class="datepicker" v-model="widgetConfiguration.rangoFechas"  placeholder="Selecciona el rango de fechas" range>     
      <template v-slot:header= "{ emit }"> <!---->
          <button class="calendarioBoton" @click="irHoy(emit)">Hoy</button>      <!--Paso el emit como argumento para poder establecer la comunicacion entre padre e hijo-->
          <button class="calendarioBoton" @click="irAyer(emit)">Ayer</button>
          <button class="calendarioBoton" @click="irSemanaPasada(emit)">Semana Pasada</button>
          <button class="calendarioBoton" @click="irMesPasado(emit)">Mes Pasado</button>
          <button class="calendarioBoton" @click="irAnoPasado(emit)">Año Pasado</button>
      </template>
    </date-picker> 

    <date-picker class="datepicker" v-model="widgetConfiguration.rangoFechas2"  placeholder="Selecciona el rango de fechas" range>     
      <template v-slot:header= "{ emit }"> <!--Defino el emit en el header para que asi me deje utilizarlo como argumento en los metodos-->
          <button class="calendarioBoton" @click="irHoy(emit)">Hoy</button>      
          <button class="calendarioBoton" @click="irAyer(emit)">Ayer</button>
          <button class="calendarioBoton" @click="irSemanaPasada(emit)">Semana Pasada</button>
          <button class="calendarioBoton" @click="irMesPasado(emit)">Mes Pasado</button>
          <button class="calendarioBoton" @click="irAnoPasado(emit)">Año Pasado</button>
      </template>
    </date-picker>  

    <button @click="addWidgetGrafica()">Añadir Grafica</button>
    <button @click="addWidgetTabla()">Añadir Tabla</button>
    <button @click="addWidgetMapa()">Añadir Mapa</button>

    <GridStackLayout>
      <GridStackItem v-for=" widget in widgets" :key="widget.id" :gs-h="widget.h" :gs-w="widget.w" >
        <component :is="widget.typeWidget" :widgetConfiguration="widgetConfiguration" ></component>
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
import "gridstack/dist/gridstack.min.css";
import DatePicker from 'vue2-datepicker';
import { subMonths,  subWeeks, startOfDay, subDays, subYears } from 'date-fns';

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
        widgetConfiguration: {
          rangoFechas: [],
          rangoFechas2: [],
        },
        
        widgets: []
    }
  }, 
    methods: {


      addWidgetGrafica(){
        
        if(this.widgetConfiguration.rangoFechas == "" || this.widgetConfiguration.rangoFechas2 == "" ) {
          alert("Debes introducir fechas")
        } else {
            const optionsGrafica = {h: 10, w:4, typeWidget:MiGrafica};
            this.widgets.push(optionsGrafica);
        }
      },

      addWidgetTabla(){
        const optionsTabla = {h: 10, w:4, typeWidget:MiTabla};

        this.widgets.push(optionsTabla);
      },
      
      addWidgetMapa(){
        const optionsTabla = {h: 10, w:4, typeWidget:MiMapa};

        this.widgets.push(optionsTabla);
      },
      
      irHoy(emit){
        const date = new Date();    //Defino los metodos con el argumento emit e imprimo el resultado deseado para enviarlo al componente padre
        emit([date,date]);
      },
      
      irAyer(emit){
        const date = new Date();
        const yesterday = subDays(date, 1); //Creo una constante que recibe una funcion que coge el dia elegido y le resta uno
        emit([yesterday, yesterday]); //Devuelve el dia
      },

      irSemanaPasada(emit) {
        const date = startOfDay(new Date());
        const lastWeekStart = subWeeks(date, 1);
        const lastWeekEnd = subDays(date, 1);
        emit([lastWeekStart, lastWeekEnd]);
      },


      irMesPasado(emit){
        const date = startOfDay(new Date());
        const lastMonthStart = subMonths(date, 1);
        const lastMonthEnd = subDays(date, 1);
        emit([lastMonthStart, lastMonthEnd]);
      },

      irAnoPasado(emit){
        const date = startOfDay(new Date());
        const lastYearStart = subYears(date, 1);
        const lastYearEnd = subDays(date, 1);
        emit([lastYearStart, lastYearEnd]);
      }

      }

    }
  

</script>
