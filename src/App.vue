<template>
  <div id="app">
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

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>


<style>@import "tabulator-tables";</style>
