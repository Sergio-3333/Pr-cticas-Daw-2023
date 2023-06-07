<template>
  <div>
    <gmap-map
      :center="coordenadas"
      :zoom="12"
      style="width: 100%; height: 400px;"
    >
      <gmap-marker
        v-for="(marker, index) in markers"  
        :key="index"
        :position="marker"  
        :clickable="true"
        :draggable="true"
        @click="mostrarInfo({indiceMetricaSeleccionada: index })"
      ></gmap-marker><!-- En el position devuelvo el marker que lleva dentro los valores de las posiciones de la funcion getMapPosition y creo un click con un indice dentro para que me muestre la informaciond de cada marker-->

      <gmap-info-window :position="infoWindowPosition" :opened="infoWinOpen" @closeclick="infoWinOpen=false"> <!--Creo para mostrar informacion-->
        <div v-if="marcadorSeleccionado"><!--Creo una condicional para que si el marcador se reconoce, pinte dentro los valores que le he definido abajo-->
          <h2>{{ marcadorSeleccionado.metrics.nombre }}</h2>
          <p>Afluencia: {{ marcadorSeleccionado.metrics.afluencia }}</p>
          <p>Ocupacion: {{ marcadorSeleccionado.metrics.ocupacion }}</p>
        </div>
      </gmap-info-window>
    </gmap-map>
  </div>
 
</template>


<script>
import Vue from 'vue';
import * as GmapVue from 'gmap-vue';
import { getMapPosition, getMapMetrics } from "./mapManager";


Vue.config.productionTip = false;
Vue.use(GmapVue, {
  load: {
    key: 'AIzaSyD5y_nOVdvcVYYb0DxYKwwRnLp7AeXCPa0',
    libraries: 'places',
  },
});

export default {
  data() {
    return {
      coordenadas: { lat: 40.4168, lng: -3.7038 },
      markers:[], 
      marcadorSeleccionado: null,
      infoWindowPosition: null,
      infoWinOpen: false,      
    };
  },
  mounted() {
    this.markers = getMapPosition(); //guardo los valores de la funcion en markers
  },

  methods: {

    mostrarInfo(marker) { //metodo para el boton
      
      const metricas = getMapMetrics(marker.id); //creo constante para recibir los valores segun el id

      const metricaSeleccionada = metricas[marker.indiceMetricaSeleccionada]; //creo la constante metricaSeleccionada para guardar el index selecionado

      this.marcadorSeleccionado = {
        metrics: metricaSeleccionada //guardo los valores de metrics dentro de marcadorSeleccionado (name,afluencia,ocupacion)en funcion al indice seleccionado con la metricaSeleccionada
      };
      
      this.infoWindowPosition = this.markers[marker.indiceMetricaSeleccionada]; //Para devolver la posicion donde se tiene que mostrar la info. Lo que hago es coger el objeto markers y meterle dentro el indice seleccionado
      this.infoWinOpen = true; //Le digo que la informacion se abra siempre
      

      console.log('Marcador:', this.marcadorSeleccionado.metrics);


  }
  
}
  
}
</script>


