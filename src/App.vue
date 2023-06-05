<style>@import "estilos.css";</style>
<style>@import "tabulator-tables";</style>
<style>@import url("https://unpkg.com/boxicons@2.1.1/css/boxicons.min.css");</style>
<style>@import "vue2-datepicker/index.css";</style>

<template>
  <div id="app">

    <date-picker class="datepicker" v-model="widgetConfiguration.rangoFechas"  placeholder="Selecciona el rango de fechas" range>     
      <template v-slot:header> <!--Utilizo un slot llamado header para personalizar/agregar elementos al header del calendario y despues creo los botones-->
          <button class="calendarioBoton" @click="irHoy(1)">Hoy</button>      <!--Añado un numero a cada metodo que será su indice-->
          <button class="calendarioBoton" @click="irAyer(1)">Ayer</button>
          <button class="calendarioBoton" @click="irSemanaPasada(1)">Semana Pasada</button>
          <button class="calendarioBoton" @click="irMesPasado(1)">Mes Pasado</button>
          <button class="calendarioBoton" @click="irAnoPasado(1)">Año Pasado</button>
      </template>
    </date-picker> 

    <date-picker class="datepicker" v-model="widgetConfiguration.rangoFechas2"  placeholder="Selecciona el rango de fechas" range>     
      <template v-slot:header> 
          <button class="calendarioBoton" @click="irHoy(2)">Hoy</button>
          <button class="calendarioBoton" @click="irAyer(2)">Ayer</button>
          <button class="calendarioBoton" @click="irSemanaPasada(2)">Semana Pasada</button>
          <button class="calendarioBoton" @click="irMesPasado(2)">Mes Pasado</button>
          <button class="calendarioBoton" @click="irAnoPasado(2)">Año Pasado</button>
      </template>
    </date-picker> 

    
    
    <button @click="addWidgetGrafica()">Añadir Grafica</button>
    <button @click="addWidgetTabla()">Añadir Tabla</button>
    <button @click="addWidgetMapa()">Añadir Mapa</button>
    <GridStackLayout>
      <GridStackItem v-for=" widget in widgets" :key="widget.id" :gs-h="widget.h" :gs-w="widget.w" >
        <component :is="widget.typeWidget" :widgetConfiguration="widgetConfig" ></component>
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
        widgetConfiguration: {
          rangoFechas: [],
          rangoFechas2: [],
        },
        
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
      
      irHoy(index){   //Creo un parametro llamado index
        const hoy = new Date();
        hoy.setHours(0,0,0,0);
        const fecha = [new Date(hoy), new Date(hoy)];
        this.actualizarRangoFechas(index, fecha); // Lo que hago es guardar la fecha elegida en un componente fecha y con el metodo para actualizarRangoFechas, le paso el id del input. Esto lo hago con todos los metodos

      },
      
      irAyer(index){
        const hoy = new Date();
        hoy.setHours(0,0,0,0);
        const ayer = new Date(hoy);
        ayer.setHours(0,0,0,0);
        ayer.setDate(hoy.getDate() - 1);
        const fecha = [new Date(ayer), new Date(ayer)];
        this.actualizarRangoFechas(index, fecha);

      },

      irSemanaPasada(index){
        const hoy = new Date();
        const fechaInicial = new Date(hoy);
        const fechaFinal = new Date(hoy);
        fechaInicial.setDate(hoy.getDate() - 7);
        fechaFinal.setDate(hoy.getDate() - 1);
        fechaInicial.setHours(0,0,0,0);
        fechaFinal.setHours(0,0,0,0);
        const fecha = [new Date(fechaInicial), new Date(fechaFinal)];
        this.actualizarRangoFechas(index, fecha);

      },

      irMesPasado(index){
        const hoy = new Date();
        const fechaInicial = new Date(hoy.getFullYear(), hoy.getMonth() - 1);
        const fechaFinal = new Date(hoy.getFullYear(), hoy.getMonth(), 0);
        fechaInicial.setHours(0,0,0,0);
        fechaFinal.setHours(0,0,0,0);
        const fecha = [new Date(fechaInicial), new Date(fechaFinal)];
        this.actualizarRangoFechas(index, fecha);

      },

      irAnoPasado(index){
        const hoy = new Date();
        const fechaInicial = new Date(hoy.getFullYear(), hoy.getMonth() - 12);
        const fechaFinal = new Date(hoy.getFullYear(), hoy.getMonth(), 0);
        fechaInicial.setHours(0,0,0,0);
        fechaFinal.setHours(0,0,0,0);
        const fecha = [new Date(fechaInicial), new Date(fechaFinal)];
        this.actualizarRangoFechas(index, fecha);

      },

      actualizarRangoFechas(index, fecha){  //Creo el metodo para que cada fecha se guarde en cada input

        if ( index === 1){ //Condicional que dice que si el index elegido es el 1, el array/fecha se guarde en el rangoFechas para que lo pueda imprimir correctamente. Hago lo mismo con el indice 2

          this.widgetConfiguration.rangoFechas = [...fecha];
          console.log(this.widgetConfiguration.rangoFechas);

        }else if (index === 2){

          this.widgetConfiguration.rangoFechas2 = [...fecha];
          console.log(this.widgetConfiguration.rangoFechas2);

        }
      }

    }
}

</script>
