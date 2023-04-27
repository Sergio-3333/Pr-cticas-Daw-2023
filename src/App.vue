<style>@import "estilos.css";</style>
<style>@import "tabulator-tables";</style>
<template>
  <div id="app">
    <br>
    <MiTabla></MiTabla>
    <br>
    <div class="grid-stack">
      <MiGrafica></MiGrafica>
    </div>
  </div>
</template>

<script>
import MiTabla from './components/MiTabla.vue';
import MiGrafica from './components/MiGrafica.vue';


export default {
  name: 'app',
  components: {
    MiTabla,
    MiGrafica
  }
    }

</script>