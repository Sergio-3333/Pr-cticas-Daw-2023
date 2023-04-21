<style>@import "estilos.css";</style>
<style>@import "tabulator-tables";</style>
<template>
  <div id="app">
    <br>
    <MiTabla></MiTabla>
  </div>
</template>

<script>
import MiTabla from './components/MiTabla.vue';


export default {
  name: 'app',
  components: {
    MiTabla
  }
    }

</script>